import React from 'react';
import logoImg from '../assets/logo.svg';
import Links from './Links';

const Footer = ({ padding }) => {
  return (
    <footer className={`${padding} bg-DarkGreen md:px-[39px] py-[66px] md:py-[56px] 1440:py-[48px]`}>
        <div className='md:hidden grid gap-6 items-center text-center '>
          <img src={logoImg} alt="" className='mx-auto w-[7rem]'/>
          <div className='text-white heroSubtitle flex gap-7 justify-center'>

            <Links />
          </div>
          <p className='text-[#9aa8a9] heroSubtitle'>
            987 Hillcrest Lane <br />
            Irvine, CA <br />
            California 92714 <br />
            Call Us : 949-833-7432 <br />
          </p>
          <div>
            <nav className='flex justify-center gap-3'>
              <i className="ri-facebook-box-fill text-white hover:text-LightCoral text-[2rem]"></i>
              <i className="ri-pinterest-line text-white hover:text-LightCoral text-[2rem]"></i>
              <i className="ri-twitter-fill text-white hover:text-LightCoral text-[2rem]"></i>
            </nav>

            <p className='text-[#9aa8a9] heroSubtitle'>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>

        <section className='hidden md:flex 1440:hidden justify-between items-stretch'>
          <div className='grid gap-[53px]'>
              <img src={logoImg} alt="" className='mx-auto w-[7rem]'/>

              <div className='grid gap-[32px]'>
                <div className='text-white heroSubtitle flex gap-7 justify-center'>
                  <Links />
                </div>
                <nav className='flex justify-center gap-3'>
                    <i className="ri-facebook-box-fill text-white hover:text-LightCoral text-[2rem]"></i>
                    <i className="ri-pinterest-line text-white hover:text-LightCoral text-[2rem]"></i>
                    <i className="ri-twitter-fill text-white hover:text-LightCoral text-[2rem]"></i>
                </nav>
              </div>
          </div>

          <div className='grid'>
              <p className='text-[#9aa8a9] text-right heroSubtitle'>
                  987 Hillcrest Lane <br />
                  Irvine, CA <br />
                  California 92714 <br />
                  Call Us : 949-833-7432 <br />
              </p>
              <p className='text-[#9aa8a9] heroSubtitle mt-auto'>Copyright 2020. All Rights Reserved</p>
          </div>
        </section>

        <section className='hidden 1440:flex justify-between'>
          <div className='flex gap-[125px]'>
              <div className='flex flex-col justify-between'>
                <img src={logoImg} alt="" className='w-[12rem]'/>

                <div className='text-white heroSubtitle flex gap-12'>
                  <Links />
                </div>
              </div>
              <p className='text-[#9aa8a9] text-left heroSubtitle'>
                    987 Hillcrest Lane <br />
                    Irvine, CA <br />
                    California 92714 <br />
                    Call Us : 949-833-7432 <br />
              </p>
          </div>

          <div className='flex flex-col justify-between items-end'>
                <nav className='flex justify-center gap-3'>
                    <i className="ri-facebook-box-fill text-white hover:text-LightCoral text-[2rem]"></i>
                    <i className="ri-pinterest-line text-white hover:text-LightCoral text-[2rem]"></i>
                    <i className="ri-twitter-fill text-white hover:text-LightCoral text-[2rem]"></i>
                </nav>
                <p className='text-[#9aa8a9] heroSubtitle mt-auto'>Copyright 2020. All Rights Reserved</p>
          </div>
        </section>
    </footer>
  )
}

export default Footer