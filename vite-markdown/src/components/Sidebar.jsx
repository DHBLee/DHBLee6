import React, { useContext, useRef, useEffect, useState } from 'react'
import logo from '../assets/logo.svg';
import EditorContext from '../context/EditorContext';
import lightIcon from '../assets/icon-light-mode.svg';
import darkIcon from '../assets/icon-dark-mode.svg';
import docIcon from '../assets/icon-document.svg';


const Sidebar = ({isOpen, handleSidebar}) => {
  const {
    documents, 
    addDocument, 
    setCurrentDocument, 
    isAddingDocument, 
    setIsAddingDocument 
  } = useContext(EditorContext);

  const [newDocName, setNewDocName] = useState('');
  const [theme, setTheme] = useState("");

  const isDark = theme === "dark";

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


  const inputRef = useRef(null);

  useEffect(() => {
    if (isAddingDocument && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddingDocument]);

  const handleNewDocumentClick = () => {
    setIsAddingDocument(true);
    setNewDocName('');
  };

  const handleDocumentClick = (doc) => {
    handleSidebar()
    setCurrentDocument(doc);
  }

  const handleNameSubmit = (e) => {
    if (e.key === 'Enter' && newDocName.trim()) {
      addDocument(newDocName.trim());
      setNewDocName('');
    }
  };

  const handleBlur = () => {
    if (newDocName.trim()) {
      addDocument(newDocName.trim())
    }
    setIsAddingDocument(false);
    setNewDocName('')
  }

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <nav className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 transition-transform duration-300 z-50 flex flex-col items-start gap-7 px-6 py-[27px] w-[250px] h-screen bg-Slate900 overflow-y-auto`}>
        <img src={logo} alt="Logo Image" className='1440:hidden'/>

        <div className='grid gap-[29px] w-full'>
            <h6 className="HeadingS uppercase text-Slate600">My Documents</h6>

            {isAddingDocument ? (
              <input
                ref={inputRef} 
                type="text"
                value={newDocName}
                onChange={(e) => setNewDocName(e.target.value)}
                onKeyDown={handleNameSubmit}
                onBlur={handleBlur}
                placeholder="Document name"
                className='p-3 rounded-md text-white border-b-2 HeadingM w-full outline-none' 
              
              />
            ) : (
              <button onClick={handleNewDocumentClick} className='p-3 bg-Red rounded-md hover:brightness-150 transition-colors duration-300 text-white HeadingM w-full'>+ New Document</button>
            )}

            <div className="grid gap-4">
                {documents.map((doc) => (
               
                    <div key={doc.id} onClick={() => handleDocumentClick(doc)} className=' cursor-pointer flex items-center gap-4 hover:bg-Slate500/50 transition-colors duration-300 p-2 rounded-md'>
                      <img src={docIcon} alt="Document Icon" />
                      <div className='grid gap-1'>
                        <span className='BodyM text-Slate500'>
                          {formatDate(doc.createdAt)}
                        </span>
                        <span className='text-white HeadingM '>
                          {doc.name.trim()}
                        </span>
                      </div>
                    </div>
  
                ))}
            </div>

            <div className='flex gap-2 items-center'>
              <img src={darkIcon} alt="Dark Mode Icon" />
              <button className="self-center my-auto" aria-label='Theme Toggle Button'>
                    <label className="switch">
                        <input type="checkbox" id="theme-toggle" onChange={toggleTheme} />
                        <span className="slider round"></span>
                    </label>
              </button>
              <img src={lightIcon} alt="Light Mode Icon" />
            </div>
        </div>


    </nav>
  )
}

export default Sidebar