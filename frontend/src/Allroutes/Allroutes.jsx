import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Error from '../components/Error'
import Login from '../pages/Login'
import Register from '../pages/Register'


export default function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </div>
  )
}
