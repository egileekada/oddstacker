import React from 'react'

export default function index() {
    return (
        <div className=' w-full h-full relative mb-2 px-4 rounded-lg ' >
            <div  className=' w-full flex justify-center py-4  ' >
                <img src="/downarrow.svg" className=' cursor-pointer ' alt='downarrow' />
            </div>
            <div className=' w-full flex h-full flex-col pb-8 flex-1 overflow-y-auto  ' > 
                <div className=' bg-[#171F26] w-full py-5 mt-4 rounded-lg px-8 ' >
                    <p className=' font-Poppins-Regular text-sm text-[#8CA6BF] ' >Prize Money</p>
                    <p className=' font-Poppins-Bold text-[#00D1FF] my-1 ' >N100,000</p>
                    <p className=' font-Poppins-Regular text-sm text-[#007D99] ' >Currently: N2,000</p>
                </div>
                <div className=' bg-[#171F26] w-full py-5 mt-4 rounded-lg px-8 ' >
                    <p className=' font-Poppins-Regular text-sm text-[#8CA6BF] ' >Participants</p>
                    <p className=' font-Poppins-Bold my-1 text-[#007D99]  ' >500<span className=' ml-1 text-[#00D1FF]  ' >/1,200</span></p>
                </div>
                <div className=' bg-[#171F26] w-full py-5 mt-4 rounded-lg px-8 ' >
                    <p className=' font-Poppins-Regular text-sm text-[#8CA6BF] ' >Winners</p>
                    <p className=' font-Poppins-Bold my-1 text-[#00D1FF]  ' >Top 20</p>
                </div>
                <div className=' w-full flex text-[#00D1FF] font-Poppins-Bold py-3 justify-center ' >
                    Players
                </div>
                <div className=' w-full py-2 ' > 
                    <div className=' w-full h-[145px]  flex items-center rounded-lg bg-[#171F26] ' >
                        <div className=' w-[100px] h-full flex justify-center items-center border-r-2 font-Poppins-Bold text-[#526475] text-lg border-[#0F1419] ' >
                            1
                        </div>
                        <div className=' pl-5 flex flex-col justify-center ' >
                            <p className=' font-Poppins-Regular text-sm text-[#526475]  ' >Username:<span className=' ml-1 font-Poppins-Bold text-[#8CA6BF]  ' >Greenman</span></p>
                            <p className=' font-Poppins-Regular text-sm text-[#526475] my-2  ' >Score:<span className=' ml-1 font-Poppins-Bold text-[#8CA6BF]  ' >0.00</span></p>
                            <p className=' font-Poppins-Regular text-sm text-[#526475]  ' >Won:<span className=' ml-1 font-Poppins-Bold text-[#8CA6BF]  ' >0.00</span></p>
                        </div>
                    </div>
                </div>
                <div className=' w-full py-2 ' > 
                    <div className=' w-full h-[145px]  flex items-center rounded-lg bg-[#171F26] ' >
                        <div className=' w-[100px] h-full flex justify-center items-center border-r-2 font-Poppins-Bold text-[#526475] text-lg border-[#0F1419] ' >
                            1
                        </div>
                        <div className=' pl-5 flex flex-col justify-center ' >
                            <p className=' font-Poppins-Regular text-sm text-[#526475]  ' >Username:<span className=' ml-1 font-Poppins-Bold text-[#8CA6BF]  ' >Greenman</span></p>
                            <p className=' font-Poppins-Regular text-sm text-[#526475] my-2  ' >Score:<span className=' ml-1 font-Poppins-Bold text-[#8CA6BF]  ' >0.00</span></p>
                            <p className=' font-Poppins-Regular text-sm text-[#526475]  ' >Won:<span className=' ml-1 font-Poppins-Bold text-[#8CA6BF]  ' >0.00</span></p>
                        </div>
                    </div>
                </div>
                <div className=' w-full py-2 mb-6 ' > 
                    <div className=' w-full h-[145px]  flex items-center rounded-lg bg-[#171F26] ' >
                        <div className=' w-[100px] h-full flex justify-center items-center border-r-2 font-Poppins-Bold text-[#526475] text-lg border-[#0F1419] ' >
                            1
                        </div>
                        <div className=' pl-5 flex flex-col justify-center ' >
                            <p className=' font-Poppins-Regular text-sm text-[#526475]  ' >Username:<span className=' ml-1 font-Poppins-Bold text-[#8CA6BF]  ' >Greenman</span></p>
                            <p className=' font-Poppins-Regular text-sm text-[#526475] my-2  ' >Score:<span className=' ml-1 font-Poppins-Bold text-[#8CA6BF]  ' >0.00</span></p>
                            <p className=' font-Poppins-Regular text-sm text-[#526475]  ' >Won:<span className=' ml-1 font-Poppins-Bold text-[#8CA6BF]  ' >0.00</span></p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
} 