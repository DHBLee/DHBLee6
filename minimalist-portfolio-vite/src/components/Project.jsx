import React from 'react'
import Picture from './Picture'
import Button from './Button'

const Project = ({id, imgMobile, imgTablet, imgDesktop, title, description, style}) => {
  return (
    <section className={`${style} items-center`}>
        <div className='md:w-[50%] self-start'>
            <Picture mobileImg={imgMobile} tabletImg={imgTablet} desktopImg={imgDesktop}/>
        </div>
        <div className='md:w-[50%] 1440:w-[35%] border-t-1 border-b-1 border-LightGray self-stretch'>
            <div className='h-full py-[24px] flex flex-col justify-center gap-[24px]'>
                <h1 className='heading2'>{title}</h1>
                <p className='body2 1440:body1'>{description}</p>
                <Button route={`portfolio/${id}`}>
                    view project
                </Button>

            </div>
        </div>
    </section>
  )
}

export default Project