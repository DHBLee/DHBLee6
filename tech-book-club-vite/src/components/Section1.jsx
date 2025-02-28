import React from 'react'
import Picture from './Picture'
import circle from '../assets/pattern-circle.png';

const Section1 = ({mobileImage, tabletImage, desktopImage, title, identifier, h2Style}) => {
  const isRead = identifier === "read";
  const isAverage = identifier === "average";
  console.log(isRead);
  return (
    <section className={`flex flex-col gap-10 
      [@media_(min-width:1440px)]:items-center 
      [@media_(min-width:1440px)]:gap-[80px] 
      [@media_(min-width:1440px)]:${isRead ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className='grid gap-6 md:gap-[24px] basis-1/2'>
          <h2 className={`${h2Style} relative`}>
            {title}
            <img src={circle} alt=""  className='absolute right-[250px] top-[60px]'/>
          </h2>
          {isRead && (
            <ul className='grid gap-4 md:gap-6 textpreset5 text-[var(--clr-neutral700)]'>
              <li className='check' key="1">Monthly curated tech reads selected by industry experts</li>
              <li className='check' key="2">Virtual and in-person meetups for deep-dive discussions</li>
              <li className='check' key="3">Early access to new tech book releases</li>
              <li className='check' key="4">Author Q&A sessions with tech thought leaders</li>
            </ul>
          )}
          {isAverage && (
            <p className='textpreset5 text-[var(--clr-neutral700)]'>Connect with a community that speaks your language - from <span className='textpreset5-semibold'>Python</span> to <span className='textpreset5-semibold'>Typescript</span> and everything in between. Our discussions blend technical depth with practical applications.</p>
          )}
      </div>

      <Picture mobileImage={mobileImage} tabletImage={tabletImage} desktopImage={desktopImage} className="basis-1/2"/>
    </section>
  )
}

export default Section1