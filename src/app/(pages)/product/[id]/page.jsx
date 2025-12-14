'use client'

import Footer from '@/app/(component)/Footer'
import SliderCommen from '@/app/(component)/SliderCommen'
import { addItem } from '@/app/redux/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ProductDetail() {
  const params = useParams();
  const productId = params.id;
  const dispatch = useDispatch();

  const products = useSelector((state) => state?.products?.products) ?? [];
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // Find product from Redux store
  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find(p => p._id === productId);
      setProduct(foundProduct);
      setLoading(false);
    }
  }, [products, productId]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        dispatch(addItem(product));
      }
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const parsePrice = (priceStr) => {
    if (!priceStr && priceStr !== 0) return 0;
    const parts = priceStr.toString().trim().split(/\s+/);
    const last = parts[parts.length - 1].replace(/[^0-9.]/g, '');
    const num = parseFloat(last);
    return isNaN(num) ? 0 : num;
  };

  const renderPrice = (priceStr) => {
    if (!priceStr && priceStr !== 0) return '£0.00';
    const parts = priceStr.toString().trim().split(/\s+/);
    if (parts.length >= 2) {
      const original = parts[0];
      const current = parts[parts.length - 1];
      return (
        <div>
          <span className='text-gray-600 line-through mr-2'>£{original}</span>
          <span className='text-black text-2xl font-bold'>£{current}</span>
        </div>
      );
    } else {
      return <span className='text-black text-2xl font-bold'>£{parts[0]}</span>;
    }
  };

  if (loading) {
    return (
      <div>
        <SliderCommen text="Product Details" />
        <div className='bg-[#FEFFFE] flex justify-center items-center' style={{ minHeight: '60vh' }}>
          <p className='text-lg text-gray-600'>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <SliderCommen text="Product Details" />
        <div className='bg-[#FEFFFE] flex justify-center items-center' style={{ minHeight: '60vh' }}>
          <div className='text-center'>
            <p className='text-lg text-gray-600 mb-4'>Product not found.</p>
            <Link href="/shop" className='text-black hover:underline'>
              Back to Shop
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <SliderCommen text="Product Details" />
      <div className='bg-[#FEFFFE] flex justify-center'>
        <div className='w-[79%] py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Product Image */}
            <div className='flex justify-center items-center'>
              <Image
                src={product.image}
                alt={product?.description || product?.name || 'product'}
                width={400}
                height={400}
                style={{ objectFit: 'cover' }}
                className='rounded-lg'
              />
            </div>

            {/* Product Details */}
            <div className='flex flex-col justify-start'>
              <h1 className='text-4xl font-bold text-[#171923] mb-4'>
                {product?.description || product?.name}
              </h1>

              <div className='mb-6'>
                <div className='flex items-center gap-4 mb-4'>
                  {renderPrice(product?.price)}
                </div>

                {product?.rating && (
                  <div className='flex items-center gap-2 mb-4'>
                    <span className='text-yellow-400'>
                      {'★'.repeat(Math.floor(product.rating))}
                      {product.rating % 1 !== 0 && '☆'}
                    </span>
                    <span className='text-gray-600'>({product.rating}/5)</span>
                  </div>
                )}
              </div>

              <p className='text-gray-600 text-lg mb-8 leading-relaxed'>
                {product?.description || 'No description available.'}
              </p>

              {product?.category && (
                <div className='mb-6'>
                  <span className='text-gray-600 font-semibold'>Category:</span>
                  <p className='text-black text-lg'>{product.category}</p>
                </div>
              )}

              {/* Quantity and Add to Cart */}
              <div className='flex items-center gap-4 mb-8'>
                <div className='flex items-center border border-gray-300 rounded-lg'>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className='px-4 py-2 text-gray-600 hover:bg-gray-100'
                  >
                    −
                  </button>
                  <input
                    type='number'
                    value={quantity}
                    onChange={handleQuantityChange}
                    className='px-4 py-2 text-center border-0 w-16 outline-none'
                    min='1'
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className='px-4 py-2 text-gray-600 hover:bg-gray-100'
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className='bg-black text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition font-semibold'
                >
                  <i className='fas fa-shopping-cart mr-2'></i>
                  Add to Cart
                </button>
              </div>

              {/* Back to Shop */}
              <Link
                href="/shop"
                className='text-black hover:text-gray-700 hover:underline transition'
              >
                ← Back to Shop
              </Link>

              {/* Product Meta */}
              {product?.popularity && (
                <div className='mt-8 pt-8 border-t border-gray-200'>
                  <p className='text-sm text-gray-600'>
                    <span className='font-semibold'>Popularity:</span> {product.popularity}
                  </p>
                  {product?.date && (
                    <p className='text-sm text-gray-600 mt-2'>
                      <span className='font-semibold'>Listed on:</span>{' '}
                      {new Date(product.date).toLocaleDateString()}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
