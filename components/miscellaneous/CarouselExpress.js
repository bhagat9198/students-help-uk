import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default function CarouselExpress() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={3}
      lockOnWindowScroll={true}
      infinite={true}
      className="h-96 "
    >
      <div className='h-full overflow-scroll'>
        <Slider>
          <Slide index={0} className='h-full overflow-scroll'>
            <div className='flex justify-evenly' >
              <div className='bg-primary-light-5 p-10 mx-10 rounded-lg overflow-y-scroll '>
                Excellent service! Beginning with the front desk staff, all the way upto the head/manager/lead, each person is extremely well informed about University/Visa requirements, and everything else you need to know. I went to them for Visa Counseling after I got my offer letter. It was a free service (don't know how it is now), and they helped me arrange for and organize all my documents. It was quiet a task, but, with their assistance it happened effortlessly.
              </div>
              <div className='bg-primary-light-5 p-10 mx-10 rounded-lg overflow-y-scroll '>
                Excellent service! Beginning with the front desk staff, all the way upto the head/manager/lead, each person is extremely well informed about University/Visa requirements, and everything else you need to know. I went to them for Visa Counseling after I got my offer letter. It was a free service (don't know how it is now), and they helped me arrange for and organize all my documents. It was quiet a task, but, with their assistance it happened effortlessly.
              </div>
            </div>
          </Slide>
          <Slide index={1}><div className='flex justify-evenly' >
            <div className='bg-primary-light-5 p-10 mx-10 rounded-lg overflow-y-scroll '>
              Excellent service! Beginning with the front desk staff, all the way upto the head/manager/lead, each person is extremely well informed about University/Visa requirements, and everything else you need to know. I went to them for Visa Counseling after I got my offer letter. It was a free service (don't know how it is now), and they helped me arrange for and organize all my documents. It was quiet a task, but, with their assistance it happened effortlessly.
            </div>
            <div className='bg-primary-light-5 p-10 mx-10 rounded-lg overflow-y-scroll '>
              Excellent service! Beginning with the front desk staff, all the way upto the head/manager/lead, each person is extremely well informed about University/Visa requirements, and everything else you need to know. I went to them for Visa Counseling after I got my offer letter. It was a free service (don't know how it is now), and they helped me arrange for and organize all my documents. It was quiet a task, but, with their assistance it happened effortlessly.
            </div>
          </div></Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
      </div>
      <div className='flex justify-center items-center'>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </div>
    </CarouselProvider>
  )
}
