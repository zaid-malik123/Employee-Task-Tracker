import React, { createContext, useEffect, useState} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';
export const AuthContext = createContext();
function AuthProvider({children}) {
    // localStorage.clear();
    const [userData, setUserData] = useState("");
    
    useEffect(()=>{
        setLocalStorage();
        const {employees} = getLocalStorage();
        setUserData(employees)
    },[])
  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
         {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
