import Carousel from '@/components/carosel'
import Image from 'next/image'
import React from 'react'
import Dp1 from "@/components/assets/images/full3.jpg"
const About = () => {
  return (
    <div className="text-myhover mb-[100px] mt-[100px] body-font">
<div className="text-center mt-5 mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
        About Us
        </h1>
        
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
        </div>
<div className="hero bg-base-200 min-h-screen">

        
  <div className="hero-content flex-col lg:flex-row">
    <Image src={Dp1} alt="model" className='border rounded-xl'/>
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold text-myOrange tracking-tight lg:text-3xl ">Fashion Awaken Clothing</h1>
     
      <p className="scroll-m-20 mt-5 text-xl font-bold tracking-tight">
      Elevate your style and define your journey with fashion that empowers you. Our clothing seamlessly blends comfort and chic design, making every day a statement of who you are. Experience the confidence that comes from wearing styles that last, allowing you to express your unique self effortlessly.

      </p>
    
    </div>
  </div>
</div>


    <div className="about-container p-6 mt-6 ">

      <p className="scroll-m-20 text-xl font-bold tracking-tight">
        Welcome to<span className='text-myOrange'>Fashion Awaken Clothing Store </span>, where our passion meets purpose. Founded in 2012, we are dedicated in  providing innovative solutions that empower individuals and businesses to achieve their fullest potential.
      </p>
      <p className="scroll-m-20 text-xl font-bold tracking-tight">
        At Fountain Enterprises, we believe in integrity, creativity, and sustainability. Our team  that is dedicated and professionalized  is committed to delivering exceptional service and building lasting relationships with our clients and community.
 </p>     <p className="scroll-m-20 text-xl font-bold tracking-tight">Welcome to a world where fashion meets individuality! Here{`, we believe that style is more than just clothing; it’s an expression of who you are and where you’re going. Our collections are designed to empower you, combining comfort with chic aesthetics to ensure you feel as good as you look. Every piece is crafted with care, reflecting timeless elegance while embracing the latest trends. Whether you're dressing for a casual day out or a special occasion, our versatile styles are perfect for every moment in your life. Join us in celebrating your uniqueness and make every outfit a bold statement!`}
      </p>
      <p className="scroll-m-20 text-xl font-bold tracking-tight">
        Thank you for being part of our story. We look forward to connecting with you!
      </p>
      
    </div>
    <div className="px-80 text-4xl  items-center font-extrabold  tracking-tight py-5 bg-myhover text-myWhite w-full">
            <h1>
                <span className='items-center mt-28'>Fashion Fiesta Selector</span>
              
                
            
            </h1>
        </div>
 
<Carousel/>
    </div>
  ) 
}

export default About