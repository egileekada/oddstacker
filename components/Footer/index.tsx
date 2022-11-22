import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Index() {
    return (
        <div className=' bg-[#0F1419] lg:px-14 xl:px-[328px] pb-4 px-8 pt-10 w-full' >
            <div className=' w-full flex justify-between items-center ' >
                <div  > 
                   <img className=' w-[93.91px] h-[30px] object-contain lg:h-[40px] xl:h-[40px] lg:w-[125.22px] xl:w-[125.22px] ' src="/white-logo.png" alt='white-logo' /> 
                </div>
                <div className=' xl:hidden lg:hidden grid grid-cols-4 gap-4  ' >
                    <FaFacebookF size={20} className="cursor-pointer" color="#8CA6BF" />
                    <FaTwitter size={20} className="cursor-pointer" color="#8CA6BF" />
                    <FaLinkedin size={20} className="cursor-pointer" color="#8CA6BF" />
                    <FaInstagram size={20} className="cursor-pointer" color="#8CA6BF" /> 
                </div>
                <div className=' xl:grid lg:grid hidden grid-cols-4 gap-4  ' >
                    <FaFacebookF size={25} className="cursor-pointer" color="#8CA6BF" />
                    <FaTwitter size={25} className="cursor-pointer" color="#8CA6BF" />
                    <FaLinkedin size={25} className="cursor-pointer" color="#8CA6BF" />
                    <FaInstagram size={25} className="cursor-pointer" color="#8CA6BF" /> 
                </div>
            </div>
            <div className=' mt-6 w-full py-10 grid gap-6 gap-y-12 border-b border-[#8CA6BF] grid-cols-2 ' >
                <div className=' w-full ' >
                    <p className=' font-Poppins-Bold text-xl  mb-6 text-[#00D1FF] ' >Sitemap</p>
                    <Link href="/" ><p className=' cursor-pointer font-Poppins-Regular text-lg text-[#8CA6BF] '>Home</p></Link>
                    <Link href="/" ><p className=' cursor-pointer font-Poppins-Regular mt-4 text-lg text-[#8CA6BF] '>My games</p></Link>
                </div>
                <div className=' w-full ' >
                    <p className=' font-Poppins-Bold text-xl  mb-6 text-[#00D1FF] ' >Help</p>
                    <Link href="/" ><p className=' cursor-pointer font-Poppins-Regular text-lg text-[#8CA6BF] '>How to play</p></Link>
                    <Link href="/" ><p className=' cursor-pointer font-Poppins-Regular mt-4 text-lg text-[#8CA6BF] '>+2348054518647</p></Link>
                </div>
                <div className=' w-full ' >
                    <p className=' font-Poppins-Bold text-xl  mb-6 text-[#00D1FF] ' >Legal</p>
                    <Link href="/" ><p className=' cursor-pointer font-Poppins-Regular text-lg text-[#8CA6BF] '>Terms of service</p></Link>
                    <Link href="/" ><p className=' cursor-pointer font-Poppins-Regular mt-4 text-lg text-[#8CA6BF] '>Privacy Policy</p></Link>
                </div>
                <div className=' w-full ' >
                    <p className=' font-Poppins-Bold text-xl  mb-6 text-[#00D1FF] ' >Company</p>
                    <Link href="/" ><p className=' cursor-pointer font-Poppins-Regular text-lg text-[#8CA6BF] '>About us</p></Link>
                    <Link href="/" ><p className=' cursor-pointer font-Poppins-Regular mt-4 text-lg text-[#8CA6BF] '>Partnerships</p></Link>
                </div>
            </div>
            <div className=' w-full relative flex justify-end items-center py-3 ' >
                <div className=' absolute w-full top-3 flex justify-center ' >
                    <Image width="39.71px" height="20px" src="/18.png" alt='18' /> 
                </div>
                <div className=' mx-3 ' >
                    <Image width="30.71px" height="17px" src="/Visa.png" alt='Visa' /> 
                </div>
                <div className=' mx-3 ' >
                    <Image width="36.03px" height="28px" src="/Mastercard.png" alt='Mastercard' /> 
                </div>
            </div>
            <p className=' text-center font-Poppins-Regular mt-3 text-lg text-[#8CA6BF] '>Copyright © 2022 Oddstacker</p>
        </div>
    )
} 