import React, { useState } from 'react'
import Home from './views/home/Home'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './views/navbar/Navbar';
import Footer from './views/footer/Footer';

const App = () => {
  const [ menu, setMenu ] = useState(false)
  const menuToggleOn = () => {
    setMenu(true);
  }
  const menuToggleOff = () => {
    setMenu(false);
  }
  return (
    <div className={`${menu ? 'overflow-y-hidden h-screen' : 'overflow-y-scroll'} w-screen overflow-x-hidden text-green-50 relative text-[0.95rem] poppins-regular`}>
      <Navbar menu={menu} menuToggleOff={menuToggleOff} menuToggleOn={menuToggleOn} />
      <div className='relative z-[99] bg-black'onClick={menuToggleOff} >
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App