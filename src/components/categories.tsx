import Image from 'next/image'
import React from 'react'
import Image1 from '@/components/assets/images/limited.webp'
import Image2 from "@/components/assets/images/semiformal.webp"
import Image3 from "@/components/assets/images/formal.webp"
import Image4 from "@/components/assets/images/semii.webp"
import Image5 from "@/components/assets/images/kidzzz.webp"
import Image6 from "@/components/assets/images/acc.jpg"
import Image7 from "@/components/assets/images/wnter.webp"
import Image8 from "@/components/assets/images/bagsss.webp"
const Categories = () => {
  return (

<div className="text-myhover mb-[100px] mt-[100px] body-font">
    <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Our Categories
        </h1>
        
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex "/>
        </div>
</div>

{/*Categories grid*/}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>

    {/*class01*/}
    <div className='overflow-hidden mx-auto mb-7 lg:mb-0 z-[100] duration-500 group relative'>
        <Image src={Image1} alt="dress" height={350} width={350} className='rounded-xl duration-300 hover:scale-125 group'/>
    
    <div className='absolute bottom-20 scroll-m-20 text-xl font-extrabold tracking-tight bg-myGrey text-center text-myWhite w-full'>
        <h1>LIMITED EDITION</h1>
        </div>
    </div>
       {/*class02*/}
       <div className='overflow-hidden mx-auto mb-7 lg:mb-0 z-10 group relative'>
        <Image src={Image3} alt="dress" height={350} width={350} className='rounded-xl duration-300 hover:scale-125 group'/>
    
    <div className='absolute bottom-20 scroll-m-20 text-xl font-extrabold tracking-tight bg-myGrey text-center text-myWhite w-full'>
        <h1>FESTIVE ATTIRE</h1>
        </div>
    </div>
       {/*class03*/}
       <div className='overflow-hidden mx-auto mb-7 lg:mb-0 z-10 group relative'>
        <Image src={Image2} alt="dress" height={350} width={350} className='rounded-xl duration-300 hover:scale-125 group'/>
    
    <div className='absolute bottom-20 scroll-m-20 text-xl font-extrabold tracking-tight bg-myGrey text-center text-myWhite w-full'>
        <h1>FORMAL</h1>
        </div>
    </div>
       {/*class04*/}
       <div className='overflow-hidden mx-auto mb-7 lg:mb-0 z-10 group relative'>
        <Image src={Image4} alt="dress" height={350} width={350} className='rounded-xl duration-300 hover:scale-125 group'/>
    
    <div className='absolute bottom-20 scroll-m-20 text-xl font-extrabold tracking-tight bg-myGrey text-center text-myWhite w-full'>
        <h1>SEMI-FORMAL</h1>
        </div>
    </div>
</div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>

    {/*class01*/}
    <div className='overflow-hidden mx-auto mb-7 lg:mb-0 z-10 group relative'>
        <Image src={Image5} alt="dress" height={350} width={350} className='rounded-xl duration-300 hover:scale-125 group'/>
    
    <div className='absolute bottom-20 scroll-m-20 text-xl font-extrabold tracking-tight bg-myGrey text-center text-myWhite w-full'>
        <h1>KIDS ATTIRE</h1>
        </div>
    </div>
       {/*class02*/}
       <div className='overflow-hidden mx-auto mb-7 lg:mb-0 z-10 group relative'>
        <Image src={Image7} alt="dress" height={350} width={350} className='rounded-xl duration-300 hover:scale-125 group'/>
    
    <div className='absolute bottom-20 scroll-m-20 text-xl font-extrabold tracking-tight bg-myGrey text-center text-myWhite w-full'>
        <h1>WINTER GALA</h1>
        </div>
    </div>
       {/*class03*/}
       <div className='overflow-hidden mx-auto mb-7 lg:mb-0 z-10 group relative'>
        <Image src={Image6} alt="dress" height={350} width={350} className='rounded-xl duration-300 hover:scale-125 group'/>
    
    <div className='absolute bottom-20 scroll-m-20 text-xl font-extrabold tracking-tight bg-myGrey text-center text-myWhite w-full'>
        <h1>ACCESSORIES</h1>
        </div>
    </div>
       {/*class04*/}
       <div className='overflow-hidden mx-auto mb-7 lg:mb-0 z-10 group relative mt-20'>
        <Image src={Image8} alt="dress" height={350} width={350} className='rounded-xl  items-center duration-300 hover:scale-125 group'/>
    
    <div className='absolute bottom-20  scroll-m-20 text-xl font-extrabold tracking-tight bg-myGrey text-center text-myWhite w-full'>
        <h1>SHOES/BAGS</h1>
        </div>
    </div>
</div>

</div>

 














  )
}

export default Categories