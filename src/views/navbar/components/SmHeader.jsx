import React from 'react'
import { smHeader } from '../constants'
import { HiMail, HiPhone } from "react-icons/hi";
import { HiClock } from "react-icons/hi2";
import { padding, textStyles } from '../../../assets/styles';

const SmHeader = () => {
  return (
    <div className={`bg-neutral-900 w-full ${padding.padX} py-2.5 hidden md:flex justify-between items-center flex-wrap`}>
      <div className='flex gap-3'>
        {smHeader.map(item => {
          const Icon = item.icon
          return(  
            <button className='h-7 grid place-content-center' key={item.id}>
              <Icon className={`block text-[1.1rem] hover:-translate-y-1.5 hover:text-green-400 duration-300`}/>
            </button>
          )
        })}
      </div>

      <div className='flex ml-auto'>
        <p className='px-3 flex items-center text-[0.9rem] gap-1 border-r'>
            <HiMail className={`${textStyles.colPr} text-[1.1rem]`} />
            info@mymail.go
        </p>
        <p className='px-3 flex items-center text-[0.9rem] gap-1 border-r'>
            <HiPhone className={`${textStyles.colPr} text-[1.1rem]`} />
            (+123) 456-7890
        </p>
        <p className='px-3 flex items-center text-[0.9rem] gap-1'>
            <HiClock className={`${textStyles.colPr} text-[1.1rem]`} />
            Sunday - Friday: 9am - 8pm
        </p>
      </div>
    </div>
  )
}

export default SmHeader