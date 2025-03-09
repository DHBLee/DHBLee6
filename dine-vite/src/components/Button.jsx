import React from 'react'
import { useNavigate } from "react-router-dom";

const Button = ({children, classStyle}) => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <button onClick={handleBookingClick} className={`${classStyle} px-[55px] py-[15px] headingS border-1 w-max mx-auto hover:border-black hover:text-black hover:bg-white transition duration-300 `}>
        {children}
    </button>
  )
}

export default Button