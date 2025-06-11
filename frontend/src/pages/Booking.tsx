import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { createBooking, BookingData } from '@/services/bookingService';

const schema = yup.object({
  service: yup.string()
    .required('Service is required')
    .oneOf(['Cleaning', 'Laundry', 'Maintenance', 'Moving'], 'Invalid service type'),
  date: yup.string()
    .required('Date is required')
    .test('future-date', 'Date must be in the future', (value) => {
      if (!value) return false;
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }),
  timeSlot: yup.string()
    .required('Time slot is required'),
  notes: yup.string()
    .max(500, 'Notes must not exceed 500 characters'),
  address: yup.object({
    street: yup.string().required('Street address is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zipCode: yup.string()
      .required('ZIP code is required')
      .matches(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code format')
  })
});

type FormData = yup.InferType<typeof schema>;

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM',
  '03:00 PM', '04:00 PM', '05:00 PM'
];

const Booking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      service: undefined,
      date: format(new Date(), 'yyyy-MM-dd'),
      timeSlot: undefined,
      notes: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: ''
      }
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      await createBooking(data as BookingData);
      
      toast({
        title: 'Success',
        description: 'Booking created successfully'
      });
      
      navigate('/bookings');
    } catch (error: any) {
      console.error('Booking error:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.response?.data?.message || 'Failed to create booking'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container max-w-3xl">
        <Card className="p-6 md:p-8">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-primary">Book a Service</h1>
              <p className="text-muted-foreground mt-2">
                Fill out the form below to schedule your service
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Service Type</label>
                <Select
                  onValueChange={(value) => setValue('service', value)}
                  defaultValue={watch('service')}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Cleaning">Cleaning</SelectItem>
                    <SelectItem value="Laundry">Laundry</SelectItem>
                    <SelectItem value="Maintenance">Maintenance</SelectItem>
                    <SelectItem value="Moving">Moving</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-sm text-red-500">{errors.service.message}</p>
                )}
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date</label>
                  <Input
                    type="date"
                    min={format(new Date(), 'yyyy-MM-dd')}
                    {...register('date')}
                  />
                  {errors.date && (
                    <p className="text-sm text-red-500">{errors.date.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Time Slot</label>
                  <Select
                    onValueChange={(value) => setValue('timeSlot', value)}
                    defaultValue={watch('timeSlot')}
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
                  {errors.timeSlot && (
                    <p className="text-sm text-red-500">{errors.timeSlot.message}</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <h3 className="font-medium">Service Address</h3>
                <div className="space-y-4">
                  <div>
                    <Input
                      placeholder="Street Address"
                      {...register('address.street')}
                    />
                    {errors.address?.street && (
                      <p className="text-sm text-red-500">{errors.address.street.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Input
                        placeholder="City"
                        {...register('address.city')}
                      />
                      {errors.address?.city && (
                        <p className="text-sm text-red-500">{errors.address.city.message}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        placeholder="State"
                        {...register('address.state')}
                      />
                      {errors.address?.state && (
                        <p className="text-sm text-red-500">{errors.address.state.message}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        placeholder="ZIP Code"
                        {...register('address.zipCode')}
                      />
                      {errors.address?.zipCode && (
                        <p className="text-sm text-red-500">{errors.address.zipCode.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Additional Notes</label>
                <Textarea
                  placeholder="Any special instructions or requirements..."
                  {...register('notes')}
                />
                {errors.notes && (
                  <p className="text-sm text-red-500">{errors.notes.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Booking...' : 'Book Service'}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Booking;
