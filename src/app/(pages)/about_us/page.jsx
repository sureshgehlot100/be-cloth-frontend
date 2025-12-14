'use client'
import Footer from '@/app/(component)/Footer';
import SliderCommen from '@/app/(component)/SliderCommen';
import Image from 'next/image';
import Link from 'next/link';


function Page() {
  const text = 'About us';
  return (
    <>
      <SliderCommen text={text} />
      <>
        {/*Text and Images part of About_us */}
        <div className=' w-full flex justify-center'>
          <div className='w-[80%] sm:py-16 md:flex-col   md:py-24 lg:py-32 '>
            <div className='w-[72%] sm:text-2xl lg:text-6xl font-[250]'>
              Mauris maximus velit commodo varius ligula consequat vel.
            </div>
            <p className='py-3'>LONDON, UK</p>
            <div className='flex flex-wrap w-full h-full gap-8 '>
              <div className=' w-[32%] '>
                <div className='text-justify'>
                  <p className='text-gray-900 text-lg font-light pb-3 leading-relaxed'>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus sit amet, mattis porta enim.</p>
                  <p className='text-gray-600 text-sm py-3 leading-relaxed'>Duis fermentum faucibus est, sed vehicula velit sodales vitae. Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam ullamcorper rhoncus sem vitae tempus. Curabitur ut tortor a orci fermentum ultricies. Mauris maximus velit commodo, varius ligula vel, consequat est.</p>
                  <h2 className='text-4xl py-4'>Aliquam fringill</h2>
                  <p className='text-gray-900 text-lg font-light py-3'>Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium</p>
                  <p className='text-gray-700 text-sm py-3 leading-loose '>Auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula rhoncus dui.</p>
                </div>
              </div>
              <div className=' w-[64.6%] '>
                <Image alt={'about_img'} width={800} height={400} src={'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-about-pic1.jpg'}>
                </Image>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        {/* plain number part of about_us */}
        <div className="flex flex-wrap justify-center bg-[#F6EBE6] mb-24 p-32">
          <div className="w-full md:w-1/2 xl:w-1/4 p-4 text-center">
            <h2 className="text-6xl font-bold mb-2">24</h2>
            <p className="text-lg text-gray-600">Laoreet odio</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-4 text-center">
            <h2 className="text-6xl font-bold mb-2">16</h2>
            <p className="text-lg text-gray-600">Mauris lectus</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-4 text-center">
            <h2 className="text-6xl font-bold mb-2">49</h2>
            <p className="text-lg text-gray-600">Molestie tortor</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-4 text-center">
            <h2 className="text-6xl font-bold mb-2">8</h2>
            <p className="text-lg text-gray-600">Maximus</p>
          </div>
        </div>
      </>
      <>
        {/* cross box with two images */}
        <div className='flex  justify-center gap-8 py-6'>
          <div className="w-[78%] flex flex-wrap justify-center p-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <Image src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-about-pic3.jpg" width={800} height={400} alt="Image 1" />
              <div className="py-4">
                <h6>PROIN RISUS ERAT</h6>
                <h2 className="text-3xl mb-2 font-[400] mt-2">Fringilla vel purus sit amet, mattis porta enim</h2>
                <p className="text-lg text-gray-900 leading-relaxed py-3">Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus sit amet, mattis porta enim. Duis fermentum faucibus est, sed vehicula velit sodales vitae.</p>
                <p className='text-gray-600 leading-relaxed py-3'>Duis fermentum faucibus est, sed vehicula velit sodales vitae. Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam ullamcorper rhoncus sem vitae tempus. Curabitur ut tortor a orci fermentum ultricies. Mauris maximus velit commodo, varius ligula vel, consequat est accumsan ante aliquam quis.</p>
                <button className='flex justify-center py-4  items-center'>
                  <Link href={'/contact'} className='bg-black text-white px-7 py-2 hover:bg-slate-600'>
                    Contact with us
                    <i className="fa-solid fa-angle-right pl-2"></i>
                  </Link >
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div >
                <h6>FUSCE UT VELIT LAOREET</h6>
                <h2 className="text-3xl font-[400] mb-2 mt-2">Nam vel justo cursus faucibus lorem tortor eget</h2>
                <p className="text-lg text-gray-800 leading-relaxed py-2">Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis odio, at ornare nibh. In malesuada, tortor eget</p>
                <p className='text-gray-600 leading-relaxed py-4'>Sodales mollis, mauris lectus hendrerit purus, porttitor finibus eros lorem eget mauris. Curabitur lacinia enim at ex blandit, vel pellentesque odio elementum.</p>
              </div>
              <Image src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-about-pic2.jpg" width={800} height={400} alt="Image 2" />
            </div>
          </div>
        </div>
      </>
      <>
        {/*  two images and bg part */}
        <div className=' flex justify-center mb-28'>
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
      </>
      <Footer />
    </>

  )
}

export default Page