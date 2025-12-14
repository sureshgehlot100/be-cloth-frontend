'use client'
import FancyHeader from '@/app/(component)/FancyHeader'
import Header from '@/app/(component)/Header'
import '@fortawesome/fontawesome-free/css/all.min.css';


function SliderCommen(props) {

    return (
        <div
            className='w-[100%] h-[56vh] '
            style={{
                backgroundImage: `url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-subheader1.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundPosition: 'top center'
            }}
        >
            {/* slider phone, mail */}
            <div className="absolute top-4 left-[148px] text-white pl-3 text-sm md:text-base lg:text-lg xl:text-xl">
                <div>
                    Help Desk 24/7
                    <i className="fa-solid fa-phone-flip p-2"></i>
                    <a href="tel">+61 (0) 383 766 284</a>
                    <i className="fa-regular fa-envelope p-2"></i>
                    <a href='email'>noreply@envato.com</a>
                </div>
            </div>
            <FancyHeader />
            <Header />
            <div className="h-full flex items-center justify-center ">
                {/* slider item content */}
                <div className='w-[76%] pt-[10%] '>
                    <h2 className='sm:text-xl lg:text-6xl ' style={{ fontWeight: 250 }} >{props.text}</h2>
                </div>

            </div>
        </div>
    )
}

export default SliderCommen