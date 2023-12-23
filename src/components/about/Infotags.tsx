import React from 'react'

export default function Infotags({ title, value }: any) {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between text-white'>
          <p className='bg-primary rounded-md px-1 text-black'>{title}</p>
          <p>{value}</p>
        </div>
        <div className="gradient-line my-2 w-full z-20"></div>
      </div>
    </>
  )
}
