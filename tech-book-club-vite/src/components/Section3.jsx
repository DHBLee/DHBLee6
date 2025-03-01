import React from 'react'
import Options from './Options'

const Section3 = ({h2Style}) => {
  return (
    <section className='[@media_(min-width:1440px)]:px-[100px] '>
      <h2 className={`${h2Style} mb-6 md:mb-10 [@media_(min-width:1440px)]:mb-[64px] flex xl:justify-center`}>Membership options</h2>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(286px,1fr))] gap-6'>
        <Options title="Starter" price={19} firstInfo="1book/month" secondInfo="Online forums" buttonInfo="SUBSCRIBE NOW"/>
        <Options title="Pro" price={29} firstInfo="2books/month" secondInfo="Virtual meetups" buttonInfo="SUBSCRIBE NOW"/>
        <Options title="Enterprise" custom="Custom" firstInfo="Team access" secondInfo="Private sessions" buttonInfo="TALK TO US"/>
      </div>
    </section>
  )
}

export default Section3