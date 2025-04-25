import { React } from 'react';
import logoImg from '../assets/logo.svg';
import menuImg from '../assets/icon-hamburger.svg';
import closeImg from '../assets/icon-close.svg';
import navPattern from '../assets/bg-pattern-about-1-mobile-nav-1.svg';
import { Link } from 'react-router-dom';
import { useMenu } from '../components/MenuContext';
import { createPortal } from 'react-dom';
import Links from './Links';
import ContactButton from './ContactButton';

const Header = ({padding}) => {
  const { menuIsOpen, setMenuIsOpen } = useMenu();

  const MobileMenuPoral = () => createPortal(
        <nav className="fixed md:hidden bg-PoliceBlue body1 text-white z-10 w-[67%] pl-12 pt-[70px] h-full top-0 right-0 flex flex-col gap-6 items-start">
            <button onClick={() => setMenuIsOpen(prev => !prev)} className="relative ml-auto px-6 top-[-1rem]">
                <img src={closeImg} alt=""/>
            </button>
            <Links />
            <ContactButton hoverStyles="hover:bg-white hover:text-DarkGreen" />
            

            <img src={navPattern} alt="" className="absolute bottom-0 right-[-7rem]"/>
        </nav>,
        document.getElementById('mobile-menu-root')
  )

  return (
    <>
    
        <header className={`${padding} md:px-[39px] body1 text-white py-12 flex justify-between items-center bg-MidnightGreen`}>
            <div className='flex items-center gap-12'>
                <img src={logoImg} alt="" className='w-[128px] 1440:w-[160px]' />
                <nav className='hidden md:flex gap-10 '>
                    <Links />
                </nav>
            </div>
            
            <ContactButton extraStyles="hidden md:block" hoverStyles="hover:bg-white hover:text-DarkGreen" />


            <button onClick={() => setMenuIsOpen(prev => !prev)} className="md:hidden">
                    <img src={menuImg} alt="" />
            </button>
        </header>

        {menuIsOpen && <MobileMenuPoral />}
    </>
  )
}

export default Header