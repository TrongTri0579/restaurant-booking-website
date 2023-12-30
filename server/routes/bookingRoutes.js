const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.get("/bookings", bookingController.getAllBooking);
router.post("/bookings", bookingController.createBooking);

module.exports = router;
