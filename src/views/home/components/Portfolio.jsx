import React, { useState } from 'react'
import { colGrad, padding, textStyles } from '../../../assets/styles'
import Slider from 'react-slick';
import { AiFillPlusCircle } from "react-icons/ai";
import { faqsData, portfolioData } from '../constants';
import FAQS from './FAQS';

const Portfolio = () => {

  var settings = {
    infinite: true,
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    focusOnSelect: true
  };

  return (
    <div className={`${padding.pad} flex flex-col-reverse lg:flex-row`}>
      <div className='lg:w-1/2'>
        <Slider {...settings}>
          {portfolioData.map((slide)=>((
            <BlogCard key={slide.id} slide={slide}  />
          )))}
        </Slider>
      </div>

      <div className={`lg:w-1/2 py-10 md:text-center lg:text-start`} >
        <h2 className={`${textStyles.smHeadStart}`}>Our Portfolio</h2>
        <h3 className={`${textStyles.lgHeadStart}`}>Our Recent Case Studies reach goal.</h3>
        
        <FAQS faqs={faqsData} />
      </div>
    </div>
  )
}

export default Portfolio

const BlogCard = ({ slide }) => {
  const [ isHovered, setIsHovered ] = useState(false)
  const hoverHandler = () => {
    setIsHovered(true)
  }
  const notHoverHandler = () => {
    setIsHovered(false)
  }
  return(
    <div className='w-[95%] md:w-[90%] md:ml-14'>
      <div 
        className='w-full h-[450px] relative flex flex-col justify-end overflow-hidden border-[5px] border-sky-800' 
        onMouseEnter={hoverHandler} 
        onMouseLeave={notHoverHandler}
      >
        <img src={slide.img} alt="" className={`${isHovered ? 'rotate-6 scale-125' : ''} duration-1000 w-full h-full object-cover absolute top-0 left-0`} />
        <div className={`absolute w-full h-full top-0 left-0 ${isHovered ? 'bg-[#00000042]' : ''} bg-[#0000007b] duration-500`} />
        <div className={`${isHovered ? 'opacity-1' : 'opacity-0'} duration-1000 w-[110%] h-[175px] bg-[#000000c5] absolute blur-[1.5rem] -bottom-5 -left-8`} />

        <div className={`${isHovered ? 'opacity-1' : 'opacity-0'} duration-1000 relative py-4 px-6 flex justify-between`}>
          <div>
            <h4 className={`${colGrad.priLTRlight} text-transparent bg-clip-text text-lg font-semibold`}>{slide.smTxt}</h4>
            <h5 className='text-2xl font-bold'>{slide.lgTxt}</h5>
          </div>
          <button className='text-sky-500 text-[2.5rem]'>
            <AiFillPlusCircle />
          </button>
        </div>
      </div>
    </div>
  )
}