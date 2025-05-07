import React from 'react'
import logo from '../assets/logo.svg';


const Sidebar = ({isOpen}) => {
  return (
    <nav className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 transition-transform duration-300 z-50 flex flex-col items-start gap-7 px-6 py-[27px] w-[250px] h-screen bg-Slate800`}>
        <img src={logo} alt="Logo Image" />

        <div className='grid gap-[29px] w-full'>
            <h6 className="HeadingS uppercase text-Slate600">My Documents</h6>
            <button className='p-3 bg-Red rounded-md text-white HeadingM w-full'>+ New Document</button>
        </div>
    </nav>
  )
}

export default Sidebar