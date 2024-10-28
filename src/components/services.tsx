import React from 'react'
import Image from 'next/image'
import Pic from "@/components/assets/images/Delivery2.png"
import Pic1  from "@/components/assets/images/customerss.png"
import Pic2 from "@/components/assets/images/moneyback.png"
const Services = () => {
  return (
    <>
  
  <section className="text-myhover mb-[100px] mt-[100px] body-font">
    <div className="container px-5  mx-auto">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
          Our Services
        </h1>
        
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-100 mb-5 flex-shrink-0">
            <Image src={Pic} alt="Delivery" width={100} height={100} className='w-20 h-20'/>
          </div>
          <div className="flex-grow">
            <h2 className=" scroll-m-20  group-hover:text-myOrange duration-300 text-xl font-bold tracking-tight lg:text-xl text-gray-900 sm:text-lg title-font  mb-3">
              Free Delivery
            </h2>
            <p className="leading-relaxed  text-myhover text-base scroll-m-20 border-b pb-2 font-semibold tracking-tight">
            Enjoy free delivery on all orders! Shop effortlessly and have your favorites delivered to your door
            </p>
           
          </div>
        </div>
        <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <Image src={Pic1} alt="Delivery" width={100} height={100} className='w-20 h-20'/>
          </div>
          <div className="flex-grow">
            <h2 className="scroll-m-20 text-xl font-bold  group-hover:text-myOrange duration-300tracking-tight lg:text-xl text-gray-900 sm:text-lg title-font  mb-3">
              24/7 Customer Service
            </h2>
            <p className="leading-relaxed  text-myhover text-base scroll-m-20 border-b pb-2 font-semibold tracking-tight">
            Our 24/7 services ensure you have support and access to your needs anytime, day or night.

            </p>
          
          </div>
        </div>
        <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <Image  src={Pic2} alt="Delivery" width={100} height={100} className='w-20 h-20'/>
          </div>

          <div className="flex-grow">
            <h2 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-xl text-gray-900 sm:text-lg title-font  mb-3">
              Cash-Back Guarantee
            </h2>
            <p className="leading-relaxed text-myhover text-base scroll-m-20 border-b pb-2 font-semibold tracking-tight">
            Our cash back guarantee ensures your satisfaction, giving you peace of mind with every purchase.
            </p>
           
        
            
          </div>
        </div>
      </div>
      
    </div>
  </section>
  <p />
</>

  )
}

export default Services