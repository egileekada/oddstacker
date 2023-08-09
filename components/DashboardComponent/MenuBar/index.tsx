
import Router from 'next/router';
import React from 'react'
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useSelector } from 'react-redux';
import ModalLayout from '../../modalLayout';
import { useToast } from '@chakra-ui/react';
import { useUpdateProfileCallback } from '../../../action/useAction';

export default function Index() {

    const [show, setShow] = React.useState(true) 
    const [isShown, setIsShown] = React.useState(false) 
    const [loading, setLoading] = React.useState(false) 
    const [profile, setProfile] = React.useState(false) 
    const [firstName, setFirstName] = React.useState("") 
    const [lastName, setLastName] = React.useState("") 
    const [phoneNumber, setPhoneNumber] = React.useState("") 
    
    const { handleUpdateProfile } = useUpdateProfileCallback()
    
    const data = useSelector((state: any) => state?.userinfo?.userdata) 
 
    const toast = useToast()
    
    const submit = async()=> {

        setLoading(true)

        const request = await handleUpdateProfile(JSON.stringify({
            "phone_number": phoneNumber,
            "first_name": firstName,
            "last_name": lastName
        }))   
        if (request?.status === 200 || request?.status === 201 || request?.status === 202) { 
            localStorage.setItem("token", request?.data?.access_token)   
            // localStorage.setItem("id", request?.data?.data?.user?._id)  
            toast({
                title: "Update Successful",
                position: "bottom",
                status: "success",
                isClosable: true,
            }) 
        }else {  
            toast({
                title: "Error occurred",
                position: "bottom",
                status: "error",
                isClosable: true,
            }) 
            setLoading(false)  
        }
    }        

    React.useEffect(()=> {
        setFirstName(data?.first_name)
        setLastName(data?.last_name)
        setPhoneNumber(data?.phone_number)
    }, [])

    return (
        <div className=' w-full h-full bg-[#0F1419] overflow-x-hidden rounded-2xl pt-8 xl:pt-20 ' >
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
                        <p className=' font-Poppins-Bold text-[#00D1FF] ml-3 text-lg ' >{data?.first_name ? data?.first_name+" "+data?.last_name: data?.username}</p>
                    </div>
                    <p className=' font-Poppins-Regular text-[#8CA6BF] mt-3 text-lg' >@{data?.email?.length > 18 ? data?.email?.slice(0, 18)+"...": data?.email}</p>
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
                    <button onClick={()=> Router.push("/my-games")} className='flex items-center py-6 cursor-pointer '  > 
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
            {/* {profile && (
                <div className=' fixed inset-0 flex py-10 overflow-y-auto  z-20 ' >
                    
                    <div onClick={()=> setProfile(false)} className=' cursor-pointer bg-black bg-opacity-40 fixed inset-0   ' />
                </div>
            )} */}

            <ModalLayout open={profile} close={setProfile} size={"lg"} title=""  >
                <div className=' w-full rounded-2xl h-fit relative mx-auto z-30 text-[#8CA6BF] py-[40px] px-[32px] flex flex-col bg-[#0F1419] ' > 
                    <div className=' w-full mt-5 ' > 
                        <p className=' font-Poppins-Regular text-[#8CA6BF] mb-2' >First Name</p>
                        <input value={firstName} onChange={(e)=> setFirstName(e.target.value)} placeholder='' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />
                        <p className=' font-Poppins-Regular text-[#8CA6BF] mt-5 mb-2' >Last Name</p>
                        <input value={lastName} onChange={(e)=> setLastName(e.target.value)} placeholder='' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />
                        <p className=' font-Poppins-Regular text-[#8CA6BF] mt-5 mb-2' >Username</p>
                        <input value={data?.username} placeholder='@Controller' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />
                        <p className=' font-Poppins-Regular text-[#8CA6BF] mt-5 mb-2' >Email</p>
                        <input value={data?.email} placeholder='example@gmail.com' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />
                        <p className=' font-Poppins-Regular text-[#8CA6BF] mt-5 mb-2' >Phone number</p>
                        <input value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} placeholder='+2348125151662' className='  w-full h-12 rounded-[6px] px-6 bg-[#171F26] ' />
                        <button onClick={()=> submit()}  className=' mt-8 w-full h-12 rounded-lg bg-[#00D1FF] font-Poppins-Bold ' >Save</button>
                    </div>
                </div>
            </ModalLayout>
        </div>  
    )
} 