import React from 'react'
import Carousel from '../../../components/carousel/Carousel'
import { carouselData } from '../constants'
import HeroSlide from './HeroSlide'
import { AnimatePresence } from 'framer-motion'

const Hero = () => {
  return (
    <div className='w-screen md:h-[600px] lg:h-[750px]' style={{}}>
      <Carousel 
        slideData={carouselData}
        SlideTemplate={HeroSlide}
      />
    </div>
  )
}

export default Hero