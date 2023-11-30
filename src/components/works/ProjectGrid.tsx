import React from 'react'
import Project from './Project'

export default function ProjectGrid() {
  return (
    <>
      <div className='bg-stone-800/50 h-full w-full px-4 z-80'>
        <p className='text-2xl pt-4 font-bold'>Works</p>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line my-2 w-full z-20"></div>
          <Project />
        </div>

      </div>
    </>
  )
}
