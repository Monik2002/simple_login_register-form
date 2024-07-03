import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { login } from '@/http/api';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { z, ZodError } from 'zod';

// Define the schema using Zod
const loginSchema = z.object({
  email: z
    .string()
    .min(3, { message: 'Email must be at least 3 characters long.' })
    .max(100, { message: 'Email must not be more than 100 characters long.' })
    .email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long.' })
    .max(100, { message: 'Password must not be more than 100 characters long.' })
  // .regex(/[A-Za-z]/, { message: 'Password must contain at least one letter.' })
  // .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
  // .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character.' }),
});


// Custom validation function
const validate = (values: { email: string; password: string }) => {
  try {
    loginSchema.parse(values);
    return {};
  } catch (error) {
    if (error instanceof ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        if (err.path.length > 0) {
          errors[err.path[0]] = err.message;
        }
      });
      return errors;
    }
    return {};
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const emailPasswordMutation = useMutation({
    mutationFn: login,
    onError: (error) => {
      toast.error('Login failed');
      console.error('Login error:', error);
    },
    onSuccess: (data) => {
      // toast.success('Login successful!');
      toast.success('Login successful, navigating to homepage');
      localStorage.setItem('token', data.accessToken);
      navigate('/');
    },
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      try {
        await emailPasswordMutation.mutateAsync(values);
      } catch (error) {
        toast.error('Login failed');
      }
    },
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...formik.getFieldProps('email')}
                autoComplete="current-email"
                placeholder="m@example.com"
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <div className="flex items-center">
                <Input
                  id="password"
                  type={isPasswordVisible ? 'text' : 'password'}
                  {...formik.getFieldProps('password')}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                />
                <Button
                  type="button"
                  className="ml-2 px-1 py-0.5 bg-transparent hover:bg-100 rounded-md"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="#0D0D0D" />
                      <path d="M21.894 11.553C19.736 7.236 15.904 5 12 5c-3.903 0-7.736 2.236-9.894 6.553a1 1 0 0 0 0 .894C4.264 16.764 8.096 19 12 19c3.903 0 7.736-2.236 9.894-6.553a1 1 0 0 0 0-.894zM12 17c-2.969 0-6.002-1.62-7.87-5C5.998 8.62 9.03 7 12 7c2.969 0 6.002 1.62 7.87 5-1.868 3.38-4.901 5-7.87 5z" fill="#0D0D0D" />
                    </svg>
                  ) : (
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="m2 2 20 20" />
                        <path d="m6.71277 6.7226c-3.04798 2.07267-4.71277 5.2774-4.71277 5.2774s3.63636 7 10 7c2.0503 0 3.8174-.7266 5.2711-1.7116m-6.2711-12.23018c.3254-.03809.6588-.05822 1-.05822 6.3636 0 10 7 10 7s-.6918 1.3317-2 2.8335" />
                        <path d="m14 14.2362c-.5308.475-1.2316.7639-2 .7639-1.6569 0-3-1.3431-3-3 0-.8237.33193-1.5698.86932-2.11192" />
                      </g>
                    </svg>
                  )}
                </Button>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
            </div>
            <Button type="submit" className="w-full" disabled={emailPasswordMutation.isPending}>
              {emailPasswordMutation.isPending ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link to="/auth/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

// -----------------------------------

