import React, { useState, createContext, useContext } from "react";

export interface IUser {
  details: any, 
  setDetail: Function,  
}

export const UserContext = React.createContext({} as IUser); 

export const useUser = () => useContext(UserContext);

export const UserContextProvider = (props: any) => {
  const [details, setDetail] = useState(false);  

  return <UserContext.Provider value={{details, setDetail}}>
  {
      props.children
  }</UserContext.Provider>;
};