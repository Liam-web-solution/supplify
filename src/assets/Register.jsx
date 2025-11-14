 import React, {useState} from 'react'
import supabase from './Helper/Supabase'
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

         <button type='submit'>Register</button>
         
      </form>
        <span>Already have an account?</span> 
       <Link to='/Login'>Login</Link>  
    </div>
  )
}

export default Register 

