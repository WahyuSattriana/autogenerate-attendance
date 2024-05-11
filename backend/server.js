const crypto = require('crypto');
const express = require('express');
const QRCode = require('qrcode');

const app = express();
const port = 8080;
require('dotenv').config();

app.use(express.json());

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

app.get('/generateRandomChar', async (req, res) => {
  const randomChar = crypto.randomBytes(10).toString('hex');
  const getData = await db.from('profiles').insert();
  const QRData = await QRCode.toDataURL(randomChar);
  res.json({ randomChar: randomChar, QRData });
});

app.get('/hadir', async (req, res) => {
});

app.listen(port, () => {
  console.log('Server running...', port);
});