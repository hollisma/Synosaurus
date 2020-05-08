import React, { useState, useRef, useEffect } from 'react'
import Display from './Display'
import ControlPanel from './ControlPanel'

import './tailwind.generated.css'

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
      <input
        class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
        type='text'
        ref={inputBox}
        value={curText}
        onChange={handleText}
      />
      <Display curText={curText} orgText={orgText} />
      <ControlPanel handleReset={handleReset} handleUpdate={handleUpdate} />
    </div>
  )
}

export default InputBox
