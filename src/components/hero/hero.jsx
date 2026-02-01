import React from 'react'
import herophone from '../../assets/unnamed.jpg'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
        <div className='bg-green-300 min-h-screen max-w-350 mx-auto px-10 flex md:flex-row flex-col item-center md:pt-25 pt-35'>
            <div className='flex-1'>
              <span className='bg-green-100 text-red-500 text-lg px-5 py-2 rounded-full'>Best Mobile Phone</span>
              <h1 className='md:text-7xl text-5xl/14 font-bold mt-3'>
                Register with a valid GSTIN and an active <span className='text-red-700'>Bank</span> <span className='text-red-700'>Account</span> to become an Your<span className='text-green-400 uppercase'>C</span>ompany.in seller.
              </h1>
              <p className='text-zinc-500 md:text-lg text-md max-w-132.5 mt-5 mb-10'>
                Build your online store effortlessly with Blocksy’s mobile-friendly
              </p>
              <Button content="Book Now"/>
            </div>
            <div>
                <img src={herophone} alt="Hero" />
            </div>

        </div>
    </section>
  )
}

export default Hero