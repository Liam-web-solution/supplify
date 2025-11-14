 import  { useState } from 'react'
import React from 'react'
import supabase from './supabase'
import { Link, useNavigate } from 'react-router'
 


 function Register() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  
  

const handleSubmit = async(event) =>{
  event.preventDefault();
  setMessage("")

  const {data,error} = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if(error){
    setMessage(error.message);
    return
  }

  if(data){
    navigate('/dashboard')
    setEmail('')
    setPassword('')

    return null
  }
}
  
  
 


  return (

    

    <div>
      <h2>Register</h2>
      <br></br>
      {message && <span>{message}</span>}
      <form onSubmit={handleSubmit} >
        < input 
           onChange={(e) => setEmail(e.target.value)}
           value={email}
           type='email'
           placeholder='Email'

           required
        />

         < input 
             
             onChange={(e) => setPassword(e.target.value)}
           value={password}
            type='password'
            placeholder='Password'
            required

          />

         <button type='submit'>Create Account</button>
      </form>
      <span>Already have an account?</span>
      <Link to='/Login'>Login</Link>
    </div>
  )
}

export default Register
 






//jenga code



 
 /* function Login() {

 const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  
  

const handleSubmit = async(event) =>{
  event.preventDefault();
  setMessage("")

  const {data,error} = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if(error){
    setMessage(error.message);
    return
  }

  if(data){
    navigate('/Crud')
    setEmail('')
    setPassword('')

    return null
  }
}

  



  return (

   
   <div>
    <form   onSubmit={handleSubmit}  className="space-y-4">
    {message && <span>{message}</span>}
      <h2 className="text-2xl font-bold mb-4 text-center">Supplier Signup</h2>
      

      <input
          type="email"
           placeholder="Email"
           className="w-full border rounded-md p-2"

            onChange={(e) => setEmail(e.target.value)}
           value={email}

        />
      
      <input 
          type="password"
          placeholder="password"
          className="w-full border rounded-md p-2"

           onChange={(e) => setPassword(e.target.value)}
           value={password}


        />
      
      <button
         type="submit" 
         className="w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded-md hover:bg-yellow-500 transition">
        Login
      </button>

    </form>

    <span className = "p-2 ">Already have an account?</span>
      <Link to='/Register'>Login</Link>
   </div>
  );
}
export default  Login */

 