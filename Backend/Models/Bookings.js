const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    type: String,
    date: Date,
    message: String
  });

const bookings = mongoose.model('booking', bookingSchema);
module.exports = bookings;