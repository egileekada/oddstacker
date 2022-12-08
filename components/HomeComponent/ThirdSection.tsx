import React from 'react' 

export default function ThirdSection() {
    return (
        <div className=' w-full flex flex-col items-center py-14 lg:px-0 px-6 ' >
            <p className=' font-Poppins-Bold text-2xl lg:text-3xl text-center lg:text-left text-[#99EDFF] ' >One-time airdrops are boring</p>
            <p className=' font-Poppins-Bold text-2xl lg:text-4xl text-center lg:text-left text-[#00D1FF] mt-2 ' >Rolling-Airdrops are the future</p>
            <div className=' flex lg:flex-row flex-col items-center mt-12 ' >
                <div className=' flex items-center lg:mb-0 mb-5 ' >
                    <div className=' mx-2 lg:mx-3 px-2 py-[2px] bg-black font-Poppins-Bold text-[#00FF85] ' >
                        Transparent
                    </div>
                    <div className=' mx-2 lg:mx-3 px-2 py-[2px] bg-black font-Poppins-Bold text-[#00FF85] ' >
                        Simplified
                    </div>
                    <div className=' mx-2 lg:mx-3 px-2 py-[2px] bg-black font-Poppins-Bold text-[#00FF85] ' >
                        Targeted
                    </div>
                </div>
                <div className=' flex items-center ' >
                    <div className=' mx-2 lg:mx-3 px-2 py-[2px] bg-black font-Poppins-Bold text-[#00FF85] ' >
                        Community Longevity
                    </div>
                    <div className=' mx-2 lg:mx-3 px-2 py-[2px] bg-black font-Poppins-Bold text-[#00FF85] ' >
                        Control
                    </div>
                </div>
            </div>
            <div className=' flex items-center mt-5 ' >
                <div className=' mx-2 lg:mx-3 px-2 py-[2px] bg-black font-Poppins-Bold text-[#00FF85] ' >
                    Gamified
                </div>
                <div className=' mx-2 lg:mx-3 px-2 py-[2px] bg-black font-Poppins-Bold text-[#00FF85] ' >
                    Continuos
                </div>
                <div className=' mx-2 lg:mx-3 px-2 py-[2px] bg-black font-Poppins-Bold text-[#00FF85] ' >
                    Safer
                </div> 
            </div>
            <img src='/Third.png' alt='third' className=' lg:max-w-[742px] mt-4 ' />
            <div className=' flex items-center ' >
                <div className=' flex items-center  mx-3 lg:mx-6 ' >
                    <div className=' w-2 lg:w-3  h-2 lg:h-3 rounded-full bg-[#00D1FF] ' />
                    <p className='  ml-3 lg:ml-4 font-Poppins-Bold text-xl lg:text-4xl text-[#00D1FF] ' >Grow</p>
                </div>
                <div className=' flex items-center mx-3 lg:mx-6 ' >
                    <div className='  w-2 lg:w-3  h-2 lg:h-3 rounded-full bg-[#00D1FF] ' />
                    <p className=' ml-3 lg:ml-4 font-Poppins-Bold text-xl lg:text-4xl text-[#00D1FF] ' >Build</p>
                </div>
                <div className=' flex items-center  mx-3 lg:mx-6 ' >
                    <div className='  w-2 lg:w-3  h-2 lg:h-3 rounded-full bg-[#00D1FF] ' />
                    <p className='  ml-3 lg:ml-4 font-Poppins-Bold text-xl lg:text-4xl text-[#00D1FF] ' >Maintain</p>
                </div>
            </div>
        </div>
    )
} 