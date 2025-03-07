import { React, useState} from 'react'
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
  const [details, setDetails] = useState(information[0])

  return (
    <section className={`${px}`}>
      <picture>
              <source srcSet={details.imgDesktop} media="(min-width: 1440px)" />
              
              <source srcSet={details.imgTablet} media="(min-width: 768px)" />
              
              <img src={details.imgMobile} alt="Local background" className='relative z-10 w-full 1440:mb-[-5rem]'/>
      </picture>
      <div>
        <ul>
          {information.map((item, index) => (
              <li key={item.title}>
                <button
                  onClick={() => setDetails(information[index])}
                  className={`headingS text-ShuttleGray hover:text-Clay font-bold `} 
                >
                  {item.title.toUpperCase()}
                </button>
              </li>
            ))}
        </ul>
        <div>
          <h2>{details.title}</h2>
          <p>{details.details}</p>
          <Button>
            BOOK A TABLE
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Section4