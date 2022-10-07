import React from 'react'
import YoutubePlayer from '../miscellaneous/youtubePlayer'
import { MdOutlineArrowRight } from 'react-icons/md';
import Image from 'next/image';
import { SectionHeaderLeft } from './sectionHeader';

export default function LatestsYoutubeVideos() {
  return (
    <section className='py-10 bg-gray-200' >
      <div className='px-32' >
        <SectionHeaderLeft title="Get Latest Videos" subheading="Here are the latestes video which will gives you better insights in the process" />
        <div className='flex justify-between py-5' >
          
          <div className='w-1/3 mr-10' >
            <ul>
              <li className='cursor-pointer px-5 my-1 rounded-lg py-3 text-secondary bg-primary ' >Video about the Uk</li>
              <li className='cursor-pointer px-5 my-1 rounded-lg py-3 text-secondary bg-primary ' >Video about the Uk</li>
              <li className='cursor-pointer px-5  rounded-lg py-3 text-primary bg-secondary font-bold text-2xl ' >Video about the Uk</li>
              <li className='cursor-pointer px-5 my-1 rounded-lg py-3 text-secondary bg-primary ' >Video about the Uk</li>
              <li className='cursor-pointer px-5 my-1 rounded-lg py-3 text-secondary bg-primary ' >Video about the Uk</li>
              <li className='cursor-pointer px-5 my-1 rounded-lg py-3 text-secondary bg-primary ' >Video about the Uk</li>
              <li className='cursor-pointer px-5 my-1 rounded-lg py-3 text-secondary bg-primary ' >Video about the Uk</li>
            </ul>
          </div>
          <div>
            <YoutubePlayer />
            {/* <img width={400} height={400} src='https://overseasstudentsaustralia.com/wp-content/uploads/2022/07/international-studente-video-guides-australia-1024x768-533x400.png' /> */}
            {/* <Image src={'/assets/images/videos.png'} alt="videos" width="500" height="400" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
