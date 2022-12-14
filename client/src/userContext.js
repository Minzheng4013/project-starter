import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const GetUserContext = ()=>{
    const context = useContext(UserContext)
    if(!context)
        throw new Error("getUserContext can only be used in child of UserContext Provider")
    return context  
}

export const UserProvider = (props)=>{
    let [user, setUser] = useState() 

    const value = {
        user: user, 
        login : user=> {
          setUser(user)
        },
        logout : ()=> {
          setUser(null)
          props.navigate("/login")
        }
    }

    useEffect(()=>{
        console.log(user)
    }, [user])

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
}