"use client"
import { ThemeSwitch } from "@/components/theme-switch";
import { Typewriter } from "react-simple-typewriter";
import { HiBars3 } from "react-icons/hi2";
import { FaRegUser, FaRegListAlt, FaRegFolderOpen, FaRegNewspaper, FaRegPaperPlane } from "react-icons/fa";
import Link from "next/link";

export const Navi = () => {

  const words: string[] = ['Full-Stack Developer', 'UI/UX Designer', 'Pen-Tester', 'CMS Content Editor']

  return (
    <div className="bg-stone-800 py-6 md:hidden ">
      {/* Side-bar control & ThemeSwitch */}
      <div className="flex w-full px-4 pt-1 justify-center md:hidden">
        <div className="flex flex-col w-1/2 items-start justify-between">
          <p className="font-semibold">Lawrence Brown</p>
          <p className="text-violet-500 h-10">
            <Typewriter
              words={words}
              loop={false}
              // cursor
              // cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>
        <div className="w-1/2 h-auto flex items-center justify-end">
          <ThemeSwitch />
          <button className="text-current"><HiBars3 className="text-3xl" /></button>
        </div>
      </div>

      {/* hr  */}
      {/* Gradient line */}
      <div className="gradient-line my-2 md:hidden"></div>

      <div className="flex justify-between px-6 text-2xl">
        <button>
          <FaRegUser  >
            <Link href={''} />
          </FaRegUser>
        </button>
        <button>
          <FaRegListAlt >
            <Link href={''} />
          </FaRegListAlt>
        </button>
        <button>
          <FaRegFolderOpen>
            <Link href={''} />
          </FaRegFolderOpen>
        </button>
        <button>
          <FaRegNewspaper>
            <Link href={''} />
          </FaRegNewspaper>
        </button>
        <button>
          <FaRegPaperPlane>
            <Link href={''} />
          </FaRegPaperPlane>
        </button>
      </div>
    </div>

  );
};
