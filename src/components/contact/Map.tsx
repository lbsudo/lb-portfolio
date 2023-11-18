import React from 'react'

export default function Map() {
  return (
    <>
      <div className='flex justify-center items-center w-full'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211321.22485312677!2d-117.459458259991!3d34.14905038713571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3537de2fdb8f3%3A0x2867c6788c87c28d!2sSan%20Bernardino%2C%20CA!5e0!3m2!1sen!2sus!4v1700095550921!5m2!1sen!2sus"
          width="400"
          height="300"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className='mt-4'
        />
      </div>

    </>
  )
}
