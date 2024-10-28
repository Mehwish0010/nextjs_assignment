import React from 'react'
import Image from 'next/image'
import Pic from "@/components/assets/images/best sellers1.webp"
import Pic2 from"@/components/assets/images/shoess.webp"
import Pic3 from "@/components/assets/images/best1.webp"
import Best_Seller_Box from './best_sellerbox'
const Best_Sellers = () => {
  const best_Sell=[
    {
      src: Pic,
      alt: "dress",
      title: "Mid-Winter",
      description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
      price:3390
  },
  {
    src: Pic2,
    alt: "shoes",
    title: "Formal Court Shoes IF5005-GREEN",
    description: "Top Notch shoes for women",
    price:5000
},
{
  src: Pic3,
  alt: "dress",
  title: "Kidz Wear",
  description: "Printed Khaddar Shirt",
  price:2250
}
  
];

  return (
    <div className="text-myhover mb-[100px] mt-[100px] body-font">

<div className="text-center mb-10">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Best Selling Products
        </h1>
        
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex "/>
        </div>
</div>

{/*card*/}
<div className=' flex flex-wrap justify-center gap-5'>
{
  best_Sell.map((item,i) =>(
    <Best_Seller_Box src={ item.src} alt={item.alt} title={item.title} description={item.description} price={item.price}/>
  ))
}
</div>


    </div>
  )
}

export default Best_Sellers