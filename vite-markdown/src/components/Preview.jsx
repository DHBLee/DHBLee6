import React, { useContext } from 'react'
import EditorContext from '../context/EditorContext'
import Title from './UI/Title';
import { parseBlockquotes, parseCodeBlocks, parseHeadings, parseLists, processFormatting } from '../MarkdownLogic';

const Preview = ({styling}) => {
  const { text } =  useContext(EditorContext);


  const renderMarkdown = (content) => {
    const parts = parseCodeBlocks(content);
    const elements = [];

    parts.forEach((part, index) => {
      if ( index % 2 === 0) {
        elements.push(...renderRegularMarkdown(part));
      } else {
        elements.push(
          <div key={`codeblock-${index}`} className='bg-Slate200 dark:bg-Slate800 rounded-md p-6'>
              <pre className='MarkdownText text-Slate700 dark:text-white whitespace-pre-wrap'>
                {part.trim()}
              </pre>
          </div>
        )
      }
    })
    return elements;
  };

  const renderRegularMarkdown = (content) => {
  
    const lines = content.split('\n');
    const elements = [];
    let currentList = null;
    let listType = null;
  
    lines.forEach((line, index) => {
      if (line.trim() === '') {
        if (currentList) {
          elements.push(currentList);
          currentList = null;
          listType = null;
        }
        elements.push(<br key={`br-${index}`} />);
        return;
      }

      const heading = parseHeadings(line, index);
      if (heading) {
        if (currentList) elements.push(currentList);
        elements.push(heading);
        return;
      }

      const blockquote = parseBlockquotes(line, index);
      if (blockquote) {
        if (currentList) elements.push(currentList);
        elements.push(blockquote);
        return;
      }

      const orderedItem = parseLists.ordered(line, index);
      if (orderedItem) {
        if (!currentList || listType !== 'ol') {
          if (currentList) elements.push(currentList);
          currentList = <ol key={`ol-${index}`}>{orderedItem}</ol>;
          listType = 'ol';
        } else {
          currentList = React.cloneElement(currentList, {
            children: [...React.Children.toArray(currentList.props.children), orderedItem]
          });
        }
        return;
      }

      const unorderedItem = parseLists.unordered(line, index);
      if (unorderedItem) {
        if (!currentList || listType !== 'ul') {
          if (currentList) elements.push(currentList);
          currentList = <ul key={`ul-${index}`}>{unorderedItem}</ul>;
          listType = 'ul';
        } else {
          currentList = React.cloneElement(currentList, {
            children: [...React.Children.toArray(currentList.props.children), unorderedItem]
          });
        }
        return;
      }

      if (currentList) {
        elements.push(currentList);
        currentList = null;
        listType = null;
      }

      elements.push(
        <p 
          key={index} 
          className="Preview"
          dangerouslySetInnerHTML={{ __html: processFormatting(line) }}
        />
      );
    });
  
    if (currentList) elements.push(currentList);
    return elements;
  };

  return (
    <div className='flex flex-col w-full'>
      <Title currentText="Preview" />
      <div className={`flex flex-col ${styling}`}>
        {renderMarkdown(text)}
      </div>
    </div>

  )
}

export default Preview