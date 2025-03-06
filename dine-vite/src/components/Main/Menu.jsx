import React from 'react'

const Menu = ({mobileImg, desktopImg, title, description}) => {
  return (
    <div>
        <picture>
            <source srcSet={desktopImg} media="(min-width: 768px)" />
            
            <img src={mobileImg} alt="Image" className='w-full'/>
        </picture>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Menu