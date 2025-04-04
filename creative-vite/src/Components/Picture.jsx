import React from 'react'

const Picture = ({mobileImg, tabletImg, desktopImg}) => {
  return (
    <picture>
        <source media="(min-width: 1440px)" srcSet={desktopImg} />
        <source media="(min-width: 768px)" srcSet={tabletImg} />

        <img src={mobileImg} alt="" className='h-auto w-full'/>
    </picture>
  )
}

export default Picture