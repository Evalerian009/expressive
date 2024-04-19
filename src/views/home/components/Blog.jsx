import React, { useState } from 'react'
import { padding, textStyles } from '../../../assets/styles'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Slider from 'react-slick';
import { blogData } from '../constants';

const Blog = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={`${padding.pad}`}>
      <h3 className={`${textStyles.smHeadCenter}`}>Latest news</h3>
      <h4 className={`${textStyles.lgHeadCenter}`}>We’re ready to share our advice and experience.</h4>
      <p className={`${textStyles.colSec} text-center mt-3 md:w-[500px] mx-auto`}>Like what you see? Contact us to see what type of solutions we can deploy for your business!</p>

      <Slider {...settings} className='mt-10'>
        {blogData.map(blog => ((
          <BlogCard key={blog.id} blog={blog} />
        )))}
      </Slider>
    </div>
  )
}

export default Blog

const BlogCard = ({ blog }) => {
  const [ isHovered, setIsHovered ] = useState(false)
  return(
    <div className={`${isHovered ? 'greyscale-0' : 'grayscale'} duration-500 px-4`}>
      <div className='h-[300px] relative' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <div className='w-full h-[250px] rounded-md overflow-hidden'>
          <img src={blog.img} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='w-[80%] h-[115px] absolute left-[50%] bottom-0 translate-x-[-50%] rounded-xl bg-black p-4 overflow-hidden'>
          <div className='flex justify-center gap-1 md:gap-4 text-neutral-500 font-semibold text-[0.8rem]'>
            <span className='flex gap-1.5 items-center'>
              <MdOutlineCalendarMonth className='xl::text-[1.25rem]' />
              November 5, 2019
            </span>
            <span className='flex gap-1 items-center'>
              <TiUser className='md:text-[1.25rem]'/>
              Admin
            </span>
          </div>
          <div className={`overflow-hidden absolute bg-black left-0 ${isHovered ? 'top-3' : 'top-10 lg:top-14 xl:top-12'} duration-500 w-full px-4`}>
            <h4 className='font-bold xl:text-[1.25rem] leading-tight mt-1'>Food industry leaders often change.</h4>
            <button className='mt-2 font-semibold text-lg flex gap-0.5 items-center'>
              Read more
              <MdKeyboardDoubleArrowRight className='mt-1.5 text-[1.25rem]'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}