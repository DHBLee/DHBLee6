import { React, useState } from 'react'

import personIcon from '../assets/icon-person.svg';
import cogIcon from '../assets/icon-cog.svg';
import chartIcon from '../assets/icon-chart.svg';

import bgPattern from '../assets/bg-pattern-contact-2.svg';
import bgPattern2 from '../assets/bg-pattern-about-2-contact-1.svg';

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    company: false,
    title: false,
    message: false,
  })

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    company: false,
    title: false,
    message: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [id]: value
    }));

    if (errors[id]) {
        setErrors(prev => ({
            ...prev,
            [id]: false
        }));
    }
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched(prev => ({
        ...prev,
        [id]: true
    }));
    validateField(id, formData[id]);
  }

  const validateField = (field, value) => {
    let isValid = true;

    switch(field) {
        case 'name':
            isValid = value.trim().length > 0;
            break;
        case 'email':
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            break
        case 'company':
            isValid = value.trim().length > 0;
            break
        case 'title':
            isValid = value.trim().length > 0;
            break;
        case 'message':
            isValid = value.trim().length > 10;
            break;
        default:
            break;
    }

    setErrors(prev => ({
        ...prev,
        [field]: !isValid
    }));

    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;

    for (const field in formData) {
        const isValid = validateField(field, formData[field]);
        if (!isValid) formIsValid = false;
        setTouched(prev => ({...prev, [field]: true}));
    }

    if (formIsValid) {
        alert("form is successful");

        setFormData({
            name: '',
            email: '',
            company: '',
            title: '',
            message: ''
          });
      
          setErrors({
            name: false,
            email: false,
            company: false,
            title: false,
            message: false
          });
      
          setTouched({
            name: false,
            email: false,
            company: false,
            title: false,
            message: false
          });
    }
  }



  return (
    <section className={`relative overflow-hidden ${padding} pb-[80px] 1440:pb-[120px] pt-[32px] 1440:pt-[72px] md:px-[127px] flex flex-col 1440:flex-row gap-[56px] bg-MidnightGreen`}>
        <img src={bgPattern2} alt="" className="hidden md:block absolute left-[-6rem]"/>
        <div className='flex flex-col gap-10'>
            <div className='grid gap-7 text-center 1440:text-left'>
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

        <form onSubmit={handleSubmit} className='grid gap-6 flex-grow'>
            <div>
                <fieldset className={`focus-within:border-RaptureBlue border-b-2 ${errors.name && touched.name ? 'border-LightCoral' : 'border-white'}`}>
                    <label htmlFor="name"></label>
                    <input 
                        id="name" 
                        type="text" 
                        placeholder='Name' 
                        className="pl-4 pb-3 bg-transparent w-full text-white focus:outline-none"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </fieldset>
                {errors.name && touched.name && (
                    <p className="text-LightCoral text-[10px] italic mt-1">Name is required</p>
                )}
            </div>

            <div>
                <fieldset className={` focus-within:border-RaptureBlue border-b-2 ${errors.email && touched.email ? 'border-LightCoral' : 'border-white'}`}>
                    <label htmlFor="email"></label>
                    <input 
                        id="email" 
                        type="email" 
                        placeholder='Email Address' 
                        className="pl-4 pb-3 bg-transparent w-full text-white focus:outline-none"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </fieldset>
                {errors.email && touched.email && (
                    <p className="text-LightCoral text-[10px] italic mt-1">Please enter a valid email</p>
                )}
            </div>

            <div>
                <fieldset className={` focus-within:border-RaptureBlue border-b-2 ${errors.company && touched.company ? 'border-LightCoral' : 'border-white'}`}>
                    <label htmlFor="company"></label>
                    <input 
                        id="company" 
                        type="text" 
                        placeholder='Company Name' 
                        className="pl-4 pb-3 bg-transparent w-full text-white focus:outline-none"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </fieldset>
                {errors.company && touched.company && (
                    <p className="text-LightCoral text-[10px] italic mt-1">Company name is required</p>
                )}
            </div>

            <div>
                <fieldset className={` focus-within:border-RaptureBlue border-b-2 ${errors.title && touched.title ? 'border-LightCoral' : 'border-white'}`}>
                    <label htmlFor="title"></label>
                    <input 
                        id="title" 
                        type="text" 
                        placeholder='Title' 
                        className="pl-4 pb-3 bg-transparent w-full text-white focus:outline-none"
                        value={formData.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </fieldset>
                {errors.title && touched.title && (
                    <p className="text-LightCoral text-[10px] italic mt-1">Title is required</p>
                )}
            </div>

            <div>
                <fieldset className={` focus-within:border-RaptureBlue border-b-2 ${errors.message && touched.message ? 'border-LightCoral' : 'border-white'}`}>
                    <label htmlFor="message"></label>
                    <textarea 
                        id="message" 
                        placeholder='Message' 
                        className="pl-4 pb-3 bg-transparent w-full text-white focus:outline-none resize-none"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </fieldset>
                {errors.message && touched.message && (
                    <p className="text-LightCoral text-[10px] italic mt-1">Message must be at least 10 characters</p>
                )}
            </div>

            <button 
                type="submit" 
                className='text-DeepGreen body1 bg-white rounded-3xl w-max px-6 1440:px-8 py-2 1440:py-0 hover:bg-LightCoral hover:text-white transition-colors'
            >
                submit
            </button>
        </form>

        <img src={bgPattern} alt="" className='absolute bottom-[-7rem] md:bottom-0 right-[-7rem]'/>
    </section>
  )
}

export default ContactSection