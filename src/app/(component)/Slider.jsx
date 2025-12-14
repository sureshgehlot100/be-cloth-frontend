'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FancyHeader from './FancyHeader';
import Header from './Header';


function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showText, setShowText] = useState(true);
    const [images, setImages] = useState([
        {
            src: '/assets/sliderImg1.jpg',
            year: '2024',
            description1: 'Summer',
            description2: 'Collection',
            description3: 'SUMMER SALE | UP TO 50% OFF'
        },
        {
            src: '/assets/sliderImg2.jpg',
            year: '2024',
            description1: 'Spring',
            description2: 'Collection',
            description3: 'SPRING SALE | UP To 50% OFF'
        },
    ]);
    const handleArrowClick = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex((currentIndex - 1 + images.length) % images.length);
        } else if (direction === 'next') {
            setCurrentIndex((currentIndex + 1) % images.length);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000); // change every 3 seconds

        return () => clearInterval(intervalId);
    }, [images, currentIndex]);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowText(false);
        }, 3000); // hide text after 3 seconds

        return () => clearTimeout(timeoutId);
    }, []);
    useEffect(() => {
        const button = document.querySelector('.animate-slide-in');
        button.classList.remove('animate-slide-in');
        void button.offsetWidth;
        button.classList.add('animate-slide-in');
    }, [currentIndex]);
    return (
        
            <div className="slider h-screen w-full relative">
                {/* slider image */}
                <div
                    className="slider-image h-full w-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${images[currentIndex].src})`,
                    }}
                />
                {/* slider phone, mail */}
                <div className="absolute top-4 left-[148px] text-white pl-3 text-sm md:text-base lg:text-lg xl:text-xl">
                    <div>
                        Help Desk 24/7
                        <i className="fa-solid fa-phone-flip p-2"></i>
                        <a href="+61 (0) 383 766 284">+61 (0) 383 766 284</a>
                        <i className="fa-regular fa-envelope p-2"></i>
                        <a href='noreply@envato.com'>noreply@envato.com</a>
                    </div>
                </div>
                <FancyHeader />
                <Header />
                {/* slider discription */}
                <div className=" absolute bottom-[160px] left-[-180px] w-full  flex  flex-col justify-center items-center ${showText ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}">
                    <div className="items-start text-left animate-slide-in">
                        <div className="text-#010100 text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            {images[currentIndex].year}
                            <span
                                style={{
                                    borderTop: '1px solid #010100',
                                    width: '87px',
                                    display: 'inline-block',
                                    margin: '6px',
                                }}
                            ></span>
                        </div>
                        <div className="text-#919093 font-light text-lg md:text-2xl lg:text-[50px]  my-4">
                            {images[currentIndex].description1}
                        </div>
                        <div className="text-#010100 text-left text-lg md:text-2xl lg:text-[50px] my-5 ">
                            {images[currentIndex].description2}
                        </div>
                        <div className="text-black text-left text-sm ">
                            {images[currentIndex].description3}
                        </div>
                        <button
                            className="rounded-br-2xl border-l border-[#010001] bg-[#010001] py-2 px-4 text-white hover:bg-white hover:text-[#010001] transition-colors duration-300 mt-3"
                        >
                            Our collection
                        </button>
                    </div>
                </div>
                {/* slider arrow */}
                <div className="absolute bottom-10 left-10 md:left-20 lg:left-30">
                    <Image
                        src="/assets/leftArrow.png"
                        alt="arrow"
                        width={16}
                        height={5}
                        onClick={() => handleArrowClick('prev')}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className="absolute bottom-10 right-10 md:right-20 lg:right-30">
                    <Image
                        src="/assets/rightArrow.png"
                        alt="arrow"
                        width={16}
                        height={5}
                        onClick={() => handleArrowClick('next')}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                {/* fix slider images */}
                <div>
                    <div className="absolute bottom-1 right-40 md:right-80 lg:right-[368px] lg:w-44">
                        <Image
                            src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic2.jpg"
                            alt="fixImg1"
                            width={100}
                            height={100}
                        />
                        <div className="text-[#FEFEF9] text-sm md:text-base lg:text-lg mt-1 cursor-pointer">
                            Woman
                            <span className="block w-20 md:w-30 lg:w-20 h-[2px] bg-[#FEFEF9] mt-1" />
                        </div>
                    </div>
                    <div className="absolute bottom-14 right-40 md:right-80 lg:right-[170px] lg:w-44">
                        <Image
                            src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic3.jpg"
                            alt="fixImg1"
                            width={100}
                            height={100}
                        />
                        <div className="text-[#FEFEF9] text-sm md:text-base lg:text-lg mt-1 cursor-pointer">
                            Men
                            <span className="block w-20 md:w-30 lg:w-20 h-[2px] bg-[#FEFEF9] mt-1" />
                        </div>
                    </div>
                    <div className="absolute bottom-72 right-44 md:right-72 lg:right-72 w-28 md:w-36 lg:w-36">
                        <Image
                            src="/assets/sliderFixedimg3.png"
                            alt="fixImg1"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                {/* slider icon */}
                <div>
                    <a href="https://muffingroup.com/betheme/prebuilt-websites/">
                        <div
                            className="fixed bottom-64 right-0 w-[60px] bg-black animated-text text-center p-2 rounded-l text-[12px]"
                            style={{ zIndex: 1000 }}
                        >
                            700+<br />websites
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://themeforest.net/item/betheme-responsive-multipurpose-wordpress-theme/7758048?iradid=275988&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&irpid=1289117&mp_value1=&clickid=2yXSR33y6xyKROt2wdW3Owy0UkCw-7wdqx4JSk0">
                        <div
                            className="fixed bottom-48 right-0 w-[60px] bg-[#81B441] text-[#FFFFFF] text-center p-2 rounded-l text-[10px]"
                            style={{ zIndex: 1000 }}
                        >
                            <i className="fas fa-cart-plus text-[20px]" /><br />Buy now
                        </div>
                    </a>
                </div>
            </div>
        
    );
};

export default Slider