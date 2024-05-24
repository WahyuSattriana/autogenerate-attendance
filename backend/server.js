const crypto = require('crypto');
const express = require('express');
const QRCode = require('qrcode');
const supabase = require('@supabase/supabase-js');
const NodeCache = require('node-cache');

require('dotenv').config();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;
const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

const app = express();
const port = 8080;
app.use(express.json());

const cache = new NodeCache({ stdTTL: 600 });

app.get('/api/generate', async (req, res) => {
  const getData = await db.from('profiles').insert();
  const randomChar = crypto.randomBytes(10).toString('hex');
  const QRData = await QRCode.toDataURL(randomChar);

  //supaya user tidak meng-hit API berkali-kali dengan server side caching
  const NISN = req.query.NISN;  //tarik NISN dari supabase @faustroz
  const cachedQRCode = cache.get(NISN);
  if (cachedQRCode) {
    return res.json({ randomChar: randomChar, QRData });
  }

  cache.set(NISN, randomChar);
  res.json({ randomChar });
});

// Endpoint untuk menghapus cache
app.delete('/api/cache', (req, res) => {
  const NISN = req.query.NISN;
  if (NISN) {
    cache.del(NISN);
    return res.json({ message: `Cache for NISN ${NISN} deleted` });
  }
  res.status(400).json({ error: 'NISN query parameter is required' });
});

app.listen(port, () => {
  console.log('Server running...', port);
});