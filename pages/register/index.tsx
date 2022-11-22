import React from 'react'
import Image from 'next/image' 
import Link from 'next/link'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Head from 'next/head'

export default function Index() {

    const [tab, setTab] = React.useState(false)

    return (
        <div className=' w-full h-full bg-[#070A0D] '>
          <Head>
            <title>Sign up</title>
            <meta name="description" content="Generated by create next app" /> 
          </Head> 
          <Navbar btn="Log In" />
          <div className=' w-full py-6  px-6' >
            <div className=' w-full flex flex-col justify-center items-center my-12 ' >
              <Image width="300px" height="300px" src="/Landing-page-logo.png" alt='Landing' /> 
              <div className=' lg:w-[486px] font-Poppins-Regular text-white mt-10 ' > 

                {tab ?  
                    <input placeholder='Enter email' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />:
                    <input placeholder='Enter phone number' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />}
                <input type="password" placeholder='Password' className='  w-full h-12 rounded-[6px] mt-3 px-6 bg-[#171F26] ' /> 
                <button className=' bg-[#00D1FF] h-[45px] text-[#0F1419] w-full font-Poppins-Bold rounded-[6px] mt-6 ' >Sign up</button>
                <div className=' w-full flex justify-center ' >
                    {tab ?  
                        <button onClick={()=> setTab(false)} ><p className=' cursor-pointer font-Poppins-Regular text-[#8CA6BF] mt-3 text-center '>Register with phone number</p></button>: 
                        <button onClick={()=> setTab(true)} ><p className=' cursor-pointer font-Poppins-Regular text-[#8CA6BF] mt-3 text-center '>Register with email</p></button>}
                </div>
              </div>
            </div>
          </div>
          <div className='lg:flex xl:flex hidden ' > 
            <Footer />
          </div>
        </div>
    )
} 