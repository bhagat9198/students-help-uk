import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

export default function Layout(props) {
  return (
    <div className='h-screen flex flex-col' >
      <Navbar />
      <main className='flex-1' >
        main
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
