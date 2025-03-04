import React from 'react'
import Link from './Link'

const Projects = ({smallImg, largeImg, title, languages}) => {
  return (
    <div className='group realtive grid gap-5'>
        <div className='relative overflow-hidden'>
            <picture className='group'>
            <source media="(min-width: 1440px)" srcSet={largeImg} />
            <img src={smallImg} alt={title} className='w-full h-auto brightness-100 1440:group-hover:brightness-[30%] transition-all duration-300' />
            </picture>

            <div className='hidden 1440:flex absolute inset-0 items-center justify-center gap-[30px] opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <Link>VIEW PROJECT</Link>
                <Link>VIEW CODE</Link>
            </div>
        </div>

        <div className='grid gap-5'> { /* need to adjusts it's spacing and maybe some font sizes */ }
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

            <div className='flex gap-[30px] 1440:hidden'>
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