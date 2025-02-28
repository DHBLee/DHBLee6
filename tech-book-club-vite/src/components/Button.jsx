import React from 'react'


const Button = ({ children, footerBtn }) => {

  const isFooterButton = footerBtn ? 'border-[var(--clr-neutral100)] text-[var(--clr-neutral100)]' : 'bg-[var(--clr-salmon50)] border-[var(--clr-neutral0)]';

  return (
    <button className={`flex align-middle justify-center gap-4 border-2 rounded-lg border-solid ${isFooterButton} textpreset6 py-3 px-5 w-max`}>
        {children}   
    </button>
  )
}

export default Button