
import apiClient from "../config/apiClient"

export function useLoginCallback() {
  const handleLogin = async (postData: any): Promise<any> => {    
    try{ 
        const response = await apiClient.post('/users/login', postData,
        {
          headers: {'Content-Type':'application/json'}, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleLogin }
}

export function useRegisterUserCallback() {
  const handleRegisterUser = async (postData: any): Promise<any> => {    
    try{ 
        const response = await apiClient.post('/users/register', postData,
        {
          headers: {'Content-Type':'application/json'},
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleRegisterUser }
} 

export function useVerifyUserCallback() {
  const handleVerifyUser = async (postData: any): Promise<any> => {    
    try{ 
        const response = await apiClient.post('/users/verify-otp', postData,
        {
          headers: {'Content-Type':'application/json'},
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleVerifyUser }
}



export function useResendOtpCallback() {
  const handleResendOtp = async (postData: any): Promise<any> => {    
    try{ 
        const response = await apiClient.post('/users/resend-otp', postData,
        {
          headers: {'Content-Type':'application/json'},
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleResendOtp }
}


export function useResetPasswordOtpCallback() {
  const handleResetPasswordOtp = async (postData: any): Promise<any> => {    
    try{ 
        const response = await apiClient.post('/users/password-reset', postData,
        {
          headers: {'Content-Type':'application/json'},
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleResetPasswordOtp }
}

export function useResendPasswordOtpCallback() {
  const handleResendPasswordOtp = async (postData: any): Promise<any> => {    
    try{ 
        const response = await apiClient.post('/users/password-reset-request', postData,
        {
          headers: {'Content-Type':'application/json'},
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleResendPasswordOtp }
}
  