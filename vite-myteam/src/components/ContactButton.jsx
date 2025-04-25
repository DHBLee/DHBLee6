import React from 'react'
import { Link } from 'react-router-dom'

const ContactButton = ({hoverStyles, extraStyles}) => {
  return (
    <button className={`${extraStyles} ${hoverStyles} body1 border-2 px-5 py-1 rounded-3xl w-max`}>
                    <Link to="/contact" className={` transition-all duration-300 ease-in-out`}>contact us</Link>
    </button>
  )
}

export default ContactButton