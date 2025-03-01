import React from 'react'
import Button from './Button'

const Options = ({ title, price, custom, firstInfo, secondInfo, buttonInfo }) => {
  const proStyle = title === "Pro" ? "linear-gradient(to bottom right, hsla(17, 41%, 97%, 0.9) 50%, rgba(156, 201, 218, 0.7))" : "";

  return (
    <div className={`grid gap-8 border border-solid border-[var(--clr-neutral200)] rounded-lg p-6 ${title === "Pro" ? "pro-transform" : ""}`} style={{background: proStyle}}>
        <div className='grid gap-6'>
            <h4 className='textpreset4 text-[var(--clr-neutral900)]'>{title}</h4>
            {price && ( <p className='textpreset5 text-[var(--clr-neutral700)] my-auto'> <span className='textpreset3 text-[var(--clr-neutral900)] align-middle'>${price}</span> <span className='align-middle'>/month</span></p> )}
            {custom && <h3 className='textpreset3'>{custom}</h3> }
            <hr />
            <ul className='textpreset5 text-[var(--clr-neutral700)]'>
                <li className="check">{firstInfo}</li>
                <li className="check">{secondInfo}</li>
            </ul>
        </div>
        <Button identifier="options">
            {buttonInfo}
        </Button>
    </div>
  )
}

export default Options