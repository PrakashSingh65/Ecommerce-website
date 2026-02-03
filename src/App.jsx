import React from 'react'
import Navbar from './components/Navbar/navbar'
import { Outlet } from 'react-router-dom'




export default function App() {
  return (
    <div>
      <Navbar/>
       <div className='pt-10'><Outlet/></div>
    </div>
    
  )
}
