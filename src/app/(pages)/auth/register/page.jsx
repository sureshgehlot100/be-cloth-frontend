'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import SliderCommen from '@/app/(component)/SliderCommen';
import Footer from '@/app/(component)/Footer';
import { register } from '@/app/api/auth';

// Zod Schema
const RegisterSchema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 chars"),
});

export default function Page() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Zod validation
    try {
      RegisterSchema.parse(form);
    } catch (err) {
      const zodErrors = {};
      err.errors.forEach(e => {
        zodErrors[e.path[0]] = e.message;
      });
      setErrors(zodErrors);
      return;
    }

    try {
      setLoading(true);

      const res = await register(form);

      // Save token
      localStorage.setItem('token', res.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.token}`;

      toast.success("Account created successfully");

      router.push('/checkout/address');
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SliderCommen text="Create Account" />
      <div className="max-w-[80%] mx-auto my-[3%]">
        <h2 className="text-5xl font-[300] m-4">Register</h2>

        <form onSubmit={handleSubmit} className="border-2 p-6 bg-white rounded shadow-lg">
          {["firstName","lastName","email","phone","password"].map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-sm font-bold mb-2 capitalize">
                {field}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="border rounded w-full p-2"
              />
              {errors[field] && (
                <p className="text-red-500 text-sm">{errors[field]}</p>
              )}
            </div>
          ))}

          <button
            disabled={loading}
            className="bg-black text-white px-6 py-2 rounded"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

