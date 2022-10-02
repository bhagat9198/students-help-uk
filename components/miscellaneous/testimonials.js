import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Testimonials() {
  return (
    <section className='flex px-32' >
      <div className='w-1/4' >
        <div className='py-5 justify-around '>
          <p className='px-4 py-2 uppercase bg-primary text-secondary rounded-lg inline-block my-5 font-bold'>Testimonials</p>
          <p className='text-xl  ' >Few of our happy vistors</p>
        </div>
      </div>
      <div className='flex-1 flex items-center '>
        <div >
          <Carousel autoPlay useKeyboardArrows={true} showThumbs={false} showIndicators={true} showArrows={false} showStatus={false} dynamicHeight={true} labels={{}}>
            <div className='flex justify-evenly' >
              <div className='bg-primary-light-5 p-10 mx-10 rounded-lg overflow-scroll '>
                Excellent service! Beginning with the front desk staff, all the way upto the head/manager/lead, each person is extremely well informed about University/Visa requirements, and everything else you need to know. I went to them for Visa Counseling after I got my offer letter. It was a free service (don't know how it is now), and they helped me arrange for and organize all my documents. It was quiet a task, but, with their assistance it happened effortlessly.
              </div>
              <div className='bg-primary-light-5 p-10 mx-10 rounded-lg overflow-scroll '>
                Excellent service! Beginning with the front desk staff, all the way upto the head/manager/lead, each person is extremely well informed about University/Visa requirements, and everything else you need to know. I went to them for Visa Counseling after I got my offer letter. It was a free service (don't know how it is now), and they helped me arrange for and organize all my documents. It was quiet a task, but, with their assistance it happened effortlessly.
              </div>
            </div>
            <div className='flex justify-evenly' >
              <div className='bg-primary-light-5 p-10 mx-10 rounded-lg overflow-scroll '>
                Excellent service! Beginning with the front desk staff, all the way upto the head/manager/lead, each person is extremely well informed about University/Visa requirements, and everything else you need to know. I went to them for Visa Counseling after I got my offer letter. It was a free service (don't know how it is now), and they helped me arrange for and organize all my documents. It was quiet a task, but, with their assistance it happened effortlessly.
              </div>
              <div className='bg-primary-light-5 p-10 mx-10 rounded-lg overflow-scroll '>
                Excellent service! Beginning with the front desk staff, all the way upto the head/manager/lead, each person is extremely well informed about University/Visa requirements, and everything else you need to know. I went to them for Visa Counseling after I got my offer letter. It was a free service (don't know how it is now), and they helped me arrange for and organize all my documents. It was quiet a task, but, with their assistance it happened effortlessly.
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
