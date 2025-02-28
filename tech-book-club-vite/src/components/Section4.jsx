import React from 'react'
import Stars from './Stars'

const Section4 = () => {
  return (
    <section className='grid gap-8 [@media_(min-width:1440px)]:text-center [@media_(min-width:1440px)]:px-[100px]'>
      <div className='[@media_(min-width:1440px)]:flex [@media_(min-width:1440px)]:justify-center'>
        <Stars />
      </div>
      <h3 className='textpreset3 text-[var(--clr-neutral900)]'>"This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"</h3>
      <h5 className='textpreset5 text-[var(--clr-neutral700)]'>Sarah Chen, Software Architect</h5>
    </section>
  )
}

export default Section4