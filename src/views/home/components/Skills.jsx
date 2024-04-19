import React from 'react'
import { padding } from '../../../assets/styles'
import { skills } from '../constants'
import { motion } from 'framer-motion'
import CountUp from 'react-countup';

const Skills = () => {
  return (
    <div className={`${padding.pad} grid grid-cols-2 md:grid-cols-4 gap-5 xl:w-[80%] mx-auto`}>
      {skills.map((skill,index)=>((
        <motion.div
          initial={{x: -25, backgroundImage: `conic-gradient(from 0deg, rgba(14 165 233) 0%, rgba(14 165 233) 0% 0%, rgba(63,63,70) 0%, rgba(63,63,70) 100%)`}} 
          whileInView={{x: 0, backgroundImage: `conic-gradient(from 0deg, rgba(14 165 233) 0%, rgba(14 165 233) 0% ${skill.percentage}, rgba(63,63,70) ${skill.percentage}, rgba(63,63,70) 100%)`}}
          transition={{duration: 0.5, delay: 0.5 * index}}
          viewport={{once:true}} 
          key={skill.id}
          className='w-[120px] h-[120px] md:w-[150px] lg:w-[180px] md:h-[150px] lg:h-[180px] rounded-full p-1.5 lg:p-2 mx-auto'
          style={{}}
        >
          <div className='w-full h-full rounded-full bg-black  flex flex-col justify-center text-center items-center'>
            <span className='bg-gradient-to-r from-sky-500 to-sky-300 text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-transparent bg-clip-text font-semibold'>
              <CountUp start={0} end={skill.num} suffix='%' duration={5} enableScrollSpy scrollSpyOnce={true} />
            </span>
            <span className='md:text-lg'>{skill.txt}</span>
          </div>
        </motion.div>
      )))}
    </div>
  )
}

export default Skills