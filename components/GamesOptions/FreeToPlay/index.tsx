import React from 'react'
import { IoIosArrowDropdownCircle, IoIosInformationCircleOutline } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5"; 
import { dateFormat } from '../../../config/dateFormat';
import { cashFormat } from '../../../config/cashFormat';

interface IProps {
    data: any
}

export default function FreeToPlay(props: IProps) {

    const {
        data
    } = props 

    return (
        <div className='w-full pt-5' > 
            <div className=' bg-[#0F1419] w-full rounded-2xl p-6 ' >
                <div className=' w-full flex items-center border-b border-[#171F26] mb-3 pb-3 ' >
                    <div className=' w-10 h-10 rounded-full bg-yellow-300 ' />
                    <p className=' font-Poppins-Regular text-[#00D1FF] mx-2 ' >Sabinus Giveaway</p> 
                    <IoOpenOutline color='#526475' size={20}/>
                </div>
                <div className=' w-full flex items-center justify-between ' > 
                    <p className=' font-Poppins-Regular text-[#8CA6BF] ' >Starts:{dateFormat(data?.updated_at)}.</p>
                    <p className=' font-Poppins-Regular text-[#00FF85] ' >{dateFormat(data?.updated_at, "time")}</p> 
                </div>
                <div className=' w-full my-4 rounded-lg h-[167px] flex flex-col justify-center items-center bg-[#171F26] ' >
                    <p className=' font-Poppins-Bold text-5xl text-[#00FF85] ' >{cashFormat(data?.display_prize_money)}</p>
                    <div className=' flex items-center mt-2 ' > 
                        <p className=' font-Poppins-Regular text-sm mr-1 text-[#00FF85] ' >Free to play</p>
                        <IoIosInformationCircleOutline color='#00FF85' size={20} /> 
                    </div>
                </div>
                <div className=' w-full flex items-center  ' > 
                    <div className='' > 
                        <p className=' font-Poppins-Regular text-[#8CA6BF] ' >Entry Fee</p>
                        <p className=' font-Poppins-Bold text-lg mt-1 text-[#00FF85] ' >{cashFormat(data?.entry_fee)}</p> 
                    </div>
                    <div className=' mx-auto ' > 
                        <p className=' font-Poppins-Regular text-center text-[#8CA6BF] ' >Winners</p>
                        <div className=' flex items-center mt-1' > 
                            <p className=' font-Poppins-Bold text-lg mr-1 text-center text-[#00FF85] ' >Top {data?.num_winners}</p> 
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
    )
} 