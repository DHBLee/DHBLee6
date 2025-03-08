import React from 'react'

const Button = ({children, classStyle}) => {
  return (
    <button className={`${classStyle} px-[55px] py-[15px] headingS border-1 w-max mx-auto`}>
        {children}
    </button>
  )
}

export default Button