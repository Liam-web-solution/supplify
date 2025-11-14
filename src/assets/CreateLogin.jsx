
import React, { useState } from "react";
import supabase from "./Helper/Supabase";
import { Link, useNavigate } from "react-router-dom";


function CreateLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  
  

const handleSubmit = async(event) =>{
  event.preventDefault();
  setMessage("")

  //calls supabse signup function
  const {data,error} = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if(error){
    setMessage(error.message);
    return
  }

  if(data){
    navigate("/Dashboard")
    setEmail('')
    setPassword('')
    
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111827] px-4">
      <div className="w-full max-w-sm text-center space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="bg-blue-600 rounded-2xl p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h4v4H4V6zm6 0h4v4h-4V6zm6 0h4v4h-4V6zM4 12h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-white text-2xl font-bold">Login</h1>
          <p className="text-gray-400 mt-1 text-lg">
            Login to  send us your supplies.
          </p>
        </div>

        {/* Message */}
        {message && (
          <div className="bg-red-500/20 text-red-400 text-sm p-2 rounded-md">
            {message}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-left mt-4"
          autoComplete="off"
        >
          {/* Email */}
          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <div className="flex items-center bg-[#1f2937] border border-gray-700 rounded-lg px-3 py-2">
              
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="you@example.com"
                required
                className="w-full bg-transparent focus:outline-none text-gray-200 placeholder-gray-500 text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-white font-medium mb-1">
              Password
            </label>
            <div className="flex items-center bg-[#1f2937] border border-gray-700 rounded-lg px-3 py-2">
              
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter at least 8 characters"
                required
                className="w-full bg-transparent focus:outline-none text-gray-200 placeholder-gray-500 text-sm"
              />
      
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-400 text-sm">
          Doesn't have an account?{" "}
          <Link to="/CreateAccount" className="text-blue-500 hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default CreateLogin;
