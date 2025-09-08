import React from 'react'

const header = () => {
  return (
    <div className='w-full bg-blue-900 fixed top-0 left-0 right-0 z-50'>
        <div className='page-center py-8 flex flex-row gap-4 font-bold'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
    </div>
  )
}

export default header