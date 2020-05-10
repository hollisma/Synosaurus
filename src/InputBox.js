import React, { useState, useRef, useEffect } from 'react'
import keyword_extractor from 'keyword-extractor'
import thesaurus from 'thesaurus'
import Display from './Display'
import ControlPanel from './ControlPanel'
import TextArea from './TextArea'
import Synonyms from './Synonyms'

import './tailwind.generated.css'

const InputBox = () => {
  const [orgText, setOrgText] = useState('')
  const [curText, setCurText] = useState('')
  const [curWord, setCurWord] = useState({
    index: null,
    word: '',
  })
  const [dict, setDict] = useState({})

  const inputBox = useRef(null)
  useEffect(() => inputBox.current.focus())

  const handleText = event => {
    if (orgText === '') setOrgText(event.target.value)
    setCurText(event.target.value)
    updateDict(event.target.value)  // feeding in event.target.value because curText doesn't update in time
  }

  const updateDict = text => {
    // Get keywords
    const extract_options = {
      language: 'english',
      remove_digits: true,
      return_changed_case: false,
      remove_duplicates: true,
    }
    const keywords = keyword_extractor.extract(text, extract_options)

    // Update synonyms
    let newDict = {}
    for (let i = 0; i < keywords.length; i++) {
      let syns = thesaurus.find(keywords[i])
      if (syns.length > 0) 
        newDict[keywords[i]] = thesaurus.find(keywords[i])
    }
    setDict(newDict)
  }

  const handleCurWord = (word, i) => {
    if (curWord.word === word) {
      setCurWord({
        index: null, 
        word: ''
      })
    } else {
      setCurWord({
        index: i,
        word,
      })
    }
  }

  const handleTextChange = (word, i) => {
    let curTextArr = curText.split(' ')
    curTextArr[i] = word
    let newText = curTextArr.join(' ')
    
    setCurText(newText)
    setCurWord({
      index: i,
      word,
    })
    updateDict(newText)
  }

  const handleReset = () => {
    setOrgText('')
    setCurText('')
    inputBox.current.focus()
  }

  const handleUpdate = () => {
    setOrgText(curText)
    // inputBox.current.focus()
  }

  return (
    <div>
      <div>
        <TextArea text={curText} handleText={handleText} inputBox={inputBox} />
        <Display
          curText={curText}
          orgText={orgText}
          dict={dict}
          handleCurWord={handleCurWord}
        />
        <ControlPanel handleReset={handleReset} handleUpdate={handleUpdate} />
      </div>
      <div>
        <Synonyms curWord={curWord} dict={dict} handleTextChange={handleTextChange} />
      </div>
    </div>
  )
}

export default InputBox
