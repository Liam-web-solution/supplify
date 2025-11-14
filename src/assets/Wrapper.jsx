import { useState, useEffect } from "react";
import supabase from "./Helper/Supabase";
import { Navigate } from "react-router-dom";

import React from 'react'

function Wrapper({children}) {

    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      const getSession = async() =>{
        const {
            data: {session}
        } = await supabase.auth.getSession()

        setAuthenticated(!!session);
        setLoading(false)
      }
      getSession()
    },[])

    if(loading){
        return<div>Loading...</div>;
    }else{
        if(authenticated){
            return<span>{children}</span>
        }
         return <Navigate to= "/Login" />
    }

  
  
}

export default Wrapper