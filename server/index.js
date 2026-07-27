import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import contactRouter from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'wayne-e-solutions-server' });
});

app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Wayne E Solutions API running on http://localhost:${PORT}`);
});
