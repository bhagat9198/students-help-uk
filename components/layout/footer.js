import React from 'react'
import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs';
import { GiIndiaGate } from 'react-icons/gi';
import { AiOutlineYoutube, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineCopyrightCircle, AiFillHeart } from 'react-icons/ai';

export default function Footer() {
  return (
    <section  >
      <div className='bg-primary-light-5  px-36 py-12'>
        <div className='flex justify-evenly items-center' >
          <div className='flex flex-col justify-center items-center' >
            <strong> <p className='h-2 text-lg pb-8' ><Link href="/">About</Link></p></strong>
            <p><Link href="/">Link #1</Link></p>
            <p><Link href="/">Link #1</Link></p>
            <p><Link href="/">Link #1</Link></p>
          </div>
          <div className='flex flex-col justify-center items-center' >
            <strong> <p className='h-2 text-lg pb-8' ><Link href="/">About</Link></p></strong>
            <p><Link href="/">Link #1</Link></p>
            <p><Link href="/">Link #1</Link></p>
            <p><Link href="/">Link #1</Link></p>
          </div>
          <div className='flex flex-col justify-center items-center' >
            <strong> <p className='h-2 text-lg pb-8' ><Link href="/">About</Link></p></strong>
            <p><Link href="/">Link #1</Link></p>
            <p><Link href="/">Link #1</Link></p>
            <p><Link href="/">Link #1</Link></p>
          </div>
        </div>
      </div>
      <div className='bg-primary'>
        <div className=' text-white flex justify-center pt-5' >
          <div className='flex h-14 justify-center items-center px-4 mx-8 cursor-pointer hover:bg-primary-light-5 rounded-full'>
            <BsInstagram className='w-8 h-8' />
          </div>
          <div className='flex h-14 justify-center items-center px-4 mx-8 cursor-pointer hover:bg-primary-light-5 rounded-full'>
            <AiOutlineYoutube className='w-8 h-8' />
          </div>
          <div className='flex h-14 justify-center items-center px-4 mx-8 cursor-pointer hover:bg-primary-light-5 rounded-full'>
            <AiOutlineFacebook className='w-8 h-8' />
          </div>
          <div className='flex h-14 justify-center items-center px-4 mx-8 cursor-pointer hover:bg-primary-light-5 rounded-full'>
            <AiOutlineLinkedin className='w-8 h-8' />
          </div>
        </div>
        <div className='bg-primary px-36 py-5 text-lg text-white ' >
          <div className='flex justify-evenly px-32' >
            <Link href="/" className=''  ><a>Home</a></Link>
            <Link href="/" className=''>
              <a>Link No #1</a>
            </Link>
            <Link href="/" className=''>
              <a>Link No #1</a>
            </Link>
            <Link href="/" className=''>
              <a>Link No #1</a>
            </Link>
            <Link href="/" className=''>
              <a>Link No #1</a>
            </Link>
          </div>
        </div>
        <div className='flex justify-center items-center py-1 text-md text-white'>
          <AiOutlineCopyrightCircle /> 2022 Go Go Visas
        </div>
        <div className='flex justify-center items-center text-md text-white pb-4'>
          Made with <span className='px-2'><AiFillHeart className='text-red-600 ' /></span> in <strong className='px-2'> India </strong>
          {/* <span className='px-2'> <GiIndiaGate className='text-orange-600' /></span> */}
        </div>
      </div>
    </section >
  )
}
