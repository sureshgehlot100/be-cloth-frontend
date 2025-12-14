'use client'

import Footer from '@/app/(component)/Footer'
import SliderCommen from '@/app/(component)/SliderCommen'
import { addItem } from '@/app/redux/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Page() {
  const dispatch = useDispatch();
  const text = 'Shop';

  const products = useSelector((state) => state?.products?.products) ?? [];

  // original list of CARD items
  const [originalShopData, setOriginalShopData] = useState([]);
  // current items after category + sort
  const [cardData, setCardData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Default sorting');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // compute categories from shop data
  const categories = useMemo(() => {
    const cats = new Set();
    originalShopData.forEach(p => {
      if (p?.category) cats.add(p.category);
    });
    return ['All', ...Array.from(cats)];
  }, [originalShopData]);

  // helper: parse price number (choose last number as current price)
  const parsePrice = (priceStr) => {
    if (!priceStr && priceStr !== 0) return 0;
    // split by whitespace and pick the last numeric-looking token
    const parts = priceStr.toString().trim().split(/\s+/);
    const last = parts[parts.length - 1].replace(/[^0-9.]/g, '');
    const num = parseFloat(last);
    return isNaN(num) ? 0 : num;
  };

  // helper: apply category filter then sort
  const applyFilterAndSort = (source = originalShopData, category = selectedCategory, sortOpt = selectedOption) => {
    let data = Array.isArray(source) ? [...source] : [];

    // category filter
    if (category && category !== 'All') {
      data = data.filter(item => item.category === category);
    }

    // sort
    switch (sortOpt) {
      case 'Sort by popularity':
        data.sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
        break;
      case 'Sort by rating':
        data.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      case 'Sort by latest':
        data.sort((a, b) => new Date(b.date || b.createdAt) - new Date(a.date || a.createdAt));
        break;
      case 'Sort by price: low to high':
        data.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case 'Sort by price: high to low':
        data.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case 'Default sorting':
      default:
        // keep original order (but still filtered by category)
        break;
    }

    setCardData(data);
  };

  // whenever products change, set originalShopData to only CARD items and reset filters
  useEffect(() => {
    const shopItems = Array.isArray(products)
      ? products.filter(p => p?.dealType === 'CARD')
      : [];
    setOriginalShopData(shopItems);
    // reset filters
    setSelectedOption('Default sorting');
    setSelectedCategory('All');
    setCardData(shopItems);
  }, [products]);

  // when category or sort changes, apply filter+sort
  useEffect(() => {
    applyFilterAndSort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, selectedOption, originalShopData]);

  // handlers
  const handleSortChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
  };

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  // formatting price for display with strike-through if two numbers present
  const renderPrice = (priceStr) => {
    if (!priceStr && priceStr !== 0) return '£0.00';
    const parts = priceStr.toString().trim().split(/\s+/);
    if (parts.length >= 2) {
      // first is original, last is sale/current
      const original = parts[0];
      const current = parts[parts.length - 1];
      return (
        <span className='text-black text-lg'>
          <s className='text-gray-600 text-sm'>£{original}</s> £{current}
        </span>
      );
    } else {
      return <span className='text-black'>£{parts[0]}</span>;
    }
  };

  return (
    <div>
      <SliderCommen text={text} />
      <div className='bg-[#FEFFFE] flex justify-center'>
        <div className='w-[79%]'>
          <div
            className='p-6 mt-7 mb-5 border-1 border-white flex justify-between items-center h-full'
            style={{
              backgroundImage:
                'url(https://themes.muffingroup.com/be/clothing2/wp-content/themes/betheme/images/stripes/stripes_5_b.png)',
              backgroundSize: 'auto 14%',
              backgroundRepeat: 'repeat',
              height: '7%',
            }}
          >
            <div>
              <p className='text-xs'>Showing all {cardData.length} results</p>
            </div>

            <div className='flex items-center space-x-4'>
              <div className='flex gap-1 items-center'>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`px-2 py-1 rounded-md text-xs ${
                      selectedCategory === cat ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <select
                className='py-1 pl-0 pr-0 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600'
                value={selectedOption}
                onChange={handleSortChange}
              >
                <option>Default sorting</option>
                <option>Sort by popularity</option>
                <option>Sort by rating</option>
                <option>Sort by latest</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
              </select>
            </div>
          </div>

          <div>
            <div className='flex justify-evenly md:my-3 lg:my-6 flex-wrap'>
              {cardData.length === 0 ? (
                <p className='text-center w-full py-12'>No products found.</p>
              ) : (
                cardData?.map((item) => (
                  <div key={item._id} className='relative group w-[220px] m-3'>
                    <Image
                      src={item.image}
                      alt={item?.description || item?.name || 'product'}
                      width={227}
                      height={100}
                      style={{ width: '92%' }}
                      className='transition duration-300 ease-in-out hover:scale-110'
                    />
                    <div className='absolute top-[30%] left-[25%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer'>
                      <button onClick={() => handleAddToCart(item)}>
                        <i className='fas fa-shopping-cart' />
                      </button>
                    </div>
                    <Link href={`/product/${item._id}`} className='absolute top-[30%] left-[48%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer'>
                      <i className='fa-solid fa-link' />
                    </Link>
                    <h3 className='text-lg text-gray-900 font-[250] my-2'>{item?.description}</h3>
                    <p className='text-sm text-gray-600 mb-4'>{renderPrice(item?.price)}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
