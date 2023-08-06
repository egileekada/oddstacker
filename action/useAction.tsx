import { AnyARecord } from "dns";  
import apiClient from "../config/apiClient"

export function useUpdateProfileCallback() {
  const handleUpdateProfile = async (payload: any, ): Promise<any> => {    
    try{ 
        const response = await apiClient.put("/users/edit-profile", payload,
        {
            headers: {
                'Content-Type':'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleUpdateProfile }
} 