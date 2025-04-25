import React from 'react'
import { Link } from 'react-router-dom';
import bgImg from '../assets/bg-pattern-home-6-about-5.svg';
import ContactButton from './ContactButton';

const Contact = () => {
  return (
    <div className='relative flex flex-col md:flex-row gap-6 py-[83px] text-center md:justify-between md:items-center bg-LightCoral px-6 md:px-[97px] 1440:px-[220px]  overflow-hidden'>
        <img src={bgImg} alt="" className='absolute bottom-[-1rem] left-0' />
        <h3 className="heading3 text-SacramentoGreen leading-none">Ready to get started?</h3>
        <ContactButton hoverStyles="hover:bg-SacramentoGreen hover:border-SacramentoGreen hover:text-white" extraStyles=" border-SacramentoGreentext-SacramentoGreen mx-auto md:mx-0" />
    
    </div>
  )
} 

export default Contact