import React, { useContext, useEffect, useState } from 'react'
import menuIcon from '../assets/icon-menu.svg';
import closeIcon from '../assets/icon-close.svg';
import saveIcon from '../assets/icon-save.svg';
import logo from '../assets/logo.svg';
import EditorContext from '../context/EditorContext';
import docIcon from '../assets/icon-document.svg';


const Header = ({handleSidebar, isOpen}) => {
  const {currentDocument, text, openDeleteModal, saveDocument} = useContext(EditorContext);
  const [name, setName] = useState(currentDocument?.name || '');
  const isUnchanged = currentDocument?.content === text;

  useEffect(() => {
    setName(currentDocument?.name || '')
  }, [currentDocument]);

  function handleKeyDown(event) {
        if (event.key === 'Enter') {
            saveDocument(name);
            console.log('uh')
            event.target.blur();
        }
  }
  return (
    <header className='bg-Slate800 flex items-center justify-between'>
        <div className='flex items-center gap-6'>
            <button onClick={handleSidebar} className='bg-Slate700 hover:bg-Red px-4 md:px-5 py-5 md:py-[27px]' aria-label='Menu Options'>
                <img src={isOpen ? closeIcon : menuIcon} alt="Menu Icon" className=' w-[26px] h-[22px]'/>
            </button>
            <img src={logo} alt="Logo Image"  className='1440:block hidden'/>
            <hr />
            {currentDocument && 
                <div className='flex gap-4 items-center'>
                    <img src={docIcon} alt="Document Icon" />
                    <div className='grid gap-1'>
                        <p className="BodyM text-Slate500">Document Name</p>
                        <input onChange={(e) => setName(e.target.value.trim())} onKeyDown={handleKeyDown} type="text" value={`${name}`} className='HeadingM text-white hover:border-b-2 w-[20rem] focus:border-b-2 transition-transform duration-200'/>
                    </div>
                </div> 
            }
        </div>

        <div className='flex items-center gap-5'>
            <button disabled={!currentDocument} onClick={openDeleteModal} aria-label='Delete Document' className={!currentDocument && 'cursor-not-allowed'}>
                <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" fill="#7C8187" className={currentDocument ? 'hover:fill-Red' : ''}/></svg>
            </button>
            <button disabled={isUnchanged || !currentDocument} onClick={() => saveDocument(name)} className={`transition-colors duration-300 flex items-center gap-3 p-3 rounded-md aria-label='Save Document' ${isUnchanged || !currentDocument ? 'bg-Slate400 cursor-not-allowed hover:brightness-150' : 'bg-Red'} `}>
                <img src={saveIcon} alt="Save Icon" />
                <p className='HeadingM text-white hidden md:block'>Save Changes</p>
            </button>
        </div>
    </header>
  )
}

export default Header