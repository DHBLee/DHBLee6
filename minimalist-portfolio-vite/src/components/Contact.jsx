import { React, useState } from 'react'

import githubImage from '../assets/images/icons/github.svg';
import twitterImage from '../assets/images/icons/twitter.svg';
import  linkedinImage from '../assets/images/icons/linkedin.svg';

const Contact = ({padding}) => {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    emailInvalid: false
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    let hasErrors = false;
    const newErrors = {
      name: false,
      email: false,
      message: false,
      emailInvalid: false
    };
    
    if (!name.trim()) {
      newErrors.name = true;
      hasErrors = true;
    }
    
    if (!email.trim()) {
      newErrors.email = true;
      hasErrors = true;
    } else if (!validateEmail(email)) {
      newErrors.emailInvalid = true;
      hasErrors = true;
    }
    
    if (!message.trim()) {
      newErrors.message = true;
      hasErrors = true;
    }
    
    setErrors(newErrors);
    
    if (!hasErrors) {
      console.log('Form submitted:', { name, email, message });
    }
  };

  return (
    <div className={padding}>
      <div className='flex flex-col gap-6 md:gap-8 1440:gap-[125px] 1440:flex-row 1440:justify-between py-6 md:py-8 1440:py-[48px] border-t-1 border-b-1 border-LightGray mt-[40px] mb-[32px] md:mt-[94px] 1440:mb-[47px]'>
        <h1 className='heading1'>Get in Touch</h1>
        
        <div className='1440:w-[60%] grid gap-6'>  
          <p className='body2 1440:body1'>
            I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
          </p>
          <ul className='flex gap-4'>
              <img src={githubImage} alt="" />
              <img src={twitterImage} alt="" />
              <img src={linkedinImage} alt="" />
          </ul>
        </div>
      </div>

      <div className='flex flex-col 1440:flex-row 1440:justify-between gap-6 md:gap-8 1440:gap-[125px]'>
        <h1 className='heading1'>Contact Me</h1>
        <form onSubmit={handleSubmit} className='1440:w-[60%] grid gap-6 mb-[80px] md:mb-[96px] 1440:mb-[106px]'>
          <fieldset className='grid gap-2'>
            <label className='text-[13px] text-BlueGray font-semibold' htmlFor="name">Name</label>
            <input className='p-4 bg-gray-200 border border-transparent focus:border-Cyan' type="text" id='name' placeholder='Jane Appleseed' style={{borderColor: errors.name ? "red" : ""}}/>
            {errors.name && <span className="text-Red text-[10px] italic font-semibold">This field is required</span>}
          </fieldset>
          <fieldset className='grid gap-2'>
            <label className='text-[13px] text-BlueGray font-semibold' htmlFor="email">Email Address</label>
            <input className='p-4 bg-gray-200 border border-transparent focus:border-Cyan' type="email" id="email" placeholder='email@example.com' style={{borderColor: errors.email || errors.emailInvalid ? "red" : ""}}/>
            {errors.email && <span className="text-Red text-[10px] italic font-semibold">This field is required</span>}
            {errors.emailInvalid && <span className="text-Red text-[10px] italic font-semibold">Please enter a valid email address</span>}
          </fieldset>
          <fieldset className='grid gap-2'>
            <label className='text-[13px] text-BlueGray font-semibold' htmlFor="message">Message</label>
            <textarea className='p-4 bg-gray-200 border border-transparent focus:border-Cyan' name="" id="message" placeholder='How can I help?' style={{borderColor: errors.message ? "red" : ""}}></textarea>
            {errors.message && <span className="text-Red text-[10px] italic font-semibold">This field is required</span>}
          </fieldset>
          <button type="submit" className='bg-Blue linkStyling w-max py-[17px] px-8 text-white'>
            send message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact