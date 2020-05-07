import React from 'react'

const ControlPanel = ({ handleReset, handleUpdate }) => {
  return (
    <div>
      <button onClick={handleReset}>Reset all</button>
      <button onClick={handleUpdate}>Update original text</button>
    </div>
  )
}

export default ControlPanel
