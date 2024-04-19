import React from 'react'
import { GiNotebook } from "react-icons/gi";
import { PiPlanetFill } from "react-icons/pi";
import { padding,textStyles } from '../../../assets/styles';

const About = () => {
  return (
    <div className={`${padding.pad} flex flex-col md:flex-row`}>
      <div className='md:w-1/2'>
        <h2 className={`${textStyles.smHeadStart}`}>Welcome to Consultio</h2>
        <h3 className={`${textStyles.lgHeadStart}`}>Learn more about our consulting plans.</h3>
        <p className={`mt-3 ${textStyles.colSec} text-lg`}>Like what you see? Contact us to see what type of solutions we can deploy for your business!</p>

        <ul className='mt-7 flex flex-col gap-4'>
          <li className='flex lg:w-[80%] gap-5 items-center'>
            <GiNotebook className='text-[5.5rem] text-sky-500'/>
            <span>
            <h4 className='text-xl font-bold'>Exceptional Management.</h4>
            <p className={`${textStyles.colSec} mt-1.5 text-neutral-300`}>We help develop relationships that promotte the next phase of your business.</p>
            </span>
          </li>
          <li className='flex lg:w-[80%] gap-5 items-center'>
            <PiPlanetFill className='text-[5.5rem] text-sky-500'/>
            <span>
            <h4 className='text-xl font-bold'>Exceptional Management.</h4>
            <p className={`${textStyles.colSec} mt-1.5 text-neutral-300`}>We help develop relationships that promotte the next phase of your business.</p>
            </span>
          </li>
        </ul>
      </div>

      <div className='hidden md:block w-1/2 relative'>
        <div className='bg-gradient-to-r from-sky-300 to-sky-600 w-1/2 h-[90%] p-1.5 absolute bottom-0 right-10'>
          <span className='bg-black w-full h-full block' />
        </div>
        <div className='absolute w-2/3 h-[90%] top-4 left-[50%] translate-x-[-50%]'>
          <img src="./home/abt-img.jpg" alt="" className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default About