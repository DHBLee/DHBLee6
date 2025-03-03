import React from 'react'

const Link = ({children}) => {
  return (
    <a href="#" className='mb-1 text-[1rem] tracking-[2.29px] text-white hover:text-Green underline decoration-Green decoration-[2px] underline-offset-8'>{children}</a>
  )
}

export default Link