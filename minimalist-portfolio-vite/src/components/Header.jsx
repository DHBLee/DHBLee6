import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';


const Header = () => {
  return (
    <header>
        <img src={logoImg} alt="" />
        <nav>
                <Link to="/" className="linkStyling">home</Link>
                <Link to="/portfolio" className="linkStyling">portfolio</Link>
                <Link to="/contact" className="linkStyling">contact me</Link>
        </nav>
    </header>
  )
}

export default Header