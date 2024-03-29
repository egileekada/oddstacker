import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HomeComponent/HeroSection'
import LastSection from '../components/HomeComponent/LastSection'
import SecondSection from '../components/HomeComponent/SecondSection'
import ThirdSection from '../components/HomeComponent/ThirdSection'
import FourthSection from '../components/HomeComponent/FourthSection'
import FifthSection from '../components/HomeComponent/FifthSection'

export default function index() {
    return (
        
    <div className=' w-full lg:h-full xl:h-full h-screen bg-[#000000] '> 
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" /> 
        </Head> 
        <div className='absolute bg-transparent z-10 top-0 inset-x-0 ' > 
            <Navbar btn="Coming soon" />
        </div> 
        <div className=' w-full bg-[#000000] ' >
            <HeroSection />
        </div>
        <div className=' w-full bg-[#000000] ' >
            <SecondSection />
        </div>
        {/* <div className=' w-full bg-[#000000]' >
            <ThirdSection />
        </div>
        <div className=' w-full bg-[#000000]' >
            <FourthSection />
        </div>
        <div className=' w-full bg-[#000000] ' >
            <FifthSection />
        </div> */}
        <div id="howtoplay" className=' w-full ' >
            <LastSection />
        </div>
        <Footer />
    </div>
    )
}
