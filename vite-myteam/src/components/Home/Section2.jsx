import React from 'react'
import home2 from '../../assets/bg-pattern-home-3.svg';
import Container from './Container';

import ImageOne from '../../assets/icon-person.svg';
import ImageTwo from '../../assets/icon-cog.svg';
import ImageThree from '../../assets/icon-chart.svg';
const Section2 = ({padding}) => {
  return (
    <section className={`relative ${padding} md:px-[97px] flex flex-col 1440:items-start 1440:py-[140px] 1440:flex-row gap-[56px] md:gap-[64px] bg-SacramentoGreen overflow-x-hidden`}>
        <div className='flex items-center'>
            <div className='grid gap-5 1440:gap-15 mt-[64px] 1440:mt-0'>
                <hr className='border-2 border-LightCoral bg-LightCoral h-2 w-[5rem]'/>
                <h2 className='heading3 leading-none text-white'>Build & manage distributed teams like no one else.</h2>
            </div>
            <img src={home2} alt=""  className='opacity-0 1440:hidden'/>
            <img src={home2} alt="" className='absolute right-[-6.5rem] 1440:hidden top-[-2rem]'/>
        </div>

        <div className='grid gap-[48px] md:gap-[32px] mb-[64px] 1440:mb-0 1440:mt-[5rem] 1440:w-full'>
            <Container image={ImageOne} title="Experienced Individuals" description="Our network is made up of highly experienced professionals who are passionate about what they do."/>
            <Container image={ImageTwo} title="Easy to Implement" description="Our processes have been refined over years of implementation meaning our teams always deliver."/>
            <Container image={ImageThree} title="Enhanced Productivity" description="Our customized platform with in-built analytics helps you manage your distributed teams."/>
        </div>

        <img src={home2} alt=""  className='hidden 1440:block absolute right-[-6.2rem] bottom-0'/>
    </section>
  )
}

export default Section2