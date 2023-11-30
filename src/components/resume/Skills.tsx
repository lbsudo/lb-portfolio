import React from 'react'
import { FaGitAlt, FaLinux, FaWordpressSimple } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaPython, FaPhp, FaReact, FaWindows, FaGithub, FaNodeJs } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiWordpress, SiVisualstudiocode, SiSublimetext, SiGraphql, SiCplusplus, SiGnubash, SiAmazonaws, SiPlanetscale, SiNodedotjs, SiNextdotjs, SiSvelte, SiPhp, SiPython, SiSolid, SiLua, SiAstro, SiTailwindcss, SiNextui, SiMysql, SiPostgresql, SiMongodb, SiNetlify, SiVercel, SiArchlinux, SiNeovim, SiExpress } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className='bg-stone-800/50 h-auto w-full px-4'>
        <p className='text-2xl pt-4 font-bold'>Skills</p>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line my-2 w-full z-20"></div>
          <p className='font-semibold text-xl'>Languages</p>
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <span className=''><FaHtml5 className='p-3 text-6xl text-white' /></span>
            <span className=''><FaCss3Alt className='p-3 text-6xl text-white' /></span>
            <span className=''><SiJavascript className='p-3 text-6xl text-white' /></span>
            <span className=''><SiTypescript className='p-3 text-6xl text-white' /></span>
            <span className=''><SiPython className='p-3 text-6xl text-white' /></span>
            <span className=''><SiLua className='p-3 text-6xl text-white' /></span>
            <span className=''><SiPhp className='p-3 text-6xl text-white' /></span>
            <span className=''><SiCplusplus className='p-3 text-6xl text-white' /></span>
            <span className=''><SiGnubash className='p-3 text-6xl text-white' /></span>
          </div>
        </div>
        <div className='flex flex-col text-center justify-center items-center '>
          <div className="gradient-line my-2 w-full z-20"></div>
          <p className='font-semibold text-xl'>Frameworks, libraries, and tools</p>
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <span className=''><FaReact className='p-3 text-6xl text-white' /></span>
            <span className=''><SiNextdotjs className='p-3 text-6xl text-white' /></span>
            <span className=''><SiSolid className='p-3 text-6xl text-white' /></span>
            <span className=''><SiAstro className='p-3 text-6xl text-white' /></span>
            <span className=''><SiTailwindcss className='p-3 text-6xl text-white' /></span>
            <span className=''><SiNextui className='p-3 text-6xl text-white' /></span>
            <span className=''><SiSvelte className='p-3 text-6xl text-white' /></span>
            <span className=''><SiExpress className='p-3 text-6xl text-white' /></span>
            <span className=''><SiNodedotjs className='p-3 text-6xl text-white' /></span>
          </div>
        </div>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line my-2 w-full z-20"></div>
          <p className='font-semibold text-xl'>Database and CMS platforms</p>
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <span className=''><SiPlanetscale className='p-3 text-6xl text-white' /></span>
            <span className=''><SiMysql className='p-3 text-6xl text-white' /></span>
            <span className=''><SiPostgresql className='p-3 text-6xl text-white' /></span>
            <span className=''><SiMongodb className='p-3 text-6xl text-white' /></span>
            <span className=''><SiGraphql className='p-3 text-6xl text-white' /></span>
            <span className=''><SiWordpress className='p-3 text-6xl text-white' /></span>
            <span className=''><SiAmazonaws className='p-3 text-6xl text-white' /></span>
            <span className=''><SiNetlify className='p-3 text-6xl text-white' /></span>
            <span className=''><SiVercel className='p-3 text-6xl text-white' /></span>
          </div>
        </div>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line my-2 w-full z-20"></div>
          <p className='font-semibold text-xl'>Software/Other</p>
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <span className=''><FaLinux className='p-3 text-6xl text-white' /></span>
            <span className=''><SiArchlinux className='p-3 text-6xl text-white' /></span>
            <span className=''><FaWindows className='p-3 text-6xl text-white' /></span>
            <span className=''><SiNeovim className='p-3 text-6xl text-white' /></span>
            <span className=''><SiVisualstudiocode className='p-3 text-6xl text-white' /></span>
            <span className=''><SiSublimetext className='p-3 text-6xl text-white' /></span>
            <span className=''><FaGithub className='p-3 text-6xl text-white' /></span>
            <span className=''><FaGitAlt className='p-3 text-6xl text-white' /></span>
          </div>
        </div>


      </div>
    </>
  )
}
