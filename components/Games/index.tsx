import React from 'react'
import { IoCaretForwardSharp } from 'react-icons/io5'

export default function Index() {
    return ( 
        <div className='w-full py-3' >
            <div className=' bg-[#0F1419] w-full rounded-2xl p-6 ' >
                <div className=' w-full flex items-center justify-between ' > 
                    <p className=' font-Poppins-Regular text-[#8CA6BF] ' >Premier League</p>
                    <p className=' font-Poppins-Regular text-[#8CA6BF] ' >07:45pm</p> 
                </div>
                <p className=' font-Poppins-Bold text-xl mt-3 text-[#00D1FF] ' >Home Win Or Draw</p>
                <div className=' w-full h-[152px] flex flex-col justify-center px-6 rounded-lg my-3 bg-[#171F26] ' >
                    <div className='flex items-center' >
                        <img src='/Manchester.png' className=' w-8 h-8 ' alt='club' />
                        <p className=' font-Poppins-SemiBold text-lg text-[#8CA6BF] ml-2 ' >Manchester United</p>
                    </div>
                    <div className='flex items-center mt-5' >
                        <img src='/Liverpool.png' className=' w-8 h-8 ' alt='club' />
                        <p className=' font-Poppins-SemiBold text-lg text-[#8CA6BF] ml-2 ' >Liverpool</p>
                    </div>
                </div>
                <div className=' flex w-full items-center pt-3 ' > 
                    <p className=' font-Poppins-Regular text-[#8CA6BF] mr-1 ' >Input your points between 1.21 - 9.99</p>
                    <IoCaretForwardSharp size={20} color="#536079" />
                    <input  className=' font-Poppins-Bold w-[65px] h-[45px] px-3 placeholder:text-black rounded-lg bg-[#00D1FF] text-[#000] ml-auto ' placeholder='0.00'  /> 
                </div>
            </div>
        </div>
    )
}
