import React, { useContext } from 'react'
import Preview from './Preview.jsx';
import Markdown from './Markdown.jsx';
import EditorContext from '../context/EditorContext.jsx';

const Main = () => {
  const {isPreview} = useContext(EditorContext);


  const shouldPreviewShow = isPreview ? 'block' : 'hidden'
  const shouldMarkdownShow = !isPreview ? 'block' : 'hidden';

  return (
    <main className={`md:grid ${!isPreview ? 'grid-cols-2' : ''} h-screen`}>
          <div className={`${shouldMarkdownShow}`}>
            <Markdown styling={`px-4 ${isPreview ? 'md:px-12' : ''}  w-full  h-screen`}/>
          </div>
          <div className={`${shouldPreviewShow} ${!isPreview ? 'md:border-l-2 border-Slate300' : ''} md:block`}>
            <Preview styling={`px-4 ${isPreview ? 'md:px-12 max-w-[672px] mx-auto' : ''}  w-full  h-screen`}/>
          </div>
    </main>
  )
}

export default Main