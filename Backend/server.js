const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Bookings = require('./Models/Bookings.js');

mongoose.connect('mongodb://127.0.0.1:27017/booking');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/contact', async (req, res) => {
  const bookevent = new Bookings({
    name: req.body.example,
    type: req.body.exampleRequired,
  });
  await bookevent.save();
  res.json({ message: "Data received successfully" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
