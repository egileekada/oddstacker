import React from 'react' 
import FreeToPlay from '../GamesOptions/FreeToPlay';
import Guaranteed from '../GamesOptions/Guaranteed';
import HeadToHead from '../GamesOptions/HeadToHead';

export default function index() {
    return (
        <div className=' w-full h-full -mt-5 ' >
            <Guaranteed />
            <FreeToPlay />
            <HeadToHead />
        </div>
    )
} 