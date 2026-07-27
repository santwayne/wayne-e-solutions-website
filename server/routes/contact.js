import { Router } from 'express';
import fs from 'fs/promises';
import path from 'path';

const router = Router();
const STORE_PATH = path.resolve('data', 'submissions.json');

async function readSubmissions() {
  try {
    const raw = await fs.readFile(STORE_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeSubmissions(list) {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(list, null, 2));
}

async function sendNotificationEmail(entry) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_NOTIFY_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

  // If email isn't configured yet, just skip silently — the submission is
  // still saved to disk either way, so nothing is lost.
  if (!apiKey || !toEmail) {
    console.log('Email not configured (RESEND_API_KEY / CONTACT_NOTIFY_EMAIL missing) — skipping email notification.');
    return;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Wayne E Solutions Website <${fromEmail}>`,
        to: [toEmail],
        reply_to: entry.email,
        subject: `New contact form submission — ${entry.firstName} ${entry.lastName}`,
        html: `
          <h2>New website contact form submission</h2>
          <p><strong>Name:</strong> ${entry.firstName} ${entry.lastName}</p>
          <p><strong>Email:</strong> ${entry.email}</p>
          <p><strong>Phone:</strong> ${entry.phone || '—'}</p>
          <p><strong>Message:</strong></p>
          <p>${entry.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color:#888;font-size:12px">Received ${entry.receivedAt}</p>
        `,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error('Resend API error:', response.status, body);
    }
  } catch (err) {
    console.error('Failed to send notification email:', err);
  }
}

router.post('/', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body || {};

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const entry = {
    firstName: String(firstName).trim(),
    lastName: String(lastName).trim(),
    email: String(email).trim(),
    phone: phone ? String(phone).trim() : '',
    message: String(message).trim(),
    receivedAt: new Date().toISOString(),
  };

  try {
    const submissions = await readSubmissions();
    submissions.push(entry);
    await writeSubmissions(submissions);

    // Fire-and-forget — don't make the person wait on email delivery,
    // and don't fail the request just because the email step had trouble.
    sendNotificationEmail(entry);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to save contact submission:', err);
    return res.status(500).json({ error: 'Could not save submission.' });
  }
});

export default router;
