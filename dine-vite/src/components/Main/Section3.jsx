import React from 'react'
import Menu from './Menu'

import salmonImgMobile from '../../assets/images/homepage/salmon-mobile.jpg';
import salmonImgDesktop from '../../assets/images/homepage/salmon-desktop-tablet.jpg';

import beefImgMobile from '../../assets/images/homepage/beef-mobile.jpg';
import beefImgDesktop from '../../assets/images/homepage/beef-desktop-tablet.jpg';

import chocolateImgMobile from '../../assets/images/homepage/chocolate-mobile.jpg';
import chocolateImgDesktop from '../../assets/images/homepage/chocolate-desktop-tablet.jpg';
const Section3 = () => {
  return (
    <section className='bg-CodGray'>

        <div>
            <h2>A few highlights from our menu</h2>
            <p>We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season.</p>
        </div>

        <div>
            <Menu mobileImg={salmonImgMobile} desktopImg={salmonImgDesktop} title="Seared Salmon Fillet" description="Our locally sourced salmon served with a refreshing buckwheat summer salad."/>
            <Menu mobileImg={beefImgMobile} desktopImg={beefImgDesktop} title="Rosemary Filet Mignon" description="Our prime beef served to your taste with a delicious choice of seasonal sides."/>
            <Menu mobileImg={chocolateImgMobile} desktopImg={chocolateImgDesktop} title="Summer Fruit Chocolate Mousse" description="Creamy mousse combined with summer fruits and dark chocolate shavings."/>
        </div>

    </section>
  )
}

export default Section3