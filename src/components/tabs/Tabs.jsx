import React, { useState } from 'react'
import { tabData } from './tabConstants';
import { TabPanel } from './TabPanel';
import { MdPlayArrow } from "react-icons/md";

const Tabs = () => {
  const [ activeTab, setActiveTab ] = useState(0)

  const tabPanArr = tabData.map((item, index) => (
    <TabPanel key={index} tabData={item}  />
  ))

  return (
    <div className='flex flex-col lg:flex-row lg:h-[420.5px]'>

      <div className='lg:w-1/2 h-full flex flex-col gap-3 border'>
        {tabData.map((item, index) => {
          const Icon = item.tabBtnIcon
          return(
            <button key={item.id} onMouseEnter={() => setActiveTab(index) } className={`${activeTab === index ? 'bg-white shadow-md translate-x-8' : 'bg-black'} duration-500 flex justify-between p-6 items-center gap-3 relative z-[20] `}>
              <span className={`${activeTab === index ? 'bg-red-500 text-white' : 'bg-stone-800 text-red-500'} duration-500  w-[70px] h-[70px] md:flex items-center justify-center text-[3rem] rounded-full hidden`}>
                <Icon />
              </span>
              <div className={`${activeTab === index ? 'text-black' : 'text-white'} duration-500 md:w-[82%] text-start`}>
                <h3 className='font-bold text-xl capitalize'>{item.tabBtnHeader}</h3>
                <p className='mt-2'>{item.tabBtnText}</p>
              </div>
              <span className={`absolute w-6 h-6 bg-white -right-6 duration-500 rotate-90 ${activeTab === index ? 'opacity-100' : 'opacity-0'}`} style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}} />
            </button>
          )
        })}
      </div>

      <div className='lg:w-1/2 h-[420px] relative z-[19]'>
        {tabPanArr[activeTab]}
      </div>

    </div>
  )
}

export default Tabs