import React from 'react'
import { IoIosInformationCircleOutline, IoIosArrowDropdownCircle } from 'react-icons/io'
import { IoOpenOutline } from 'react-icons/io5'
import GameDetails from '../../GameDetails'

export default function Index() {

    const [ isShown, setIsShown ] = React.useState(false)

    return (
        <div className=' w-full h-full -mt-5 ' >
            <div className=' w-full flex items-center pt-5 justify-center py-3 ' >
                <button className={!isShown ? ' w-[142px] h-[45px] rounded-full font-Poppins-SemiBold bg-[#00D1FF] mr-1 text-[#0F1419]  ' : ' w-[142px] h-[45px] text-[#8CA6BF]  rounded-full font-Poppins-SemiBold ml-1  '} >In Play</button>
                <button className={isShown ? ' w-[142px] h-[45px] rounded-full font-Poppins-SemiBold bg-[#00D1FF] mr-1 text-[#0F1419]  ' : ' w-[142px] h-[45px] text-[#8CA6BF]  rounded-full font-Poppins-SemiBold ml-1  '} >Finished</button>
            </div>   
            <GameDetails />
        </div>
    )
}
