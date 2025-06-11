const Booking = require('../models/Booking');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { service, date, timeSlot, notes, address } = req.body;
    
    // Create new booking with user ID from authenticated user
    const booking = new Booking({
      user: req.user._id, // From auth middleware
      service,
      date,
      timeSlot,
      notes,
      address
    });

    await booking.save();

    res.status(201).json({
      message: 'Booking created successfully',
      booking
    });
  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({ message: 'Error creating booking' });
  }
};

// Get all bookings for the authenticated user
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .sort({ date: -1 })
      .populate('user', 'name email');

    res.json(bookings);
  } catch (error) {
    console.error('Get user bookings error:', error);
    res.status(500).json({ message: 'Error fetching bookings' });
  }
};

// Get a specific booking
exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user._id
    }).populate('user', 'name email');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(booking);
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({ message: 'Error fetching booking' });
  }
};

// Update a booking
exports.updateBooking = async (req, res) => {
  try {
    const { service, date, timeSlot, notes, address, status } = req.body;

    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Only allow updates if booking is pending
    if (booking.status !== 'pending' && req.user.role !== 'admin') {
      return res.status(400).json({
        message: 'Cannot modify booking that is not in pending status'
      });
    }

    // Update fields
    booking.service = service || booking.service;
    booking.date = date || booking.date;
    booking.timeSlot = timeSlot || booking.timeSlot;
    booking.notes = notes || booking.notes;
    booking.address = address || booking.address;
    if (req.user.role === 'admin') {
      booking.status = status || booking.status;
    }

    await booking.save();

    res.json({
      message: 'Booking updated successfully',
      booking
    });
  } catch (error) {
    console.error('Update booking error:', error);
    res.status(500).json({ message: 'Error updating booking' });
  }
};

// Cancel a booking
exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Only allow cancellation if booking is pending or confirmed
    if (!['pending', 'confirmed'].includes(booking.status)) {
      return res.status(400).json({
        message: 'Cannot cancel booking that is completed or already cancelled'
      });
    }

    booking.status = 'cancelled';
    await booking.save();

    res.json({
      message: 'Booking cancelled successfully',
      booking
    });
  } catch (error) {
    console.error('Cancel booking error:', error);
    res.status(500).json({ message: 'Error cancelling booking' });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    await Booking.deleteOne({ _id: req.params.id });

    res.json({
      message: 'Booking deleted successfully'
    });
  } catch (error) {
    console.error('Delete booking error:', error);
    res.status(500).json({ message: 'Error deleting booking' });
  }
}; 