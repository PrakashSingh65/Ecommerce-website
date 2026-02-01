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
  },
  {
    id:2,
    title: 'Samsung Galaxy S24 5G',
    descritption:'The best Samsung models available now',
    image:samsungImage,
  },
  {
    id:3,
    title: 'MOTOROLA Edge 70',
    descritption:'The best Motorola models available now',
    image:motorolaImage,
  },
  {
    id:4,
    title: 'vivo',
    descritption:'The best vivo models available now',
    image:vivo,
  },
  {
    id:5,
    title: 'realme',
    descritption:'The best realme models available now',
    image:realme,
  },
  {
    id:6,
    title: 'pixel',
    descritption:'The best pixel models available now',
    image:pixel,
  }
]

const Category = () => {
  return (
    <section>
        <div className='py-20'>
            <Heading highlight="Premium " heading="Phone"/>

            <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {categoryimage.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-contain" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-zinc-500 mt-2">{item.descritption}</p>
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