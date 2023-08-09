import React from 'react' 
import FreeToPlay from '../GamesOptions/FreeToPlay';
import Guaranteed from '../GamesOptions/Guaranteed';
import HeadToHead from '../GamesOptions/HeadToHead';
import { useQuery } from 'react-query'; 
import { AxiosError } from 'axios';
import apiClient from '../../config/apiClient';
import { useDispatch, useSelector } from 'react-redux';
import { detailCase } from '../../context/state/gameDetails' 
import LoadingAnimation from '../loadingAnimation';
import { payloadCase, pointCase } from '../../context/state/gameInput'   

export default function GameDetails() {

    const [gameData, setGameData] = React.useState([] as any) 
    const dispatch = useDispatch();  
    const data = useSelector((state: any) => state?.gamedetails?.data)  

    const { isLoading } = useQuery(['list-game'], () => apiClient.get('/game-manager/list-game', { 
        headers: {
            'Content-Type':'application/json', 
            Authorization : `Bearer ${localStorage.getItem('token')}`
        }, 
    }), {
        onError: (error: AxiosError<any, any>) => {
        //   toast.error(error.response?.data);
        }, 
        onSuccess: (data) => {             
            setGameData(data.data);
        }
    })     

    const clickHandler =(item: any)=> { 
        dispatch(pointCase(data?.game?.game_type?.total_points))
        dispatch(payloadCase([])) 
        dispatch(detailCase({game: item, open: true}))
    }

    return (
        <LoadingAnimation loading={isLoading} length={gameData?.length} > 
            <div className=' w-full h-auto cursor-pointer pb-20 -mt-5 ' > 
                {gameData?.map((item: any, index: number)=> {
                    return(
                        <div key={index} role='button' onClick={()=> clickHandler(item)} >
                            {item?.game_type?.game_type_name === "BIG MAC" && ( 

                                <Guaranteed data={item} /> 
                            )}
                            {item?.game_type?.game_type_name === "DOUBLES" && (  
                                <HeadToHead data={item}/>
                            )}
                            {(item?.game_type?.game_type_name !== "DOUBLES" && item?.game_type?.game_type_name !== "BIG MAC" )&& (                            
                                <FreeToPlay data={item} />
                            )} 
                        </div>
                    )
                })}
                <div className='lg:h-0 h-28 '/> 
            </div>
        </LoadingAnimation>
    )
} 