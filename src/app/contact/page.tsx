import React from 'react'
import Pic from "@/components/assets/images/karachipic.jpg"
import Image from 'next/image'
import Image1 from "@/components/assets/images/lahore.png"
import Image2 from "@/components/assets/images/isl.jpg"
import Image3 from "@/components/assets/images/multan.webp"
const Contact = () => {
  return (
    <div className="text-myhover mb-[100px] mt-[100px] body-font">
      <div className="text-center mt-5 mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
        Contact Us
        </h1>
        
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
        </div>
        {/*Branches*/}
        <div className="text-center mt-5 mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
        With branches nationwide, {`we’re never far away—your local connection to our exceptional service!`}
        </h1>
        </div>
       
       
    {/*CHART*/}
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-5 mx-auto flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">
        1
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  text-white rounded-full inline-flex items-center justify-center">
        <Image src={Pic} alt="logo"/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="scroll-m-20  text-myhover border-b pb-2 text-4xl font-bold tracking-tight ">
            Karachi
          </h2>
         
          <p className="leading-7 [&:not(:first-child)]:mt-2 font-bold text-xl text-myOrange">Clifton, Gulshan-e-Iqbal, Korangi, Saddar, North Nazimabad, DHA, Malir, Liaquatabad.</p>
       
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">
        2
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
        <Image src={Image1} alt="logo"/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="scroll-m-20  text-myhover border-b pb-2 text-4xl font-bold tracking-tight ">
            Lahore
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-2 font-bold text-xl text-myOrange">
          Gulberg, Model Town, DHA, Johar Town, Faisal Town, Liberty Market, Allama Iqbal Town, Bahria Town.

          </p>
        </div>
      </div>
    </div>
  
    <div className="flex relative pt-10 pb-20 mt-2sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">
        3
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  text-white rounded-full inline-flex items-center justify-center">
        <Image src={Image3} alt="logo"/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="scroll-m-20  text-myhover border-b pb-2 text-4xl font-bold tracking-tight ">
            Multan
          </h2>
         
          <p className="leading-7 [&:not(:first-child)]:mt-2 font-bold text-xl text-myOrange">Clifton, Gulshan-e-Iqbal, Korangi, Saddar, North Nazimabad, DHA, Malir, Liaquatabad.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none" />
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">
        4
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  text-white rounded-full inline-flex items-center justify-center">
        <Image src={Image2} alt="logo"/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="scroll-m-20  text-myhover border-b pb-2 text-4xl font-bold tracking-tight ">
            Isalamabad
          </h2>
         
          <p className="leading-7 [&:not(:first-child)]:mt-2 font-bold text-xl text-myOrange">F-6, F-7, F-8, G-10, G-11, Bahria Town, I-8, Blue Area.</p>
        </div>
      </div>
    </div>
    </div>
   </section>
<div>

<section className="text-gray-600 body-font relative">
<div className="text-center mt-5 mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
        Your feedback shapes our future—share your thoughts with us
        </h1>
        </div>
  <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font leading-7 text-lg mt-4 scroll-m-20  font-semibold tracking-tight text-gray-600">
            ADDRESS
          </h2>
          <p className="mt-1 leading-7 text-lg  scroll-m-20  font-semibold tracking-tight text-gray-600">
            HeadOffice:DHA Phase 5 Karachi
          
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed cursor-pointer">fashionawaken@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed cursor-pointer">03212599740</p>
        </div>
      </div>
    </div>

    {/* NEXT DIV */}

    <div className="">

    
      <h2 className="scroll-m-20 border-b text-myhover pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Feedback
      </h2>
      <p className="scroll-m-20 text-xl font-semibold tracking-tight">
        
      We value your insights—please share your feedback to help us serve you better
      </p>
      <div className="relative  mt-2 mb-4">
        <label htmlFor="name" className="leading-7 text-lg mt-4 scroll-m-20  font-semibold tracking-tight text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-lg mt-4 scroll-m-20  font-semibold tracking-tight text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-lg mt-4 scroll-m-20  font-semibold tracking-tight text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-myOrange rounded text-lg">
        Submit
      </button>
      <p className="text-xs text-gray-500 mt-3">
      © 2022 Fashion Awaken Clothing. All rights reserved
      </p>
    </div>
  </div>
</section>




</div>

  </div>
  )
}

export default Contact