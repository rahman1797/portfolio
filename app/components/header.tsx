'use client'

import React, { useState } from 'react'
import Image from 'next/image'

//image

const Header = () => {

  const [showFlag, setShowFlag] = useState(false);
    
  return (
    <>
    <div className='w-full bg-blue-950 fixed top-0 left-0 right-0 z-50'>
        <div className='page-center flex flex-row justify-between items-center gap-4 font-bold h-20'>
          <div className='flex flex-row gap-4'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className='flex-row gap-4 hidden'>
            <div className='p-2 rounded-lg bg-white'>
              <div className='relative h-8'>
                <Image src="/ID_flag.svg" alt="ID Flag" width={10} height={10} />
              </div>
            </div>
          </div>
        </div> 
    </div>
    <div className='h-20'></div>
    </>
  )
}

export default Header