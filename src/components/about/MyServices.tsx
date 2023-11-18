import React from 'react'
import { FaHtml5, FaDatabase, FaShieldVirus, FaPaintbrush } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";

export default function MyServices() {
  return (
    <>
      <div className='bg-stone-800 h-auto w-full px-4'>
        <p className='text-2xl pt-6 font-bold'>My Services</p>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line my-2 w-full z-20"></div>
          <span className='border border-violet-500 rounded-full'><SiJavascript className='p-3 text-6xl text-white' /></span>
          <p className='font-semibold text-xl'>Full-Stack Development</p>
          <p>Modern and mobile-ready web applications with full production features.</p>
        </div>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line my-2 w-full z-20"></div>
          <span className='border border-violet-500 rounded-full'><FaDatabase className='p-3 text-6xl text-white' /></span>
          <p className='font-semibold text-xl'>Content Management</p>
          <p>Working with CMS systems to help create robust platforms in technologies like Wordpress, Shopify, HubSpot, and Sanity.</p>
        </div>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line my-2 w-full z-20"></div>
          <span className='border border-violet-500 rounded-full'><FaShieldVirus className='p-3 text-6xl text-white' /></span>
          <p className='font-semibold text-xl'>Cyber Security PenTesting</p>
          <p>Using an array of the best modern hacking tools and tactics to solidify the security of your business and software.</p>
        </div>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line mt-2 w-full z-20"></div>
          <span className='border border-violet-500 rounded-full'><FaPaintbrush className='p-3 text-6xl text-white' /></span>
          <p className='font-semibold text-xl'>Graphic Design</p>
          <p>From making origianl vector graphics to optimizing brand packs for the web to make your platform rich with multi-media.</p>
        </div>
      </div>
    </>
  )
}
