import React, { useState } from 'react'
import { padding, textStyles } from '../../../assets/styles'
import { services } from '../constants'

const ServiceCard = ({service}) => {
  const [isActive, setIsActive] = useState(false)
  const Icon = service.icon
  return(
    <div className='text-center p-7 relative bg-cover' onMouseEnter={()=>setIsActive(true)} onMouseLeave={()=>setIsActive(false)}>
      <img src={service.img} alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
      <div className='absolute w-full h-full top-0 left-0 bg-[#00000096]' />
      <div className={`${isActive ? 'w-full' : 'w-0'} absolute top-0 left-0 h-full bg-gradient-to-r from-sky-700 to-sky-400 duration-500`} />
      <div className='relative'>
        <Icon className={`${textStyles.colPrL} text-[4rem] mx-auto ${isActive ? 'text-white' : ''} duration-500`}/>
        <h4 className='text-[1.35rem] font-bold'>{service.heading}</h4>
        <p>{service.txt}</p>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <div className={`${padding.pad} bg-stone-950`}>
      <div>
        <h2 className={`${textStyles.smHeadCenter}`}>Services</h2>
        <h3 className={`${textStyles.lgHeadCenter}`}>We’re ready to share our advice and experience.</h3>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
        {services.map(service=>{
          return(
            <ServiceCard key={service.id} service={service} />
          )
        })}
      </div>
    </div>
  )
}

export default Services