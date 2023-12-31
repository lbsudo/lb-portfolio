import React from 'react'
import Map from './Map'
import Personal from './Personal'
// import CForm from './CForm'

export default function Contact() {
  return (
    <>
      <div className='bg-stone-800/50 h-auto w-full px-4 pb-4'>
        <p className='text-2xl pt-4 font-bold'>Get In Touch</p>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line w-full z-20"></div>
          <Map />
          <Personal />
        </div>

      </div>
      {/* <div className='bg-stone-800/50 h-auto w-full px-4 pb-4'> */}
      {/*   <p className='text-2xl  font-bold'>Contact Form</p> */}
      {/*   <div className='flex flex-col text-center justify-center items-center pt-2'> */}
      {/*     <div className="gradient-line my-2 w-full z-20"></div> */}
      {/*     <CForm /> */}
      {/*   </div> */}

      {/* </div> */}

    </>
  )
}
