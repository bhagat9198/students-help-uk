import React from 'react'

export function SectionHeaderRight(props) {
  const { title, subheading, style } = props;

  return (
    <div className='flex justify-end flex-col'>
      <div className='flex justify-end'>
        <div className='bg-primary py-2 px-5 rounded-full text-secondary inline-block' >{title}</div>
      </div>
      <div className='text-primary-dark-5 text-base my-2' >{subheading}</div>
      <div className='flex justify-end' >
        <div className='w-20 bg-primary h-1'></div>
      </div>
    </div>
  )
}

export function SectionHeaderLeft(props) {
  const { title, subheading, style } = props;

  return (
    <div >
      <div className='bg-primary py-2 px-5 rounded-full text-secondary inline-block' >{title}</div>
      <div className='text-primary-dark-5 text-base my-2' >{subheading}</div>
      <div className='w-20 bg-primary h-1'></div>
    </div>
  )
}
