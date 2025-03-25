import { React, useState, useEffect } from 'react'
import logoImg from '../assets/images/logo.svg';
import closeImg from '../assets/images/icons/close.svg';
import menuImg from '../assets/images/icons/hamburger.svg';
import Links from './Links';

const Header = ({padding}) => {
  const [navImg, setNavImg] = useState(menuImg);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
      if (!mobile) {
        setNavImg(menuImg);
      }
    }
    
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  function toggleNav() {
    setNavImg(prev => prev === menuImg ? closeImg : menuImg);
  }

  return (
    <header className={`relative ${padding} mt-[32px] md:mt-[64px] flex justify-between items-center`}>
        <img src={logoImg} alt=""/>
        
        <img onClick={toggleNav} src={navImg} alt="" className='block md:hidden' />
        <nav className='hidden md:flex items-center gap-[42px]'>
               <Links />
        </nav>

        {navImg === closeImg && isMobileView && 
          <nav className="absolute w-[14rem] h-[12rem] right-[32px] top-[70px] z-10 flex flex-col gap-[32px] items-center justify-center text-center bg-BlueGray text-white">
              <Links />
          </nav>
        }
    </header>
  )
}

export default Header