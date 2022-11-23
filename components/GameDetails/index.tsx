import React from 'react' 
import FreeToPlay from '../GamesOptions/FreeToPlay';
import Guaranteed from '../GamesOptions/Guaranteed';
import HeadToHead from '../GamesOptions/HeadToHead';

export default function index(props: any) {
    return (
        <div onClick={()=> props.open(true)} className=' w-full h-auto cursor-pointer pb-20 -mt-5 ' >
            <Guaranteed />
            <FreeToPlay />
            <HeadToHead />
            <div className='lg:h-0 h-28 '/> 
        </div>
    )
} 