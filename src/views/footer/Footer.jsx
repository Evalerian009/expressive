import React from 'react'
import { colGrad, padding, textStyles } from '../../assets/styles'
import { ImLocation2 } from "react-icons/im";
import { MdPhone } from "react-icons/md";
import { RxCaretRight } from "react-icons/rx";
import { footerLinks, footerSocials } from './constants';
import { IoMdPaperPlane } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className='hidden md:block w-[100%] md:h-[725px] lg:h-screen' />
      <div className={`${padding.pad} flex flex-wrap gap-y-7 justify-between bg-neutral-950 md:fixed w-full bottom-0`}>
        <div className='w-[300px]'>
          <a href="" className='font-semibold text-[1.5rem]'>Logo</a>
          <ul className='mt-5 lg:mt-10 flex flex-col gap-3'>
            <li className='flex gap-1.5 '>
              <ImLocation2 className='text-[1.25rem] mt-1' />
              30 Commercial Road, Fratton Australia
            </li>
            <li className='flex items-center gap-1.5 leading-none'>
              <MdPhone className='text-[1.25rem]' />
              1-888-452-1505
            </li>
          </ul>

          <h4 className='mt-5 font-bold text-sky-500'>Open hours:</h4>
          <ul className='mt-2 flex flex-col gap-2'>
            <li className='flex items-center gap-1 leading-none'>
              Mon – Sat: 8 am – 5 pm,
            </li>
            <li className='flex items-center gap-1 leading-none'>
              Sunday: Closed
            </li>
          </ul>
        </div>

        <div className='w-[300px]'>
          <h3  className='font-semibold text-[1.5rem] flex items-center gap-3'>
            Links:
            <span className='block w-[250px] h-[0.5px] bg-gradient-to-r from-neutral-600 to-neutral-800 mt-2' />
          </h3>
          <div className={`${textStyles.colSec} flex flex-col gap-y-4 gap-x-16 mt-4 h-[220px] justify-center flex-wrap`}>
            {footerLinks.map((data, index)=>((
              <a href='' key={data.id} className='flex items-center gap-1 hover:translate-x-3 duration-[0.75s] hover:text-white relative after:w-0 hover:after:w-[40px] after:duration-500 after:h-[2px] after:bg-white after:absolute after:bottom-0 after:left-5'>
                <RxCaretRight />
                {data.title}
              </a>
            )))}
          </div>
        </div>

        <div>
          <h3  className='font-semibold text-[1.5rem] flex items-center gap-3'>
            Newsletter:
            <span className='block w-[150px] md:w-[250px] h-[0.5px] bg-gradient-to-r from-neutral-600 to-neutral-800 mt-2' />
          </h3>
          <p className={`${textStyles.colSec} mt-4`}>Subscribe to our newsletter to get updates.</p>
          <form className='mt-7'>
            <div className='flex'>
              <input type="text" className='w-[80%] py-2 bg-neutral-800 indent-4 outline-none' placeholder='Your Email Address' />
              <button className={`${colGrad.priLTR} w-[20%] grid place-content-center`}>
                <IoMdPaperPlane className='text-[1.5rem]' />
              </button>
            </div>
          </form>
          <div className='flex mt-5 gap-4 flex-wrap'>
            <img src="./footer/apple-store.png" alt="" />
            <img src="./footer/google-play.png" alt="" />
          </div>
          <div className='mt-7 flex gap-2'>
            {footerSocials.map((item, index)=>{
              const Logo = item.icon
              return(
                <button key={item.id} className='w-[30px] h-[30px] text-[1.3rem] bg-white rounded-full grid place-content-center hover:-translate-y-1.5 duration-300'>
                  <Logo className={`${item.col}`} />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer