"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { saveAddress } from '@/app/api/checkoutApi';
export default function AddressPage() {
  const router = useRouter();
  const [form, setForm] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitAddress = async () => {
    try {
      await saveAddress(form);

      toast.success('Address saved');
      router.push('/checkout/summary');
    } catch {
      toast.error("Address save failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl mb-4">Delivery Address</h2>

      {["fullName","phone","addressLine1","city","state","postalCode"].map((f) => (
        <input
          key={f}
          name={f}
          placeholder={f}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />
      ))}

      <button
        onClick={submitAddress}
        className="bg-black text-white px-6 py-2"
      >
        Continue
      </button>
    </div>
  );
}
