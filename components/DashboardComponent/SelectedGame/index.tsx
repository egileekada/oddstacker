import React from 'react'
import { IoIosArrowDropdownCircle, IoIosInformationCircleOutline } from 'react-icons/io'
import { IoCaretForwardSharp } from 'react-icons/io5'
import Games from '../../GameInput'
import { useSelector } from 'react-redux'
import { dateFormat } from '../../../config/dateFormat'
import { cashFormat } from '../../../config/cashFormat'

export default function SelectedGame() { 

    const data = useSelector((state: any) => state?.gamedetails?.data)  
    
    console.log(data?.game);
    

    return (
        <div className=' w-full h-full pb-2  ' >
            {!data.open && (
                <div className=' w-full bg-[#0F1419] rounded-2xl h-full flex justify-center items-center flex-col ' > 
                    <p className=' font-Poppins-Bold text-[#8CA6BF] text-xl ' >Select a</p>
                    <p className=' font-Poppins-Bold text-[#8CA6BF] text-xl mt-3 ' >Game</p>
                </div>
            )}
            {data.open  && (
                <> 
                    <div className=' bg-[#0F1419] w-full rounded-2xl p-6 ' >
                        <div className=' w-full flex items-center justify-between ' > 
                            <p className=' font-Poppins-Regular text-[#8CA6BF] ' >Starts: {dateFormat(data?.game?.updated_at)}.</p>
                            <p className=' font-Poppins-Regular text-[#FF7A00] ' >{dateFormat(data?.game?.updated_at, "time")}</p> 
                        </div>
                        <div className=' w-full my-4 rounded-lg h-[167px] flex flex-col justify-center items-center bg-[#171F26] ' >
                            <p className=' font-Poppins-Bold text-5xl text-[#FF7A00] ' >{cashFormat(data?.game?.display_prize_money)}</p>
                            <div className=' flex items-center mt-2 ' > 
                                <p className=' font-Poppins-Regular text-sm mr-1 text-[#FF7A00] ' >Guaranteed</p>
                                <IoIosInformationCircleOutline color='#FF7A00' size={20} /> 
                            </div>
                        </div>
                        <div className=' w-full flex items-center  ' > 
                            <div className='' > 
                                <p className=' font-Poppins-Regular text-[#8CA6BF] ' >Entry Fee</p>
                                <p className=' font-Poppins-Bold text-lg mt-1 text-[#FF7A00] ' >{cashFormat(data?.game?.entry_fee)}</p> 
                            </div>
                            <div className=' mx-auto ' > 
                                <p className=' font-Poppins-Regular text-center text-[#8CA6BF] ' >Winners</p>
                                <div className=' flex items-center mt-1' > 
                                    <p className=' font-Poppins-Bold text-lg mr-1 text-center text-[#FF7A00] ' >Top {data?.game?.num_winners}</p> 
                                    <IoIosArrowDropdownCircle  color='#FF7A00' size={20}/>
                                </div>
                            </div>
                            <div className='' > 
                                <p className=' font-Poppins-Regular text-right text-[#8CA6BF] ' >Players</p>
                                <p className=' font-Poppins-Bold text-lg mt-1 text-right text-[#FF7A00] ' >0</p> 
                            </div>
                        </div>
                    </div>
                    {/* game_type?.total_points */}
                    <div className='w-full pt-5' > 
                        <div className=' bg-[#0F1419] w-full rounded-2xl p-6 ' >
                            <div className=' w-full flex items-center border-b border-[#171F26] mb-3 pb-3 ' > 
                                <p className=' font-Poppins-Regular text-[#8CA6BF] text-center ' >You have {data?.game?.game_type?.total_points} points to distribute to the predictions below</p>  
                            </div>
                            <div className=' flex items-center justify-center mt-1' > 
                                    <p className=' font-Poppins-Regular text-lg mr-1 text-center text-[#00D1FF] ' >View guidelines</p> 
                                    <IoIosArrowDropdownCircle  color='#00D1FF' size={20}/>
                                </div>
                        </div> 
                    </div>
                    <div className=' py-3 w-full lg:pb-0 pb-20  ' > 
                        <Games />
                        <Games />
                    </div>
                    <div className=' fixed bottom-40 right-0 rounded-l-full w-[89px] h-[83px] flex flex-col justify-center items-center pl-4 bg-[#FF7A00] ' >
                        <p className=' font-Poppins-Bold ' >{data?.game?.game_type?.total_points}</p>
                        <p className=' font-Poppins-Medium text-sm ' >Points</p>
                    </div>
                    <button className=' rounded-lg w-full h-[50px] mt-3 font-Poppins-Bold bg-[#00D1FF] text-[#0F1419]  ' >Log in to play</button>
                </>
            )}
        </div>
    )
} 