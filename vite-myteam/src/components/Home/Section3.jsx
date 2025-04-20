import React from 'react'
import Testimonials from './Testimonials'

import KadyProfile from '../../assets/avatar-kady.jpg';
import AiyshaProfile from '../../assets/avatar-aiysha.jpg';
import ArthurProfile from '../../assets/avatar-arthur.jpg';

import bgPattern4 from '../../assets/bg-pattern-home-4-about-3.svg';
import bgPattern5 from '../../assets/bg-pattern-home-5.svg';

const Section3 = ({padding}) => {
  return (
    <section className={`relative ${padding} bg-DeepGreen grid items-center justify-center gap-[48px] py-[140px]`}>
        <img src={bgPattern4} alt="" className='absolute left-0 top-0'/>
        <h3 className='heading3 text-white text-center leading-none'>Delivering real results for top companies. Some of our <span className='text-RaptureBlue'>success stories.</span></h3>
        <div className='flex flex-col 1440:flex-row gap-[48px] '>
              <Testimonials image={KadyProfile} name="Kady Baker" title="Product Manager at Bookmark" message="The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned."/>
              <Testimonials image={AiyshaProfile} name="Aiysha Reese" title="Founder of Manage" message="We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!"/>
              <Testimonials image={ArthurProfile} name="Arthur Clarke" title="Co-founder of MyPhysio" message="Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month."/>
        </div>
        <img src={bgPattern5} alt="" className='absolute bottom-0 right-0'/>
    </section>
  )
}

export default Section3