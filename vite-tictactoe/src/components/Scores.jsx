import React from 'react'

const Scores = ({text, value, bgColor}) => {
  return (
    <div className={`h-[5rem] flex flex-col gap-3 items-center justify-center rounded-xl ${bgColor} `}>
        <span className="body">{text}</span>
        <span className="headingS">{value}</span>
    </div>
  )
}

export default Scores