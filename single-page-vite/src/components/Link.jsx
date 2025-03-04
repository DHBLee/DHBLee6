import React from 'react'

const Link = ({children}) => {
  return (
    <a href="#" className='mb-3 text-[1rem] tracking-[2.29px] text-white hover:text-Green underline decoration-Green decoration-[2px] underline-offset-[15px] transition-all duration-300'>{children}</a>
  )
}

export default Link