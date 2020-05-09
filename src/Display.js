import React, { useState } from 'react'
import keyword_extractor from 'keyword-extractor'
import synonyms from 'synonyms'
import natural from 'natural'

import './tailwind.generated.css'

const Display = ({ curText, orgText, curWord, handleCurWord, handleTextChange }) => {
  let [showOrg, setShowOrg] = useState(false)

  // Get keywords
  const extract_options = {
    language: 'english',
    remove_digits: true,
    return_changed_case: false,
    remove_duplicates: true,
  }
  const keywords = keyword_extractor.extract(curText, extract_options)

  // Get POS
  const lexicon = new natural.Lexicon('EN', 'N')
  const ruleSet = new natural.RuleSet('EN')
  const tagger = new natural.BrillPOSTagger(lexicon, ruleSet)
  const taggedWords = tagger.tag(keywords).taggedWords

  // Get dictionary of token to synonyms
  let dict = {}
  for (let word of taggedWords) {
    const pos = 'N' === word.tag[0] ? 'n' : 'v'
    dict[word.token] = synonyms(word.token, pos)
  }

  // Display blocks
  let regWord = (word, i) => <span key={i} class='m-1'>{word}</span>
  let keyword = (word, i) => (
    <button key={i} class='m-1' onClick={() => handleCurWord(word, i)}>
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
    <button key={word} class='m-3' onClick={() => handleTextChange(word, curWord.index)}>
      {word}
    </button>
  )
  for (let word of syns) {
    options.push(option(word))
  }

  return (
    <div>
      <button class='btn btn-blue' onClick={() => setShowOrg(!showOrg)}>Show original text</button>
      {showOrg ? <p>Original text is: {orgText}</p> : null}
      <div>{blocks}</div>
      <div>{curWord.word}: {options}</div>
    </div>
  )
}

export default Display
