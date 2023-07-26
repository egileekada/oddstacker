import React from 'react'

export default function HeroSection() {
    return (
        <div className=' w-full flex pt-24 pb-0 px-6 relative ' >
          <img src="/innercolormobile.png" alt="SideBar" className=' absolute lg:hidden w-[100%] z-0 top-0 right-0 ' />
          <img src="/innercolor.png" alt="SideBar" className=' absolute lg:block hidden w-[75%] z-0 top-0 right-0 ' />
          <div className=' w-full flex flex-col relative z-10 items-center px-2 ' > 
            <img src="/Landing-page-logo.png" alt="Landing" className=' lg:w-[424px] w-full lg:h-[424px]' />
            {/* <Image width="424px" height="424px" src="/Landing-page-logo.png" alt='Landing' /> */}
            <p className=" lg:text-3xl xl:text-3xl text-2xl text-center mt-10 text-[#00D1FF] font-Poppins-Bold "  >Fantasy Sports of Sports gaming</p> 
            <p className=" lg:text-xl xl:text-xl mt-4 text-[#8CA6BF] font-Poppins-Bold "  >Players vs Players</p>
            <div className=' w-full flex justify-center items-center my-8 font-Poppins-Bold px-8  ' > 
              <button className=' bg-[#00D1FF] h-[45px] text-[#0F1419] w-full md:w-[153px] lg:w-[153px] xl:w-[153px] text-sm rounded-full mr-4 ' >View Games</button>
              <a href='#howtoplay' className=' w-full ' >
                <div  className=' border border-[#00D1FF] text-[#00D1FF] h-[45px] bg-[#0F1419] w-full md:w-[153px] lg:w-[153px] xl:w-[153px] text-sm rounded-full ml-4 flex justify-center items-center ' >How To Play</div>
              </a>
            </div>
          </div>
          <div className=' w-full lg:flex flex-col hidden items-center px-2 ' > 
            <img src="/SideImage.png" alt="SideBar" className=' w-[500px] relative z-10  ' />
          </div>
        </div>
    )
}
