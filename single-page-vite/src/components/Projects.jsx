import React from 'react'
import Link from './Link'

const Projects = ({smallImg, largeImg, title, languages}) => {
  return (
    <div className='grid gap-5'>
        <picture>
            <source media="(min-width: 1440px)" srcSet={largeImg} />

            <img src={smallImg} alt="" />
        </picture>
        <div> { /* need to adjusts it's spacing and maybe some font sizes */ }
            <div>
                <h4 className='text-m'>{title}</h4>
                <ul className='flex gap-[18px]'>
                    {languages.map(language => (
                        <li className='text-p text-Grey'>
                            {language}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex gap-[30px]'>
                <Link>
                    VIEW PROJECT
                </Link>
                <Link>
                    VIEW CODE
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Projects