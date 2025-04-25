import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const About = ({padding}) => {
  return (
    <section>
      <Section1 padding={padding}/>
      <Section2 padding={padding}/>
      <Section3 padding={padding}/>
    </section>
  )
}

export default About