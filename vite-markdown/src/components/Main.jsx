import React, { useState } from 'react'
import Preview from './Preview.jsx';
import showIcon from '../assets/icon-show-preview.svg';
import hideIcon from '../assets/icon-hide-preview.svg';
import Markdown from './Markdown.jsx';

const Main = () => {
  const [isPreview, setIsPreview] = useState(true);

  const currentText = isPreview ? 'preview' : 'markdown'; 
  const currentIcon = isPreview ?  hideIcon : showIcon;

  return (
    <main>
        <div className='flex justify-between items-center p-4  bg-Slate900'>
            <h6 className="HeadingS uppercase text-Slate400">{currentText}</h6>
            <button onClick={() => setIsPreview(prev => !prev) }>
                <img src={currentIcon} alt="Show Icon" />
            </button>
        </div>

        {isPreview && ( <Preview /> ) }
        {!isPreview && ( <Markdown /> )}
    </main>
  )
}

export default Main