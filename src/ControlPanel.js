import React from 'react'

import './tailwind.generated.css'

const ControlPanel = ({ handleReset, handleUpdate }) => {
  return (
    <div>
      <button class='btn btn-blue btn-blue:hover' onClick={handleReset}>
        Reset all
      </button>
      <button class='btn btn-blue btn-blue:hover' onClick={handleUpdate}>
        Update original text
      </button>
    </div>
  )
}

export default ControlPanel
