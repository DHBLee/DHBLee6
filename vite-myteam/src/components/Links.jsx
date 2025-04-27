import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({onLinkClick}) => {

  const handleLinkClick = () => {
    onLinkClick(); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <>
        <Link to="/" onClick={handleLinkClick} className='hover:text-LightCoral duration-300 ease-in-out transition-colors'>home</Link>
        <Link to="/about" onClick={handleLinkClick} className='hover:text-LightCoral duration-300 ease-in-out transition-colors'>about</Link>
    </>
  )
}

export default Links