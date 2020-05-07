import React, { useState, useRef } from 'react'

const InputBox = () => {
  const [orgText, setOrgText] = useState('')
  const [curText, setCurText] = useState('')
  const inputBox = useRef(null)

  const handleText = event => {
    if (orgText === '') setOrgText(event.target.value)
    setCurText(event.target.value)
  }

  const handleReset = () => {
    setOrgText('')
    setCurText('')
  }

  const handleUpdate = () => {
    setOrgText(curText)
    inputBox.current.focus()
  }

  return (
    <div>
      <h1>InputBox is here</h1>
      <input type='text' ref={inputBox} value={curText} onChange={handleText} />
      <p>Text is: {curText}</p>
      <p>Original text is: {orgText}</p>
      <button onClick={handleReset}>Reset all</button>
      <button onClick={handleUpdate}>Update original text</button>
    </div>
  )
}

export default InputBox
