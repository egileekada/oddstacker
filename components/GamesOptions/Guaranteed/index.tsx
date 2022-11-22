import React from 'react'
import { IoIosArrowDropdownCircle, IoIosInformationCircleOutline } from "react-icons/io";

export default function index() {
    return ( 
        <div className='w-full pt-5' > 
            <div className=' bg-[#0F1419] w-full rounded-2xl p-6 ' >
                <div className=' w-full flex items-center justify-between ' > 
                    <p className=' font-Poppins-Regular text-[#8CA6BF] ' >Starts: Monday 23rd Aug.</p>
                    <p className=' font-Poppins-Regular text-[#FF7A00] ' >07:45pm</p> 
                </div>
                <div className=' w-full my-4 rounded-lg h-[167px] flex flex-col justify-center items-center bg-[#171F26] ' >
                    <p className=' font-Poppins-Bold text-5xl text-[#FF7A00] ' >N100,000</p>
                    <div className=' flex items-center mt-2 ' > 
                        <p className=' font-Poppins-Regular text-sm mr-1 text-[#FF7A00] ' >Free to play</p>
                        <IoIosInformationCircleOutline color='#FF7A00' size={20} /> 
                    </div>
                </div>
                <div className=' w-full flex items-center  ' > 
                    <div className='' > 
                        <p className=' font-Poppins-Regular text-[#8CA6BF] ' >Entry Fee</p>
                        <p className=' font-Poppins-Bold text-lg mt-1 text-[#FF7A00] ' >N100</p> 
                    </div>
                    <div className=' mx-auto ' > 
                        <p className=' font-Poppins-Regular text-center text-[#8CA6BF] ' >Winners</p>
                        <div className=' flex items-center mt-1' > 
                            <p className=' font-Poppins-Bold text-lg mr-1 text-center text-[#FF7A00] ' >Top 200</p> 
                            <IoIosArrowDropdownCircle  color='#FF7A00' size={20}/>
                        </div>
                    </div>
                    <div className='' > 
                        <p className=' font-Poppins-Regular text-right text-[#8CA6BF] ' >Players</p>
                        <p className=' font-Poppins-Bold text-lg mt-1 text-right text-[#FF7A00] ' >1,200</p> 
                    </div>
                </div>
            </div>
        </div>
    )
} 