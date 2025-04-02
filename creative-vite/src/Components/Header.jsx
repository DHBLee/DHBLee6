import React from 'react'
import logoImg from '../assets/desktop/logo.svg';
import menuImg from '../assets/mobile/icon-hamburger.svg';
import closeImg from '../assets/mobile/icon-cross.svg';

const menu = <img src={menuImg} alt="" />;
const close = <img src={closeImg} alt="" />;

const Header = () => {
  [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header>
        <img src={logoImg} alt="" />

        <nav className='hidden md:flex'>
            <a href="">About</a>
            <a href="">Service</a>
            <a href="">Projects</a>
            <a href="">Schedule a Call</a>
        </nav>
        {navIsOpen ? }
    </header>
  )
}

export default Header