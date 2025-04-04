import React from 'react'

const Button = ({children, extraStyle}) => {
  return (
    <button className={`${extraStyle} px-[44px] py-[22px]`}>
        {children}
    </button>
  )
}

export default Button