import React, { useContext } from 'react'

import EditorContext from '../../context/EditorContext';
import showIcon from '../../assets/icon-show-preview.svg';
import hideIcon from '../../assets/icon-hide-preview.svg';

const Title = ({currentText}) => {
  const {handlePreview, isPreview} = useContext(EditorContext);
  const currentIcon = isPreview ? hideIcon : showIcon;

  return (
    <div className='flex justify-between items-center p-4  bg-Slate200 '>
            <h6 className="HeadingS uppercase text-Slate500">{currentText}</h6>
            <button onClick={handlePreview}>
                <img src={currentIcon} alt="Show Icon" className={currentText === 'Markdown' ? 'md:hidden' : '' }/>
            </button>
    </div>
  )
}

export default Title