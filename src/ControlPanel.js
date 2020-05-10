import React from 'react'

import './tailwind.generated.css'

const ControlPanel = ({ handleReset, handleUpdate, handleDownload }) => {
  return (
    <div className='mt-4'>
      <button
        className='mr-4 btn btn-blue btn-blue:hover'
        onClick={handleReset}
      >
        Reset all
      </button>
      <button
        className='mr-4 btn btn-blue btn-blue:hover'
        onClick={handleUpdate}
      >
        Update original text
      </button>
      <button className='btn btn-blue btn-blue:hover' onClick={handleDownload}>
        Download
      </button>
    </div>
  )
}

export default ControlPanel
