import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

export default function Knowledge() {
  return (
    <>
      <div className='bg-stone-800/50 h-auto w-full px-4 pb-4'>
        <p className='text-2xl pt-6 font-bold'>Knowledge</p>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line my-2 w-full z-20"></div>
          <ul className='flex flex-col justify-center item-start w-full text-left list-none'>
            <li className='flex items-center'><IoMdCheckmark />Website Hosting</li>
            <li className='flex items-center'><IoMdCheckmark />Google analytics</li>
            <li className='flex items-center'><IoMdCheckmark />Lighthouse</li>
            <li className='flex items-center'><IoMdCheckmark />SEO Optimization</li>
            <li className='flex items-center'><IoMdCheckmark />Response pages and mobile optimization</li>
            <li className='flex items-center'><IoMdCheckmark />Relational Databases</li>
            <li className='flex items-center'><IoMdCheckmark />REST APIs</li>
            <li className='flex items-center'><IoMdCheckmark />Design to code conversion</li>
            <li className='flex items-center'><IoMdCheckmark />Aadvanced data structures and algorithms</li>
          </ul>
        </div>

      </div>
    </>
  )
}
