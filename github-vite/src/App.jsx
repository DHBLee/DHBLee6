import { useState, useEffect } from 'react'

import sunImg from './assets/images/icon-sun.svg';
import moonImg from './assets/images/icon-moon.svg';
import searchImg from './assets/images/icon-search.svg';

import locationImg from './assets/images/icon-location.svg';
import twitterImg from './assets/images/icon-twitter.svg';
import websiteImg from './assets/images/icon-website.svg';
import companyImg from './assets/images/icon-company.svg';


document.documentElement.classList.add("dark");
function App() {
  const [theme, setTheme] = useState("dark");

  const isDark = theme === "dark";

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(prevState => (prevState === "dark" ? "light" : "dark"));

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  };

  return (
    <div className='h-screen px-6 md:px-[97px] 1440:px-[355px]  dark:bg-Blacker bg-LightGray '>
        <header className='pt-[31px] md:pt-[140px] 1440:pt-[144px]  pb-[36px] flex justify-between items-center'>
          <h1 className='heading1 dark:text-White text-Black'>devfinder</h1>

          <div className='flex items-center gap-4'>
            <h4 className='text-[13px] font-bold tracking-[2.5px] dark:text-White text-Black'>{theme === "dark" ? "LIGHT" : "DARK"}</h4>
            <img src={isDark ? sunImg : moonImg} alt="" onClick={handleTheme}/>
          </div>
        </header>
        <form className='flex justify-between items-center py-[7px] px-[5px] mb-[16px] bg-White dark:bg-DarkGray rounded-xl'>
            <div className='flex gap-2'>
              <img src={searchImg} alt="" />
              <input className='dark:text-White ' type="text" placeholder='Search Github username...'/>
            </div>
            <button className='px-[16px] py-[12.5px] bg-Blue rounded-lg text-white text-[14px] font-bold'>Search</button>
        </form>
        <div className='grid gap-[23px] px-[24px] py-[34px] md:p-[40px] 1440:p-[48px] bg-White dark:bg-DarkGray rounded-xl'>
          <div className='flex gap-[20px] items-center mb-[10px]'>
            <img className='rounded-[50%] object-cover h-[5rem] w-[5rem]' src="https://images.pexels.com/photos/20787/pexels-photo.jpg?cs=srgb&dl=pexels-kmerriman-20787.jpg&fm=jpg" alt="" />
            <div>
              <div className='flex flex-col 1440:flex-row'>
                  <div className='grid'>
                    <h1 className='text-[16px] md:text-[26px] text-Black dark:text-White font-bold'>The Octocat</h1>
                    <h4 className='text-[13px] md:text-[16px] font-normal text-Blue'>@octocat</h4>
                  </div>
                  <h4 className='dark:text-LightGray text-Gray text-[13px]'>Joined 25 Jan 2011</h4>
              </div>
              <p className='heading4 md:body2 hidden 1440:block dark:text-LightGray text-Gray '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid ab fuga deleniti magni maiores eligendi? Unde optio aliquam veritatis earum ut maxime in! Blanditiis perspiciatis repellendus assumenda odit eligendi.</p>
            </div>
          </div>
          <p className='heading4 md:body2 1440:hidden dark:text-LightGray text-Gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam accusantium deleniti impedit. Suscipit asperiores vitae quidem velit corrupti adipisci doloribus hic quasi rem nam, ratione ex possimus maxime. Voluptate?</p>
          <ul className='px-[15px] py-[22px] flex justify-evenly dark:bg-Blacker bg-LightGray rounded-lg'>
            <li className='grid text-center dark:text-LightGray text-Gray text-[11px] md:text-[13px]'>
              Repos
              <h2 className='text-[16px] md:text-[22px] font-bold text-Black dark:text-White'>8</h2>
            </li>
            <li className='grid text-center dark:text-LightGray text-Gray text-[11px] md:text-[13px]'>
              Followers
              <h2 className='text-[16px] md:text-[22px] font-bold text-Black dark:text-White'>3928</h2>
            </li>
            <li className='grid text-center dark:text-LightGray text-Gray text-[11px] md:text-[13px]'>
              Following
              <h2 className='text-[16px] md:text-[22px] font-bold text-Black dark:text-White'>9</h2>
            </li>
          </ul>
          <ul className='grid gap-2 md:grid-cols-[repeat(2,1fr)]'>
            <li className='flex gap-3 items-center dark:text-LightGray text-Gray'>
              <img src={locationImg} alt="" className='dark:invert dark:brightness-0 invert-0 brightness-100'/>
              San Francisco
            </li>
            <li className='flex gap-3 items-center dark:text-LightGray text-Gray'>
              <img src={websiteImg} alt="" className='dark:invert dark:brightness-0 invert-0 brightness-100'/>
              https://github.blog
            </li>
            <li className='flex gap-3 items-center dark:text-LightGray text-Gray'>
              <img src={twitterImg} alt="" className='dark:invert dark:brightness-0 invert-0 brightness-100'/>
              Not Available
            </li>
            <li className='flex gap-3 items-center dark:text-LightGray text:Gray'>
              <img src={companyImg} alt="" className='dark:invert dark:brightness-0 invert-0 brightness-100'/>
              agithub
            </li>
          </ul>
        </div>
    </div>
  )
}

export default App
