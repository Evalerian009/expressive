import React from 'react'
import { colGrad, padding, textStyles } from '../../../assets/styles'
import { BiSolidQuoteRight } from "react-icons/bi";
import { MdStar } from "react-icons/md";
import Slider from 'react-slick';
import { testimonials } from '../constants';

const Testimonials = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className={`${padding.pad}`}>
      <div className='flex flex-col md:flex-row gap-7 items-center'>
        <div className='md:w-1/2'>
          <h3 className={`${textStyles.smHeadStart}`}>Testimonials</h3>
          <h4 className={`${textStyles.lgHeadStart}`}>We are very happy to get client’s review.</h4>
        </div>
        <p className={`${textStyles.colSec} md:w-1/2`}>Like what you see? Contact us to see what type of solutions we can deploy for your business!</p>
      </div>

      <Slider {...settings} className='lg:w-[800px] mx-auto mt-7 bg-cover' style={{backgroundImage: 'url(./home/testimonials/maps-bg.png)'}}>
        {testimonials.map(review=>((
          <div key={review.id} className='bg-[#000000a4] py-10'>
            <div className={`${colGrad.priLTR} w-[125px] h-[125px] mx-auto relative rounded-full p-2`}>
              <div className='w-[40px] h-[40px] grid place-content-center bg-neutral-700 rounded-full absolute top-0 right-0'>
                <BiSolidQuoteRight />
              </div>
              <img src={review.avatar} className='w-full h-full object-cover rounded-full' alt="" />
            </div>

            <h4 className='font-bold text-[1.25rem] text-center mt-3'>{review.name}</h4>
            <div className='text-[1.3rem] mt-1 text-amber-400 flex justify-center'>
              <MdStar /> <MdStar /> <MdStar /> <MdStar />
            </div>

            <p className={`text-neutral-300 text-lg md:text-[1.325rem] mt-5 text-center`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem atque ut explicabo veritatis, incidunt, tempore maxime delectus nihil voluptate dignissimos earum asperiores at cumque qui eum rerum? Exercitationem, quos veniam!</p>
          </div>
        )))}
      </Slider>
    </div>
  )
}

export default Testimonials