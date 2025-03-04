import React from 'react'
import fronendLogo from '../assets/images/icon-frontend-mentor.svg';
import githubLogo from '../assets/images/icon-github.svg';
import linkedinLogo from '../assets/images/icon-linkedin.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';

const socials = [githubLogo, fronendLogo, linkedinLogo, twitterLogo];

const Navbar = () => {
  return (
    <div className='pt-5 md:pt-[29px] 1440:pt-[39px] flex flex-col gap-[20px] md:flex-row md:justify-between md:items-center w-full'>
        <span className='text-m md:text-[2rem]'>adamkeyes</span>

        <ul className='relative z-20 flex gap-[26px] justify-center'>
            {socials.map(social => (
                <li key={social}>
                    <img src={social} alt="" className='icon'/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar