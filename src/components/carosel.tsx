import React from 'react'
import Clothes from "@/components/assets/images/clothes1.jpeg"
import Image from 'next/image'
import Image1 from "@/components/assets/images/full30.webp"
import Image2 from "@/components/assets/images/full23.jpeg"
import Image3 from "@/components/assets/images/full31.webp"
const Carousel = () => {
  return (
    <div className="text-myhover mb-[100px] mt-[100px] body-font">

<div className="carousel w-full">
  <div id="item1" className="carousel-item w-full min-h-full" style={{ height: '500px' }}>
    <Image src={Clothes} alt="clothes" className='w-full'/>
    </div>
    
  <div id="item2" className="carousel-item w-full" style={{ height: '500px' }}>
 
  <Image src={Image2} alt="clothes" className='w-full'/>
  </div>
  <div id="item3" className="carousel-item w-full" style={{ height: '500px' }}>
  <Image src={Image1} alt="clothes" className='w-full'/></div>
  <div id="item4" className="carousel-item w-full"style={{ height: '500px' }}>
  
  <Image src={Image3} alt="clothes" className='w-full'/>
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs bg-black text-white">1</a>
  <a href="#item2" className="btn btn-xs  bg-black text-white">2</a>
  <a href="#item3" className="btn btn-xs  bg-black text-white">3</a>
  <a href="#item4" className="btn btn-xs  bg-black text-white">4</a>
</div>
    </div>
  )
}

export default Carousel