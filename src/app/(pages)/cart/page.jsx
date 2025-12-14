'use client'
import { useSelector, useDispatch } from 'react-redux';
import Footer from '@/app/(component)/Footer';
import SliderCommen from '@/app/(component)/SliderCommen'
import Image from 'next/image';
import { removeItem, updateCartQuantity } from '@/app/redux/cartSlice';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { createCheckoutSession } from '@/app/api/checkoutApi';
import { useState } from 'react';

function Page() {
  const text = 'Cart';
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items || []);
  const [loading, setLoading] = useState(false);

  // Safe price parser: supports Number or a few string formats while encouraging numeric prices in DB
  function getPriceValue(price) {
    if (typeof price === 'number') return price;

    if (typeof price === 'string') {
      const trimmed = price.trim();
      // If string contains multiple tokens (e.g. "12.50 11.20"), prefer last token (usually the sale price)
      const parts = trimmed.split(/\s+/);
      const candidate = parts[parts.length - 1].replace(/[£$,]/g, '');
      const parsed = parseFloat(candidate);
      if (!isNaN(parsed)) return parsed;

      // Fallback: try parseFloat on whole string after removing currency symbols
      const parsed2 = parseFloat(trimmed.replace(/[£$,\u00A0]/g, ''));
      if (!isNaN(parsed2)) return parsed2;
    }

    // If nothing works, return 0 (and later you may want to notify or log)
    return 0;
  }

  function formatPrice(price) {
    const p = getPriceValue(price);
    return `£${p.toFixed(2)}`;
  }

  // Calculate subtotal (safe conversion)
  const subtotal = cart.reduce((acc, item) => {
    const qty = Number(item.quantity) || 0;
    const price = getPriceValue(item.price);
    return acc + qty * price;
  }, 0);

  // Calculate tax (10% of subtotal)
  const tax = subtotal * 0.1;

  // Calculate total
  const total = subtotal + tax;

  const handleCheckout = async () => {
    try {
      if (!cart.length) {
        toast.error('Cart is empty');
        return;
      }

      setLoading(true);

      const cartPayload = cart.map(item => ({
        productId: item.id,
        quantity: Number(item.quantity) || 1,
      }));

      const data = await createCheckoutSession(cartPayload);

      if (data && data.url) {
        // redirect to Stripe Checkout page
        window.location.href = data.url;
      } else {
        console.error('Invalid checkout response', data);
        toast.error('Checkout failed. Please try again.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Checkout failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      <SliderCommen text={text} />
      {!cart.length && (
        <div className="container w-[85%] mx-auto p-4 md:p-8 lg:p-12">
          <p className="text-lg font-bold mb-4 w-full bg-[green] p-4 text-white">
            Your cart is empty
          </p>
          <Link href={'/shop'}>
            <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Return to shop
            </button>
          </Link>
        </div>
      )}

      {cart.length > 0 && (
        <div className="container w-[85%] mx-auto p-4 md:p-8 lg:p-12">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

          <div className="cart-table">
            <table className="w-full border-[1px] rounded-sm shadow-xl py-3">
              <thead className="border-b-[1px] items-center">
                <tr>
                  <th className="text-left p-4">Product</th>
                  <th className="text-left">Quantity</th>
                  <th className="text-left">Price</th>
                  <th className="text-left">Total</th>
                  <th className="text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {cart && Array.isArray(cart) && cart.map((item) => {
                  const priceValue = getPriceValue(item.price);
                  const qty = Number(item.quantity) || 0;
                  return (
                    <tr key={item.id} className="border-b">
                      <td className="p-4">
                        <div className="flex items-center">
                          <Image
                            src={item?.image}
                            alt={item?.description || 'Product Image'}
                            width={80}
                            height={80}
                            className="w-20 h-20 mr-4"
                          />
                          <span>{item.description}</span>
                        </div>
                      </td>

                      <td>
                        <input
                          type="number"
                          min={1}
                          value={qty}
                          className="w-16 pl-2 text-sm"
                          onChange={(e) => {
                            let newQuantity = parseInt(e.target.value, 10);
                            if (isNaN(newQuantity) || newQuantity < 1) newQuantity = 1;
                            dispatch(updateCartQuantity({ itemId: item.id, newQuantity }));
                          }}
                        />
                      </td>

                      <td>{`£${priceValue.toFixed(2)}`}</td>

                      <td>£{(qty * priceValue).toFixed(2)}</td>

                      <td>
                        <button
                          className="bg-black hover:bg-gray-600 my-2 p-2 transition duration-300 ease-in-out text-white text-lg rounded"
                          onClick={() => dispatch(removeItem({ id: item.id }))}
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Coupon section moved outside table (valid HTML) */}
            <div className="coupon-section w-1/2 mt-4 flex justify-between m-2">
              <input type="text" placeholder="Coupon code" className="w-36 p-2 text-lg  border-2 rounded-br-xl" />
              <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-14 ">Apply</button>
            </div>
          </div>

          <div className="cart-summary mt-8 flex justify-end">
            <div className="w-1/2">
              <h3 className="text-lg font-bold mb-2">Cart totals</h3>

              <div className="flex justify-around py-2 border-x-2 border-2 rounded shadow-sm ">
                <p className=" text-gray-600">Subtotal</p>
                <p>£{subtotal.toFixed(2)}</p>
              </div>

              <div className="flex justify-around py-2 border-x-2 ">
                <p className="text-gray-600">Tax(10%)</p>
                <p>£{tax.toFixed(2)}</p>
              </div>

              <div className="flex justify-around py-2 border-x-2 border-2 rounded shadow-lg">
                <p className="text-gray-600">Total</p>
                <p>£{total.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end lg:mr-24 mt-8 md:mr-14 mr-0">
            <button
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => toast.info('Cart updated')}
            >
              Update Cart
            </button>

            <button
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4 disabled:opacity-50"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Page;
