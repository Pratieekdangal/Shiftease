import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { login } from '@/services/authService';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Form validation schema
const schema = yup.object({
  email: yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup.string()
    .required('Password is required')
});

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      console.log('Attempting login with:', data);
      
      const response = await login(data.email, data.password);
      
      toast({
        title: 'Success',
        description: 'Logged in successfully'
      });
      
      navigate('/');
    } catch (error: any) {
      console.error('Login error:', error);
      
      if (error.response?.status === 401) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Invalid email or password'
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.message || 'Failed to login. Please try again later.'
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
      <Card className="w-full max-w-lg p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-bold text-primary">Welcome Back</h2>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email address</label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="Enter your email"
              className="h-11 transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
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
              {...register('password')}
              placeholder="Enter your password"
              className="h-11 transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <Button 
            type="submit" 
            className="w-full h-11 text-base font-semibold hover:scale-[1.02] transition-transform duration-200"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <a href="/signup" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;