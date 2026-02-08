import React from 'react'
import Heading from '../Heading/Heading'
import iphoneImage from '../../assets/iphone.jpeg'
import samsungImage from '../../assets/Samsung.jpg'
import motorolaImage from '../../assets/motorola.jpg'
import vivo from '../../assets/vivo.jpg'
import realme from '../../assets/realme.jpg'
import pixel from '../../assets/pixel.jpg'

const categoryimage=[
  {
    id:1,
    title: 'Apple iPhone 17',
    descritption:'The best iPhone models available now',
    image:iphoneImage,
    button:'Buy Now',
    addtocart:'Add to Cart',
  },
  {
    id:2,
    title: 'Samsung Galaxy S24 5G',
    descritption:'The best Samsung models available now',
    image:samsungImage,
    button:'Buy Now',
    addtocart:'Add to Cart',
  },
  {
    id:3,
    title: 'MOTOROLA Edge 70',
    descritption:'The best Motorola models available now',
    image:motorolaImage,
    button:'Buy Now',
    addtocart:'Add to Cart',
  },
  {
    id:4,
    title: 'vivo',
    descritption:'The best vivo models available now',
    image:vivo,
    button:'Buy Now',
    addtocart:'Add to Cart', 

  },
  {
    id:5,
    title: 'realme',
    descritption:'The best realme models available now',
    image:realme,
    button:'Buy Now',
    addtocart:'Add to Cart',
  },
  {
    id:6,
    title: 'pixel',
    descritption:'The best pixel models available now',
    image:pixel,
    button:'Buy Now',
    addtocart:'Add to Cart',
    
  }
]

const Category = () => {

  return (

    <section>
      <div className='max-w-350 mx-auto px-10 py-20'>
            <Heading highlight="Premium " heading="Phone"/>

            

            <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {categoryimage.map(item => (
                <div key={item.id} className="bg-orange-300 rounded-xl border-2 border-black shadow-[0_8px_20px_rgba(0,0,0,0.8)] overflow-hidden hover:shadow-[0_12px_30px_rgba(0,0,0,1)] transition-shadow duration-300 mix-blend-lighten">
                  <div className="bg-orange-300 w-full h-48 flex items-center justify-center">
                    <img src={item.image} alt={item.title} className="h-48 object-contain mix-blend-multipl" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
                    <p className="text-zinc-600 mt-3 mb-9">{item.descritption}</p>
                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300">
                      {item.button ? item.button : 'Explore More'}
                    </button>
                    <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300 ml-4">
                      {item.addtocart ? item.addtocart : ''}
                    </button>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export { categoryimage }
export default Category