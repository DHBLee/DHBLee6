import { useState, React, useEffect } from 'react'
import sunIconLight from '../assets/images/icon-sun-light.svg';
import sunIconDark from '../assets/images/icon-sun-dark.svg';
import moonIconLight from '../assets/images/icon-moon-light.svg';
import moonIconDark from '../assets/images/icon-moon-dark.svg';

const Header = ({currentTitle, currentIcon, colors}) => {
    const [theme, setTheme] = useState("");

    const isDark = theme === "dark";
    console.log(theme)
    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;
        if (isDark) {
            console.log("hello")
            html.classList.add("dark");
            body.classList.add("dark");
        } else {
            html.classList.remove("dark");
            body.classList.remove("dark");
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === "dark" ? "" : "dark");
    }

    return (
        <header className="flex items-center justify-between py-6 md:py-14 1440:py-[97px]">
            {currentIcon &&
                <div className="flex items-center gap-3">
                    <div className={`${colors[currentTitle]} p-1.5 rounded-lg`}>
                        <img src={currentIcon} alt="" className="w-[40px] h-[40px]"/>
                    </div>
                    <h4 className="text-preset4 text-Blue900 dark:text-white">{currentTitle}</h4>
                </div>
            }

            <div className="flex items-end justify-end gap-2 ml-auto">
                {isDark ? (<img src={sunIconLight} alt="" />) : (<img src={sunIconDark} alt="" /> )}
                <button className="self-center my-auto">
                    <label className="switch">
                        <input type="checkbox" id="theme-toggle" onChange={toggleTheme} />
                        <span className="slider round"></span>
                    </label>
                </button>
                {isDark ? (<img src={moonIconLight} alt="" />) : (<img src={moonIconDark} alt="" />)}
            </div>
        </header>
  )
}

export default Header