import React, { useState, useRef, useEffect } from 'react'
import Display from './Display'
import ControlPanel from './ControlPanel'
import TextArea from './TextArea'

import './tailwind.generated.css'

const InputBox = () => {
  const [orgText, setOrgText] = useState('')
  const [curText, setCurText] = useState('')
  const [curWord, setCurWord] = useState({
    index: null, 
    word: ''
  })

  const inputBox = useRef(null)
  useEffect(() => inputBox.current.focus())

  const handleText = event => {
    if (orgText === '') setOrgText(event.target.value)
    setCurText(event.target.value)
  }

  const handleCurWord = (word, i) => {
    setCurWord({
      index: i, 
      word
    })
  }

  const handleTextChange = (word, i) => {
    let curTextArr = curText.split(' ')
    curTextArr[i] = word
    setCurText(curTextArr.join(' '))
    setCurWord({
      index: i, 
      word
    })
  }

  const handleReset = () => {
    setOrgText('')
    setCurText('')
    inputBox.current.focus()
  }

  const handleUpdate = () => {
    setOrgText(curText)
    inputBox.current.focus()
  }

  console.log(`curText: ${curText}, curWord: ${curWord.word}`)

  return (
    <div>
      <h1>InputBox is here</h1>
      <TextArea text={curText} handleText={handleText} inputBox={inputBox} />
      <Display curText={curText} orgText={orgText} curWord={curWord} handleCurWord={handleCurWord} handleTextChange={handleTextChange} />
      <ControlPanel handleReset={handleReset} handleUpdate={handleUpdate} />
    </div>
  )
}

export default InputBox
