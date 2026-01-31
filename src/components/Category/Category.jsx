import React from 'react'
import Heading from '../Heading/Heading'
import iphoneImage from '../../assets/iphone.jpeg'

const Category = () => {
  return (
    <section>
        <div className='py-20'>
            <Heading highlight="Premium " heading="Phone"/>
        </div>
    </section>
  )
}

export default Category


const category=[
  {
    id:1,
    title: 'iPhone',
    descritption:'The best iPhone models available now',
    image:'iphoneImage',
  }
  {
    id:2,
    title: 'SAMSUNG',
    descritption:'The best Samsung models available now',
    image:'iphoneImage',
  }
  {
    id:3,
    title: 'MOTOROLA',
    descritption:'The best Motorola models available now',
    image:'iphoneImage',
  }
]