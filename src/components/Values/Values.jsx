import React from 'react'
import Heading from '../Heading/Heading'
import motorolaImage from '../../assets/motorola2.jpeg'

const values = [
  {
    id: 1,
    title:'Motorola Edge 70',
    description:'Experience the World’s Slimmest Edge Ever at just 5.99 mm, engineered with a premium Aircraft-grade Aluminum frame.',
    image: motorolaImage,
    addtocart:'Add to Cart',
  },
]

const Values = () => {
  return (
    <section>
      <div className='max-w-350 mx-auto px-10 py-20'>
        <Heading highlight='Just' heading='Launched' />

        <div className='mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {values.map(item => (
            <div key={item.id} className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden'>
              <div className='w-full h-44 bg-gray-100 flex items-center justify-center'>
                <img src={item.image} alt={item.title} className='w-full h-44 object-cover' />
              </div>
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-sm text-zinc-600 mt-2'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { values }
export default Values