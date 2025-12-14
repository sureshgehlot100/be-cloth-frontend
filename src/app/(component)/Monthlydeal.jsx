import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

function Monthlydeal() {
    const dispatch = useDispatch();
    const handleAddToCart = (deal) => {
        dispatch(addItem(deal));
    };
    const products = useSelector((state) => state?.products?.products);
        const  MonthlyDeals = products.filter(
            (product) => product.dealType === 'MONTHLY'
        );
    return (
        <div className="bg-[#FEFEFF] p-4 rounded-lg shadow-md w-full flex justify-center align-center  ">
            <div className='w-[78%] mt-20'>
                <p className="text-lg text-gray-600 mb-2">Featured</p>
                <h2 className="text-5xl md:text-2xl lg:text-3xl xl:text-6xl text-[#171923] font-[300] mb-2">Monthly Deals</h2>
                <p className="text-sm text-gray-600 mb-4 animated-text">Get the best deals of the month!</p>
                <div className="flex justify-evenly md:my-3 lg:my-6 flex-wrap">
                    {
                        MonthlyDeals.map((deal, index) => {
                            return (
                                <div key={index} className="relative group" >
                                    <Image
                                        src={deal.image}
                                        alt="Weekly Deal Image"
                                        width={227}
                                        height={100}
                                        style={{ objectFit: 'cover' }}
                                        className="transition duration-300 ease-in-out hover:scale-110"
                                    />
                                    <div className="absolute top-[30%] left-[25%] px-5 py-4 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer  ">
                                        <button onClick={() => handleAddToCart(deal)}>
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                                    <div className="absolute top-[30%] left-[51%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer  ">
                                        <Link href={`/product/${deal._id}`}>
                                            <i className="fa-solid fa-link"></i>
                                        </Link>
                                    </div>
                                    <h3 className="text-lg text-gray-600 my-2">{deal.description}</h3>
                                   
                                    <p className='text-black'>£{deal?.price}</p>
                                </div>
                            )
                        })
                    }
                    <div className='w-full flex justify-center items-center md:h-[100px] lg:h-[200px]'>
                        <button className='flex justify-center  items-center'>
                            <Link href={'/shop'} className='bg-black text-white px-7 py-2 hover:bg-slate-600'>
                                See all products
                                <i className="fa-solid fa-angle-right pl-2"></i>
                            </Link >
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Monthlydeal;