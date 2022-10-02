import React from 'react'

export default function Feedback() {
  return (
    <section className='flex py-10 px-32 justify-around bg-gray-200'>
      <div className='py-5 justify-around '>
        <p className='px-4 py-2 uppercase bg-primary text-secondary rounded-lg inline-block my-5 font-bold'>FEEDBACK</p>
        <p className='text-xl  ' >We are lisening. WE will love get the message from you</p>
      </div>
      <div>
        <form className='w-96' >
          <div className='p-2 w-full'>
            <label className='block py-2' htmlFor='name-feeback'>Name</label>
            <input type='text' id='name-feeback' placeholder='Name' className='p-2 rounded-lg w-full' />
          </div>
          <div className='p-2 w-full'>
            <label className='block py-2' htmlFor='email-feeback'>Email</label>
            <input type='email' id='email-feeback' placeholder='Email' className='p-2 rounded-lg w-full' />
          </div>
          <div className='p-2 w-full'>
            <label className='block py-2' htmlFor='message-feeback'>Your message</label>
            <textarea id='message-feeback' rows={3} placeholder='Your message' className='p-2 rounded-lg w-full' />
          </div>
          <div className='mx-2 mt-2'>
          <button type='submit' className='bg-secondary-light-5 py-2 rounded-md text-primary w-full' >Send your Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
