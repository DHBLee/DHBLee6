import React from 'react'
import menuIcon from '../assets/icon-menu.svg';
import deleteIcon from '../assets/icon-delete.svg';
import saveIcon from '../assets/icon-save.svg';

const Header = () => {
  return (
    <header className='bg-Slate800 flex items-center justify-between'>
        <div>
            <button className='bg-Slate700 px-4 py-5' aria-label='Menu Options'>
                <img src={menuIcon} alt="Menu Icon" />
            </button>
        </div>

        <div className='flex items-center gap-5'>
            <button aria-label='Delete Document'>
                <img src={deleteIcon} alt="Delete Icon" />
            </button>
            <button className='p-3 bg-Red rounded-md' aria-label='Save Document'>
                <img src={saveIcon} alt="Save Icon" />
            </button>
        </div>
    </header>
  )
}

export default Header