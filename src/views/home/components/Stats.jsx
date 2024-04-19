import React from 'react'
import { padding } from '../../../assets/styles'
import { statsData } from '../constants'
import CountUp from 'react-countup'

const Stats = () => {
  return (
    <div className={`${padding.pad} relative`}>
      <div style={{backgroundImage: 'url(./home/stats-bg.jpg)'}} className='relative bg-cover p-10 rounded-lg flex flex-wrap gap-y-14'>
        <div className='absolute top-0 left-0 w-full h-full bg-[#000000af]' />
        {statsData.map((stat,index)=>{
          const Icon = stat.icon
          return(
          <div key={stat.id} className='md:w-1/2 lg:w-1/4 relative flex items-center gap-2 justify-center'>
            <Icon className='text-[3rem] md:text-[3.5rem] xl:text-[4.5rem]' />
            <div className='flex flex-col gap-2'>
              <span className='text-[1.5rem] md:text-[1.7rem] xl:text-[2.5rem] font-bold leading-none bg-gradient-to-r from-sky-600 via-sky-300 to-sky-100 bg-clip-text text-transparent'>
                <CountUp start={0} end={stat.num} enableScrollSpy scrollSpyOnce duration={5} />
                <span>+</span>
              </span>
              <span className='font-semibold xl:text-lg ml-1 leading-none'>{stat.txt}</span>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Stats