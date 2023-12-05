"use client"
import { useState } from "react";
import { FaRegUser, FaRegListAlt, FaRegFolderOpen, FaRegNewspaper, FaRegPaperPlane, FaBars } from "react-icons/fa";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from "./Sidebar";

type Props = {
  Function1: any,
  Function2: any,
  Function3: any,
  Function4: any,
  State1: any
  State2: any
  State3: any
  State4: any
}

const variants = {
  initial: { x: '-100vw' },
  animate: { x: 0 },
  exit: { x: '-100vw' },
};


export const NaviLarge = ({ Function1, Function2, Function3, Function4, State1, State2, State3, State4 }: Props) => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      <div className="pr-1 flex flex-col justify-center items-center">
        <div className="bg-stone-800/50 my-1">
          {/* Side-bar control & ThemeSwitch */}
          <div className="flex flex-col justify-between items-center px-4 py-3 text-2xl space-y-4">
            <button onClick={() => setShowComponent(true)}>
              <FaBars />
            </button>
          </div>
        </div>
        <div className="bg-stone-800/50 mb-20">
          {/* Side-bar control & ThemeSwitch */}
          <div className="flex flex-col justify-between items-center p-4 text-2xl space-y-6">
            <button onClick={() => Function1()} style={{ color: State1 ? '#8b5cf6' : 'currentcolor' }}>
              <FaRegUser className="hover:text-violet-500" >
              </FaRegUser>
            </button>
            <button onClick={() => Function2()} style={{ color: State2 ? '#8b5cf6' : 'currentcolor' }}>
              <FaRegListAlt className="hover:text-violet-500" >
              </FaRegListAlt>
            </button>
            <button onClick={() => Function3()} style={{ color: State3 ? '#8b5cf6' : 'currentcolor' }}>
              <FaRegFolderOpen className="hover:text-violet-500">
              </FaRegFolderOpen>
            </button>
            <button>
              <Link href='https://dev.to/lbsudo' target="_blank">
                <FaRegNewspaper className="hover:text-violet-500" />
              </Link>
            </button>
            <button onClick={() => Function4()} style={{ color: State4 ? '#8b5cf6' : 'currentcolor' }}>
              <FaRegPaperPlane className="hover:text-violet-500">
              </FaRegPaperPlane>
            </button>
          </div>
        </div>
      </div >
      <AnimatePresence>
        {showComponent && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="w-1/5 px-2 text-xl bg-stone-800 absolute top-0 left-0 h-screen"
          >
            <button onClick={() => setShowComponent(false)}>X</button>
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
