import React, { memo } from 'react'

const Footer = () => {
  return (
    <div className='container-fluid mt-5 footer'>
      <div className="row bg-dark mt-3" style={{ bottom:'0'}} >
        <h6 className='text-center p-3' style={{color:'white'}}>@Copyright 2023 Created by <b>Usama Kaleem</b></h6>
      </div>
    </div>
  )
}

export default  memo(Footer)