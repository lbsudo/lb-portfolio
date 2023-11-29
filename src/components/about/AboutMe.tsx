import React from 'react'
import Infotags from './Infotags'

export default function AboutMe() {
  return (
    <>
      <div className='bg-stone-800 h-auto w-full px-4'>
        <p className='text-2xl pt-4 font-bold'>About Me</p>
        <div className='flex flex-col justify-center items-center pt-2'>
          <div className="gradient-line my-2 w-full z-20"></div>
          <p className='text-left w-full pb-2'>Hello! I&apos;m <span className='font-bold'>Lawrence Brown.</span></p>
          <p className='text-left w-full pb-2'>Full-Stack Software developer from San Bernadino, California. I&apos;m a JavaScript junkie that's enthusiastic about coding and making software as a whole. Proficient in multiple programming languages, with a focused on web development and a solid foundation in software development and programming principles. Eager to join and contribute to a team as well as push open-source projects forward.</p>
          <p className='text-left w-full'>Besides Programming, I also love cars, gaming, and martial arts.</p>
          <div className='pt-4 flex justify-between flex-col w-full'>
            <Infotags title="Age:" value="24" />
            <Infotags title="Contracting:" value="Available" />
            <Infotags title="Email:" value="lbsudo100@gmail.com" />
            <Infotags title="Education" value="Self-Taught / Certificates" />
          </div>
        </div>
      </div>
    </>
  )
}
