import React from 'react'
import { Button } from './ui/button'
import { FaShoppingCart } from "react-icons/fa";
import Image, { StaticImageData } from 'next/image';

const Best_Seller_Box= ({src,alt,title,description,price  }:{src:string | StaticImageData,  alt:string ,title:string,description:string,price:number}) => {
  return (
    <div className=" w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
 <div className='block relative h-[23rem] rounded overflow-hidden'>
  <Image
  src={src}
  alt={alt}
  height={400}
  width={400}
  /> 
 
 </div>
  <div className="mt-4">
    <h2 className="text-black scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0">{title}</h2>
  <p className=" mt-2scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight first:mt-0">{description}</p>
  <p className=" mt-2scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight first:mt-0">PKR {price}</p>
  
  </div>
  <div className='mt-4'>
    <Button className='group  bg-black hover:bg-transparent rounded-xl absolute bottom-2 right-2  text-myWhite hover:text-myOrange' >
      <FaShoppingCart className='mt-2 h-4 w-4 group-hover:text-myOrange duration-300 scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight'/>Add to Cart</Button>
      
  </div>
</div>

  )
}

export default Best_Seller_Box
