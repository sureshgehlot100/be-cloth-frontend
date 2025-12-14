'use client'
import Footer from '@/app/(component)/Footer'
import SliderCommen from '@/app/(component)/SliderCommen'
import Image from 'next/image';
import Link from 'next/link';


function Page() {
  const text = ('Contact with us');
  return (
    <div>
      <SliderCommen text={text} />
      <>

        {/* Address and Open and Close time */}
        <div className="container w-[82%] mx-auto p-4 md:p-6 lg:p-6 mt-14">
          <div className="flex flex-wrap  md:flex-nowrap justify-center md:justify-start">
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0 ">
              <p className="text-lg font-bold mb-2">Our address</p>
              <p className="text-gray-900 text-3xl">Level 13, 2 Elizabeth St,</p>
              <p className="text-gray-900 text-3xl">Melbourne, Victoria 3000,</p>
              <p className="text-gray-900 text-3xl">Australia</p>
            </div>
            <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 md:mb-0 ml-5">
              <p className="text-lg font-bold mb-2">Monday – Friday</p>
              <p className="text-gray-600">8:00 AM — 10:00 PM</p>
              <hr className="my-4 border-gray-800" />
              <p className="text-lg font-bold mb-2">Monday – Friday</p>
              <p className="text-gray-600">8:00 AM — 10:00 PM</p>
              <hr className="my-4 border-gray-800" />
            </div>
            <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/3  md:mb-0 md:ml-12 xl:ml-20">
              <p className="text-lg font-bold mb-2">Do you have any questions?</p>
              <a href='tel' className="text-gray-800 font-bold"><i class="fa-solid fa-mobile p-5"></i>+61 (0) 383 766 284</a><br />
              <a href='email' className="text-gray-800 font-bold"><i class="fa-solid fa-envelope p-5"></i>norealy@envato.com</a>
            </div>
          </div>
        </div>
      </>
      <>
        {/* Images Part */}
        <div className=' container w-[80%] mx-auto m-[7%] '>
          <Image alt="Contact Image" width={1600} height={800} src={'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-contact-pic1.jpg'} />
        </div>
      </>
      <>
        {/* Contact Form */}
        <div className='bg-[#F7EAE6] md:my-10 xl:my-20 '>
          <h2 className="text-2xl font-[400] leading-relaxed py-8 flex justify-center items-center ">Need a quick help?</h2>
          <div className="flex justify-center items-center pb-14 ">
            <form className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows={5}
                  placeholder="Your message..."
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
      <>
        {/*  two images and bg part */}
        <div className=' flex justify-center mb-28'>
          <div className="w-[80%] h-[43vh]  flex flex-wrap">
            <div className="w-full md:w-1/3 xl:w-1/3 bg-cover bg-center h-full"
              style={{ backgroundImage: 'url(https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-wrapbg1.jpg)' }}></div>
            <div className="w-full md:w-1/3 xl:w-1/3 h-full bg-[#ECD9AB] flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold">GET 20% OFF</h2>
              <p className="text-sm py-4">Fusce dolor velit laoreet</p>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 sm:px-4 lg:px-10 rounded">
                <Link href={'/about_us'}>Learn more</Link>
              </button>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 bg-cover bg-center h-full"
              style={{ backgroundImage: 'url(https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-wrapbg2.jpg)' }}></div>
          </div>
        </div>
      </>
      <Footer />
    </div>
  )
}

export default Page