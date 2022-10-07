import React from 'react'
import { SectionHeaderLeft } from '../../components/home/sectionHeader'
import BlogCard from './../../components/blogs/blogCard'

export default function index() {
  return (
    <section className='bg-gray-300'>
      <div className='flex justify-around  items-center'>
        <SectionHeaderLeft title="All Blogs" subheading="heading of the vidoe can be small/big sndfvoi" />
        <div>
          <img src='https://hackathon.ineuron.ai/images/neo/blockchain.png' />
        </div>
      </div>
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
