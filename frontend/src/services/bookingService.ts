import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add response interceptor for debugging
api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  console.error('API Error:', error.response || error);
  return Promise.reject(error);
});

export interface BookingData {
  service: 'Cleaning' | 'Laundry' | 'Maintenance' | 'Moving';
  date: string;
  timeSlot: string;
  notes?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface Booking extends BookingData {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

// Create a new booking
export const createBooking = async (bookingData: BookingData): Promise<Booking> => {
  try {
    const response = await api.post('/bookings', bookingData);
    return response.data.booking;
  } catch (error) {
    console.error('Create booking error:', error);
    throw error;
  }
};

// Get all bookings for the authenticated user
export const getUserBookings = async (): Promise<Booking[]> => {
  try {
    const response = await api.get('/bookings');
    return response.data;
  } catch (error) {
    console.error('Get bookings error:', error);
    throw error;
  }
};

// Get a specific booking
export const getBooking = async (id: string): Promise<Booking> => {
  try {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  } catch (error) {
    console.error('Get booking error:', error);
    throw error;
  }
};

// Update a booking
export const updateBooking = async (id: string, bookingData: Partial<BookingData>): Promise<Booking> => {
  try {
    const response = await api.put(`/bookings/${id}`, bookingData);
    return response.data.booking;
  } catch (error) {
    console.error('Update booking error:', error);
    throw error;
  }
};

// Cancel a booking
export const cancelBooking = async (id: string): Promise<Booking> => {
  try {
    const response = await api.patch(`/bookings/${id}/cancel`);
    return response.data.booking;
  } catch (error) {
    console.error('Cancel booking error:', error);
    throw error;
  }
};

// Delete a booking
export const deleteBooking = async (id: string): Promise<void> => {
  try {
    await api.delete(`/bookings/${id}`);
  } catch (error) {
    console.error('Delete booking error:', error);
    throw error;
  }
}; 