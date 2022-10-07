import React from 'react'
import BlogCard from './../../components/blogs/blogCard'

export default function index() {
  return (
    <section className='bg-gray-300'>
      <div className='px-32 flex justify-center flex-wrap' >
        <div className='m-5' style={{minWidth: 350, width: 350 }} >
          <BlogCard />
        </div>
        <div className='m-5' style={{minWidth: 350, width: 350 }} >
          <BlogCard />
        </div>
        <div className='m-5' style={{minWidth: 350, width: 350 }} >
          <BlogCard />
        </div>
        <div className='m-5' style={{minWidth: 350, width: 350 }} >
          <BlogCard />
        </div>
        <div className='m-5' style={{minWidth: 350, width: 350 }} >
          <BlogCard />
        </div>
        <div className='m-5' style={{minWidth: 350, width: 350 }} >
          <BlogCard />
        </div>

      </div>
    </section>
  )
}
