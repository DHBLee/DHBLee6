import React, { useContext } from 'react'
import EditorContext from '../context/EditorContext'
import Title from './UI/Title'


const Markdown = ({styling}) => { 
  const {text, handleInput} = useContext(EditorContext)

  return (
    <div className='flex flex-col'>
      <Title currentText="Markdown" />
      <textarea value={text} name="" id="" onChange={handleInput} className={`MarkdownText ${styling} text-Slate700 dark:text-Slate400`}>
        
      </textarea>
  
    </div>
  )
}

export default Markdown