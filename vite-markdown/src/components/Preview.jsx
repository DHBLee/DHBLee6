import React, { useContext } from 'react'
import EditorContext from '../context/EditorContext'
import Title from './UI/Title';

const Preview = ({styling}) => {
  const { text } =  useContext(EditorContext);

  const renderMarkdown = (content) => {
  return content.split('\n').map((line, index) => {
    if (line.startsWith('# ')) {
      return <h1 key={index} className='Heading1'>{line.substring(3)}</h1>
    } else if (line.startsWith('## ')) {
      return <h2 key={index} className='Heading2'>{line.substring(3)}</h2>
    } else if (line.startsWith('### ')) {
      return <h3 key={index} className='Heading3'>{line.substring(3)}</h3>
    } else if (line.startsWith('#### ')) {
      return <h4 key={index} className='Heading4'>{line.substring(3)}</h4>
    } else if (line.startsWith('##### ')) {
      return <h5 key={index} className='Heading5'>{line.substring(3)}</h5>
    } else if (line.startsWith('###### ')) {
      return <h6 key={index} className='Heading6'>{line.substring(3)}</h6>
    } else {
      return <p key={index}>{line}</p>
    }
  })
 }
  return (
    <div className='flex flex-col'>
      <Title currentText="Preview" />
      <div className={` ${styling}`}>
        {renderMarkdown(text)}
      </div>
    </div>

  )
}

export default Preview