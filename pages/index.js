import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/layout'
import styles from '../styles/Home.module.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { FiPhoneCall } from 'react-icons/fi';
import { BsPen, BsExclamationLg } from 'react-icons/bs';
import Feedback from '../components/miscellaneous/feedback'
import Testimonials from '../components/miscellaneous/testimonials'
import ApplyNow from './apply-now'

export default function Home() {
  return (
    <>
      <section className='flex px-10 py-10 justify-evenly '>
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
      <Testimonials />
      <Feedback />
      <ApplyNow />
      <section>

      </section>
    </>
  )
}
