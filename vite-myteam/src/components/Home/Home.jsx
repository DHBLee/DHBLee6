import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const Home = ({padding}) => {
  return (
    <main>
        <Section1 padding={padding} />
        <Section2 padding={padding} />
        <Section3 padding={padding} />
    </main>
  )
}

export default Home