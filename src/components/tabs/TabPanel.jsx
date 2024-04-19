import React from 'react'
import { TiArrowRight } from "react-icons/ti";
import { motion } from 'framer-motion';

export const TabPanel = ({ tabData }) => {
  return (
    <motion.div
      className='h-full flex items-center lg:block'
      initial={{opacity: 0.7}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
    >
      <div className='relative w-full h-full'>
          <motion.img 
            src={tabData.tabPanelImg} 
            alt="" 
            className='w-full h-full'
            initial={{x: 30}}
            animate={{x:0}}
            transition={{duration: 0.7}}
          />
          <span className='absolute top-0 left-0 w-full h-full bg-[#00000052]' />
        </div>

        <motion.div 
          className='absolute lg:-top-5 left-[50%] bg-white border-t-[6px] border-t-red-500 py-8 px-7 lg:w-[65%] w-[85%]'
          initial={{y: 25}}
          animate={{y: 0}}
          transition={{duration: 0.5}}
          style={{translateX: '-50%'}}
        >
          <h3 className='text-xl leading-snug'>{tabData.tabPanelHeader}</h3>
          <h4 className='text-slate-400 border-b border-slate-400 w-fit text-lg py-0.5 mt-1'>{tabData.tabPanelSubHeader}</h4>
          <p className='mt-3'>{tabData.tabPanelText}</p>
          <button className='flex gap-1 bg-red-500 font-bold items-center text-white rounded py-1 px-4 mt-5 relative overflow-hidden before:w-4 before:h-8 before:bg-[#ffffff] before:blur-lg before:rounded-full before:absolute before:left-[-100%] hover:before:left-[200%] before:duration-[1.5s]'>
            Get Started
            <TiArrowRight className='text-[2rem]' />
          </button>
        </motion.div>
    </motion.div>
  )
}