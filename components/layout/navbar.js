import Image from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BsNewspaper } from 'react-icons/bs';
import classes from './../../styles/navbar.module.css';
import { BiChevronDown } from 'react-icons/bi';

export default function Navbar() {
  return (
    <div className=' py-4' >
      <div className='mx-24 flex justify-between' >
        <div className='w-20 h-20 '>
        <Image src='/assets/images/logo.png' width='100%' height='100%' alt="logo" />
        </div>
        {/* <div className='rounded-full w-12 h-12 '   >
          <Skeleton className='w-full h-full ' style={{ borderRadius: '50%' }} />
        </div> */}

        <div>
          <ul className='flex gray' >
            <li className={` cursor-pointer group ${classes.nav_item}`} >
              <div >
                <div className='p-4 flex'>
                  <div className='pr-3 w-full h-full text-2xl   '>
                    <BsNewspaper />
                  </div>
                  <p className='text-base' >Blogs</p>
                  <div className='pl-3 w-full h-full text-2xl   '>
                    <BiChevronDown />
                  </div>
                </div>
              </div>
              <div className='absolute z-10 hidden bg-primary-light-5 px-5 text-black group-hover:block' >
                <ul className='block '>
                  <li className='flex items-center justify-center p-2 border-x-black border-b-2 w-full hover:text-primary '>Nav Item 1 </li>
                  <li className='flex items-center justify-center p-2 border-x-black border-b-2 hover:text-primary '>Nav Item cchbd1 </li>
                  <li className='flex items-center justify-center p-2 border-x-black border-b-2 hover:text-primary '>Nav Item 1 </li>
                  <li className='flex items-center justify-center p-2 border-x-black border-b-2 hover:text-primary '>Nav Item 1 </li>
                </ul>
              </div>
            </li>
            <li className={` cursor-pointer group ${classes.nav_item}`} >
              <div >
                <div className='p-4 flex'>
                  <div className='pr-3 w-full h-full text-2xl   '>
                    <BsNewspaper />
                  </div>
                  <p className='text-base' >Blogs</p>
                </div>
              </div>
              <div className='absolute z-10 hidden bg-primary-light-5 px-5 text-black group-hover:block' >
                <ul className='block '>
                  <li className='flex items-center justify-center p-2 border-x-black border-b-2 w-full hover:text-primary '>Nav Item 1 </li>
                  <li className='flex items-center justify-center p-2 border-x-black border-b-2 hover:text-primary '>Nav Item cchbd1 </li>
                  <li className='flex items-center justify-center p-2 border-x-black border-b-2 hover:text-primary '>Nav Item 1 </li>
                  <li className='flex items-center justify-center p-2 border-x-black border-b-2 hover:text-primary '>Nav Item 1 </li>
                </ul>
              </div>
            </li>
            <li className={` cursor-pointer group ${classes.nav_item}`} >
              <div >
                <div className='p-4 flex'>
                  <div className='pr-3 w-full h-full text-2xl   '>
                    <BsNewspaper />
                  </div>
                  <p className='text-base' >Blogs</p>
                </div>
              </div>
              <div className='absolute z-10 hidden bg-primary-light-5 px-5 text-black group-hover:block' >
                <ul className='block '>
                  <li className='flex items-center justify-center p-2 border-x-black border-b-2 w-full hover:text-primary '>Nav Item 1 </li>
                  <li className='flex items-center justify-center p-2 border-x-black border-b-2 hover:text-primary '>Nav Item cchbd1 </li>
                  <li className='flex items-center justify-center p-2 border-x-black border-b-2 hover:text-primary '>Nav Item 1 </li>
                  <li className='flex items-center justify-center p-2 border-x-black border-b-2 hover:text-primary '>Nav Item 1 </li>
                </ul>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}
