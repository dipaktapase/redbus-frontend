import React from 'react';
import handle404 from "../assets/handle404.png"

const Handle404 = () => {
  return (
    <div className='mt-24 p-4 text-center'>
        <img src={handle404} alt='error-404' className='w-16 h-16 overflow-none p-4' />
        <h1>Page Not Found</h1>
    </div>
  )
}

export default Handle404