import React from 'react'

import personIcon from '../assets/icon-person.svg';
import cogIcon from '../assets/icon-cog.svg';
import chartIcon from '../assets/icon-chart.svg';

const icons = [
    {
        icon: personIcon,
        message: "The quality of our talent network",
    },
    {
        icon: cogIcon,
        message: "Usage & implementation of our software",
    },
    {
        icon: chartIcon,
        message: "How we help drive innovation"
    }
]

const ContactSection = ({padding}) => {
  return (
    <section className={`${padding} flex flex-col 1440:flex-row gap-[56px] bg-MidnightGreen`}>
        <div className='flex flex-col gap-10'>
            <div className='text-center'>
                <h2 className='heading2 text-white '>Contact</h2>
                <h3 className='text-[32px] leading-[48px] font-bold text-LightCoral'>Ask us about</h3>
            </div>

            <div className='grid gap-6'>
                {icons.map((item, index) => (
                    <div key={index} className='flex items-center gap-6'>
                        <img src={item.icon} alt="" />
                        <p className='body1 text-white'>{item.message}</p>
                    </div>
                ))}
            </div>
        </div>

        <form className='grid gap-6'>
            <fieldset className='border-b-2 text-white'>
                <label htmlFor="name"></label>
                <input id="name" type="text" placeholder='Name' className="pl-4 pb-3"/>
            </fieldset>
            <fieldset className='border-b-2 text-white'>
                <label htmlFor="email"></label>
                <input id="email" type="email" placeholder='Email Address' className="pl-4 pb-3" />
            </fieldset>
            <fieldset className='border-b-2 text-white'>
                <label htmlFor="company"></label>
                <input id="company" type="text" placeholder='Company Name' className="pl-4 pb-3"/>
            </fieldset>
            <fieldset className='border-b-2 text-white'>
                <label htmlFor="title"></label>
                <input id='title' type="text" placeholder='Title' className="pl-4 pb-3"/>
            </fieldset>
            <fieldset className='border-b-2 text-white'>
                <label htmlFor="message"></label>
                <textarea name="" id="message" placeholder='Message' className="pl-4 pb-3">

                </textarea>
            </fieldset>
        </form>
    </section>
  )
}

export default ContactSection