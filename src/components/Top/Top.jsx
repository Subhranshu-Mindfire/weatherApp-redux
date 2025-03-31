import React from 'react'

const Top = () => {
  return (
    <div className='d-flex justify-content-between p-5 top'>
      <div className="left">
        <div className="place h1 text-white">
          Bhubaneswar
        </div>
        <div className="h5 text-white">
          Friday, 28 March 2025 | 01 : 11 PM
        </div>
      </div>
      <div className="right">
        <input type="text" className='form-control fs-4' placeholder='Search for city'/>
      </div>
    </div>
  )
}

export default Top