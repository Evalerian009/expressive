import React, { useState } from 'react'
import { colGrad, padding, textStyles } from '../../../assets/styles'
import { Field, TextArea } from '../../../components/FormComponents';
import { HiPhone } from "react-icons/hi2";
import { motion } from 'framer-motion';

const Contact = () => {
  const [ index, setIndex ] = useState(1)
  const increment = () => {
    if (index < 3) {
      setIndex(index + 1);
    }
  };
  const decrement = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };
  return (
    <div className={`${padding.pad} flex items-center flex-wrap`}>
      <div className='hidden md:block w-2/5 lg:w-1/2 h-[500px] relative overflow-hidden'>
        <div
          className={`w-[80%] h-full absolute top-0 left-0 ${colGrad.priTTB}`}
          style={{clipPath: `polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)`}}
        />
        <img 
          src="./home/contact/contact-img.jpg" 
          className='w-[80%] h-full absolute object-cover right-0' 
          alt=""
          style={{clipPath: `polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)`}}
        />
      </div>

      <div className='md:p-7 md:w-3/5 lg:w-1/2 relative bg-cover bg-center md:h-[500px] flex flex-col justify-center'>
        <img src="./home/contact/contact-bg.jpg" className='absolute top-0 left-0 w-full h-full hidden md:block' alt="" />
        <div className='absolute top-0 left-0 w-full h-full bg-[#000000d3]' />
        <div className='relative'>
          <h2 className={`${textStyles.smHeadStart}`}>Want to hire us?</h2>
          <h3 className={`${textStyles.lgHeadStart}`}>Want to work with us?</h3>
          <p className={`${textStyles.colSec} lg:w-[85%] mt-2`}>Like what you see? Contact us to see what type of solutions we can deploy for your business!</p>
        </div>

        <section className='flex flex-col gap-5 relative'>
          <div className='mt-5 flex items-center gap-1.5'>
            <button className={`w-[45px] h-[45px] rounded-full ${index === 1 ? colGrad.priLTR: 'bg-black'} border border-zinc-400 duration-500 font-bold grid place-content-center`} onClick={()=>setIndex(1)}>01</button>
            <div className={`w-[75px] border-t-[1.5px] border-dashed border-t-zinc-400`} />
            <button className={`w-[45px] h-[45px] rounded-full  ${index === 2 ? colGrad.priLTR: 'bg-black'} border border-zinc-400 duration-500 font-bold grid place-content-center`} onClick={()=>setIndex(2)}>02</button>
            <div className={`w-[75px] border-t-[1.5px] border-dashed border-t-zinc-400`} />
            <button className={`w-[45px] h-[45px] rounded-full  ${index === 3 ? colGrad.priLTR: 'bg-black'} border border-zinc-400 duration-500 font-bold grid place-content-center`} onClick={()=>setIndex(3)}>03</button>
          </div>

          <form className='lg:w-[70%]'>
            {index === 1 &&
              <motion.div
                initial= {{opacity: 0}}
                animate= {{opacity: 1}}
                transition={{duration:0.5}}
              >
                <h4 className='font-semibold text-lg'>Personal Information:</h4>
                <div className='mt-3 flex flex-col gap-4'>
                  <div className='flex gap-4'>
                    <Field 
                      placeholder={"Your Name"}
                      tWStyle='w-1/2'
                    />
                    <Field 
                      placeholder={"Email Address"}
                      tWStyle='w-1/2'
                    />
                  </div>
                  <Field
                    placeholder={"Phone Number"}
                    type="tel"
                    tWStyle={'w-full'}
                  />
                </div>
              </motion.div>
            }

            {index === 2 &&
              <motion.div
                initial= {{opacity: 0}}
                animate= {{opacity: 1}}
                transition={{duration:0.5}}
              >
                <h4 className='font-semibold text-lg'>Company Budget:</h4>
                <div className='mt-3 flex flex-col gap-4'>
                  <div className='flex gap-4'>
                    <Field 
                      placeholder={"Company Name"}
                      tWStyle='w-1/2'
                    />
                    <Field 
                      placeholder={"Post or Position"}
                      tWStyle='w-1/2'
                    />
                  </div>
                  <Field
                    placeholder={"Your Budget Range"}
                    type="number"
                    tWStyle={'w-full'}
                  />
                </div>
              </motion.div>
            }
            {index === 3 &&
              <motion.div
                initial= {{opacity: 0}}
                animate= {{opacity: 1}}
                transition={{duration:0.5}}
              >
                <h4 className='font-semibold text-lg'>Send a quick message:</h4>
                <TextArea 
                  placeholder={'Your Message....'}
                  tWStyle={'w-full p-2 mt-3'}
                />
              </motion.div>
            }
          </form>

          <div className='flex gap-7'>
            <button className='text-[0.9rem] font-semibold border px-3 py-1 rounded border-sky-600 text-sky-500' onClick={decrement}>Prev</button>
            <button className='text-[0.9rem] font-semibold border px-3 py-1 rounded border-sky-600 text-sky-500' onClick={increment}>Next</button>
          </div>
        </section>
      </div>

      <div className={`${padding.pad} w-full flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-7`}>
        <div className='flex flex-col md:flex-row gap-y-3 lg:w-[55%] items-center text-center md:text-start'>
          <div className='flex relative'>
            <span className='w-[70px] h-[70px] shadow-lg shadow-sky-800 rounded-full bg-sky-500 grid place-content-center text-[1.5rem]'>
              <HiPhone />
            </span>
            <span className='w-[70px] h-[70px] shadow-lg shadow-sky-800 rounded-full block overflow-hidden relative top-0 right-4'>
              <img src="./home/contact/avatar.jpg" alt="" className='w-full h-full object-cover' />
            </span>
          </div>
          <p className={`${textStyles.colSec}`}>As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
        </div>
        <div className='w-[100px] lg:w-[1.5px] h-[1.5px] lg:h-[40px] md:border-b-[1.5px] lg:border-r-[1.5px] border-dashed border-neutral-500' />
        <div className='text-center lg:text-start'>
          <h4 className={`${colGrad.priLTR} text-transparent bg-clip-text font-lg font-semibold`}>Help Desk 24h/7</h4>
          <h5 className='text-[1.5rem] font-semibold'>+(012)-3456-6789</h5>
        </div>
      </div>
    </div>
  )
}

export default Contact