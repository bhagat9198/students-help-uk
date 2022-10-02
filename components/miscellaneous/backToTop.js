import React from 'react'
import { MdArrowCircleUp } from 'react-icons/md';

export default function backToTop() {
  return (
    <div className='bg-primary rounded-full w-12 h-12 flex items-center justify-center' >
      <MdArrowCircleUp className='text-lg text-secondary' />
    </div>
  )
}
