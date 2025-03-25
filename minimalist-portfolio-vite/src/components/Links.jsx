import React from 'react'
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <>
        <Link to="/" className="linkStyling">home</Link>
        <Link to="/portfolio" className="linkStyling">portfolio</Link>
        <Link to="/contact" className="linkStyling">contact me</Link>
    </>
  )
}

export default Links