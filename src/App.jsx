import React from 'react'
import Navbar from './components/Navbar/navbar'
import { Outlet } from 'react-router-dom'




import { Footer } from './components/Footer/Footer'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
       <div className='grow pt-[10vh]'><Outlet/></div>
       <Footer />
    </div>
    
  )
}
