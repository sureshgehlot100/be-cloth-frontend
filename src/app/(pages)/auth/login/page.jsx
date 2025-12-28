'use client'

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { z } from 'zod';
import axios from 'axios';
import { toast } from 'react-toastify';
import SliderCommen from '@/app/(component)/SliderCommen';
import Footer from '@/app/(component)/Footer';
import { loginApi } from '@/app/api/auth';

// Zod schema
const LoginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const [form, setForm] = useState({ email: '', password: ''});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const text = 'My account';

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: null }));
  };

  const saveTokenAndSetup = (token) => {
    // Save to localStorage
    localStorage.setItem('token', token);

    // Set default axios header for future requests (session-level)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate with Zod
    try {
      LoginSchema.parse(form);
      setErrors({});
    } catch (err) {
      // err is ZodError
      const zodErr = err;
      const fieldErrors = {};
      zodErr.errors?.forEach(e => {
        const key = e.path?.[0] || '_';
        fieldErrors[key] = e.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    try {
      // Call centralized login function
      const res = await loginApi(form.email, form.password);

      // Expect backend to return { token, user }
      const { token } = res;
      if (!token) {
        toast.error('Login failed: no token received');
        setLoading(false);
        return;
      }

      saveTokenAndSetup(token);

      toast.success('Login successful');

      // redirect to originally requested page (if any)
      router.push('/cart');
    } catch (err) {
      console.error('Login error', err);
      const message = err?.response?.data?.message || 'Login failed';
      toast.error(message);
      setLoading(false);
    }
  };

  const handleDemoFill = () => { // optional helper while testing
    setForm({ email: 'test@example.com', password: 'password123' });
  };

  return (
    <div>
      <SliderCommen text={text} />
      <div className="max-w-[80%] mx-auto my-[3%]">
        <h2 className="text-6xl font-[300] m-4">Login</h2>

        <div className="max-w-full m-3 p-4 md:p-6 lg:p-8 border-2 bg-white rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                type="text"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                type="password"
                placeholder="Password"
              />
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center">
              <button
                disabled={loading}
                className="bg-black hover:bg-orange-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>

              <button type="button" onClick={handleDemoFill} className="ml-4 text-sm text-gray-600">
                Fill demo
              </button>

              <div className="flex items-center ml-4">
                <input id="remember-me" type="checkbox" className="w-4 h-4 text-orange-500 bg-gray-100 rounded border-gray-300 focus:ring-orange-500" />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">Remember Me</label>
              </div>
            </div>

            <div className="text-sm text-gray-700 mt-4">
              <a className="inline-block align-baseline font-bold text-sm py-4 text-orange-500 hover:text-orange-800" href="/forgot-password">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
