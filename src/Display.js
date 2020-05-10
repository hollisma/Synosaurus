import React, { useState } from 'react'

import './tailwind.generated.css'

const Display = ({
  curText,
  orgText,
  dict,
  handleCurWord,
}) => {
  let [showOrg, setShowOrg] = useState(false)  

  // Display blocks
  let regWord = (word, i) => (
    <span key={i} className='m-1'>
      {word}
    </span>
  )
  let keyword = (word, i) => (
    <button key={i} className='m-1' onClick={() => handleCurWord(word, i)}>
      <b>{word}</b>
    </button>
  )

  // Convert dict into blocks
  let curTextArr = curText.split(' ')
  let blocks = []
  for (let i = 0; i < curTextArr.length; i++) {
    let word = curTextArr[i]
    if (Object.keys(dict).includes(word) && dict[word] !== undefined) {
      blocks.push(keyword(word, i))
    } else {
      blocks.push(regWord(word, i))
    }
  }

  return (
    <div>
      <button className='btn btn-blue' onClick={() => setShowOrg(!showOrg)}>
        Show original text
      </button>
      {showOrg ? <p>Original text is: {orgText}</p> : null}
      <div>{blocks}</div>
    </div>
  )
}

export default Display
