const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    type: String
  });

const bookings = mongoose.model('booking', bookingSchema);
module.exports = bookings;
