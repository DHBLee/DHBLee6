import {React, useState, useRef} from 'react'
import Link from './Link'
import Navbar from './Navbar'


const spanError = "text-red text-[12px] leading-[16px] tracing-[-0.17px] ml-auto mt-[-1.5rem]";

const Footer = ({ringsPattern, pxStyling}) => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleUserInput = (e) => {
    e.preventDefault();
    
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
  
    setNameError(!name);
    setEmailError(!email || !/\S+@\S+\.\S+/.test(email))
    setMessageError(!message)
  }

  return (
    <footer className={`relative grid ${pxStyling} py-[60px] 1440:py-[84px] gap-[87px] md:gap-[92px] bg-Darkgrey overflow-hidden`}>

      <div className='flex flex-col gap-[50px] 1440:gap-[220px] 1440:flex-row 1440:items-start mx-auto md:max-w-[445px] 1440:max-w-none'>

          <div className='grid gap-5 1440:gap-9 text-center 1440:text-left basis-1/2'>
            <h2 className='text-[40px] md:text-[72px] 1440:text-xl text-white font-bold leading-none'>Contact</h2>
            <p className='text-[1rem] md:text-p text-Grey'>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
          </div>

          <form onSubmit={handleUserInput} className='grid gap-8 basis-1/2'>

            <fieldset className={`${nameError ? "border-red" : ""} border-b-1 pb-4 pl-5`}>
              <label htmlFor="name"></label>
              <input type="text" name="name" id="name" placeholder='NAME' ref={nameRef} className={`${nameError ? "error" : ""} w-full`}/>
            </fieldset>
            {nameError && <span className={spanError}>Sorry, invalid format here</span> }

            <fieldset className={`${emailError ? "border-red" : ""} border-b-1 pb-4 pl-5`}>
              <label htmlFor="email"></label>
              <input type="email" id='email' placeholder='EMAIL' ref={emailRef} className={`${emailError ? "error" : ""} w-full`}/>
            </fieldset>
            {emailError && <span className={spanError}>Sorry, invalid format here</span> }

            <fieldset className={`${messageError ? "border-red" : ""} border-b-1 pb-4 pl-5`}>
              <label htmlFor="message"></label>
              <textarea name="message" id="message" placeholder='MESSAGE' ref={messageRef} className={`${messageError ? "error" : ""} w-full`}></textarea>
            </fieldset>
            {messageError && <span className={spanError}>Sorry, invalid format here</span> }

            <button type='submit' className='ml-auto mb-3 text-[1rem] tracking-[2.29px] text-white hover:text-Green underline decoration-Green decoration-[2px] underline-offset-[15px]'>
                SEND MESSAGE
            </button>

          </form>
      </div>

      <div className='text-center'>
        <hr />
        <Navbar />
      </div>

      <img src={ringsPattern} alt="" className="absolute top-[55%] left-[-13rem] md:top-[64%] 1440:top-[50%] md:left-[-17rem]"/>

    </footer>
  )
}

export default Footer