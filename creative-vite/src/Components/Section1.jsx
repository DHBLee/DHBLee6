import React from 'react'
import heroImgMobile from '../assets/mobile/image-hero.jpg';
import heroImgTablet from '../assets/tablet/image-hero.jpg';
import heroImgDesktop from '../assets/desktop/image-hero.jpg';
import Button from './Button';
import Picture from './Picture';

const Section1 = ({padding}) => {
  return (
    <section className="relative flex flex-col md:flex-row-reverse md:justify-between gap-14 md:gap-0">
        <div className="md:w-[60%]">
          <Picture mobileImg={heroImgMobile} tabletImg={heroImgTablet} desktopImg={heroImgDesktop} />
        </div>
        <div className={`md:absolute md:left-0 ${padding} md:pr-0 1440:pr-0 md:pt-[77px] 1440:pt-[112px] flex flex-col gap-10 md:w-[56%]`}>
            <h1 className="brandingText">Branding &<br /> website design agency</h1>
            <p className="body mt-[-15px] md:mt-0"> We specialize in visual storytelling by creating cohesive brand and website design 
            solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
            <Button extraStyle="text-[18px] bg-Red text-White w-max">
              Learn More
            </Button>
        </div>
    </section>
  )
}

export default Section1