import React from 'react'

const Synonyms = ({ curWord, dict, handleTextChange }) => {
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
      {curWord.word ? (
        <div className='overflow-auto' style={{ maxHeight: '57vh' }}>
          <span className='text-xl'>{curWord.word}:</span> {options}
        </div>
      ) : (
        <div>{null}</div>
      )}
    </div>
  )
}

export default Synonyms
