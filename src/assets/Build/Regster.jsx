import React, { useState } from 'react'
import supabase from './Helper/Supabase'
import { Link, useNavigate } from 'react-router'

function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("")

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      navigate('/dashboard')
      setEmail('')
      setPassword('')
      return null;
    }
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-center mb-3">Register</h2>
      {message && <span className="text-red-600 text-sm text-center mb-2">{message}</span>}

      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          placeholder='Email'
          required
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 text-sm"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='password'
          placeholder='Password'
          required
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 text-sm"
        />

        <button type='submit' className="bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition">Register</button>
      </form>

      <p className="text-sm text-center mt-3">
        Already have an account?{" "}
        <Link to='/Login' className="text-yellow-600 hover:underline">Login</Link>
      </p>
    </div>
  )
}

export default Register
