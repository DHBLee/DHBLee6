import React from 'react'

import githubImg from '../assets/images/icons/github.svg';
import twitterImg from '../assets/images/icons/twitter.svg';
import linkedImg from '../assets/images/icons/linkedin.svg';
import logoImg from '../assets/images/logo.svg';
import Links from './Links';
import { Link } from 'react-router-dom';

const Footer = ({ padding }) => {
  return (
    <footer className={`${padding} py-[56px] bg-BlueGray flex flex-col gap-[40px] items-center md:flex-row`}>
        <img src={logoImg} alt="" className='brightness-0 invert' />
        <nav className='flex flex-col md:flex-row gap-[32px] text-white text-center'>
          <Links />
        </nav>
        <nav className='flex gap-5 md:ml-auto'>
          <Link>
            <img src={githubImg} alt="" className='brightness-0 invert' />
          </Link>
          <Link>
            <img src={twitterImg} alt="" className='brightness-0 invert' />
          </Link>
          <Link>
            <img src={linkedImg} alt="" className='brightness-0 invert' />
          </Link>
        </nav>
    </footer>
  )
}

export default Footer