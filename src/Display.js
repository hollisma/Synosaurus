import React, { useState } from 'react'

import './tailwind.generated.css'

const Display = ({ curText, orgText, dict, handleCurWord }) => {
  let [showOrg, setShowOrg] = useState(false)

  // Display blocks
  let regWord = (word, i) => (
    <span key={i} className='m-1 inline-block'>
      {word}
    </span>
  )
  let keyword = (word, i) => (
    <button
      key={i}
      className='m-1 inline-block'
      onClick={() => handleCurWord(word, i)}
    >
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
    <div className='overflow-auto' style={{ maxHeight: '55vh' }}>
      <button
        className='btn btn-blue mb-4'
        onClick={() => setShowOrg(!showOrg)}
      >
        Show original text
      </button>
      {showOrg ? (
        <div className='mb-4'>
          <span className='text-lg'>Original text:</span> {orgText}
        </div>
      ) : null}
      <div>{blocks}</div>
    </div>
  )
}

export default Display
