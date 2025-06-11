const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createBooking,
  getUserBookings,
  getBooking,
  updateBooking,
  cancelBooking,
  deleteBooking
} = require('../controllers/bookingController');

// All routes require authentication
router.use(auth);

// Create a new booking
router.post('/', createBooking);

// Get all bookings for the authenticated user
router.get('/', getUserBookings);

// Get a specific booking
router.get('/:id', getBooking);

// Update a booking
router.put('/:id', updateBooking);

// Cancel a booking
router.patch('/:id/cancel', cancelBooking);

// Delete a booking
router.delete('/:id', deleteBooking);

module.exports = router; 