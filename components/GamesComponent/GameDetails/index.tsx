import React from 'react'
import { IoIosInformationCircleOutline, IoIosArrowDropdownCircle } from 'react-icons/io'
import { IoOpenOutline } from 'react-icons/io5'

export default function Index() {

    const [ isShown, setIsShown ] = React.useState(false)

    return (
        <div className=' w-full h-full -mt-5 ' >
            <div className=' w-full flex items-center pt-5 justify-center py-3 ' >
                <button className={!isShown ? ' w-[142px] h-[45px] rounded-full font-Poppins-SemiBold bg-[#00D1FF] mr-1 text-[#0F1419]  ' : ' w-[142px] h-[45px] text-[#8CA6BF]  rounded-full font-Poppins-SemiBold ml-1  '} >In Play</button>
                <button className={isShown ? ' w-[142px] h-[45px] rounded-full font-Poppins-SemiBold bg-[#00D1FF] mr-1 text-[#0F1419]  ' : ' w-[142px] h-[45px] text-[#8CA6BF]  rounded-full font-Poppins-SemiBold ml-1  '} >Finished</button>
            </div>
            <div className='w-full' > 
                <div className=' bg-[#0F1419] w-full rounded-2xl p-6 ' >
                    <div className=' w-full flex items-center justify-between ' > 
                        <p className=' font-Poppins-Regular text-[#8CA6BF] ' >Starts: Monday 23rd Aug.</p>
                        <p className=' font-Poppins-Regular text-[#FF7A00] ' >07:45pm</p> 
                    </div>
                    <div className=' w-full my-4 rounded-lg h-[167px] flex flex-col justify-center items-center bg-[#171F26] ' >
                        <p className=' font-Poppins-Bold text-5xl text-[#FF7A00] ' >N100,000</p>
                        <div className=' flex items-center mt-2 ' > 
                            <p className=' font-Poppins-Regular text-sm mr-1 text-[#FF7A00] ' >Guaranteed</p>
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
            <div className='w-full pt-5' > 
                <div className=' bg-[#0F1419] w-full rounded-2xl p-6 ' >
                    <div className=' w-full flex items-center border-b border-[#171F26] mb-3 pb-3 ' >
                        <div className=' w-10 h-10 rounded-full bg-yellow-300 ' />
                        <p className=' font-Poppins-Regular text-[#00D1FF] mx-2 ' >Sabinus Giveaway</p> 
                        <IoOpenOutline color='#526475' size={20}/>
                    </div>
                    <div className=' w-full flex items-center justify-between ' > 
                        <p className=' font-Poppins-Regular text-[#8CA6BF] ' >Starts: Monday 23rd Aug.</p>
                        <p className=' font-Poppins-Regular text-[#00FF85] ' >07:45pm</p> 
                    </div>
                    <div className=' w-full my-4 rounded-lg h-[167px] flex flex-col justify-center items-center bg-[#171F26] ' >
                        <p className=' font-Poppins-Bold text-5xl text-[#00FF85] ' >N100,000</p>
                        <div className=' flex items-center mt-2 ' > 
                            <p className=' font-Poppins-Regular text-sm mr-1 text-[#00FF85] ' >Guaranteed</p>
                            <IoIosInformationCircleOutline color='#00FF85' size={20} /> 
                        </div>
                    </div>
                    <div className=' w-full flex items-center  ' > 
                        <div className='' > 
                            <p className=' font-Poppins-Regular text-[#8CA6BF] ' >Entry Fee</p>
                            <p className=' font-Poppins-Bold text-lg mt-1 text-[#00FF85] ' >N100</p> 
                        </div>
                        <div className=' mx-auto ' > 
                            <p className=' font-Poppins-Regular text-center text-[#8CA6BF] ' >Winners</p>
                            <div className=' flex items-center mt-1' > 
                                <p className=' font-Poppins-Bold text-lg mr-1 text-center text-[#00FF85] ' >Top 200</p> 
                                <IoIosArrowDropdownCircle  color='#00FF85' size={20}/>
                            </div>
                        </div>
                        <div className='' > 
                            <p className=' font-Poppins-Regular text-right text-[#8CA6BF] ' >Players</p>
                            <p className=' font-Poppins-Bold text-lg mt-1 text-right text-[#00FF85] ' >1,200</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full pt-5' > 
                <div className=' bg-[#0F1419] w-full rounded-2xl  p-6 ' >
                    <div className=' w-full flex items-center justify-between ' > 
                        <p className=' font-Poppins-Regular text-[#8CA6BF] ' >Starts: Monday 23rd Aug.</p>
                        <p className=' font-Poppins-Regular text-[#FAFF00] ' >07:45pm</p> 
                    </div>
                    <div className=' w-full my-4 rounded-lg h-[167px] flex flex-col justify-center items-center bg-[#171F26] ' >
                        <p className=' font-Poppins-Bold text-5xl text-[#FAFF00] ' >N100,000</p>
                        <div className=' flex items-center mt-2 ' > 
                            <p className=' font-Poppins-Regular text-sm mr-1 text-[#FAFF00] ' >Guaranteed</p>
                            <IoIosInformationCircleOutline color='#FAFF00' size={20} /> 
                        </div>
                    </div>
                    <div className=' w-full flex items-center  ' > 
                        <div className='' > 
                            <p className=' font-Poppins-Regular text-[#8CA6BF] ' >Entry Fee</p>
                            <p className=' font-Poppins-Bold text-lg mt-1 text-[#FAFF00] ' >N100</p> 
                        </div>
                        <div className=' mx-auto ' > 
                            <p className=' font-Poppins-Regular text-center text-[#8CA6BF] ' >Winners</p>
                            <div className=' flex items-center mt-1' > 
                                <p className=' font-Poppins-Bold text-lg mr-1 text-center text-[#FAFF00] ' >Top 200</p> 
                                <IoIosArrowDropdownCircle  color='#FAFF00' size={20}/>
                            </div>
                        </div>
                        <div className='' > 
                            <p className=' font-Poppins-Regular text-right text-[#8CA6BF] ' >Players</p>
                            <p className=' font-Poppins-Bold text-lg mt-1 text-right text-[#FAFF00] ' >1,200</p> 
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}
