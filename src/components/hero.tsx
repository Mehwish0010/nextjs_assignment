import React from 'react'
import { Button } from './ui/button'
import { FaShoppingBag } from "react-icons/fa";
import MovingText from './movingtexr';
const Hero = () => {
  return (
    <div className='mb-[100px]'>
      <div><MovingText/></div>
        <div className="hero min-h-[80vh] custom-img  bg-no-repeat ">
    
    <div className="hero-overlay bg-opacity-40"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 scroll-m-20 text-4xl text-white font-extrabold tracking-tight lg:text-5xl">Awaken <span className='text-myOrange'>Fashion</span></h1>
        <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-white">
        Embrace your unique style and let your wardrobe tell your story. Every piece is a celebration of individuality and self-expression.
        </p>
        <Button className='outline outline-offset-2 outline-1 text-white group hover:rounded-3xl duration-300 hover:text-myOrange' >
      <FaShoppingBag className='w-6 h-4 group-hover:text-myOrange group-hover:animate-bounce' /> Shop Now
    </Button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Hero
