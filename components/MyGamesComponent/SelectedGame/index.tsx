import React from 'react'
import { IoIosArrowDropdownCircle, IoIosInformationCircleOutline } from 'react-icons/io' 
import Games from '../../GameInput'

export default function Index(props: any) {
    
    return (
        <div className={!props.tab ? "w-full h-full pb-2 overflow-y-auto " : "hidden"} >
            {!props.show && (
                <div className=' w-full bg-[#0F1419] rounded-2xl h-full flex justify-center items-center flex-col ' > 
                    <p className=' font-Poppins-Bold text-[#8CA6BF] text-xl ' >Select a</p>
                    <p className=' font-Poppins-Bold text-[#8CA6BF] text-xl mt-3 ' >Game</p>
                </div>
            )}
            {props.show && (
                <> 
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
                    <div className=' w-full grid grid-cols-2 gap-6 mt-6 ' >
                        <div className=' w-full h-[119px] flex justify-center flex-col items-center bg-[#0F1419] rounded-lg ' >
                            <p className=' font-Poppins-Regular text-[#526475] ' >Position</p>
                            <p className=' font-Poppins-Bold text-lg text-[#8CA6BF] ' >3rd</p>
                        </div>
                        <div className=' w-full h-[119px] flex justify-center flex-col items-center bg-[#0F1419] rounded-lg ' >
                            <p className=' font-Poppins-Regular text-[#526475] ' >Won</p>
                            <p className=' font-Poppins-Bold text-lg text-[#8CA6BF] ' >N0.00</p>
                        </div>
                        <div className=' w-full h-[119px] flex justify-center flex-col items-center bg-[#0F1419] rounded-lg ' >
                            <p className=' font-Poppins-Regular text-[#526475] ' >Score</p>
                            <p className=' font-Poppins-Bold text-lg text-[#8CA6BF] ' >24.81<span className=' ml-1 font-Poppins-Regular ' >N10,000</span></p>
                        </div>
                        <div className=' w-full h-[119px] flex justify-center flex-col items-center bg-[#0F1419] rounded-lg ' >
                            <p className=' font-Poppins-Regular text-[#526475] ' >Tie Breaker Score</p>
                            <p className=' font-Poppins-Bold text-lg text-[#8CA6BF] ' >11.25<span className=' ml-1 font-Poppins-Regular ' >points</span></p>
                        </div>
                    </div> 
                    <button onClick={()=> props.setTab(true)} className=' bg-[#0F1419] w-full mt-6 rounded-lg flex justify-center items-center py-3 ' >
                        <p className=' font-Poppins-SemiBold text-[#00D1FF] ' >Leaderboard</p>
                    </button>
                    <div className=' py-3 w-full lg:pb-0 pb-20 ' > 
                        <Games />
                        <Games />
                    </div>
                    <div className=' fixed bottom-40 right-0 rounded-l-full w-[89px] h-[83px] flex flex-col justify-center items-center pl-4 bg-[#FF7A00] ' >
                        <p className=' font-Poppins-Bold ' >29.99</p>
                        <p className=' font-Poppins-Medium text-sm ' >Points</p>
                    </div>
                </>
            )}
        </div>
    )
} 