import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { EditorContextProvider } from './context/EditorContext'
import Sidebar from './components/Sidebar'

function App() {
  const [toggleSidebar, setToggleSideBar] = useState(false);

  function handleSidebar() {
    setToggleSideBar(prev => !prev);

    document.body.style.overflow = toggleSidebar ? '' : 'hidden';
  }

  return (
    <EditorContextProvider>
      <div className='relative'>
        <Sidebar isOpen={toggleSidebar} />
        <div className={`transition-transform duration-300 ${toggleSidebar ? 'translate-x-[250px]' : 'translate-x-0'}`}>
          <Header isOpen={toggleSidebar} handleSidebar={handleSidebar} />
          <Main />
        </div>
      </div>
    </EditorContextProvider>
  )
}

export default App
