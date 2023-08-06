import React from 'react'
import Image from 'next/image' 
import Link from 'next/link'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import { useToast } from '@chakra-ui/react'
import { useRegisterUserCallback, useResendOtpCallback, useVerifyUserCallback } from '../../action/useAuth'
import { useFormik } from 'formik'; 
import * as yup from 'yup' 
import { motion } from 'framer-motion'
import Router from 'next/router'

export default function Index() {

    const [tab, setTab] = React.useState(false)

    const toast = useToast() 
    const [loading, setLoading] = React.useState(false)
    const [isLoading, setisLoading] = React.useState(false)
    const [otp, setOtp] = React.useState("")
    const { handleRegisterUser } = useRegisterUserCallback();
    const { handleVerifyUser } = useVerifyUserCallback();
    const { handleResendOtp } = useResendOtpCallback();
    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').min(6, 'A minimium of 6 characters'),
        username: yup.string().required('required')
    }) 
  
    const formik = useFormik({
        initialValues: {email: '', username: '', password: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    const submit = async () => {

      if (!formik.dirty) { 
          toast({
              title: "You have to fill in the form to continue",
              position: "bottom",
              status: "error",
              isClosable: true,
          }) 
          return;
      }else if (!formik.isValid) { 
          toast({
              title: "You have to fill in the form to continue",
              position: "bottom",
              status: "error",
              isClosable: true,
          })
        return;
      }else {
          setLoading(true);
          const request = await handleRegisterUser(JSON.stringify(formik.values))  
          
          if (request?.status === 200 || request?.status === 201) {  
              toast({
                  title: "Registration Successful",
                  position: "bottom",
                  status: "success",
                  isClosable: true,
              })
              const t1 = setTimeout(() => {
                  setLoading(false);  
                  setTab(true)
                  // Router.push("/dashboard")
                  clearTimeout(t1);
              }, 1000);  
          }else {  
              toast({
                  title: request?.data?.detail,
                  position: "bottom",
                  status: "error",
                  isClosable: true,
              }) 
              setLoading(false)  
          }
      }
      setLoading(false);
    }   

    const submitOtp = async () => {

      if (!otp) { 
          toast({
              title: "Enter Your Otp",
              position: "bottom",
              status: "error",
              isClosable: true,
          }) 
          return;
      }else {
          setLoading(true);
          const request = await handleVerifyUser(JSON.stringify({
            email: formik.values.email, 
            otp: otp
          }))   
          if (request?.status === 200 || request?.status === 201) { 
              // localStorage.setItem("token", request?.data?.data?.token)   
              // localStorage.setItem("id", request?.data?.data?.user?._id)  
              toast({
                  title: "Verification Successful",
                  position: "bottom",
                  status: "success",
                  isClosable: true,
              })
              const t1 = setTimeout(() => {
                  setLoading(false);  
                  Router.push("/login")
                  clearTimeout(t1);
              }, 1000);  
          }else {  
              toast({
                  title: request?.data[0],
                  position: "bottom",
                  status: "error",
                  isClosable: true,
              }) 
              setLoading(false)  
          }
      }
      setLoading(false);
    }  

    const ResendOtp =async()=>{

      setisLoading(true)
      const request = await handleResendOtp(JSON.stringify({ 
        user_email: formik.values.email, 
      }))   
      if (request?.status === 200 || request?.status === 201) {  
        toast({
            title: "Otp Sent",
            position: "bottom",
            status: "success",
            isClosable: true,
        })
        const t1 = setTimeout(() => {
            setLoading(false);  
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
      setisLoading(false)  
    }

    return (
        <div className=' w-full h-screen overflow-y-auto bg-[#070A0D] '>
          <Head>
            <title>Sign up</title>
            <meta name="description" content="Generated by create next app" /> 
          </Head> 
          <Navbar btn="Log In" />
          <div className=' w-full py-4 px-6 ' >
            <div className=' w-full flex flex-col justify-center items-center my-3 ' >
              <Image width="300px" height="300px" src="/Landing-page-logo.png" alt='Landing' /> 
              {!tab && ( 
                <div className=' lg:w-[486px] font-Poppins-Regular text-white mt-4 ' >  
                  <input 
                    name="email"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("email", true, true)
                    }   
                    autoComplete="new-password"
                    type='email'
                    placeholder='Enter email' className='  w-full h-12 rounded-[6px] px-6 outline-none bg-[#171F26] ' />
                  {formik.touched.email && formik.errors.email && (
                    <motion.p
                        className=' text-[#E84545] text-xs mt-1 font-Poppins-SemiBold '
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }} >
                      {formik.errors.email}
                    </motion.p>
                  )}
                  <input 
                    name="username"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("username", true, true)
                    }   
                    autoComplete="new-password"
                    type='text'
                    placeholder='Enter Username' className='  w-full h-12 rounded-[6px] mt-3 px-6 outline-none bg-[#171F26] ' />
                    {formik.touched.username && formik.errors.username && (
                      <motion.p
                          className=' text-[#E84545] text-xs mt-1 font-Poppins-SemiBold '
                          initial={{ y: -100, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }} >
                        {formik.errors.username}
                      </motion.p>
                    )} 
              <input
                name="password"
                onChange={formik.handleChange}
                onFocus={() =>
                    formik.setFieldTouched("password", true, true)
                }   
                autoComplete="new-password"
                type="password" placeholder='Password' className='  w-full h-12 rounded-[6px] mt-3 px-6 bg-[#171F26] ' /> 
                {formik.touched.password && formik.errors.password && (
                  <motion.p
                      className=' text-[#E84545] text-xs mt-1 font-Poppins-SemiBold '
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }} >
                    {formik.errors.password}
                  </motion.p>
                )} 
              <button onClick={submit} className=' bg-[#00D1FF] h-[45px] text-[#0F1419] w-full font-Poppins-Bold rounded-[6px] mt-6 ' >
                {loading ? "Loading": "Sign up"}
              </button>
              <div className=' w-full flex justify-center ' >
                  {/* {tab ?  
                      : 
                      <button onClick={()=> setTab(true)} ><p className=' cursor-pointer font-Poppins-Regular text-[#8CA6BF] mt-3 text-center '>Register with email</p></button>} */}
              </div>
            </div>
              )}
              {tab && (

              <div className=' lg:w-[486px] font-Poppins-Regular text-white mt-4 ' >   
                <input 
                  name="username"
                  onChange={(e)=> setOtp(e.target.value)}
                  autoComplete="new-password"
                  type='text'
                  placeholder='Enter Otp' className='  w-full h-12 rounded-[6px] px-6 outline-none bg-[#171F26] ' /> 
                <button onClick={submitOtp} className=' bg-[#00D1FF] h-[45px] text-[#0F1419] w-full font-Poppins-Bold rounded-[6px] mt-6 ' >
                  {loading ? "Loading": "Verify Email"}
                </button>
                <div className=' w-full flex justify-center ' >

                <button onClick={ResendOtp} ><p className=' cursor-pointer font-Poppins-Regular text-[#8CA6BF] mt-3 text-center '>{isLoading ? "Loading": "Resend Otp"}</p></button>
                    {/* {tab ?  
                        <button onClick={()=> setTab(false)} ><p className=' cursor-pointer font-Poppins-Regular text-[#8CA6BF] mt-3 text-center '>Register with phone number</p></button>: 
                        <button onClick={()=> setTab(true)} ><p className=' cursor-pointer font-Poppins-Regular text-[#8CA6BF] mt-3 text-center '>Register with email</p></button>} */}
                </div>
              </div>
              )}
            </div>
          </div>
          <div className='lg:flex xl:flex hidden mt-8 ' > 
            <Footer />
          </div>
        </div>
    )
} 