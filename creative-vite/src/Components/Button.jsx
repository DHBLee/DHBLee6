import React from 'react'

const Button = ({children, extraStyle}) => {
  return (
    <button className={`${extraStyle} px-[44px] py-[22px] hover:font-bold hover:brightness-200 duration-300 ease-in-out `}>
        {children}
    </button>
  )
}

export default Button