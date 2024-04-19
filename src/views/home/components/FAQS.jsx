import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { textStyles } from '../../../assets/styles';

const FAQS = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='flex flex-col gap-5 mt-10'>
      {faqs.map((faq, index) => (
        <div key={index} className={`duration-500 ${openIndex === index ? 'md:h-[120px] h-[185px]' : 'h-14 md:h-10'} delay-[0.25s] overflow-hidden`}>
          <h4
            className={`faq-question ${openIndex === index ? 'text-sky-500' : ''} flex md:justify-center lg:justify-start md:items-center gap-3 font-semibold text-[1.25rem] duration-500 cursor-pointer hover:text-sky-500`}
            onClick={() => toggleAccordion(index)}
          >
            <FaPlus className='text-sky-500 text-[1.25rem] mt-1 md:mt-0' />
            {faq.question}
          </h4>
          {openIndex === index && (
            <p className={`${textStyles.colSec} duration-500 ml-8 mt-1`}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQS;