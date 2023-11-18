import React from 'react'
import { Link } from "@nextui-org/link";
import { Typewriter } from "react-simple-typewriter";
import { FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa6";
import { MdCloudDownload } from "react-icons/md";


export default function Profile() {
  const words: string[] = ['Full-Stack Developer', 'UI/UX Designer', 'Pen-Tester', 'CMS Content Editor']
  return (
    <div className='bg-[url("/propic.png")] bg-cover bg-center bg-no-repeat w-full h-4/6 flex flex-col justify-center items-center'>
      <div className=' flex flex-col justify-center items-center'>

        <div className="flex flex-col mt-40 justify-center items-center space-y-2">
          <div>
            <p className=" text-4xl font-bold">Lawrence Brown</p>
          </div>
          <div className="">
            <p className="text-violet-500 text-3xl text-center h-10 w-auto flex justify-center items-center">
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
        <div className="flex justify-center items-center space-x-4 text-white">
          <Link href="https://github.com/lbsudo" target='_blank' className="text-2xl">
            <FaGithub className="text-white" />
          </Link>
          <Link href="https://www.linkedin.com/in/lbsudo/" target='_blank' className="text-2xl">
            <FaLinkedinIn className="text-white" />
          </Link>
          <Link href="https://www.instagram.com/lbdluxe" target='_blank' className="text-2xl">
            <FaInstagram className="text-white" />
          </Link>
          <Link href="https://www.youtube.com/lbdluxe-digital" target='_blank' className="text-2xl">
            <FaYoutube className="text-white" />
            {/* <FaXTwitter /> */}
          </Link>
        </div>
        {/* Gradient line */}
        <div className='flex flex-col mt-9 mb-2'>
          <div className="gradient-line my-2 w-screen"></div>
          <button className="font-bold text-lg flex justify-center items-center">
            <p className='pr-3'>DOWNLOAD RESUME</p>
            <MdCloudDownload />

          </button>
        </div>
      </div>
    </div>
  )
}
