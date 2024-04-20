require('dotenv').config()

const express = require('express');
const app = express();
const port = 8080;

app.use(express.json())

const supabase = require('@supabase/supabase-js')
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE)

app.get('/hadir', async (req, res) => {
  const getData = await db.from("attendance").select()
  res.json({ getData })
})

app.post('/', async (req, res) => {
  const { nama, no_absen, kelas } = req.body
  const insertData = await db.from("attendance").insert([{ nama, no_absen, kelas }])
  res.json({ insertData })
})

app.listen(port, () => {
  console.log('Server running...')
})
