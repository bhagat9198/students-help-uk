import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/layout'
import styles from '../styles/Home.module.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { FiPhoneCall } from 'react-icons/fi';
import { BsPen, BsExclamationLg } from 'react-icons/bs';
import ApplyNow from './apply-now'
import WhyChooseUs from '../components/home/whyChooseUs'
import LatestsYoutubeVideos from '../components/home/latestsYoutubeVideos'
import Testimonials from '../components/home/testimonials'
import Latestblogs from '../components/home/latestblogs'
import Feedback from '../components/home/feedback'
import Process from '../components/home/process'

export default function Home() {
  return (
    <>
      <section className='flex px-10 py-10 justify-evenly ' style={{ backgroundImage: 'radial-gradient(rgba(41,134,204, 0.5), rgba(255,226,0, 0.5), rgba(0,0,0, 0.5))' }}>
        <div className='w-1/2 px-10 flex flex-col justify-evenly'>
          <div>
            <p className='h-1 text-secondary-dark-3 text-6xl flex'><strong> Welcome </strong><span className='text-secondary-dark-3 px-5'><BsExclamationLg /></span></p>
          </div>
          <div className='inline-block text-secondary w-3/4'>
            <div className='bg-primary flex py-3 px-10 m-2 cursor-pointer' >
              <div className='px-5'><FiPhoneCall /></div>
              <p>Call Now</p>
            </div>
            <div className='bg-primary flex py-3 px-10 m-2 cursor-pointer' >
              <div className='px-5'><BsPen /></div>
              <p>Apply Now</p>
            </div>
          </div>
        </div>
        <Image width='400' height='400' src='/assets/images/globe-2.gif' />
      </section>
      <Process />
      <Latestblogs />
      <LatestsYoutubeVideos />
      <WhyChooseUs />
      <Testimonials />
      <Feedback />
      <ApplyNow />
      <section>

      </section>
    </>
  )
}
