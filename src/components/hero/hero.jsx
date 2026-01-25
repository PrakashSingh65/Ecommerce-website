import React from 'react'
import unnamed from '../../assets/hero-mobile.png'

const hero = () => {
  return (
    <section>
        <div className='max-w-[1400px] max-auto px-10'>
            <div>
              <span className='bg-green-100 text-red-500 text-lg'>Best Mobile Phone</span>
            </div>
            <div>
                <img src={unnamed} alt="hero image" />
            </div>

        </div>
    </section>
  )
}

export default hero