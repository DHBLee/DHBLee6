import React from 'react'
import patternGlow from '../assets/pattern-light-bg.svg';
import Arrow from '../assets/pattern-arrow.svg';
const spanStyling = 'border-2 border-solid border-[var(--clr-neutral900)] w-max px-1.5 rounded-sm';

const Section2 = ({h2Style}) => {
  return (
    <section className='grid gap-8 bg-no-repeat bg-cover bg-center px-4 py-16' style={{ backgroundImage: `linear-gradient(to bottom right, hsla(17, 41%, 97%, 0.3) 50%, rgba(156, 201, 218, 0.3)), url(${patternGlow})` }}>
      <h2 className={`${h2Style} [@media_(min-width:1440px)]:text-center max-w-[15ch] mx-auto`}>Your tech reading journey</h2>

      <ul className='flex flex-col  [@media_(min-width:1440px)]:flex-row  gap-8 textpreset6 text-[var(--clr-neutral900)] [@media_(min-width:1440px)]:justify-center'>
        <li className='relative grid gap-6 [@media_(min-width:1440px)]:max-w-[18ch]'>
            <span className={spanStyling}>1</span>
            <img src={Arrow} alt="" className='absolute top-0 right-0 hidden [@media_(min-width:1440px)]:block'/>
            Choose your membership tier
        </li>
        <li className='relative grid gap-6 [@media_(min-width:1440px)]:max-w-[18ch]'>
            <span className={spanStyling}>2</span>
            <img src={Arrow} alt="" className='absolute top-0 right-0 hidden [@media_(min-width:1440px)]:block'/>
            Get your monthly book selection
        </li>
        <li className='relative grid gap-6 [@media_(min-width:1440px)]:max-w-[18ch]'>
            <span className={spanStyling}>3</span>
            <img src={Arrow} alt="" className='absolute top-0 right-0 hidden [@media_(min-width:1440px)]:block'/>
            Join our discussion forums
        </li>
        <li className='relative grid gap-6 [@media_(min-width:1440px)]:max-w-[18ch]'>
            <span className={spanStyling}>4</span>
            <img src={Arrow} alt="" className='absolute top-0 right-0 hidden [@media_(min-width:1440px)]:block'/>
            Attend exclusive meetups
        </li>
      </ul>
    </section>
  )
}

export default Section2