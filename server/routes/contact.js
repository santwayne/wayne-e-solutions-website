import { Router } from 'express';
import fs from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';

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

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

async function sendNotificationEmail(entry) {
  const toEmail = process.env.CONTACT_NOTIFY_EMAIL;
  const fromEmail = process.env.SMTP_USER;

  if (!fromEmail || !toEmail || !process.env.SMTP_PASS) {
    console.log('SMTP not configured (SMTP_USER / SMTP_PASS / CONTACT_NOTIFY_EMAIL missing) — skipping email.');
    return;
  }

  const transporter = createTransporter();

  const mailOptions = {
    from: `"Wayne E Solutions Website" <${fromEmail}>`,
    to: toEmail,
    replyTo: entry.email,
    subject: `New contact form submission — ${entry.firstName} ${entry.lastName}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
        <h2 style="color:#1a1a1a;margin-top:0;">New Contact Form Submission</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;color:#6b7280;width:120px;vertical-align:top;"><strong>Name</strong></td>
            <td style="padding:8px 0;color:#1a1a1a;">${entry.firstName} ${entry.lastName}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280;vertical-align:top;"><strong>Email</strong></td>
            <td style="padding:8px 0;"><a href="mailto:${entry.email}" style="color:#2563eb;">${entry.email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280;vertical-align:top;"><strong>Phone</strong></td>
            <td style="padding:8px 0;color:#1a1a1a;">${entry.phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280;vertical-align:top;"><strong>Message</strong></td>
            <td style="padding:8px 0;color:#1a1a1a;">${entry.message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
        <p style="color:#9ca3af;font-size:12px;margin:0;">Received ${entry.receivedAt}</p>
      </div>
    `,
    text: `
New Contact Form Submission
---------------------------
Name:    ${entry.firstName} ${entry.lastName}
Email:   ${entry.email}
Phone:   ${entry.phone || '—'}
Message: ${entry.message}

Received: ${entry.receivedAt}
    `.trim(),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (err) {
    console.error('Failed to send email:', err.message);
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

    sendNotificationEmail(entry);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to save contact submission:', err);
    return res.status(500).json({ error: 'Could not save submission.' });
  }
});

export default router;
