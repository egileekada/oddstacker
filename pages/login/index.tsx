import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import { useToast } from '@chakra-ui/react'
import { useLoginCallback } from '../../action/useAuth'
import { useFormik } from 'formik'; 
import * as yup from 'yup' 
import { motion } from 'framer-motion'

export default function Login() {

  const toast = useToast() 
  const [loading, setLoading] = React.useState(false)
  const { handleLogin } = useLoginCallback();
  const loginSchema = yup.object({ 
      username_or_email: yup.string().required('Your email is required'),
      password: yup.string().required('Your password is required').min(6, 'A minimium of 6 characters')
  }) 

  const formik = useFormik({
    initialValues: {username_or_email: '', password: ''},
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
        const request = await handleLogin(JSON.stringify(formik.values))   
      if (request?.status === 200 || request?.status === 201) { 
          localStorage.setItem("token", request?.data?.access_token)   
          // localStorage.setItem("id", request?.data?.data?.user?._id)  
          toast({
              title: "Login Successful",
              position: "bottom",
              status: "success",
              isClosable: true,
          })
          const t1 = setTimeout(() => {
              setLoading(false);  
              Router.push("/dashboard")
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

    return (
        <div className=' w-full lg:h-full flex flex-col xl:h-full h-screen bg-[#070A0D] '>
          <Head>
            <title>Log In</title>
            <meta name="description" content="Generated by create next app" /> 
          </Head> 
            <Navbar btn="Sign up" />
          <div className=' w-full py-4 px-6 ' >
            <div className=' w-full flex flex-col justify-center items-center my-3 ' >
              <Image width="300px" height="300px" src="/Landing-page-logo.png" alt='Landing' /> 
              <div className='md:w-[486px] lg:w-[486px] xl:w-[486px] font-Poppins-Regular text-white mt-4 ' > 
                <input 
                    name="username_or_email"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("username_or_email", true, true)
                    }   
                    autoComplete="new-password"
                    type='email'placeholder='Username, email or phone number' className='  w-full h-12 rounded-[6px] px-6 outline-none bg-[#171F26] ' />
                {formik.touched.username_or_email && formik.errors.username_or_email && (
                    <motion.p
                        className=' text-[#E84545] text-xs mt-1 font-Poppins-SemiBold '
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }} >
                      {formik.errors.username_or_email}
                    </motion.p>
                  )}
                <input 
                  name="password"
                  onChange={formik.handleChange}
                  onFocus={() =>
                      formik.setFieldTouched("password", true, true)
                  }   
                  autoComplete="new-password"
                  type="password" placeholder='Password' className='  w-full h-12 rounded-[6px] mt-3 px-6 outline-none bg-[#171F26] ' /> 
                {formik.touched.password && formik.errors.password && (
                  <motion.p
                      className=' text-[#E84545] text-xs mt-1 font-Poppins-SemiBold '
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }} >
                    {formik.errors.password}
                  </motion.p>
                )} 
                <button onClick={submit} className=' bg-[#00D1FF] h-[45px] text-[#0F1419] w-full font-Poppins-Bold rounded-[6px] mt-6 ' >
                  {loading? "Loading": "Log In"}
                </button>
                <Link href="/forgot-password" ><p className=' cursor-pointer font-Poppins-Regular text-[#8CA6BF] mt-3 text-center '>Forgot password?</p></Link>
              </div>
            </div>
          </div>
          <div className='lg:flex xl:flex hidden lg:mt-14 ' > 
            <Footer />
          </div>
          {/* <button className=' absolute bottom-0 right-0 left-0 bg-[#00D1FF] h-14 text-[#0F1419] w-full font-Poppins-Bold ' >Log In</button> */}
        </div>
    )
} 