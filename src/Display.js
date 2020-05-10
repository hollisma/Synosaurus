import React, { useState } from 'react'
import keyword_extractor from 'keyword-extractor'
import thesaurus from 'thesaurus'

import './tailwind.generated.css'

const Display = ({
  curText,
  orgText,
  curWord,
  handleCurWord,
  handleTextChange,
}) => {
  let [showOrg, setShowOrg] = useState(false)

  // Get keywords
  const extract_options = {
    language: 'english',
    remove_digits: true,
    return_changed_case: false,
    remove_duplicates: true,
  }
  const keywords = keyword_extractor.extract(curText, extract_options)

  // Get dictionary of token to synonyms
  let dict = {}
  for (let i = 0; i < keywords.length; i++) {
    let syns = thesaurus.find(keywords[i])
    if (syns.length > 0) 
      dict[keywords[i]] = thesaurus.find(keywords[i])
  }
  console.log(dict)

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

  // Convert synonyms into options
  let syns = dict[curWord.word] || []
  let options = []
  let option = word => (
    <button
      key={word}
      className='m-3'
      onClick={() => handleTextChange(word, curWord.index)}
    >
      {word}
    </button>
  )
  for (let word of syns) {
    options.push(option(word))
  }

  return (
    <div>
      <button className='btn btn-blue' onClick={() => setShowOrg(!showOrg)}>
        Show original text
      </button>
      {showOrg ? <p>Original text is: {orgText}</p> : null}
      <div>{blocks}</div>
      {curWord.word ? (
        <div>
          {curWord.word}: {options}
        </div>
      ) : (
        <div>{null}</div>
      )}
    </div>
  )
}

export default Display
