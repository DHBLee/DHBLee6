import { useState, useEffect, useRef } from 'react'

import sunImg from './assets/images/icon-sun.svg';
import moonImg from './assets/images/icon-moon.svg';
import searchImg from './assets/images/icon-search.svg';

import locationImg from './assets/images/icon-location.svg';
import twitterImg from './assets/images/icon-twitter.svg';
import websiteImg from './assets/images/icon-website.svg';
import companyImg from './assets/images/icon-company.svg';

let information = [];
let information2 = [];

document.documentElement.classList.add("dark");
function App() {
  const [isError, setIsError] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  if(user) {
    information = [
      {
        title: "Repos",
        value: user.public_repos || 0
      },
      {
        title: "Followers",
        value: user.followers || 0
      },
      {
        title: "Following",
        value: user.following || 0
      },
    ]
  
    information2 = [
      {
        img: locationImg,
        value: user.location || "Not available"
      },
      {
        img: websiteImg,
        value: user.blog || "Not available"
      },
      {
        img: twitterImg,
        value: user.twitter_username || "Not available"
      },
      {
        img: companyImg,
        value: user.company || "Not available"
      }
    ]
  }
  const inputRef = useRef(null);

  const isDark = theme === "dark";
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      body.classList.add("dark");
    } else {
      html.classList.remove("dark");
      body.classList.remove("dark");
    }
  }, [theme]);

  const fetchUser = async (username) => {
    try {
      setLoading(true);
      setIsError(false);

      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const username = inputRef.current.value.trim();
    if (username) {
      fetchUser(username);
    }
  };
  
  const handleTheme = () => {
    setTheme(prevState => (prevState === "dark" ? "light" : "dark"));

  };

  return (
    <div className='h-screen px-6 md:px-[97px] 1440:px-[355px] '>
        <header className='pt-[31px] md:pt-[140px] 1440:pt-[144px]  pb-[36px] flex justify-between items-center'>
          <h1 className='heading1 dark:text-White text-Black'>devfinder</h1>

          <div className='flex items-center gap-4 group' onClick={handleTheme}>
            <h4 className='text-[13px] font-bold tracking-[2.5px] dark:text-White text-Gray group-hover:text-Black dark:group-hover:text-Gray transition-colors duration-300 cursor-pointer'>{theme === "dark" ? "LIGHT" : "DARK"}</h4>
            <img src={isDark ? sunImg : moonImg} alt="" className='transition-colors duration-300 group-hover:brightness-0 group-hover:saturate-100 group-hover:invert-[44%] group-hover:sepia-[9%] group-hover:saturate-[1234%] group-hover:hue-rotate-[177deg] group-hover:brightness-[93%] group-hover:contrast-[86%]'/>
          </div>
        </header>
        {isError &&  <span className='md:hidden text-[15px] font-bold text-Red'>No results</span> }
        <form onSubmit={handleSearch} className='flex justify-between items-center py-[7px] px-[5px] 1440:px-[8px] mb-[16px] 1440:mb-[24px] bg-White dark:bg-DarkGray rounded-xl'>
            <div className='flex gap-2 1440:gap-5'>
              <img src={searchImg} alt="" className='md:ml-6'/>
              <input ref={inputRef} className='dark:text-White w-[25ch] min-w-[8ch] max-sm:max-w-[20ch] ' type="text" placeholder='Search Github username...'/>
            </div>
            <div className='flex gap-[24px] items-center'>
              {isError && <span className='hidden md:block text-[15px] font-bold text-Red'>No results</span>}
              <button type='submit' className='hover:brightness-125 transition-all duration-300 px-[16px] py-[12.5px] bg-Blue rounded-lg text-white text-[14px] font-bold'>Search</button>
            </div>
        </form>

        {loading && <p className='text-[40px] dark:text-White text-Black'>Loading...</p> }

        {user && (<div className='grid gap-[23px] px-[24px] py-[34px] md:p-[40px] 1440:p-[48px] bg-White dark:bg-DarkGray rounded-xl'>
          <div className='flex gap-[20px] items-center mb-[10px] 1440:items-start'>
            <img className='rounded-[50%] object-cover h-[5rem] w-[5rem]' src={user.avatar_url} alt="" />
            <div className='grid gap-[20px] 1440:gap-[32px]'>
              <div className='flex flex-col 1440:flex-row 1440:items-start 1440:justify-between'>
                  <div className='grid'>
                    <h1 className='text-[16px] md:text-[26px] text-Black dark:text-White font-bold'>{user.name || user.login}</h1>
                    <h4 className='text-[13px] md:text-[16px] font-normal text-Blue'>@{user.login}</h4>
                  </div>
                  <h4 className='dark:text-LightGray text-Gray text-[13px] 1440:mt-[0.6rem]'>Joined {new Date(user.created_at).toLocaleDateString()}</h4>
              </div>
              <p className='heading4 md:body2 hidden 1440:block dark:text-LightGray text-Gray '>{user.bio || "No bio available."}</p>
              <ul className='hidden 1440:flex px-[15px] py-[22px] justify-evenly dark:bg-Blacker bg-LightGray rounded-lg'>
                
                {information.map((info, index) => (
                  <li key={index} className='grid text-center dark:text-LightGray text-Gray text-[11px] md:text-[13px]'>
                    {info.title}
                    <h2  className='text-[16px] md:text-[22px] font-bold text-Black dark:text-White'>{info.value}</h2>
                  </li>
                ))}
               
              </ul>
              <ul className='hidden 1440:grid gap-2 md:grid-cols-[repeat(2,1fr)]'>
                {information2.map((info2, index) => (
                    <li key={index} className='flex gap-3 items-center dark:text-LightGray text-Gray' style={{color: info2.value === "Not available" ? "hsl(217, 20%, 51%)" : ""}}>
                      <img src={info2.img} alt="" className={` ${info2.value === "Not available" ? "custom-filter" : "dark:invert dark:brightness-0 invert-0 brightness-100"}`}/>
                      {info2.img === websiteImg ? (
                        <a href={info2.value !== "Not available" ? info2.value : "#"} className='hover:underline decoration-2 underline-offset-2 '>{info2.value}</a>
                      ) : (
                        <span>{info2.value}</span>
                      )}
                    </li>    
                ))}
              </ul>
            </div>
          </div>
          <p className='heading4 md:body2 1440:hidden dark:text-LightGray text-Gray'>{user.bio || "No bio available."}</p>
          <ul className='1440:hidden px-[15px] py-[22px] flex justify-evenly dark:bg-Blacker bg-LightGray rounded-lg'>
            {information.map((info, index) => (
                    <li key={index} className='grid text-center dark:text-LightGray text-Gray text-[11px] md:text-[13px]'>
                      {info.title}
                      <h2  className='text-[16px] md:text-[22px] font-bold text-Black dark:text-White'>{info.value}</h2>
                    </li>
            ))}
          </ul>
          <ul className='1440:hidden grid gap-2 md:grid-cols-[repeat(2,1fr)]'>
            {information2.map((info2, index) => (
                  <li key={index} className='flex gap-3 items-center dark:text-LightGray text-Gray' style={{color: info2.value === "Not available" ? "hsl(217, 20%, 51%)" : ""}}>
                    <img src={info2.img} alt="" className={` ${info2.value === "Not available" ? "custom-filter" : "dark:invert dark:brightness-0 invert-0 brightness-100"}`}/>
                    {info2.img === websiteImg ? (
                      <a href={info2.value !== "Not available" ? info2.value : "#"} className='hover:underline'>{info2.value}</a>
                    ) : (
                      <span>{info2.value}</span>
                    )}
                  </li>
            ))}
          </ul>
        </div>)}
        {!user && <p className='text-[3rem] dark:text-White text-Black'>Search for someone on github.</p> }
    </div>
  )
}

export default App
