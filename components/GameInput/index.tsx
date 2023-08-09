import React from 'react'
import { IoCaretForwardSharp } from 'react-icons/io5' 
import { useQuery } from 'react-query'; 
import apiClient from '../../config/apiClient';
import { AxiosError } from 'axios';
import { useListGamesCallback, usePlayGameCallback } from '../../action/useAction';
import LoadingAnimation from '../loadingAnimation';
import { dateFormat } from '../../config/dateFormat';
import { useDispatch, useSelector } from 'react-redux';
import { payloadCase, pointCase } from '../../context/state/gameInput'   
import Router from 'next/router';
import { useToast } from '@chakra-ui/react';
import { detailCase } from '../../context/state/gameDetails';

interface IProps {
    gameId: any
}

export default function GameInput(props: IProps) {

    const {
        gameId
    } = props

    const dispatch = useDispatch();  
    const data = useSelector((state: any) => state?.gamedetails?.data) 
    const inputData = useSelector((state: any) => state?.gameinput) 
    const userInfo = useSelector((state: any) => state?.userinfo) 
    const [loading, setLoading] = React.useState(false) 
    const [isLoading, setIsLoading] = React.useState(false) 
    const [tab, setTab] = React.useState(false)
    const [gameData, setGameData] = React.useState([] as any)
    const myRef: any = React.useRef(null)
    const toast = useToast()

    const { handleListGames } = useListGamesCallback()
    const { handlePlayGame } = usePlayGameCallback()

    React.useEffect(()=>{
        dispatch(pointCase(data?.game?.game_type?.total_points))
        // data?.game?.game_type?.total_points
    },[])  
    
    const fetchGameList = async()=> {
        setIsLoading(true)
        const response = await handleListGames({
            game_id: gameId
        })
        setIsLoading(false)
        // console.log(response?.data);
        setGameData(response?.data)
    }

    React.useEffect(()=> {
        fetchGameList()
    }, [])

    const handleChange =(index: number, value: any, type: string, id: any )=> {
        let array = [...inputData?.payload]
        let sum = 0

        if(type === "point"){
            if(value <= 9.99){ 
                array[index] = {
                    stack_pk: id,
                    points: value,
                    tie_breaker: inputData?.payload[index]?.tie_breaker ?inputData?.payload[index]?.tie_breaker : false
                }
            }
        } else {
            array[index] = {...array[index], 
                tie_breaker: value
            }
        } 

        array?.map((item: any)=> {
            sum = sum + Number(item.points)
        })

        console.log(Number(data?.game?.game_type?.total_points - sum).toFixed(2))
        // console.log(sum.toFixed(2));
        
        let total: any = Number(data?.game?.game_type?.total_points - sum).toFixed(2)

        if(type === "point"){

            if(total < 0){
                toast({
                    title: "Insufficent Point",
                    position: "top",
                    status: "error",
                    isClosable: true,
                }) 
                return
            }
        }
        dispatch(pointCase(data?.game?.game_type?.total_points - sum))
        
        dispatch(payloadCase(array)) 
    }

    const nextHandler =()=> {

        if(gameData.length === inputData?.payload.length){
            
            inputData?.payload?.map((item: any)=> {
                if(item.points <= 1.12){ 
                    toast({
                        title: "Ensure All Entries are Above 1.12",
                        position: "top",
                        status: "error",
                        isClosable: true,
                    }) 
                    return
                }
            })

            const executeScroll = () => myRef?.current?.scrollIntoView()  
            executeScroll()
            setTab(true)
        } else {

            toast({
                title: "All Fields Must Be Filled",
                position: "top",
                status: "error",
                isClosable: true,
            }) 
        }

    }
    
    const submit =async()=> {
        
        setLoading(true);
        const request = await handlePlayGame(JSON.stringify({
            "game_pk": gameId,
            "user_stacks": inputData?.payload 
        }))   
        
        if (request?.status === 200 || request?.status === 201) {  
            toast({
                title: "Successful",
                position: "bottom",
                status: "success",
                isClosable: true,
            })
            const t1 = setTimeout(() => {
                setLoading(false);  
                setTab(true)
                dispatch(detailCase({open: false}))
                // Router.push("/dashboard")
                clearTimeout(t1);
            }, 1000);  
        }else {  
            toast({
                title: request?.data[0],
                position: "bottom",
                status: "error",
                isClosable: true,
            }) 
        }
        setLoading(false)  
    } 

    return ( 
        <div className='w-full py-3 flex flex-col gap-4 ' >
            <div ref={myRef} />
            <LoadingAnimation loading={isLoading} length={gameData?.length} > 
                {gameData?.map((item: any, index: number) => {
                    return(
                        <div key={index} className=' bg-[#0F1419] w-full rounded-2xl p-6 ' >
                            <div className=' w-full flex items-center justify-between ' > 
                                <p className=' font-Poppins-Regular text-[#8CA6BF] ' >{item?.event?.league}</p>
                                <p className=' font-Poppins-Regular text-[#8CA6BF] ' >{dateFormat(item?.updated_at, "time")}</p> 
                            </div>
                            <p className=' font-Poppins-Bold text-xl mt-3 text-[#00D1FF] ' >{item?.prediction?.prediction_name}</p>
                            <div className=' w-full h-[152px] flex flex-col justify-center px-6 rounded-lg my-3 bg-[#171F26] ' >
                                <div className='flex items-center' >
                                    <img src={item?.event?.team_a?.team_logo} className=' w-8 h-8 rounded-full object-cover ' alt='club' />
                                    <p className=' font-Poppins-SemiBold text-lg text-[#8CA6BF] ml-2 ' >{item?.event?.team_a?.team_name}</p>
                                </div>
                                <div className='flex items-center mt-5' >
                                    <img src={item?.event?.team_b?.team_logo} className=' w-8 h-8 rounded-full object-cover ' alt='club' />
                                    <p className=' font-Poppins-SemiBold text-lg text-[#8CA6BF] ml-2 ' >{item?.event?.team_b?.team_name}</p>
                                </div>
                            </div>
                            <div className=' flex w-full items-center pt-3 ' > 
                                {tab && (
                                    <div className=' flex items-center gap-1 ' >
                                        <svg role='button' onClick={()=> handleChange(index, !inputData?.payload[index]?.tie_breaker, "tie", item?.id)} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.5C5.87827 0.5 3.84344 1.34285 2.34315 2.84315C0.842855 4.34344 0 6.37827 0 8.5V24.5C0 26.6217 0.842855 28.6566 2.34315 30.1569C3.84344 31.6571 5.87827 32.5 8 32.5H24C26.1217 32.5 28.1566 31.6571 29.6569 30.1569C31.1571 28.6566 32 26.6217 32 24.5V8.5C32 6.37827 31.1571 4.34344 29.6569 2.84315C28.1566 1.34285 26.1217 0.5 24 0.5H8ZM21.968 14.3944C22.1117 14.241 22.2238 14.0608 22.2979 13.8641C22.372 13.6674 22.4066 13.458 22.3998 13.248C22.3929 13.0379 22.3448 12.8312 22.2581 12.6397C22.1714 12.4482 22.0478 12.2757 21.8944 12.132C21.741 11.9883 21.5608 11.8762 21.3641 11.8021C21.1674 11.728 20.958 11.6934 20.748 11.7002C20.5379 11.7071 20.3312 11.7552 20.1397 11.8419C19.9482 11.9286 19.7757 12.0522 19.632 12.2056L14.6992 17.4696L12.2624 15.3048C11.9431 15.0394 11.5332 14.9085 11.1192 14.9397C10.7052 14.9709 10.3195 15.1619 10.0437 15.4722C9.76789 15.7825 9.62348 16.1879 9.641 16.6027C9.65852 17.0175 9.83659 17.4093 10.1376 17.6952L13.7376 20.8952C14.0491 21.1719 14.4562 21.3162 14.8725 21.2974C15.2887 21.2785 15.6812 21.0981 15.9664 20.7944L21.9664 14.3944H21.968Z" fill={inputData?.payload.length >= index ? inputData?.payload[index]?.tie_breaker ? "#00D1FF" :"#526475":"#526475"} />
                                        </svg>
                                        <IoCaretForwardSharp size={20} color="#536079" className=' rotate-180 ' />
                                        <p className=' font-Poppins-Regular text-[#8CA6BF] '>Select 5 tie breakers</p>
                                    </div>
                                )}
                                {!tab && ( 
                                    <div className=' flex items-center gap-1 ' > 
                                        <p className={` ${inputData?.payload.length >= index ? inputData?.payload[index]?.points <= 1.12 ?"text-[#FF4545]" : "text-[#8CA6BF]": "text-[#8CA6BF]"} font-Poppins-Regular `}>Input your points between 1.21 - 9.99</p>
                                        <IoCaretForwardSharp size={20} color={inputData?.payload.length >= index ? inputData?.payload[index]?.points <= 1.12 ?"#FF4545" : "#536079": "#536079"} />
                                    </div>
                                )}
                                <input value={inputData?.payload[index]?.points ? inputData?.payload[index]?.points : ""}  onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}  onChange={(e)=> handleChange(index, e.target.value, "point", item?.id)} type="number" className={` font-Poppins-Bold w-[65px] h-[45px] px-3 placeholder:text-black rounded-lg ${inputData?.payload.length >= index ? inputData?.payload[index]?.points <= 1.12 ?"bg-[#FF4545]" : "bg-[#00D1FF]": "bg-[#00D1FF]"} text-[#000] ml-auto `} placeholder='0.00'  /> 
                            </div>
                        </div>
                    )
                })}
            </LoadingAnimation>
            {!userInfo?.userdata?.email && ( 
                <button onClick={()=> Router.push("/login")} className=' rounded-lg w-full h-[50px] mt-3 font-Poppins-Bold bg-[#00D1FF] text-[#0F1419]  ' >Log in to play</button>
            )}
            {userInfo?.userdata?.email && ( 
                <>
                    {!tab && ( 
                        <button onClick={nextHandler} className=' rounded-lg w-full h-[50px] mt-3 font-Poppins-Bold bg-[#00D1FF] text-[#0F1419]  ' >Submit</button>
                    )}
                    {tab && ( 
                        <button onClick={submit} className=' rounded-lg w-full h-[50px] mt-3 font-Poppins-Bold bg-[#00D1FF] text-[#0F1419]  ' >
                            {loading ? "Loading...": "Submit"}
                        </button>
                    )}
                </>
            )}
                
        </div>
    )
}
