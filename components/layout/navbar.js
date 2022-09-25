import Image from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Navbar() {
  return (
    <div className='flex justify-between' >

        {/* <Image src='assets/images/logo.jpg' width={500} height={400} alt="logo" /> */}
      <div className='rounded-full w-12 h-12 '   >
        <Skeleton className='w-full h-full ' style={{ borderRadius: '50%' }}  />
        </div>

      <div>
xfg
      </div>
    </div>
  )
}
