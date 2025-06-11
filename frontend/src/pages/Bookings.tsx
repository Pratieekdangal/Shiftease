import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  getUserBookings,
  cancelBooking,
  deleteBooking,
  updateBooking,
  Booking,
  BookingData
} from '../services/bookingService.ts';

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800'
};

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM',
  '03:00 PM', '04:00 PM', '05:00 PM'
];

const services = ['Cleaning', 'Laundry', 'Maintenance', 'Moving'] as const;
type ServiceType = typeof services[number];

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [updateFormData, setUpdateFormData] = useState<BookingData>({
    service: 'Cleaning',
    date: '',
    timeSlot: '',
    notes: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });
  const { toast } = useToast();

  const fetchBookings = async () => {
    try {
      setIsLoading(true);
      const data = await getUserBookings();
      setBookings(data);
    } catch (error: any) {
      console.error('Error fetching bookings:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.response?.data?.message || 'Failed to fetch bookings'
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancelBooking = async (bookingId: string) => {
    try {
      await cancelBooking(bookingId);
      toast({
        title: 'Success',
        description: 'Booking cancelled successfully'
      });
      fetchBookings(); // Refresh the list
    } catch (error: any) {
      console.error('Error cancelling booking:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.response?.data?.message || 'Failed to cancel booking'
      });
    }
  };

  const handleDeleteBooking = async (bookingId: string) => {
    try {
      await deleteBooking(bookingId);
      toast({
        title: 'Success',
        description: 'Booking deleted successfully'
      });
      fetchBookings(); // Refresh the list
    } catch (error: any) {
      console.error('Error deleting booking:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.response?.data?.message || 'Failed to delete booking'
      });
    }
  };

  const handleUpdateBooking = async (bookingId: string, data: Partial<BookingData>) => {
    try {
      await updateBooking(bookingId, data);
      toast({
        title: 'Success',
        description: 'Booking updated successfully'
      });
      setIsUpdateDialogOpen(false);
      fetchBookings(); // Refresh the list
    } catch (error: any) {
      console.error('Error updating booking:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.response?.data?.message || 'Failed to update booking'
      });
    }
  };

  const handleAddressChange = (field: keyof BookingData['address'], value: string) => {
    setUpdateFormData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value
      }
    }));
  };

  const openUpdateDialog = (booking: Booking) => {
    setSelectedBooking(booking);
    setUpdateFormData({
      service: booking.service,
      date: format(new Date(booking.date), 'yyyy-MM-dd'),
      timeSlot: booking.timeSlot,
      notes: booking.notes || '',
      address: {
        street: booking.address.street,
        city: booking.address.city,
        state: booking.address.state,
        zipCode: booking.address.zipCode
      }
    });
    setIsUpdateDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-12 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container">
          <div className="text-center">Loading bookings...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">My Bookings</h1>
          <Button asChild>
            <Link to="/booking">Book New Service</Link>
          </Button>
        </div>

        <Card className="p-6">
          {bookings.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">You don't have any bookings yet.</p>
              <Button asChild>
                <Link to="/booking">Book Your First Service</Link>
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking._id}>
                    <TableCell className="font-medium">{booking.service}</TableCell>
                    <TableCell>{format(new Date(booking.date), 'MMM dd, yyyy')}</TableCell>
                    <TableCell>{booking.timeSlot}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{booking.address.street}</div>
                        <div className="text-muted-foreground">
                          {booking.address.city}, {booking.address.state} {booking.address.zipCode}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-x-2">
                        {booking.status === 'pending' && (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => openUpdateDialog(booking)}
                            >
                              Update
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleCancelBooking(booking._id)}
                            >
                              Cancel
                            </Button>
                          </>
                        )}
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this booking? This action cannot be undone.')) {
                              handleDeleteBooking(booking._id);
                            }
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Card>

        <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Update Booking</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Service Type</label>
                <Select
                  value={updateFormData.service}
                  onValueChange={(value) => setUpdateFormData({
                    ...updateFormData,
                    service: value as ServiceType
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date</label>
                  <Input
                    type="date"
                    value={updateFormData.date}
                    min={format(new Date(), 'yyyy-MM-dd')}
                    onChange={(e) => setUpdateFormData({
                      ...updateFormData,
                      date: e.target.value
                    })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Time Slot</label>
                  <Select
                    value={updateFormData.timeSlot}
                    onValueChange={(value) => setUpdateFormData({
                      ...updateFormData,
                      timeSlot: value
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Street Address</label>
                <Input
                  value={updateFormData.address.street}
                  onChange={(e) => handleAddressChange('street', e.target.value)}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">City</label>
                  <Input
                    value={updateFormData.address.city}
                    onChange={(e) => handleAddressChange('city', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">State</label>
                  <Input
                    value={updateFormData.address.state}
                    onChange={(e) => handleAddressChange('state', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">ZIP Code</label>
                  <Input
                    value={updateFormData.address.zipCode}
                    onChange={(e) => handleAddressChange('zipCode', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Notes</label>
                <Textarea
                  value={updateFormData.notes}
                  onChange={(e) => setUpdateFormData({
                    ...updateFormData,
                    notes: e.target.value
                  })}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsUpdateDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => selectedBooking && handleUpdateBooking(selectedBooking._id, updateFormData)}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Bookings; 