const Booking = require("../models/bookingModel");

getAllBooking = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

createBooking = async (req, res) => {
  try {
    const newBooking = req.body;
    const booking = new Booking(newBooking);
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllBooking, createBooking };
