import React from 'react'
import "./Challenge.css"

export default function Join() {
  return (
    <>
      <div className="form1">
        <h2 className='titleF'>Join a team</h2>

        <div className="form-box">
            <input type="text" placeholder='team URL'  />
        </div>

        <div className="form-box">
            <input type="text" placeholder='Your role'  />
        </div>

        <div className="form-btn">
            <button>Send invitation</button>
            <button className='cancel'>Cancel</button>
        </div>
      </div>
    </>
  )
}
