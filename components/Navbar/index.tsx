import React from 'react'
import Image from 'next/image'
import Router from 'next/router'

export default function Index(props: any) {
    
    const ClickHandler =()=> {
        if(props.btn === "Sign up"){
            Router.push("/register")
        } else {
            Router.push("/login")
        }
    } 

    return (
        <div  style={{ fontWeight: "700" }}  className=' font-Poppins-Bold w-full flex items-center justify-between px-6 lg:px-[136px] py-6 ' >
            <button className=' lg:flex xl:flex hidden  ' onClick={()=> Router.push("/")} >
                <Image width="149.88px" height="48px" src="/logo.png" alt='logo' />
            </button>
            <button className=' lg:hidden xl:hidden flex  ' onClick={()=> Router.push("/")} >
                <Image width="48px" height="48px" src="/favicon.png" alt='logo' />
            </button>
            {props.btn && ( 
                <button onClick={ClickHandler} className=' bg-[#00D1FF] h-11 text-[#0F1419] w-[153px] text-sm rounded-full ' >{props.btn}</button>
            )}
        </div>
    )
}
