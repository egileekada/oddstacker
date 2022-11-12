
import Router from 'next/router';
import React from 'react'
import { BiLogIn, BiLogOut } from "react-icons/bi";

export default function Index() {

    const [show, setShow] = React.useState(true) 
    const [isShown, setIsShown] = React.useState(false) 
    const [profile, setProfile] = React.useState(false) 


    return (
        <div className=' w-[330px] h-full bg-[#0F1419] rounded-2xl pt-8 xl:pt-20 ' >
            {!show && (
                <div className=' w-full pl-8 ' >
                    <div className=' flex items-center ' >
                        <BiLogIn color='#00D1FF' size={32} /> 
                        <p className=' font-Poppins-Bold text-[#00D1FF] ml-3 ' >Log in</p>
                    </div>
                    <div className=' flex items-center mt-8 ' >
                        <BiLogOut color='#00D1FF' size={32} /> 
                        <p className=' font-Poppins-Bold text-[#00D1FF] ml-3 ' >Sign up</p>
                    </div>
                </div>
            )}
            {show && (
                <div className=' w-full bg-[#0F1419] pl-8 pb-5 rounded-2xl ' >
                    <div className=' flex items-center mt-4 xl:mt-8 ' >
                        <img className='w-[21.33px] h-[26.67px]' src="/avatar.png" alt='avatar' />  
                        <p className=' font-Poppins-Bold text-[#00D1FF] ml-3 text-lg ' >Uchenna Achebe</p>
                    </div>
                    <p className=' font-Poppins-Regular text-[#8CA6BF] mt-3 text-lg' >@controller</p>
                    <div className=' w-full h-[134px] flex justify-center flex-col bg-[#00D1FF] mt-8 xl:mt-14 rounded-tl-[12px] rounded-bl-[12px] pl-4 ' >
                        <p className=' font-Poppins-Bold text-xl text-[#000] ' >N5,000</p>
                        <div className=' flex items-center mt-1 ' >
                            <img className='w-[32px] h-[32px]' src="/bx_money.png" alt='bx_money' />  
                            <p className=' font-Poppins-Regular text-[#000] ml-2 text-lg ' >Balance</p>
                        </div>
                    </div>
                    <div className=' flex mt-5 mb-6 xl:mb-16 items-center ' >
                        <p className=' font-Poppins-Regular text-[#8CA6BF] text-lg' >Processing:</p>
                        <p className=' font-Poppins-Regular text-[#8CA6BF] ml-2 text-lg' >N25,000</p>
                    </div>
                    <button onClick={()=> Router.push("/dashboard")} className='flex items-center cursor-pointer py-6 '  > 
                        <div className=' w-7 ' > 
                            <img className='w-[26.67px] h-[27px]' src="/Home.png" alt='avatHomear' />  
                        </div>
                        <p className=' font-Poppins-Bold text-[#00D1FF] ml-6 text-lg ' >Home</p>
                    </button>
                    <button onClick={()=> setIsShown(true)} className='flex items-center py-6 cursor-pointer '  > 
                        <div className=' w-7 ' > 
                            <img className='w-[26.67px] h-[27px]' src="/Withdraw.png" alt='avatHomear' />  
                        </div>
                        <p className=' font-Poppins-Bold text-[#00D1FF] ml-6 text-lg ' >Withdraw</p>
                    </button>
                    <button onClick={()=> Router.push("/")} className='flex items-center py-6 cursor-pointer '  > 
                        <div className=' w-7 ' > 
                            <img className='w-[26.67px] h-[27px]' src="/Group.png" alt='avatHomear' />  
                        </div>
                        <p className=' font-Poppins-Bold text-[#00D1FF] ml-6 text-lg ' >My games</p>
                    </button>
                    <button onClick={()=> Router.push("/")} className='flex items-center py-6 cursor-pointer '  > 
                        <div className=' w-7 ' > 
                            <img className='w-[26.67px] h-[27px]' src="/bulb icon.png" alt='avatHomear' />  
                        </div>
                        <p className=' font-Poppins-Bold text-[#00D1FF] ml-6 text-lg ' >How to play</p>
                    </button>
                    <button onClick={()=> setProfile(true)} className='flex items-center py-6 cursor-pointer '  > 
                        <div className=' w-7 ' > 
                            <img className='w-[26.67px] h-[27px]' src="/profile.png" alt='avatHomear' />  
                        </div>
                        <p className=' font-Poppins-Bold text-[#00D1FF] ml-6 text-lg ' >Profile settings</p>
                    </button>
                </div>
            )}
            {isShown && (
                <div className=' fixed inset-0 flex justify-center items-center  z-20 ' >
                    <div className=' w-[500px] rounded-2xl h-fit relative z-30 py-[40px] px-[32px] flex flex-col bg-[#0F1419] ' >
                        <p className=' font-Poppins-Bold text-[#00D1FF] text-lg  ' >N5,000</p>
                        <p className=' font-Poppins-Regular text-[#526475]' >Balance</p>
                        <div className=' w-full mt-5 ' > 
                            <p className=' font-Poppins-Regular text-[#8CA6BF] mb-2' >Enter amount</p>
                            <input placeholder='N0.00' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />
                            <button onClick={()=> setIsShown(false)}  className=' mt-8 w-full h-12 rounded-lg bg-[#00D1FF] font-Poppins-Bold ' >Withdraw</button>
                        </div>
                    </div>
                    <div onClick={()=> setProfile(false)} className=' cursor-pointer bg-black bg-opacity-40 fixed inset-0   ' />
                </div>
            )}
            {profile && (
                <div className=' fixed inset-0 flex py-10 overflow-y-auto  z-20 ' >
                    <div className=' w-[500px] rounded-2xl h-fit relative mx-auto z-30 py-[40px] px-[32px] flex flex-col bg-[#0F1419] ' > 
                        <div className=' w-full mt-5 ' > 
                            <p className=' font-Poppins-Regular text-[#8CA6BF] mb-2' >First Name</p>
                            <input placeholder='' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />
                            <p className=' font-Poppins-Regular text-[#8CA6BF] mt-5 mb-2' >Last Name</p>
                            <input placeholder='' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />
                            <p className=' font-Poppins-Regular text-[#8CA6BF] mt-5 mb-2' >Username</p>
                            <input placeholder='@Controller' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />
                            <p className=' font-Poppins-Regular text-[#8CA6BF] mt-5 mb-2' >Email</p>
                            <input placeholder='example@gmail.com' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />
                            <p className=' font-Poppins-Regular text-[#8CA6BF] mt-5 mb-2' >Phone number</p>
                            <input placeholder='+2348125151662' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />
                            <button onClick={()=> setProfile(false)}  className=' mt-8 w-full h-12 rounded-lg bg-[#00D1FF] font-Poppins-Bold ' >Save</button>
                        </div>
                    </div>
                    <div onClick={()=> setProfile(false)} className=' cursor-pointer bg-black bg-opacity-40 fixed inset-0   ' />
                </div>
            )}
        </div>  
    )
} 