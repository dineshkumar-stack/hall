const mongoose = require("mongoose");

// Derive a Schema

const BookroomSchema = mongoose.Schema({
  customer_name: { type: String, required: true },
  booking_id: { type: Number, required: true },
  booking_status: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  room_id: { type: Number, required: true },
});

// compile schema to model

const Booking = mongoose.model("Booking", BookroomSchema);

module.exports = Booking;
