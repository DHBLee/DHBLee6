import React from 'react'
import NikitaImg from '../../assets/avatar-nikita.jpg';
import ChristianImg from '../../assets/avatar-christian.jpg';
import CruzImg from '../../assets/avatar-cruz.jpg';
import DrakeImg from '../../assets/avatar-drake.jpg';
import GriffinImg from '../../assets/avatar-griffin.jpg';
import AdenImg from '../../assets/avatar-aden.jpg';
import Casts from './Casts';
import bgPattern1 from '../../assets/bg-pattern-about-2-contact-1.svg';
import bgPattern2 from '../../assets/bg-pattern-home-4-about-3.svg';

const Section2 = ({padding}) => {
  return (
    <section className={`relative overflow-hidden grid gap-[48px] md:gap[64px] text-center ${padding} md:px-[98px] bg-DeepGreen py-[88px] md:py-[100px] 1440:py-[140px]`}>
      <img src={bgPattern1} alt="" className='absolute top-[-6.5rem] md:top-[-1rem] left-[-7rem] md:left-[-6.3rem]'/>

      <h3 className='heading3 text-white'>Meet the directors</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 1440:grid-cols-3 gap-y-[52px] 1440:gap-y-[78px] gap-x-[11px] 1440:gap-x-[30px]'>
          <Casts img={NikitaImg} name="Nikita Marks" title="Founder & CEO" message="It always amazes me how much talent there is in every corner of the globe." />
          <Casts img={ChristianImg} name="Cristian Duncan" title="Co-founder & COO" message="Distributed teams required unique processes. You need to approach work in a new way." />
          <Casts img={CruzImg} name="Cruz Hamer" title="Co-founder & CTO" message="Technology is at the forefront of enabling distributed teams. That's where we come in." />
          <Casts img={DrakeImg} name="Drake Heaton" title="Business Development Lead" message="Hiring similar people from similar backgrounds is a surefire way to stunt innovation." />
          <Casts img={GriffinImg} name="Griffin Wise" title="Lead Marketing" message="Unique perspectives shape unique products, which is what you need to survive these days." />
          <Casts img={AdenImg} name="Aden Allan" title="Head of Talent" message="Empowered teams create truly amazing products. Set the north star and let them follow it." />
      </div>

      <img src={bgPattern2} alt="" className='absolute bottom-0 right-0'/>
    </section>
  )
}

export default Section2