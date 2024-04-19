import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HeroSlide = ({ slide, key }) => {
  return (
    <>
      <motion.div
        initial={{opacity: 0.4}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration:2}}
        className='h-full flex flex-col justify-center relative px-5 py-20 md:p-10 overflow-hidden'>
        <motion.img
          initial={{scale: 1.2, opacity: 0.3}}
          animate={{scale: 1, opacity: 1}}
          exit={{scale: 0.8, opacity: 0}}
          transition={{duration: 7, ease: [0.43, 0.13, 0.23, 0.96]}}
          src={slide.bgImg} 
          alt="" 
          className='w-full h-full absolute object-cover top-0 left-0' 
        />
        <div className='absolute top-0 left-0 w-full h-full bg-[#00000075]' />
        <div className='relative md:w-[500px] lg:w-[600px]'>
          <motion.h1 
            className='uppercase text-sky-400 font-bold'
            initial={{opacity: 0, y: 25}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1}}
          >{slide.headerSm}</motion.h1>

          <motion.h2
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 1, delay: 1.5}}
            className='text-[2.5rem] md:text-[3.5rem] lg:text-[4.2rem] font-bold leading-tight lg:leading-[4.7rem]'
          >{slide.headerLg}</motion.h2>
          <motion.p 
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 1, delay: 2}}
            className='text-lg font-semibold mt-2'>{slide.txt}</motion.p>

          <motion.button 
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1, delay: 2.5}}
            className='bg-sky-500 font-semibold mt-3 w-fit py-3.5 px-14 rounded-md'>Our Team</motion.button>
        </div>
      </motion.div>
    </>
  )
}

export default HeroSlide