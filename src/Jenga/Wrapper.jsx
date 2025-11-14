
import { useState, useEffect } from "react";
import supabase from "./supabase"; 
import { Navigate } from "react-router-dom"; 
import React from "react";

// Wrapper component — protects routes that require authentication
function Wrapper({ children }) {

  const [authenticated, setAuthenticated] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // Define an async function to get the current session from Supabase
    const getSession = async () => {

      // Fetch the session data (user info if logged in)
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // Convert the session object into a boolean
      // If session exists → true (authenticated)
      // If null → false (not authenticated)
      setAuthenticated(!!session);

      setLoading(false);
    };

    // Call the function to check session
    getSession();


  }, []);


  // If still loading (session being checked), show a simple loading message
  if (loading) {
    return <div>Loading...</div>;
  } else {
    // If user is authenticated, render the children components (protected content)
    if (authenticated) {
      return <span>{children}</span>;
    }

    // If user is not authenticated, redirect to the Login page
    return <Navigate to="/Login" />;
  }
}


export default Wrapper;
