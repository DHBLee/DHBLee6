import React from 'react'
import Picture from './Picture.jsx';
import img1Mobile from '../assets/mobile/image-strategic.jpg';
import img1Tablet from '../assets/tablet/image-strategic.jpg';
import img1desktop from '../assets/desktop/image-strategic.jpg';

import waveRedIcon from '../assets/desktop/bg-pattern-wave-red.svg';

const Section2 = ({padding}) => {
  return (
    <section className="flex flex-col md:flex-row mt-[96px] md:mt-0">
        <div className="relative md:w-[50%]">
          <Picture mobileImg={img1Mobile} tabletImg={img1Tablet} desktopImg={img1desktop} />
          <img src={waveRedIcon} alt="" className="w-[4rem] 1440:w-[9rem] absolute bottom-[-15px] md:bottom-0 left-[24px]  md:right-[-1.5rem] 1440:right-[-4.5rem] ml-auto md:top-[9rem] 1440:top-[14rem]"/>
        </div>
        <div className={`${padding} md:pl-[69px] py-[72px] md:py-[120px] 1440:py-[200px] bg-BlackBg flex flex-col gap-9 md:w-[50%]`}>
          <h2 className="designText md:max-w-[8ch]"><span className="text-Red">Design</span> is strategic.</h2>
          <p className="body text-White mt-[-10px] md:mt-0">
          "A well-crafted design strategy consistently produces desired outcomes and brand awareness. 
          We are firm believers that success lies in creative collaboration with our clients."
          </p>
          <a href="" className="text-Red underline ">Schedule a Call</a>
        </div>
    </section>
  )
}

export default Section2