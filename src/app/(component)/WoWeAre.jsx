import Link from 'next/link';
import React from 'react';

function WhoWeAre() {
  return (
    <section
      style={{
        backgroundImage: `url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-sectionbg1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '115vh'
      }}
      className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-center items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-4 md:mb-6 lg:mb-8">
          Who we are
        </h2>
      </div>
      <div className='w-full flex justify-center items-center h-[80%]'>
        <div className='flex  w-[75%]  h-[100%] '>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4" style={{
            backgroundImage: `url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-columnbg1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%'
          }}></div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4 bg-[#FFFFFF] h-[100%]">
            <h2 className="text-xl md:text-xl lg:text-2xl font-medium text-[#010001] md:mt-6 lg:mt-10 md:mb-3 lg:mb-5 flex justify-center items-center ">
              Our story
            </h2>
            <p className=" text-sm md:text-sm lg:text-lg font-medium text-grey-600 bold-thin mb-4 md:mb-4 lg:mb-6 flex justify-center items-center text-center leading-loose tracking-wide">
              Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum eleifend erat at justo fringilla imperdiet id ac magna ac magna.
            </p>
            <p className='text-sm flex justify-center items-center text-center leading-relaxed tracking-wide  mb-1 md:mb-4 lg:mb-8 '>
              Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna eu, molestie tortor lorem eget egestas.
            </p>
            <div className='w-full flex justify-center items-center '>
              <button className='flex justify-center  items-center'>
                <Link href={'/about_us'} className='bg-black text-white md:px-6 lg:px-8 py-2 hover:bg-slate-600'>
                  Learn More
                  <i className="fa-solid fa-angle-right pl-2"></i>
                </Link >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;