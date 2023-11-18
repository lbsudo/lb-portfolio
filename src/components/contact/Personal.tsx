import React from 'react'
import Infotags from '@/components/about/Infotags'


export default function Personal() {
  return (
    <>
      <div className='pt-10 flex justify-between flex-col w-full'>
        <Infotags title="Adddress" value="California, USA" />
        <Infotags title="Email:" value="lbsudo100@gmail.com" />
        <Infotags title="contracting" value="Avaliable" />
      </div>
    </>
  )
}
