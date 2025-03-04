import React from 'react'
import Projects from './Projects'

import project1Large from '../assets/images/thumbnail-project-1-large.webp';
import project1Small from '../assets/images/thumbnail-project-1-small.webp';
import project2Large from '../assets/images/thumbnail-project-2-large.webp';
import project2Small from '../assets/images/thumbnail-project-2-small.webp';
import project3Large from '../assets/images/thumbnail-project-3-large.webp';
import project3Small from '../assets/images/thumbnail-project-3-small.webp';
import project4Large from '../assets/images/thumbnail-project-4-large.webp';
import project4Small from '../assets/images/thumbnail-project-4-small.webp';
import project5Large from '../assets/images/thumbnail-project-5-large.webp';
import project5Small from '../assets/images/thumbnail-project-5-small.webp';
import project6Large from '../assets/images/thumbnail-project-6-large.webp';
import project6Small from '../assets/images/thumbnail-project-6-small.webp';
import Link from './Link';

const projectThumbnailsAndInfo = [
    {
        small: project1Small, 
        large: project1Large,
        title: "DESIGN PORFOLIO",
        languages: ["HTML", "CSS"],
    },
    {
        small: project2Small, 
        large: project2Large,
        title: "E-LEARNING LANDING PAGE",
        languages: ["HTML", "CSS"]
    },
    {
        small: project3Small, 
        large: project3Large,
        title: "TODO WEB APP",
        languages: ["HTML", "CSS", "JAVASCRIPT"]
    },
    {
        small: project4Small, 
        large: project4Large,
        title: "ENTERTAINMENT WEB APP",
        languages: ["HTML", "CSS", "JAVASCRIPT"]
    },
    {
        small: project5Small, 
        large: project5Large,
        title: "MEMORY GAME",
        languages: ["HTML", "CSS", "JAVASCRIPT"]
    },
    {
        small: project6Small, 
        large: project6Large,
        title: "ART GALLERY SHOWCASE",
        languages: ["HTML", "CSS", "JAVASCRIPT"]
    },
]

const experiences = [
    {name: "HTML", exp: "4 Years Experience"},
    {name: "CSS", exp: "4 Years Experience"},
    {name: "Javascript", exp: "4 Years Experience"},
    {name: "Accessibility", exp: "4 Years Experience"},
    {name: "React", exp: "3 Years Experience"},
    {name: "Sass", exp: "3 Years Experience"},
    
]
const Main = ({ringsPattern, pxStyling}) => {
  return (
    <main>
        {/* need to figueer out the overflowing issue in the rings */}
        <section className={`${pxStyling} relative border-t-2 border-b-2 md:border-b-0  py-10 md:py-0 md:pt-[52px] 1440:pt-[72px] grid gap-6 md:gap-[52px] 1440px:gap-[58px] text-center md:text-left justify-center md:justify-start grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] 1440:grid-cols-[repeat(3,1fr)] overflow-hidden`}>
            {experiences.map(experience => (
                <div key={experience.name} className='grid gap-[1px] md:gap-3.5'>
                    <h3 className='text-[32px] md:text-l max-md:leading-[40px]'>{experience.name}</h3>
                    <p className='text-[1rem] md:text-p max-md:leading-[26px] text-Grey'>{experience.exp}</p>
                </div>
            ))}
            <img src={ringsPattern} alt="" className='absolute bottom-0 mb-[-2rem] right-[-13rem]' />
        </section>

        <section className={`${pxStyling} py-20 md:py-[100px]`}>
            <div className='flex justify-between items-center mb-10 md:mb-[60px] 1440:mb-[80px]'>
                <h2 className='text-[40px] md:text-[72px] 1440:text-xl leading-none'>Projects</h2>
                <Link>
                    CONTACT ME
                </Link>
            </div>

            <div className='grid gap-10 md:grid-cols-[repeat(2,1fr)] md:gap-x-6 md:gap-y-[60px] 1440:gap-x-[30px] 1440:gap-y-[69px]'> {/* need to figure out the difference in spacing */}
                {projectThumbnailsAndInfo.map(project => (
                    <Projects key={project.title} smallImg={project.small} largeImg={project.large} title={project.title} languages={project.languages}/>
                ))}
            </div>
        </section>

    </main>
  )
}

export default Main