import React from 'react'
import { colGrad, padding, textStyles } from '../../../assets/styles'
import { pricingData } from '../constants'
import { BsCheck } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className={`${padding.pad} bg-fixed relative bg-cover`} style={{backgroundImage: 'url(./home/pricing-bg.jpg)'}}>
      <div className='absolute top-0 left-0 w-full h-full bg-[#000000ce]' />
      <div className='relative'>
        <h2 className={`${textStyles.smHeadCenter}`}>Pricing</h2>
        <h3 className={`${textStyles.lgHeadCenter}`}>We offer the best price to serve you.</h3>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14'>
        {pricingData.map((plan,index)=>((  
          <div key={plan.id} className='border-[2px] border-zinc-600 relative rounded'>
            <h4 className='text-center p-3 text-[1.3rem] font-bold border-b-[2px] border-zinc-600'>{plan.plan}</h4>
            <h5 className={`${textStyles.colPrL} flex p-3 justify-center border-b-[2px] border-zinc-600`}>
              <span className='inline-block self-start text-[1.75rem]'>$</span>
              <span className='text-[4.5rem] text-white inline-block font-[400] self-center leading-none'>{plan.price}</span>
              <span className='inline-block self-end text-lg'>/month</span>
            </h5>
            <ul className='mt-7 px-7 py-2 flex flex-col gap-0.5'>
              {plan.services.map((service,index)=>((
                <li key={index} className='flex gap-0.5 items-center'>
                  <span className={`${textStyles.colPr} text-[2rem]`}>
                    <BsCheck />
                  </span>
                  <span>{service}</span>
                </li>
              )))}
            </ul>

            <div className='py-7 px-12 mx-auto'>
              <button className={`${colGrad.priLTR} w-full py-2 rounded-md font-semibold`}>Select this plan</button>
            </div>
          </div>
        )))}
      </div>
    </div>
  )
}

export default Pricing