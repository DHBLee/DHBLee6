import React from 'react'
import { useNavigate } from "react-router-dom";

const Button = ({ children, route }) => {
  const navigate = useNavigate();

  const redirectClick = () => {
    navigate(`/${route}`)
  }
  return (
    <button onClick={redirectClick} className='linkStyling px-7 py-3 border-1 w-max hover:bg-BlueGray hover:text-white transition-all duration-300 ease-in-out'>
        {children}
    </button>
  )
}

export default Button