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
    updateDict(event.target.value) // feeding in event.target.value because curText doesn't update in time
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
      if (syns.length > 0) newDict[keywords[i]] = thesaurus.find(keywords[i])
    }
    setDict(newDict)
  }

  const handleCurWord = (word, i) => {
    if (curWord.word === word) {
      setCurWord({
        index: null,
        word: '',
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

  const handleDownload = () => {
    var element = document.createElement('a')
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(curText)
    )
    element.setAttribute('download', 'synthesaurus-text')

    element.style.display = 'none'
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
  }

  return (
    <div>
      <div className='w-full max-h-screen'>
        <TextArea text={curText} handleText={handleText} inputBox={inputBox} />
        <div className='flex flex-row'>
          <div className='w-2/3 my-4 mr-8' style={{ maxHeight: '75vh' }}>
            <Display
              curText={curText}
              orgText={orgText}
              dict={dict}
              handleCurWord={handleCurWord}
            />
            <ControlPanel
              handleReset={handleReset}
              handleUpdate={handleUpdate}
              handleDownload={handleDownload}
            />
          </div>
          <div className='w-1/3 m-0'>
            <Synonyms
              curWord={curWord}
              dict={dict}
              handleTextChange={handleTextChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputBox
