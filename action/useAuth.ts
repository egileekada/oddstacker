
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
  