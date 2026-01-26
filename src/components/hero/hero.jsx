import React from 'react'
import herophone from '../../assets/unnamed.jpg'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
        <div className='max-w-\[1400px\] mx-auto px-10 flex item-center'>
            <div>
              <span className='bg-green-100 text-red-500 text-lg px-5 py-2 rounded-full'>Best Mobile Phone</span>
              <h1 className='text-5xl font-bold'>
                Register with a valid GSTIN and an active <span className='text-red-700'>Bank</span> <span className='text-red-700'>Account</span> to become an Your<span className='text-green-400 uppercase'>C</span>ompany.in seller.
              </h1>
              <p className='text-zinc-500 text-lg'>
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