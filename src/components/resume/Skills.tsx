import React from 'react'
import { SiJavascript, SiTypescript, SiPhp, SiPython, SiDart, SiLua, SiGnubash, SiGit } from "react-icons/si";
import { SiHtml5, SiCss3, SiSass, SiAstro, SiSolid, SiReact, SiTailwindcss, SiBootstrap, SiRedux } from "react-icons/si";
import { SiNextdotjs, SiNodedotjs, SiExpress, SiMysql, SiPostgresql, SiPlanetscale, SiMongodb, SiGraphql, SiAmazonaws } from 'react-icons/si'
import { SiLinux, SiArchlinux, SiWindows, SiGooglecloud, SiAdobe, SiNeovim, SiVisualstudiocode, SiGithub } from "react-icons/si";
export default function Skills() {
  return (
    <>
      <div className='bg-stone-800/50 h-auto w-full px-4'>
        <p className='text-2xl pt-4 font-bold'>Skills</p>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line my-2 w-full z-20"></div>
          <p className='font-semibold text-xl'>Core</p>
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <span className=''><SiJavascript className='p-3 text-6xl text-white' /></span>
            <span className=''><SiTypescript className='p-3 text-6xl text-white' /></span>
            <span className=''><SiPhp className='p-3 text-6xl text-white' /></span>
            <span className=''><SiPython className='p-3 text-6xl text-white' /></span>
            <span className=''><SiDart className='p-3 text-6xl text-white' /></span>
            <span className=''><SiLua className='p-3 text-6xl text-white' /></span>
            <span className=''><SiGnubash className='p-3 text-6xl text-white' /></span>
            <span className=''><SiGit className='p-3 text-6xl text-white' /></span>
          </div>
        </div>
        <div className='flex flex-col text-center justify-center items-center '>
          <div className="gradient-line my-2 w-full z-20"></div>
          <p className='font-semibold text-xl'>Front-End</p>
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <span className=''><SiHtml5 className='p-3 text-6xl text-white' /></span>
            <span className=''><SiCss3 className='p-3 text-6xl text-white' /></span>
            <span className=''><SiReact className='p-3 text-6xl text-white' /></span>
            <span className=''><SiAstro className='p-3 text-6xl text-white' /></span>
            <span className=''><SiSolid className='p-3 text-6xl text-white' /></span>
            <span className=''><SiSass className='p-3 text-6xl text-white' /></span>
            <span className=''><SiTailwindcss className='p-3 text-6xl text-white' /></span>
            <span className=''><SiBootstrap className='p-3 text-6xl text-white' /></span>
            <span className=''><SiRedux className='p-3 text-6xl text-white' /></span>
          </div>
        </div>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line my-2 w-full z-20"></div>
          <p className='font-semibold text-xl'>Back-end</p>
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <span className=''><SiNextdotjs className='p-3 text-6xl text-white' /></span>
            <span className=''><SiNodedotjs className='p-3 text-6xl text-white' /></span>
            <span className=''><SiExpress className='p-3 text-6xl text-white' /></span>
            <span className=''><SiMysql className='p-3 text-6xl text-white' /></span>
            <span className=''><SiPostgresql className='p-3 text-6xl text-white' /></span>
            <span className=''><SiPlanetscale className='p-3 text-6xl text-white' /></span>
            <span className=''><SiMongodb className='p-3 text-6xl text-white' /></span>
            <span className=''><SiGraphql className='p-3 text-6xl text-white' /></span>
            <span className=''><SiAmazonaws className='p-3 text-6xl text-white' /></span>

          </div>
        </div>
        <div className='flex flex-col text-center justify-center items-center pt-2'>
          <div className="gradient-line my-2 w-full z-20"></div>
          <p className='font-semibold text-xl'>Tools</p>
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <span className=''><SiLinux className='p-3 text-6xl text-white' /></span>
            <span className=''><SiArchlinux className='p-3 text-6xl text-white' /></span>
            <span className=''><SiWindows className='p-3 text-6xl text-white' /></span>
            <span className=''><SiGooglecloud className='p-3 text-6xl text-white' /></span>
            <span className=''><SiAdobe className='p-3 text-6xl text-white' /></span>
            <span className=''><SiNeovim className='p-3 text-6xl text-white' /></span>
            <span className=''><SiVisualstudiocode className='p-3 text-6xl text-white' /></span>
            <span className=''><SiGithub className='p-3 text-6xl text-white' /></span>
          </div>
        </div>


      </div>
    </>
  )
}
