import React from 'react'

const Display = ({ curText, orgText }) => {
  return (
    <div>
      <p>Text is: {curText}</p>
      <p>Original text is: {orgText}</p>
    </div>
  )
}

export default Display
