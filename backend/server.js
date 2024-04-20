const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());

app.get('/', (req, res) => {
  res.send({message: 'Hello World'});
});

app.listen(port, () => {
  console.log('Server running...')
})