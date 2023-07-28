import { AnyARecord } from "dns";  
import apiClient from "../config/apiClient"

const version_one = "/v1" 
const version_two = "/v2" 

export function useGetDataCallback() {
  const handleGetData = async (postData: string, object?:  object, version?: boolean): Promise<any> => {    
    
    let url = ""
    
    if(version){
      url = version_two+postData
    } else{
      url = version_one+postData
    }

    try{ 
        const response = await apiClient.get(url, 
        {
            params: object,
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
  return { handleGetData }
} 

export function useUpdateSettingsCallback() {
  const handleUpdateSettings = async (payload: any, ): Promise<any> => {    
    try{ 
        const response = await apiClient.patch(version_one+"/settings/update", payload,
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
  return { handleUpdateSettings }
} 

export function useUpdateUserInfoCallback() {
  const handleUpdateUserInfo = async (payload: any, index: any): Promise<any> => {    
    try{ 
        const response = await apiClient.patch(version_one+"/user/"+index, payload,
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
  return { handleUpdateUserInfo }
} 

export function useSupendUserCallback() {
  const handleSupendUser = async (payload: any, index: any): Promise<any> => {    
    try{ 
        const response = await apiClient.post(version_one+"/user/"+index+"/suspend", payload,
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
  return { handleSupendUser }
} 

export function useUpdateTnxCallback() {
  const handleUpdateTnx = async (payload: any, index: any): Promise<any> => {    
    try{ 
        const response = await apiClient.patch(version_one+"/transaction/update/"+index, payload,
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
  return { handleUpdateTnx }
} 

export function useUpdateUserPinInfoCallback() {
  const handleUpdateUserPinInfo = async (index: any): Promise<any> => {    
    try{ 
        const response = await apiClient.get(version_one+"/user/generate/pin/"+index,
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
  return { handleUpdateUserPinInfo }
} 

export function useAddGiftCardCallback() {
  const handleAddGiftCard = async (payload: any): Promise<any> => {    

    let formdata = new FormData()

    formdata.append("image", payload.image)
    formdata.append("brandName", payload.brandName)
    formdata.append("processingTime", payload.processingTime)
    formdata.append("availableCountry", JSON.stringify(payload.availableCountry))

    try{ 
        const response = await apiClient.post(version_two+"/giftcard/voucher/", formdata,
        {
            headers: {
                'Content-Type': payload.image.type, 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleAddGiftCard }
} 

export function useUpdateGiftCardCallback() { 
  const handleUpdateGiftCard = async (payload: any, index: any, image: any): Promise<any> => { 

    let formdata = new FormData()
   
    formdata.append("brandName", payload.brandName)
    formdata.append("processingTime", payload.processingTime)
    formdata.append("availableCountry", JSON.stringify(payload.availableCountry))
    {image && (
      formdata.append("image", image)
    )}

    try{ 
        const response = await apiClient.patch(version_two+"/giftcard/voucher/"+index, formdata,
        {
            headers: {
                'Content-Type': image.type ? image.type :'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleUpdateGiftCard }
} 

export function useDeleteGiftCardCallback() { 
  const handleDeleteGiftCard = async (index: any): Promise<any> => {  
    try{ 
        const response = await apiClient.delete(version_two+"/giftcard/voucher/"+index,
        {
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleDeleteGiftCard }
} 

export function useDeleteUserCallback() {
  const handleDeleteUser = async (payload: any): Promise<any> => {    
    try{ 
        const response = await apiClient.delete(version_one+"/user/"+payload,
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
  return { handleDeleteUser }
}

export function useValidateTnxCallback() {
  const handleValidateTnx = async (payload: any): Promise<any> => {    
    try{ 
        const response = await apiClient.get(version_one+"/transfer/bank/validate/"+payload,
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
  return { handleValidateTnx }
} 

export function useTrapUserCallback() {
  const handleTrapUser = async (index: any, payload: any): Promise<any> => {    
    try{ 
        const response = await apiClient.post(version_one+"/user/"+index+"/trap-account", payload,
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
  return { handleTrapUser }
} 



export function useRepushCallback() {
  const handleRepush = async ( payload: any): Promise<any> => {    
    try{ 
        const response = await apiClient.post(version_one+"/transaction/bank/transfer/repush", payload,
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
  return { handleRepush }
} 

export function useRechangeCallback() {
  const handleRechange = async ( payload: any): Promise<any> => {    
    try{ 
        const response = await apiClient.post(version_one+"/user/account/switch", payload,
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
  return { handleRechange }
} 

export function useTransterCallback() {
  const handleTranster = async ( payload: any): Promise<any> => {    
    try{ 
        const response = await apiClient.post(version_one+"/transfer/bank/transfer/approve", payload,
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
  return { handleTranster }
} 

export function useReversalCallback() {
  const handleReversal = async ( payload: any, index: any): Promise<any> => {    
    try{ 
        const response = await apiClient.patch(version_one+"/transaction/reversal/"+index, payload,
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
  return { handleReversal }
} 


export function useSettlementCallback() {
  const handleSettlement = async (type: AnyARecord): Promise<any> => {    
    try{ 
        const response = await apiClient.get(version_one+"/transaction/Settlement/"+type,
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
  return { handleSettlement }
} 