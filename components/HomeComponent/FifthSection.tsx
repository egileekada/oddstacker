import React from 'react'
import { FaDiceFive } from 'react-icons/fa'

export default function FifthSection() {
    return (
        <div className=' w-full py-14 overflow-x-hidden lg:px-0 px-6 ' > 
            <div className=' max-w-[760px] mx-auto relative flex flex-col   '>
                <p className=' font-Poppins-Bold text-2xl lg:text-4xl text-center text-[#00D1FF] ' >How Rolling-Airdrops work</p>
                <p className=' text-[#99EDFF] font-Poppins-Bold mt-14 ' >Dont’t break the bank for community airdrops</p>
                <p className=' font-Poppins-Bold lg:text-3xl my-1 text-[#00D1FF] ' >Split airdrop budget into a series of airdrops spread out over a period of time</p>
                <p className=' text-[#8CA6BF] text-sm font-Poppins-Bold  ' >We create a game each time with your specified amount</p>

            </div>
            <img src='/Fifth.png' alt='third' className=' w-full ml-8 lg:flex hidden my-8 ' />
            <img src='/Fifthmobile.png' alt='third' className=' w-full lg:hidden my-4 lg:my-8 ' />
            <div className=' max-w-[760px] mx-auto relative flex flex-col   '> 
                <p className=' text-[#99EDFF] text-sm font-Poppins-Bold mt-14 ' >Control who participates in your airdrops</p>
                <p className=' font-Poppins-Bold lg:text-3xl my-1 text-[#00D1FF] ' >Choose a “Pass” for each airdrop game</p>
                <p className=' text-[#8CA6BF] text-sm font-Poppins-Bold  ' >Choose one or more tasks that players need to perform to participate</p> 
            </div>
            <div className='px-6 lg:px-12 w-full mt-14 grid grid-cols-1 lg:grid-cols-4 gap-6 ' >
                <div style={{background: "linear-gradient(180deg, #000000 0%, #00D1FF 182.09%)"}} className=' w-full font-Poppins-SemiBold rounded-2xl flex flex-col px-6 justify-end items-center pb-12 h-[350px] text-[#99EDFF] ' > 
                    <img src='/free.png' alt='third' className=' w-40 mb-14 ' />
                    <div className=' flex items-center ' >
                        <div className='  w-1 h-1 rounded-full bg-[#99EDFF] mr-3' />
                        <p >Free-to-play</p>
                    </div>
                </div>
                <div style={{background: "linear-gradient(180deg, #000000 0%, #00D1FF 182.09%)"}} className=' w-full font-Poppins-SemiBold rounded-2xl flex flex-col px-6 justify-end items-center pb-12 h-[350px] text-[#99EDFF] ' > 
                    <img src='/nft.png' alt='third' className=' w-40 mb-14 ' />
                    <div className=' flex items-center ' >
                        <div className='  w-1 h-1 rounded-full bg-[#99EDFF] mr-3' />
                        <p >Own your NFT</p>
                    </div>
                </div>
                <div style={{background: "linear-gradient(180deg, #000000 0%, #00D1FF 182.09%)"}} className=' w-full font-Poppins-SemiBold rounded-2xl flex flex-col px-6 justify-end items-center pb-12 h-[350px] text-[#99EDFF] ' > 
                    <img src='/discord.png' alt='third' className=' w-40 mb-14 ' />
                    <div className=' flex items-center ' >
                        <div className='  w-1 h-1 rounded-full bg-[#99EDFF] mr-3' />
                        <p >Join your Discord</p>
                    </div>
                    <div className=' flex items-center mt-2 ' >
                        <div className='  w-1 h-1 rounded-full bg-[#99EDFF] mr-3' />
                        <p >Discord roles</p>
                    </div>
                </div>
                <div style={{background: "linear-gradient(180deg, #000000 0%, #00D1FF 182.09%)"}} className=' w-full font-Poppins-SemiBold rounded-2xl flex flex-col px-6 justify-end items-center pb-12 h-[350px] text-[#99EDFF] ' > 
                    <img src='/twitter2.png' alt='third' className=' w-40 mb-14 ' />
                    <div className=' flex items-center ' >
                        <div className='  w-1 h-1 rounded-full bg-[#99EDFF] mr-3' />
                        <p >Follow on Twitter</p>
                    </div>
                    <div className=' flex items-center mt-2 ' >
                        <div className='  w-1 h-1 rounded-full bg-[#99EDFF] mr-3' />
                        <p >Engage posts</p>
                    </div>
                </div>
            </div> 
            <div className=' max-w-[760px] mx-auto relative flex flex-col mt-8  '> 
                <p className=' text-[#99EDFF] text-sm font-Poppins-Bold mt-14 ' >Players are ranked according to their score on the leaderboard</p>
                <p className=' font-Poppins-Bold lg:text-3xl my-1 text-[#00D1FF] ' >Winners get their share of the airdrop</p>
                <p className=' text-[#8CA6BF] text-sm font-Poppins-Bold  ' >Winners are paid in USDT, USDC, etc. or your native token</p> 
            </div>
        </div>
    )
} 