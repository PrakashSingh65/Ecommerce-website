import React from 'react'
import Hero from '../hero/hero'
import Navbar from '../Navbar/navbar'
import Category from '../Category/Category'


const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Category/>
    </div>
  )
}

export default Home