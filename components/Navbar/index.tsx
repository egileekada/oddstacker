import React from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { IUser, UserContext } from '../../context'

export default function Index(props: any) {
    
    const ClickHandler =()=> {
        if(props.btn === "Sign up"){
            Router.push("/register")
        } else {
            Router.push("/login")
        }
    } 
    
    const userContext: IUser = React.useContext(UserContext);  

    return (
        <div  style={{ fontWeight: "700" }}  className=' font-Poppins-Bold w-full flex items-center justify-between bg-transparent px-6 lg:px-[136px] py-6 ' >
            
            <button className=' lg:flex xl:flex hidden  ' onClick={()=> Router.push("/")} >
                <Image width="149.88px" height="48px" src="/logo.png" alt='logo' />
            </button>  
            <button onClick={()=> userContext.setDetail(false)} className={userContext.details ? ' lg:hidden xl:hidden flex  ': " hidden "}>
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.334 8.66671H4.52065L9.36065 2.85338C9.58697 2.58109 9.69585 2.23005 9.66335 1.87748C9.63084 1.52491 9.45961 1.19969 9.18732 0.973375C8.91503 0.747057 8.56399 0.638175 8.21142 0.670681C7.85885 0.703187 7.53364 0.87442 7.30732 1.14671L0.640651 9.14671C0.595799 9.21034 0.55569 9.27719 0.520651 9.34671C0.520651 9.41338 0.520651 9.45338 0.427318 9.52004C0.366883 9.67292 0.335239 9.83566 0.333984 10C0.335239 10.1644 0.366883 10.3272 0.427318 10.48C0.427318 10.5467 0.427318 10.5867 0.520651 10.6534C0.55569 10.7229 0.595799 10.7897 0.640651 10.8534L7.30732 18.8534C7.43268 19.0039 7.58967 19.1249 7.76711 19.2079C7.94456 19.2908 8.1381 19.3337 8.33398 19.3334C8.64552 19.334 8.94744 19.2255 9.18732 19.0267C9.32233 18.9148 9.43393 18.7773 9.51573 18.6222C9.59754 18.467 9.64793 18.2973 9.66403 18.1227C9.68013 17.948 9.66162 17.7719 9.60957 17.6045C9.55751 17.437 9.47292 17.2814 9.36065 17.1467L4.52065 11.3334H20.334C20.6876 11.3334 21.0267 11.1929 21.2768 10.9429C21.5268 10.6928 21.6673 10.3537 21.6673 10C21.6673 9.64642 21.5268 9.30728 21.2768 9.05723C21.0267 8.80719 20.6876 8.66671 20.334 8.66671Z" fill="#536079"/>
                </svg>
            </button>  
            {!props.dashboard && ( 
                <button className=' lg:hidden xl:hidden flex  '  onClick={()=> Router.push("/")} >
                    <Image width="48px" height="48px" src="/favicon.png" alt='logo' />
                </button>
            )}
            {props.dashboard && ( 
                <button className={!userContext.details ? ' lg:hidden xl:hidden flex  ': " hidden "}onClick={()=> props.side()} >
                    <Image width="48px" height="48px" src="/favicon.png" alt='logo' />
                </button>
            )}
            {props.btn && ( 
                <button onClick={ClickHandler} className=' text-[#00D1FF] h-11 bg-[#0F1419] w-[153px] text-sm rounded-full ' >{props.btn}</button>
            )}
        </div>
    )
}
