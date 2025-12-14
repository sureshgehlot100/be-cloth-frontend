'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShopdropDownBox from './ShopdropDownBox';
import { useSelector } from 'react-redux';



function FancyHeader() {
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <header
        className="bg-white absolute top-16 left-40 h-20 flex justify-start items-center py-4 w-full md:w-1/3 lg:w-1/2 xl:w-[57%] px-4 shadow-md"
        style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="logo w-32 ml-4">
          <Link href="/">
            <Image src="/assets/clothing2.png" alt="Logo" width={200} height={100} unoptimized />
          </Link>
        </div>
        <nav className="nav flex justify-between items-center md:ml-8 lg:ml-16 xl:ml-16">
          <ul className="flex justify-center items-center cursor-pointer">
            <li className="mr-6 md:mr-4 lg:mr-6 xl:mr-6">
              <Link href="/" className="text-gray-600 hover:text-black" activeclassname="active-link">
                Home
              </Link>
            </li>
            <li className="mr-6 md:mr-4 lg:mr-6 xl:mr-6">
              <Link href="/about_us" className="text-gray-600 hover:text-black" activeclassname="active-link">
                About us
              </Link>
            </li>
            <li className="mr-6 md:mr-4 lg:mr-6 xl:mr-6">
              <div className="group">
                <Link href="/shop" className="text-gray-600 hover:text-black" activeclassname="active-link">
                  Shop
                </Link>
                <div className="shop-dropdown-wrapper absolute left-0 z-20">
                  <ShopdropDownBox />
                </div>
              </div>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-black" activeclassname="active-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className="connector absolute top-[8%] md:top-[8%] lg:top-[9.7%]  right-[30%] w-[1px] md:w-[1%] lg:w-[1%] h-20 bg-[#E2E2E3] skew-y-[-40deg]"
        style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
      />
      <div
        className="header-right flex justify-between items-center bg-white py-4 h-20 px-5 shadow-md absolute right-[10.8%] top-[8.8%] z-10 md:right-[10.8%] lg:right-[12.50%] "
        style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
      >
        <Link href="/cart" className="cart text-gray-800 hover:text-black mr-4">
          <i className="fas fa-shopping-cart text-lg" />
          <span className="bg-black text-white px-2 py-1 m-1 absolute top-[9px] left-7 rounded z-10 text-[10px]">{totalQuantity}</span>
        </Link>
        <Link href="#" className="search text-gray-800 hover:text-black">
          <i className="fas fa-search" />
        </Link>
        <Link href="/my_account" className="search px-4 text-gray-800 hover:text-[blue]">
          My account
          <i className="fas fa-angle-right ml-2" />
        </Link>
      </div>
    </>
  );
}

export default FancyHeader;