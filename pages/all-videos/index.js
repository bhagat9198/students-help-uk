import React from 'react'
import { SectionHeaderLeft } from '../../components/home/sectionHeader'
import YoutubePlayer from '../../components/miscellaneous/youtubePlayer'
import Tag from '../../components/videos/tag'
import VideoCard from '../../components/videos/videoCard'

export default function index() {
  return (
    <section className='bg-gray-300'>
      <div className='flex'>
        <div className='w-2/3 '>
          <div className='flex justify-around my-3 items-center'>
            <SectionHeaderLeft title="All Videos" subheading="heading of the vidoe can be small/big sndfvoi" />
            <div>
              <img src='https://hackathon.ineuron.ai/images/techathon2/online-course.png' />
            </div>
          </div>
          <div className='flex justify-center flex-wrap' >
          <div className='m-5' style={{minWidth: 250, width: 250}}><VideoCard /> </div>
          <div className='m-5' style={{minWidth: 250, width: 250}}><VideoCard /> </div>
          <div className='m-5' style={{minWidth: 250, width: 250}}><VideoCard /> </div>
          <div className='m-5' style={{minWidth: 250, width: 250}}><VideoCard /> </div>
          <div className='m-5' style={{minWidth: 250, width: 250}}><VideoCard /> </div>
          </div>
        </div>
        <div className='w-1/3 p-10 bg-primary-light-5'>
          <div>
            <YoutubePlayer />
          </div>
          <div className='my-3'>
            <h1 className='text-2xl py-2'>heading of the vidoe can be small/big sndfvoi</h1>
            <h4 className='text-gray-500 font-semibold '>22 Oct 2022</h4>
            <div className='flex mb-2 py-2 flex-wrap justify-start items-center w-full'>
              <div className='m-1'>
              <Tag />
              </div>
              <div className='m-1'>
              <Tag />
              </div>
              <div className='m-1'>
              <Tag />
              </div>
              <div className='m-1'>
              <Tag />
              </div>
            </div>
            <div className='bg-gray-500 w-2/3 m-auto my-2' style={{height: '1px'}}></div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
