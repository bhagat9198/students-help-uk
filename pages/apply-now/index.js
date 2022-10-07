import React from 'react'
import Layout from '../../components/layout/layout'

export default function ApplyNow() {
  return (
    <section >
      <div className="bg-[url('/assets/images/map.jpg')] ">
        <div className='bg-primary-light-5 bg-opacity-50 py-10'>
          <div className='flex items-center justify-center py-5'>
          <p className='h-4 text-3xl text-secondary font-semibold'>Request for a call</p>
          </div>
          <form>
            <div className='flex justify-evenly py-5 flex-wrap'>
              <div className='w-96 m-5'>
                <input type='text' placeholder='Full Name' className='p-2 rounded-md w-full bg-opacity-75 bg-white' />
              </div>
              <div className='w-96 m-5'>
                <input type='text' placeholder='Mobile Number' className='p-2 rounded-md w-full bg-opacity-75 bg-white' />
              </div>
              <div className='w-96 m-5'>
                <input type='text' placeholder='Email' className='p-2 rounded-md w-full bg-opacity-75 bg-white' />
              </div>
              <div className='w-96 m-5'>
                <input type='date' placeholder='DD-MM-YY' className='p-2 rounded-md w-full bg-opacity-75 bg-white' />
              </div>
              <div className='w-96 m-5'>
                <select className='p-2 rounded-md w-full bg-opacity-75 bg-white'>
                  <option disabled >Marital status</option>
                  <option>Married</option>
                  <option>Unmarried</option>
                </select>
              </div>
              <div className='w-96 m-5'>
                <select className='p-2 rounded-md w-full bg-opacity-75 bg-white'>
                  <option disabled >Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer Not to tell</option>
                </select>
              </div>
              <div className='w-96 m-5'>
                <input type='text' placeholder='Nationality' className='p-2 rounded-md w-full bg-opacity-75 bg-white' />
              </div>
              <div className='w-96 m-5'>
                <select className='p-2 rounded-md w-full bg-opacity-75 bg-white'>
                  <option selected disabled >Interested Country </option>
                  <option>United Kindom</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>
            <div className='px-20'>
              <textarea placeholder='Your query' rows={5} className='p-2 rounded-md w-full  bg-opacity-75 bg-white' />
            </div>
          </form>
        </div>
      </div>
    </section >
  )
}
