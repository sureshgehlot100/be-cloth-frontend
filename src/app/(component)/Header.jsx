'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ShopdropDownBox from './ShopdropDownBox';
import { useSelector } from 'react-redux';

function Header() {
    const [showHeader, setShowHeader] = useState(false);
    const cart = useSelector((state) => state.cart);
    const totalQuantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div
            className={`fixed top-0 left-0 w-full h-[20%] bg-white shadow-md ${showHeader ? 'opacity-100' : 'opacity-0'
                } md:h-[15%] lg:h-[55px] z-20`}
        >
            {/* header content here */}
            <div className="container  mx-auto p-4 flex justify-evenly items-center md:px-6 lg:px-8">
                <div className="logo w-15  md:w-20 lg:w-32 md:ml-2 lg:ml-4">
                    <Link href="/">
                        <Image src="/assets/clothing2.png" alt="Logo" width={300} height={150} unoptimized />
                    </Link>
                </div>
                <nav className=" nav hidden md:flex lg:flex">
                    <ul className="flex items-center md:space-x-1 lg:space-x-2">
                        <li>
                            <Link href="/" className=" text-md md:text-md lg:text-lg md:mx-2 lg:mx-4 hover:text-black" activeclassname="active-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about_us" className=" text-md md:text-md lg:text-lg md:mx-2 lg:mx-4 hover:text-black" activeclassname="active-link">
                                About us
                            </Link>
                        </li>
                        <li>
                            <div className="group">
                                <Link href="/shop" className=" hover:text-black" activeclassname="active-link">
                                    Shop
                                </Link>
                                <div className="shop-dropdown-wrapper   absolute left-[57%] -translate-x-[50%] z-10 transform -translate-x-50% left-50%">
                                    <ShopdropDownBox />
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link href="/contact" className=" text-md md:text-md lg:text-lg md:mx-2 lg:mx-4 hover:text-black" activeclassname="active-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div
                    className="header-right flex justify-between items-center bg-white sm:px-3 lg:px-5 shadow-md "
                    style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                >
                    <Link href="/cart" className="cart relative text-gray-800 hover:text-black mr-4 md:mr-2 lg:mr-4 md:w-full lg:w-auto">
                        <i className="fas fa-shopping-cart text-lg" />
                        <span className="bg-black text-white px-2 py-1 absolute bottom-4 left-3 rounded z-10 text-[10px]">{totalQuantity}</span>
                    </Link>
                    <Link href="#" className="search text-gray-800 hover:text-black md:hidden lg:inline-block">
                        <i className="fas fa-search" />
                    </Link>
                    <Link href="/my_account" className="search px-4 text-gray-800 hover:text-[blue] md:mt-2 md:px-2 lg:mt-0 md:w-full lg:w-auto md:hidden lg:inline-block">
                        My account
                        <i className="fas fa-angle-right ml-2 " />
                    </Link>
                </div>
                <button className="md:hidden lg:hidden" onClick={() => setShowHeader(!showHeader)}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Header;