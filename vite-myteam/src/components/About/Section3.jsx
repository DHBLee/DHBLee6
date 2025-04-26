import React from 'react';
import VergeLogo from '../../assets/logo-the-verge.png';
import JakartaLogo from '../../assets/logo-jakarta-post.png';
import GuardianLogo from '../../assets/logo-the-guardian.png';
import TechLogo from '../../assets/logo-tech-radar.png';
import GadgetsLogo from '../../assets/logo-gadgets-now.png';

const Section3 = ({padding}) => {
  return (
    <section className={`flex overflow-hidden flex-col gap-[60px] ${padding} bg-SacramentoGreen py-[88px] md:py-[100px] 1440:py-[140px]`}>
      <h3 className='heading3 text-white text-center'>Some of our clients</h3>
      <div className='flex flex-col gap-[57px] md:gap-[60px] md:flex-row items-center justify-between w-full  px-[105px] md:px-0'>
          <img src={VergeLogo} alt="Verge" className='w-full md:max-w-[14%] h-auto object-contain' />
          <img src={JakartaLogo} alt="Jakarta" className='w-full md:max-w-[14%] h-auto object-contain' />
          <img src={GuardianLogo} alt="Guardian" className='w-full md:max-w-[14%] h-auto object-contain' />
          <img src={TechLogo} alt="Tech" className='w-full md:max-w-[14%] h-auto object-contain' />
          <img src={GadgetsLogo} alt="Gadgets" className='w-full md:max-w-[14%] h-auto object-contain' />
      </div>
  </section>
  )
}

export default Section3