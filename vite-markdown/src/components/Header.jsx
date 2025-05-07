import React from 'react'
import menuIcon from '../assets/icon-menu.svg';
import closeIcon from '../assets/icon-close.svg';
import deleteIcon from '../assets/icon-delete.svg';
import saveIcon from '../assets/icon-save.svg';

const Header = ({handleSidebar, isOpen}) => {
  return (
    <header className='bg-Slate800 flex items-center justify-between'>
        <div>
            <button onClick={handleSidebar} className='bg-Slate700 px-4 md:px-5 py-5 md:py-[27px]' aria-label='Menu Options'>
                <img src={isOpen ? closeIcon : menuIcon} alt="Menu Icon" className=' w-[26px] h-[22px]'/>
            </button>
        </div>

        <div className='flex items-center gap-5'>
            <button aria-label='Delete Document'>
                <img src={deleteIcon} alt="Delete Icon" />
            </button>
            <button className='flex items-center gap-3 p-3 bg-Red rounded-md' aria-label='Save Document'>
                <img src={saveIcon} alt="Save Icon" />
                <p className='HeadingM text-white hidden md:block'>Save Changes</p>
            </button>
        </div>
    </header>
  )
}

export default Header