import Best_Seller_Box from '@/components/best_sellerbox';
import React from 'react'
import Dress1 from "@/components/assets/images/limited2.webp"
import Dress2 from "@/components/assets/images/limited10.webp"
import Dress3 from "@/components/assets/images/limted21.webp"
import Dress4 from "@/components/assets/images/limited16.webp"
import Dress5 from "@/components/assets/images/limited15.webp"
import Dress6 from "@/components/assets/images/limited14.webp"
import Dress7 from "@/components/assets/images/limited11.webp"
import Dress8 from "@/components/assets/images/limted22.webp"
import Dress9 from "@/components/assets/images/limited7.webp"
import Dress10 from "@/components/assets/images/limited20.webp"
import Dress11 from "@/components/assets/images/limited1.webp"
import Dress12 from "@/components/assets/images/limited8.webp"
import Dress13 from "@/components/assets/images/limited6.webp"
import Dress14 from "@/components/assets/images/limited13.webp"
import Dress15 from "@/components/assets/images/limited4.webp"
const Category = () => {

    const best_Sell=[
        {id:1,
          src: Dress8,
          alt: "dress",
          title: "Mid-Winter",
          description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
          price:3390
      },
      {id:2,
        src: Dress2,
        alt: "shoes",
        title: "Formal Court Shoes IF5005-GREEN",
        description: "Top Notch shoes for women",
        price:5000
    },
    {id:3,
      src:Dress13 ,
      alt: "dress",
      title: "Kidz Wear",
      description: "Printed Khaddar Shirt",
      price:2250
    },{id:4,
      src: Dress5,
      alt: "dress",
      title: "Mid-Winter",
      description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
      price:3390
  },{id:5,
    src: Dress6,
    alt: "dress",
    title: "Mid-Winter",
    description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
    price:3390
},{id:6,
  src: Dress7,
  alt: "dress",
  title: "Mid-Winter",
  description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
  price:3390
},{id:7,
  src: Dress4,
  alt: "dress",
  title: "Mid-Winter",
  description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
  price:3390
},{id:8,
  src: Dress9,
  alt: "dress",
  title: "Mid-Winter",
  description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
  price:3390
},{id:9,
  src: Dress1,
  alt: "dress",
  title: "Mid-Winter",
  description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
  price:3390
},{id:10,
  src: Dress10,
  alt: "dress",
  title: "Mid-Winter",
  description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
  price:3390
},{id:11,
  src: Dress15,
  alt: "dress",
  title: "Mid-Winter",
  description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
  price:3390
},{id:12,
  src: Dress14,
  alt: "dress",
  title: "Mid-Winter",
  description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
  price:3390
},{id:13,
  src: Dress3,
  alt: "dress",
  title: "Mid-Winter",
  description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
  price:3390
},{id:14,
  src: Dress12,
  alt: "dress",
  title: "Mid-Winter",
  description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
  price:3390
},{id:15,
  src: Dress11,
  alt: "dress",
  title: "Mid-Winter",
  description: "3 Piece Printed Khaddar Suit With Light Khaddar Dupatta",
  price:3390
},
      
    ];
  return (
    <div className="text-myhover mb-[100px] mt-[100px] body-font">

<div className="text-center mb-10">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Limited Edition
        </h1>
        
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex "/>
        </div>
</div>

{/*Category start */}
<div className=' flex flex-wrap justify-center gap-5'>
{
  best_Sell.map((item) =>(
    <Best_Seller_Box  key={item.id}src={ item.src} alt={item.alt} title={item.title} description={item.description} price={item.price}/>
  ))
}
</div>



</div>
  )
}

export default Category
