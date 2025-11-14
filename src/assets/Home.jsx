import React from 'react'
import { Link } from 'react-router'
import About from './About'
import Navbar from './Navbar'

function Home() {
  return (
    <div >
      <Navbar/>
       <About/>
      <Link to = "/Register" >Register</Link>
      <Link to= '/Login'>Login</Link>
     
      
    </div>
  )
}

export default Home