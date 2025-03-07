import React from 'react'
import Menu from './Menu'

import salmonImgMobile from '../../assets/images/homepage/salmon-mobile.jpg';
import salmonImgDesktop from '../../assets/images/homepage/salmon-desktop-tablet.jpg';

import beefImgMobile from '../../assets/images/homepage/beef-mobile.jpg';
import beefImgDesktop from '../../assets/images/homepage/beef-desktop-tablet.jpg';

import chocolateImgMobile from '../../assets/images/homepage/chocolate-mobile.jpg';
import chocolateImgDesktop from '../../assets/images/homepage/chocolate-desktop-tablet.jpg';

import patternDivide from '../../assets/images/patterns/pattern-divide.svg';

const hrStyle = "border-b-2 border-[#444444] pb-[54px] md:pb-[24px]"
const Section3 = ({px}) => {
  return (
    <section className={`${px} bg-CodGray pt-[72px] pb-[102px] md:py-[96px] 1440:pt-[200px] 1440:pb-[120px] flex flex-col 1440:flex-row gap-[85px] md:gap-[54px] 1440:gap-[125px] text-center 1440:text-left 1440:mt-[-7rem]`}>

        <div className='grid gap-9 md:gap-[39px] 1440:gap-[55px] 1440:mt-[-8rem]'>
            <img src={patternDivide} alt="" className='mx-auto md:mx-0 self-end'/>

            <div className='grid gap-[13px] md:gap-[27px]'>
                <h2 className='headingL text-white'>A few highlights from<br /> our menu</h2>
                <p className='body2 md:body1 text-white'>We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season.</p>
            </div>
        </div>

        <div className='grid gap-6'>
            <Menu mobileImg={salmonImgMobile} desktopImg={salmonImgDesktop} title="Seared Salmon Fillet" description="Our locally sourced salmon served with a refreshing buckwheat summer salad." lineStyle={hrStyle}/>
            <Menu mobileImg={beefImgMobile} desktopImg={beefImgDesktop} title="Rosemary Filet Mignon" description="Our prime beef served to your taste with a delicious choice of seasonal sides." lineStyle={hrStyle}/>
            <Menu mobileImg={chocolateImgMobile} desktopImg={chocolateImgDesktop} title="Summer Fruit Chocolate Mousse" description="Creamy mousse combined with summer fruits and dark chocolate shavings."/>
        </div>

    </section>
  )
}

export default Section3