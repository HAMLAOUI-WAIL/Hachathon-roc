import React from 'react'

export default function Edit() {
  return (
    <>
      <div className="form">
        <h2 className='titleF'>Edit your profile</h2>

        <div className="form-box multiple">
            <input type="text" placeholder='Hamlaoui'  />
            <input type="text" placeholder='Hamlaoui'  />
        </div>

        <div className="form-box">
            <input type="text" placeholder='example@estin.dz'  />
        </div>

        <div className="form-box">
            <input type="text" placeholder='Setif'  />
        </div>

        <div className="form-btn">
            <button>Save</button>
            <button className='cancel'>Cancel</button>

        </div>
      </div>
    </>
  )
}
