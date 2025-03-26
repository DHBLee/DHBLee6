import React from 'react'
import Project from './Project'

import { PROJECTS } from '../projects.js';

const Portfolio = ({padding}) => {

  return (
    <main className={`${padding} grid gap-[72px] mt-[40px] md:mt-[94px] mb-[80px] md:mb-[96px] 1440:mb-[150px]`}>
      {PROJECTS.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          imgMobile={project.imgMobile}
          imgTablet={project.imgTablet}
          imgDesktop={project.imgDesktop}
          title={project.title}
          description={project.description}
          style={project.style}
        />
      ))}
    </main>
  )
}

export default Portfolio