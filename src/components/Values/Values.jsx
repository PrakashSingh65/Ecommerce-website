import React from 'react'
import Heading from '../Heading/Heading'
import motorolaImage from '../../assets/motorola2.jpeg'

const values = [
  {
    id: 1,
    title: 'Motorola Edge 70',
    description: 'Experience the World\'s Slimmest Edge Ever at just 5.99 mm, engineered with a premium Aircraft-grade Aluminum frame.',
    image: motorolaImage,
    addToCart: 'Add to Cart',
  },
  {
    id: 1,
    title: 'Motorola Edge 70',
    description: 'Experience the World\'s Slimmest Edge Ever at just 5.99 mm, engineered with a premium Aircraft-grade Aluminum frame.',
    image: motorolaImage,
    addToCart: 'Add to Cart',
  },
  {
    id: 1,
    title: 'Motorola Edge 70',
    description: 'Experience the World\'s Slimmest Edge Ever at just 5.99 mm, engineered with a premium Aircraft-grade Aluminum frame.',
    image: motorolaImage,
    addToCart: 'Add to Cart',
  },
  {
    id: 1,
    title: 'Motorola Edge 70',
    description: 'Experience the World\'s Slimmest Edge Ever at just 5.99 mm, engineered with a premium Aircraft-grade Aluminum frame.',
    image: motorolaImage,
    addToCart: 'Add to Cart',
  },
  {
    id: 1,
    title: 'Motorola Edge 70',
    description: 'Experience the World\'s Slimmest Edge Ever at just 5.99 mm, engineered with a premium Aircraft-grade Aluminum frame.',
    image: motorolaImage,
    addToCart: 'Add to Cart',
  },
  {
    id: 1,
    title: 'Motorola Edge 70',
    description: 'Experience the World\'s Slimmest Edge Ever at just 5.99 mm, engineered with a premium Aircraft-grade Aluminum frame.',
    image: motorolaImage,
    addToCart: 'Add to Cart',
  },
]

const Values = () => {
  const handleAddToCart = (item) => {
    console.log(`Added ${item.title} to cart`)
    // Add your cart logic here
  }

  return (
    <section>
      <div className='max-w-6xl mx-auto px-10 py-20'>
        <Heading highlight='Just' heading='Launched' />

        <div className='mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {values.map(item => (
            <div key={item.id} className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col'>
              <div className='w-full h-44 bg-gray-100 flex items-center justify-center'>
                <img src={item.image} alt={item.title} className='w-full h-44 object-cover' />
              </div>
              <div className='p-4 flex flex-col flex-grow'>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-sm text-zinc-600 mt-2 flex-grow'>{item.description}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className='mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200'
                >
                  {item.addToCart}
                </button>
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