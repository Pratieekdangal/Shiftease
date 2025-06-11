import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { register as registerUser } from '@/services/authService';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Form validation schema
const schema = yup.object().shape({
  name: yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters'),
  email: yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  confirmPassword: yup.string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  role: yup.string()
    .required('Role is required')
    .oneOf(['user', 'admin'], 'Invalid role')
});

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'user' | 'admin';
};

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      role: 'user'
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      console.log('Form data:', data); // Debug log
      
      const response = await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role
      });

      console.log('Registration response:', response); // Debug log
      
      if (response.token) {
        localStorage.setItem('token', response.token);
        toast({
          title: 'Success',
          description: 'Account created successfully'
        });
        navigate('/');
      } else {
        throw new Error('No token received');
      }
    } catch (error: any) {
      console.error('Registration error:', error); // Debug log
      
      if (error.response?.status === 409) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Email already exists'
        });
      } else if (error.response?.status === 400) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.response.data.message || 'Invalid input data'
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.message || 'Failed to create account. Please try again later.'
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const password = watch('password');
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&#]/.test(password);
  const isLongEnough = password?.length >= 8;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
      <Card className="w-full max-w-lg p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-bold text-primary">Create Account</h2>
          <p className="text-muted-foreground">Sign up to get started with ShiftEase</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className={`h-11 transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                errors.name ? 'border-red-500' : ''
              }`}
              {...register('name')}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email address</label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`h-11 transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                errors.email ? 'border-red-500' : ''
              }`}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              className={`h-11 transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                errors.password ? 'border-red-500' : ''
              }`}
              {...register('password')}
            />
            {password && (
              <div className="mt-2 space-y-1">
                <p className={`text-xs ${isLongEnough ? 'text-green-500' : 'text-gray-500'}`}>
                  ✓ At least 8 characters
                </p>
                <p className={`text-xs ${hasUpperCase ? 'text-green-500' : 'text-gray-500'}`}>
                  ✓ One uppercase letter
                </p>
                <p className={`text-xs ${hasLowerCase ? 'text-green-500' : 'text-gray-500'}`}>
                  ✓ One lowercase letter
                </p>
                <p className={`text-xs ${hasNumber ? 'text-green-500' : 'text-gray-500'}`}>
                  ✓ One number
                </p>
                <p className={`text-xs ${hasSpecialChar ? 'text-green-500' : 'text-gray-500'}`}>
                  ✓ One special character (@$!%*?&#)
                </p>
              </div>
            )}
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className={`h-11 transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                errors.confirmPassword ? 'border-red-500' : ''
              }`}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Account Type</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value="user"
                  {...register('role')}
                  className="form-radio text-primary focus:ring-primary"
                />
                <span>User</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value="admin"
                  {...register('role')}
                  className="form-radio text-primary focus:ring-primary"
                />
                <span>Admin</span>
              </label>
            </div>
            {errors.role && (
              <p className="text-sm text-red-500">{errors.role.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full h-11 text-base font-semibold hover:scale-[1.02] transition-transform duration-200"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Creating Account...
              </div>
            ) : (
              'Sign Up'
            )}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Button
              variant="link"
              className="p-0 h-auto font-semibold text-primary hover:text-primary/80"
              onClick={() => navigate('/login')}
              disabled={isLoading}
            >
              Sign In
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;