import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Error from '../components/Error'

export default function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </div>
  )
}
