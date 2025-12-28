"use client";

import { useSelector } from "react-redux";
import { createCheckoutSession } from '@/app/api/checkoutApi';

export default function OrderSummary() {
  const cart = useSelector((state) => state.cart.items);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const payNow = async () => {
    try {
      const cartPayload = cart.map(i => ({ productId: i.id, quantity: i.quantity }));
      const res = await createCheckoutSession(cartPayload);
      if (res && res.url) {
        window.location.href = res.url;
      } else {
        console.error('Invalid checkout response', res);
      }
    } catch (err) {
      console.error('Checkout error', err);
      // optionally show a toast here if toast is available/imported
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl mb-4">Order Summary</h2>

      {cart.map(item => (
        <div key={item.id} className="flex justify-between border-b py-2">
          <span>{item.description} × {item.quantity}</span>
          <span>£{(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}

      <h3 className="text-xl mt-4">Total: £{subtotal.toFixed(2)}</h3>

      <button
        onClick={payNow}
        className="bg-black text-white px-6 py-2 mt-4"
      >
        Pay Now
      </button>
    </div>
  );
}
