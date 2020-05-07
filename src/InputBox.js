import React, { useState, useRef, useEffect } from 'react'
import Display from './Display'

const InputBox = () => {
  const [orgText, setOrgText] = useState('')
  const [curText, setCurText] = useState('')
  const inputBox = useRef(null)
  useEffect(() => inputBox.current.focus())

  const handleText = event => {
    if (orgText === '') setOrgText(event.target.value)
    setCurText(event.target.value)
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

  return (
    <div>
      <h1>InputBox is here</h1>
      <input type='text' ref={inputBox} value={curText} onChange={handleText} />
      <Display curText={curText} orgText={orgText} />
      <button onClick={handleReset}>Reset all</button>
      <button onClick={handleUpdate}>Update original text</button>
    </div>
  )
}

export default InputBox
