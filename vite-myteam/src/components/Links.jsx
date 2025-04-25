import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <>
        <Link to="/" className='hover:text-LightCoral duration-300 ease-in-out transition-colors'>home</Link>
        <Link to="/about" className='hover:text-LightCoral duration-300 ease-in-out transition-colors'>about</Link>
    </>
  )
}

export default Links