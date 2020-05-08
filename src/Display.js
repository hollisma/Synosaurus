import React from 'react'
import keyword_extractor from 'keyword-extractor'
import synonyms from 'synonyms'
import natural from 'natural'

import './tailwind.generated.css'

const Display = ({ curText, orgText }) => {
  // Get keywrods
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
  let handleKeyword = word => {
    // Should display popup with list of synonyms
    // Then allow user to pick one that then replaces the word
    console.log(word, dict[word])
  }
  let regWord = word => <span class='m-3'>{word}</span>
  let keyword = word => (
    <button class='m-3' onClick={() => handleKeyword(word)}>
      <b>{word}</b>
    </button>
  )

  // Convert dict into blocks
  let curTextArr = curText.split(' ')
  let blocks = []
  for (let word of curTextArr) {
    if (Object.keys(dict).includes(word) && dict[word] !== undefined) {
      blocks.push(keyword(word))
    } else {
      blocks.push(regWord(word))
    }
  }

  return (
    <div>
      <p>Text is: {curText}</p>
      <p>Original text is: {orgText}</p>
      <div>{blocks}</div>
    </div>
  )
}

export default Display
