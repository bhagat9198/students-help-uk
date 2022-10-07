import React from 'react'
import SectionHeader, { SectionHeaderRight } from './sectionHeader'
import { FiChevronsRight } from 'react-icons/fi';

export default function Latestblogs() {
  return (
    <section className='my-10'>
      <div className='flex justify-end mb-3 px-24'>
        <SectionHeaderRight title="Blogs" subheading="Check everything else that you need to know about study in Australia in our blog." />
      </div>
      <div className='flex px-24'>
        <div className="w-1/2 bg-[url('/assets/images/blog.png')] bg-cover" >
          fgjf
        </div>
        <div className="w-1/2  ">
          <div className='py-3  text-xl rounded-md' >
            <ul>
              <li className='mb-2 flex items-center' ><span className='rounded-full p-2 m-3 mr-3 text-3xl bg-primary-dark-5 text-secondary-light-5 font-bold' ><FiChevronsRight /></span><p> Step by Step Guides</p></li>
              <li className='mb-2 flex items-center' ><span className='rounded-full p-2 m-3 mr-3 text-3xl bg-primary-dark-5 text-secondary-light-5 font-bold' ><FiChevronsRight /></span><p> Student Stories</p></li>
              <li className='mb-2 flex items-center' ><span className='rounded-full p-2 m-3 mr-3 text-3xl bg-primary-dark-5 text-secondary-light-5 font-bold' ><FiChevronsRight /></span><p> Tips, Tricks and Latest News</p></li>
              <li className='mb-2 flex items-center' ><span className='rounded-full p-2 m-3 mr-3 text-3xl bg-primary-dark-5 text-secondary-light-5 font-bold' ><FiChevronsRight /></span><p> Tips, Tricks and Latest News</p></li>
            </ul>
          </div>
          <div className='flex justify-end' >
          <button className='bg-primary px-5 py-2 rounded-md flex text-white font-bold' >
            <p>Read All Blogs</p>
          </button>
          </div>
        </div>
      </div>
    </section>
  )
}
