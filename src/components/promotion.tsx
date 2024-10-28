import React from 'react'

const Promotions  = () => {
  return (
    <>
    <section className="text-myhover mb-[100px] mt-[100px] body-font">
    <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
          Our Promotions
        </h1>
        
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div
  className="hero h-[30rem] mt-2 promo-1 rounded-xl">
  
  <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="scroll-m-20 hover:text-myOrange text-4xl font-bold tracking-tight uppercase">Huge Sale Upto <span className='text-myOrange'>40%</span> Off</h1>
      <p className="scroll-m-20 text-base font-medium text-white mt-2 tracking-tight">
      Join us for our seasonal sale and stock up on essentials at amazing prices!
      </p>
      
    </div>
  </div>
</div>

        <div
  className="hero h-[30rem] mt-2 promo-2 rounded-xl">
  
  <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="scroll-m-20 hover:text-myOrange text-4xl font-bold tracking-tight uppercase">Huge Sale Upto <span className='text-myOrange animate-bounce'>60%</span> Off</h1>
      <p className="scroll-m-20 text-base font-medium hover:text-myOrange text-white mt-2 tracking-tight">
      Fun Fashion for Future Stars!
      </p>
      
    </div>
  </div>
</div>
</div>



        
      
      
    </div>





    </section>
    
    </>
  )
}

export default Promotions 