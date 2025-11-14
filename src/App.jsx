 
 import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateAccount from './assets/CreateAccount'
import CreateLogin from './assets/CreateLogin'
import Dashboard from './assets/Dashboard'
import Wrapper from './assets/wrapper'
import Homee from './Jenga/Homee'

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/'  element ={<Homee/>}/>
        <Route path='CreateAccount' element= {<CreateAccount/>} />
        <Route path='/CreateLogin' element= {<CreateLogin/>} />
        <Route
            path='/Dashboard' 
            element = {
    
              <Wrapper>
                <Dashboard/>
              </Wrapper>
              
            } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App   
 












  {/* <Route path='/' element= {<Home/>} />


      <Route path='/Register'  element = {<Register/>} />

      <Route path='/Login'  element = {<Login/>} /> 

      <Route
        path='/Dashboard' 
        element = {

          <Wrapper>
            <Dashboard/>
          </Wrapper>
          
        } 
     /> */}