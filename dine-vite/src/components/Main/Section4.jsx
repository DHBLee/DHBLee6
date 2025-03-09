import { React, useState, useEffect} from 'react'
import Button from '../Button'

import familyImgMobile from '../../assets/images/homepage/family-gathering-mobile.jpg';
import familyImgTablet from '../../assets/images/homepage/family-gathering-tablet.jpg';
import familyImgDesktop from '../../assets/images/homepage/family-gathering-desktop.jpg';

import specialImgMobile from '../../assets/images/homepage/special-events-mobile.jpg';
import specialImgTablet from '../../assets/images/homepage/special-events-tablet.jpg';
import specialImgDesktop from '../../assets/images/homepage/special-events-desktop.jpg';

import socialImgMobile from '../../assets/images/homepage/social-events-mobile.jpg';
import socialImgTablet from '../../assets/images/homepage/social-events-tablet.jpg';
import socialImgDesktop from '../../assets/images/homepage/social-events-desktop.jpg';

import patternRight from '../../assets/images/patterns/pattern-curve-top-right.svg';
import patternLine from '../../assets/images/patterns/pattern-lines.svg';

const information = [
  {
    imgMobile: familyImgMobile,
    imgTablet: familyImgTablet,
    imgDesktop: familyImgDesktop,
    title: "Family Gathering",
    details: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all."
  },
  {
    imgMobile: specialImgMobile,
    imgTablet: specialImgTablet,
    imgDesktop: specialImgDesktop,
    title : "Special Events",
    details: "Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal."
  },
  {
    imgMobile: socialImgMobile,
    imgTablet: socialImgTablet,
    imgDesktop: socialImgDesktop,
    title: "Social Events",
    details: "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone."
  },
]
const Section4 = ({px}) => {
  const [details, setDetails] = useState(information[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [previousDetails, setPreviousDetails] = useState(details);

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => {
      setPreviousDetails(details);
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, [details]);

  return (
    <section className={`relative ${px} flex flex-col 1440:flex-row gap-[49px] md:gap-[57px] 1440:gap-[125px] 1440:items-center 1440:justify-center`}>
      <div className="relative" key={previousDetails.title}>
        <picture className="flex-1">
                <source srcSet={previousDetails.imgDesktop} media="(min-width: 1440px)" />
                
                <source srcSet={previousDetails.imgTablet} media="(min-width: 768px)" />
                
                <img src={previousDetails.imgMobile} alt="Local background" className={`relative z-10 w-full transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0" }`}/>
        </picture>
        <img src={patternLine} alt="" className="hidden md:block absolute top-[-2rem] left-[-4rem] z-20"/>
      </div>
      <div className="flex flex-col gap-[27px] md:gap-[47px] 1440:gap-[79px] 1440:flex-col-reverse">
        <ul className="flex flex-col md:flex-row md:justify-between 1440:flex-col items-center 1440:items-start">
          {information.map((item, index) => (
              <li key={item.title}>
                <button
                  onClick={() => setDetails(information[index])}
                  className={`headingS font-bold ${details.title === item.title ? 'text-Clay active-underline' : 'text-ShuttleGray hover:text-Clay'} `} 
                >
                  {item.title.toUpperCase()}
                </button>
              </li>
            ))}
        </ul>
        <div className={`grid gap-[27px] md:gap-[60px] text-center 1440:text-left transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="grid gap-[13px] md:gap-[19px]">
            <h2 className="headingL">{previousDetails.title}</h2>
            <p className="body2 md:body1 max-w-[40ch] mx-auto">{previousDetails.details}</p>
          </div>
          <Button classStyle="border-white text-white bg-black 1440:mx-0 ">
            BOOK A TABLE
          </Button>
        </div>
      </div>
      <img src={patternRight} alt="" className="hidden md:block absolute top-[-6rem] left-[-7rem] w-[50%] h-[60%]" />
    </section>
  )
}

export default Section4