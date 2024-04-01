import React from 'react'
import {Routes , Route } from "react-router-dom"
import Home from './components/Home'
import Today from './components/Today'
import Create from './components/Create'
import Navbar from './Menubar/Navbar'
import Register from './auth/Register'
import Signin from './auth/Signin'



function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/today' element={<Today></Today>} />
        <Route path='/creates' element={<Create></Create>} />
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
      </Routes>
    </>
  )
}

export default App