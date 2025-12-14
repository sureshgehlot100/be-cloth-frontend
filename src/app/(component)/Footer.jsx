import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#F6EBE6] text-gray-600">
      <div className="container w-[80%] mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center text-center lg:text-left">
          {/* First block: Contact Information */}
          <div className="w-full lg:w-1/4 xl:w-1/4 p-6">
            <h5 className=" text-black font-bold mb-4">
              <Image alt='logosym' width={100} height={50} src={'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/retina-clothing2.png'} style={{width:'auto'}} />
            </h5>
            <ul>
              <li className="mt-4">
                <i className="fas fa-mobile-alt mr-2" /><a href="tel">+61 (0) 383 766 284</a>
              </li>
              <li className="mt-3">
                <i className="fas fa-envelope mr-2" /><a href="email">noreply@envato.com</a>
              </li>
              <li className="mt-8">
                <Image alt='wrapper' width={200} height={100} src={'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-footer-pic1.png'}>
                </Image>
              </li>
            </ul>
          </div>
          {/* Second block: Delivery Information */}
          <div className="w-full lg:w-1/4 xl:w-1/4 p-6">
            <h5 className=" text-gray-700 font-bold mb-4">Delivery</h5>
            <ul>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">How it Works</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Free Delivery</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Payment methods</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Delivery areas</a></li>
            </ul>
          </div>
          {/* Third block: Customer Service */}
          <div className="w-full lg:w-1/4 xl:w-1/4 p-6">
            <h5 className=" text-gray-700 font-bold mb-4">Customer Service</h5>
            <ul>
              <li className="mt-1"><a href="#" className="text-gray-600 hover:text-gray-900">Orders</a></li>
              <li className="mt-1"><a href="#" className="text-gray-600 hover:text-gray-900">Downloads</a></li>
              <li className="mt-1"><a href="#" className="text-gray-600 hover:text-gray-900">Addresses</a></li>
              <li className="mt-1"><a href="#" className="text-gray-600 hover:text-gray-900">Account details</a></li>
              <li className="mt-1"><a href="#" className="text-gray-600 hover:text-gray-900">Logout</a></li>
              <li className="mt-1"><a href="#" className="text-gray-600 hover:text-gray-900">Lost password</a></li>
            </ul>
          </div>
          {/* Fourth block: Useful Links */}
          <div className="w-full lg:w-1/4 xl:w-1/4 p-6">
            <h5 className=" text-gray-700 font-bold mb-4">Useful Links</h5>
            <ul>
              <li className="mt-2"><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact us</a></li>
              <li className="mt-2"><a href="/about_us" className="text-gray-600 hover:text-gray-900">Help & About us</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Shipping & Returns</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center border-t-2 p-4 flex justify-evenly">
        <p className="text-sm">
          © 2024 Betheme by Muffin group | All Rights Reserved | Powered by WordPress
        </p>
        <ul className="flex justify-center text-sm">
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms and conditions</a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy policy</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">Cookies</a>
          </li>
          <li className='text-4xl ml-3 '>
            <a href="#" className="text-gray-600 hover:text-gray-900 " onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <i className="fa-solid fa-angle-up"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;