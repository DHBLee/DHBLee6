import React from 'react'

const Picture = ({mobileImage, tabletImage, desktopImage}) => {
  return (
    <div>
        <picture>
            <source srcSet={mobileImage} media='(min-width: 1440px)' className='rounded-lg'/>

            <source srcSet={tabletImage} media='(min-width: 768px)' className='rounded-lg'/>

            <img src={desktopImage} alt="" className='rounded-xl'/>
        </picture>
    </div>
  )
}

export default Picture