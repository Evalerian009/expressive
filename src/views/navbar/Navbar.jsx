import React, { useEffect, useState } from 'react'
import SmHeader from './components/SmHeader'
import { navLinks } from './constants'
import { padding } from '../../assets/styles'
import { VscMenu } from "react-icons/vsc";
import { TfiClose } from "react-icons/tfi";

const Navbar = ({ menu, menuToggleOn, menuToggleOff}) => {
  const [ scroll, setScroll ] = useState(false)

  const checkScroll = () => ((
    window.scrollY >= 15 ? setScroll(true) : setScroll(false)
  )) 

  useEffect(() => {
    checkScroll()
    window.addEventListener("scroll", checkScroll)
  },[])

  return (
    <div>
      <SmHeader />

      <nav className={`flex justify-between items-end py-2 lg:py-0 lg:items-center  bg-black z-[999] ${padding.padX} ${scroll ? 'lg:fixed shadow-xl shadow-black lg:top-0' : 'lg:absolute lg:top-12'} duration-500 left-0 w-full relative`}>
        <a href="/" className='text-[1.5rem] font-light'>Expressive<span className='font-bold text-sky-600 text-[0.8rem]'>.com</span></a>

        <div className='hidden lg:flex text-[0.95rem] font-medium'>
          {navLinks.map(item=>((
            <a href={item.link} key={item.id} className='py-6 px-5 hover:text-green-600 duration-300'>{item.title}</a>
          )))}
        </div>

        <button className='text-[1.5rem] lg:hidden' onClick={menuToggleOn}>
          <VscMenu />
        </button>

        <div className={`flex flex-col lg:hidden text-[0.95rem] font-medium absolute z-[9999] bg-black top-0 right-0 w-[300px] h-screen py-[15%] px-10 gap-6 border-l border-l-green-500 ${menu ? 'right-0' : 'right-[-300px]'} duration-700`}>
          <button className='' onClick={menuToggleOff}>
            <TfiClose />
          </button>
          {navLinks.map(item=>((
            <a href={item.link} key={item.id} className='hover:text-green-600 duration-300 block'>{item.title}</a>
          )))}
        </div>

      </nav>
    </div>
  )
}

export default Navbar