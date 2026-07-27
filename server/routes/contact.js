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

    // NOTE: This currently only saves the submission to server/data/submissions.json.
    // To get an email/Slack notification for each new lead, plug in a mail
    // provider (e.g. Resend, SendGrid) or a webhook call here.

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to save contact submission:', err);
    return res.status(500).json({ error: 'Could not save submission.' });
  }
});

export default router;
