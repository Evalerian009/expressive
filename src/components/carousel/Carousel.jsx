import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const Carousel = ({ slideData, SlideTemplate }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const timeOutRef = useRef(null)
  const delay = 10000
  
  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex + 1 === slideData.length ? 0 : prevIndex + 1
    ) //if index equals array length then reset index to zero
  }
  
  const handlePrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex - 1 < 0 ? slideData.length - 1 : prevIndex - 1
    ) //if currentIndex is less than 0 reset the value of currentIndex by subtracting 1 from the array length and assigning it to currentIndex 
  }
    
  const resetTimeout = () => {
    if (timeOutRef.current){
      clearTimeout(timeOutRef.current)
    }
  }

  useEffect(() => {
    timeOutRef.current = setTimeout(() => setCurrentIndex(prevIndex => 
      prevIndex + 1 === slideData.length ? 0 : prevIndex + 1
    ), delay)
    return () => {
      resetTimeout()
    }
  }, [currentIndex])

  const handleDots = (index)  => {
    setCurrentIndex(index)
  }

  const Slide = () => {
    return(
      <AnimatePresence>
        {slideData.map((slide, index)=>(
          <SlideTemplate  slide={slide} />
        ))[currentIndex]}
      </AnimatePresence>
    )
  }

  return(
    <div className='relative z-[5] w-full h-full'>

      <div className='w-full absolute bottom-5 z-[12] flex gap-3 justify-center items-center mt-7'>
        {slideData.map((_, index) => (
          <span
            key={index} 
            className={`w-[14px] h-[5px] md:w-[7px] md:h-[14px] rounded cursor-pointer ${currentIndex === index ? 'bg-sky-500' : 'bg-white'} duration-300`}
            onClick={() => handleDots(index)}
          />
        ))}

        <div className='absolute w-full flex justify-between px-5 text-[2rem]'>
          <button 
            onClick={handlePrevious}
            className='text-white hover:text-sky-500 duration-500'
          >
            <RxCaretLeft />
          </button>
          <button 
            onClick={handleNext}
            className=' text-white hover:text-sky-500 duration-500'
          >
            <RxCaretRight />
          </button>
        </div>
      </div>
      
      <Slide />

    </div>
  )
}

export default Carousel