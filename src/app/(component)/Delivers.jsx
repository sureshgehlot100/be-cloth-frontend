import Link from 'next/link';
import React from 'react';

function Delivers() {
    return (
        <section className='h-[110vh] bg-[#FFFFFF]  '>
            <div className='flex justify-center'>
                <div className="py-4 md:py-6 lg:py-8 w-[75%] ">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <ul className="flex flex-wrap justify-between mb-4">
                            <li className="w-full md:w-1/2 lg:w-1/4 p-4 md:p-6 lg:p-8 flex flex-col items-center">
                                <i className="fas fa-truck text-[28px] text-gray-600 block p-4 md:p-6 lg:p-8" aria-hidden="true"></i>
                                <span className=" text-gray-800 block pb-3">Always free shipping</span>
                                <p className='text-sm text-center '>Lorem ipsum dolor sit amet mauris dolor bibendum sapien</p>
                            </li>
                            <li className="w-full md:w-1/2 lg:w-1/4 p-4 md:p-6 lg:p-8 flex flex-col items-center">
                                <i className="fa-solid fa-clock text-[28px] text-gray-600 block p-4 md:p-6 lg:p-8" aria-hidden="true"></i>
                                <span className=" text-gray-800 block pb-3">14 day return policy</span>
                                <p className='text-sm text-center '>Nulla imperdiet sit amet magna vestibulum dapibus</p>
                            </li>
                            <li className="w-full md:w-1/2 lg:w-1/4 p-4 md:p-6 lg:p-8 flex flex-col items-center">
                                <i className="fa-solid fa-shield-halved text-[28px] text-gray-600 block p-4 md:p-6 lg:p-8" aria-hidden="true"></i>
                                <span className=" text-gray-800 block pb-3">Quick delivery in 48h</span>
                                <p className='text-sm text-center '>Lorem ipsum dolor sit amet mauris dolor bibendum sapien</p>
                            </li>
                            <li className="w-full md:w-1/2 lg:w-1/4 p-4 md:p-6 lg:p-8 flex flex-col items-center">
                                <i className="fas fa-credit-card text-[28px] text-gray-600 block p-4 md:p-6 lg:p-8" aria-hidden="true"></i>
                                <span className=" text-gray-800 block pb-3">Online payment</span>
                                <p className='text-sm text-center '>Nulla imperdiet sit amet magna vestibulum dapibus</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center'>
                <div className="w-[75%] h-[43vh]  flex flex-wrap">
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
        </section>

    );
}

export default Delivers;