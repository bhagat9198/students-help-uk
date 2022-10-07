import React from 'react'
import { AiOutlineEye } from 'react-icons/ai';

export default function BlogCard() {
  return (
    <div className='cursor-pointer rounded-md'>
      <div className='relative' >
        <div>
          <img src='https://www.meridean.org/public/img/blog/16648622773%20Most%20Student-friendly%20States%20in%20Usa-%20Study%20in%20Usa.png' />
        </div>
        <div className='absolute bottom-2 right-2' >
          <div className='flex bg-primary text-secondary px-3 py-2 rounded-md bg-opacity-75 bg-transparent'>
            <span className='text-2xl mr-2'><AiOutlineEye /></span>
            <p className='font-bold'> 101</p>
          </div>
        </div>
      </div>
      <div className='py-2 bg-white pl-3'>
        <h2 className='font-bold text-xl mb-3'>Blog Heading</h2>
        <p className='mb-3'>it will be small paragraph to user the hint of contnet</p>
      </div>
      <div className='text-gray-500 flex justify-end bg-white pr-5'>
        04 oct 2022
      </div>
    </div>
  )
}
