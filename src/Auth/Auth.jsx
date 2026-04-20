import React,{useEffect, useState} from 'react'
import { getFromLocalStorage } from '../utils/Localstorage'
import { createContext } from 'react'




export const authContext = createContext();
const Auth = ({ children }) => {
  const [userdata, setuserdata] = useState(null)
   
  useEffect(() => {
     const {employees, admin} = getFromLocalStorage();
  setuserdata({employees, admin})

  }, [])
  

  return (

    <authContext.Provider value={userdata}>
      <div>{children}</div>
    </authContext.Provider>


  )
}

export default Auth