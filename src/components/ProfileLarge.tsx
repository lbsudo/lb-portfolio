import React from 'react'
import { Link } from "@nextui-org/link";
import { Typewriter } from "react-simple-typewriter";
import { FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa6";
import { MdCloudDownload } from "react-icons/md";


export default function ProfileLarge() {
  const words: string[] = ['Full-Stack Developer', 'UI/UX Designer', 'Pen-Tester', 'CMS Content Editor']
  return (
    <>
      <div className='bg-[url("/propic.png")] bg-cover bg-center bg-no-repeat w-full h-full pt-32 z-5 flex flex-col justify-center items-center '>
        <div className=' flex flex-col justify-center items-center w-full z-5'>

          <div className="flex flex-col w-full mt-40 justify-center items-center space-y-0.5">
            <div className='w-full'>
              <p className=" text-4xl text-center whitespace-nowrap w-full font-bold">Lawrence Brown</p>
            </div>
            <div className='w-full'>
              <p className="text-violet-500 text-2xl text-center h-10 w-auto flex justify-center items-center whitespace-nowrap">
                <Typewriter
                  words={words}
                  loop={false}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </div>

          </div >
          <div className="flex justify-center items-center space-x-4 text-white pt-3">
            <Link href="https://github.com/lbsudo" target='_blank' className="text-2xl">
              <FaGithub className="text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/lbsudo/" target='_blank' className="text-2xl">
              <FaLinkedinIn className="text-white" />
            </Link>
            <Link href="https://www.instagram.com/lbdluxe" target='_blank' className="text-2xl">
              <FaInstagram className="text-white" />
            </Link>
            <Link href="https://www.youtube.com/@lbdluxe-digital" target='_blank' className="text-2xl">
              <FaYoutube className="text-white" />
              {/* <FaXTwitter /> */}
            </Link>
          </div>
          {/* Gradient line */}
          <div className='flex flex-col mt-6 mb-3 w-full'>
            <div className="gradient-line my-2 w-full z-2"></div>
            <button className="font-bold text-white text-xl flex justify-center items-center">
              <Link href='/LBCV.pdf' target="_blank" color='foreground'>
                <p className='pr-3 text-white' >DOWNLOAD RESUME</p>
                <MdCloudDownload />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
