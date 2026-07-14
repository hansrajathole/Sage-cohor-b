import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <>
      <Navbar/> 
      <br />
      <br />     

      <Routes>
        <Route path='/' element={ <h1>Home page</h1>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/register' element={ <Register/>}/>
        
      </Routes>
    </>
  )
}

export default App
