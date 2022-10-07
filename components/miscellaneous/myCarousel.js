import React, { useEffect, useState } from 'react'
import classes from './myCarousel.module.css';

export default function MyCarousel(props) {
  // const data = [1, 2, 3, 4];
  const {data} = props;
  const [currentIndex, setCurrentIndex] = useState(1);

  const carouselInfinitScroll = () => {
    console.log('carouselInfinitScroll :: ', currentIndex, data.length - 1);
    if(currentIndex == (data.length -1) ) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // carouselInfinitScroll()
      // setCurrentIndex(prev => {
      //   if(prev == (data.length - 1)) {
      //     return 0
      //   }
      //   return prev + 1
      // })
    }, 3000)

    return () => clearInterval(interval)
  }, [])


  console.log('currentIndex ::', currentIndex);
  return (
    <div className={`${classes.carousel_container} px-10`} >
      {/* <div className={classes.carousel_item} >
        <h1>Item 1</h1>
      </div>
      <div className={classes.carousel_item} >
        <h1>Item 1</h1>
      </div>
      <div className={classes.carousel_item} >
        <h1>Item 1</h1>
      </div> */}

      {data.map((item, index) => {
        return <div className={`${classes.carousel_item} `} key={`carousel_${index}`} style={{transform: `translate(-${currentIndex * 100}%)`}} >
          <div className='flex justify-between' >
            <div className='bg-primary-light-5 rounded-lg overflow-scroll py-10 mx-10 px-10  w-96'>
              Excellent service! Beginning with the front desk staff, all the way upto the head/manager/lead, each person is extremely well informed about University/Visa requirements, and everything else you need to know. I went to them for Visa Counseling after I got my offer letter. It was a free service (don't know how it is now), and they helped me arrange for and organize all my documents. It was quiet a task, but, with their assistance it happened effortlessly.
            </div>
            <div className='bg-primary-light-5 rounded-lg overflow-scroll py-10 mx-10 px-10  w-96'>
              Excellent service! Beginning with the front desk staff, all the way upto the head/manager/lead, each person is extremely well informed about University/Visa requirements, and everything else you need to know. I went to them for Visa Counseling after I got my offer letter. It was a free service (don't know how it is now), and they helped me arrange for and organize all my documents. It was quiet a task, but, with their assistance it happened effortlessly.
            </div>
          </div>
        </div>
      })}
    </div>
  )
}
