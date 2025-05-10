import React, { useContext } from 'react'
import menuIcon from '../assets/icon-menu.svg';
import closeIcon from '../assets/icon-close.svg';
import deleteIcon from '../assets/icon-delete.svg';
import saveIcon from '../assets/icon-save.svg';
import logo from '../assets/logo.svg';
import EditorContext from '../context/EditorContext';
import docIcon from '../assets/icon-document.svg';


const Header = ({handleSidebar, isOpen}) => {
  const {currentDocument, openDeleteModal, saveDocument} = useContext(EditorContext)
  return (
    <header className='bg-Slate800 flex items-center justify-between'>
        <div className='flex items-center gap-6'>
            <button onClick={handleSidebar} className='bg-Slate700 px-4 md:px-5 py-5 md:py-[27px]' aria-label='Menu Options'>
                <img src={isOpen ? closeIcon : menuIcon} alt="Menu Icon" className=' w-[26px] h-[22px]'/>
            </button>
            <img src={logo} alt="Logo Image"  className='1440:block hidden'/>
            <hr />
            {currentDocument && 
                <div className='flex gap-4 items-center'>
                    <img src={docIcon} alt="Document Icon" />
                    <div className='grid gap-1'>
                        <p className="BodyM text-Slate500">Document Name</p>
                        <h6 className="HeadingM text-white">
                            {currentDocument.name}
                        </h6>
                    </div>
                </div> 
            }
        </div>

        <div className='flex items-center gap-5'>
            <button onClick={openDeleteModal} aria-label='Delete Document'>
                <img src={deleteIcon} alt="Delete Icon" />
            </button>
            <button onClick={saveDocument} className='flex items-center gap-3 p-3 bg-Red rounded-md' aria-label='Save Document'>
                <img src={saveIcon} alt="Save Icon" />
                <p className='HeadingM text-white hidden md:block'>Save Changes</p>
            </button>
        </div>
    </header>
  )
}

export default Header