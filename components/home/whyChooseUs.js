import React, { useEffect, useState } from 'react'
import { AiOutlineUserSwitch } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import MyParticles from '../miscellaneous/myParticles';
import classes from './whyChooseUs.module.css';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const _animationData = [{
  icon: <FaHandHoldingHeart />,
  heading: 'Support',
  text: 'We are there to support you and have collberated with multiple companies to give you best expirence '
}, {
  icon: <FiPhoneCall />,
  heading: 'One call away',
  text: 'We are there to support you and have collberated with multiple companies to give you best expirence '
}]

export default function WhyChooseUs() {

  const [animationIndex, setAnimationIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex(prev => {
        console.log('prev :: ', prev);
        if ((prev + 1) === _animationData.length ) {
          return 0
        } else {
          return prev + 1
        }
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='mb-10  '>
      <div className='-z-20'>
        <MyParticles />
      </div>
      <div className='px-20 py-10 z'>
        <div className='flex justify-end ' >
          <div className='flex justify-end flex-col' >
            <div className='bg-primary text-secondary rounded-lg px-4 py-2 inline-block mb-3'>
              Why Choose US
            </div>
            <div>
              here it will be shourt message which we can put and
            </div>
          </div>
        </div>
        <div className='flex' >
          <div className={`w-1/2 mr-8 flex justify-center items-center`}>
            <div className={`rounded-full border-4  border-transparent w-96 h-96 py-10 px-10 opacity-50 flex ${classes.why_choose_us_bg}`} >
              <div className={`w-full bg-gray-100 rounded-full px-10 `}>

                {/* <div className='text-4xl py-4'>
                    <AiOutlineUserSwitch />
                  </div>
                  <p className='text-xl mb-2'>heading 1</p>
                  <p className='flex justify-center text-center'>something to write , a short message something to write , a short message something to write , a short message</p> */}
                {
                  <div className='w-full h-full flex flex-col justify-center items-center' >
                    <div className='text-4xl py-4'>{_animationData[animationIndex].icon}</div>
                    <p className='text-xl mb-2'>{_animationData[animationIndex].heading}</p>
                    <p className='flex justify-center text-center'>{_animationData[animationIndex].text}</p>
                  </div>
                }

              </div>
            </div>
          </div>
          <div className='py-10 text-xl' >
            <ul>
              <li className='py-2 flex  items-center'><span className='pr-3'><BsStarFill className='text-secondary' /></span> Affordable Consultation Process - We want you to achieve your study abroad dream without any burden.</li>
              <li className='py-2 flex  items-center'><span className='pr-3'><BsStarFill className='text-secondary' /></span> Expert Counsellors - Our counsellors for each country are experts who will help you get into the best countries to study abroad.</li>
              <li className='py-2 flex  items-center'><span className='pr-3'><BsStarFill className='text-secondary' /></span> IELTS Preparation - Achieve a high score in language proficiency exams for English-speaking countries.</li>
              <li className='py-2 flex  items-center'><span className='pr-3'><BsStarFill className='text-secondary' /></span> Student Network - Get assistance in a foreign country for overseas education, accommodation, and part-time work from our student network. </li>
              <li className='py-2 flex  items-center'><span className='pr-3'><BsStarFill className='text-secondary' /></span> Visa Guidance - Guidance for your visa applications, SOP and interviews.Benefit from our high success rate. </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
