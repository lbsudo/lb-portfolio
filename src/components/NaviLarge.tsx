"use client"
import { FaRegUser, FaRegListAlt, FaRegFolderOpen, FaRegNewspaper, FaRegPaperPlane, FaBars } from "react-icons/fa";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

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


export const NaviLarge = ({ Function1, Function2, Function3, Function4, State1, State2, State3, State4 }: Props) => {

  return (
    <>
      <div className="pr-1 flex flex-col justify-center items-center">
        <div className="bg-stone-800 my-1">
          {/* Side-bar control & ThemeSwitch */}
          <div className="flex flex-col justify-between items-center px-4 py-3 text-2xl space-y-4">
            <button>
              <FaBars  >
                <Link href={''} />
              </FaBars>
            </button>
            <button>
              <ThemeSwitch />
            </button>
          </div>
        </div>
        <div className="bg-stone-800 mb-20">
          {/* Side-bar control & ThemeSwitch */}
          <div className="flex flex-col justify-between items-center p-4 text-2xl space-y-6">
            <button onClick={() => Function1()} style={{ color: State1 ? '#8b5cf6' : 'currentcolor' }}>
              <FaRegUser className="hover:text-violet-500" >
                <Link href={''} />
              </FaRegUser>
            </button>
            <button onClick={() => Function2()} style={{ color: State2 ? '#8b5cf6' : 'currentcolor' }}>
              <FaRegListAlt className="hover:text-violet-500" >
                <Link href={''} />
              </FaRegListAlt>
            </button>
            <button onClick={() => Function3()} style={{ color: State3 ? '#8b5cf6' : 'currentcolor' }}>
              <FaRegFolderOpen className="hover:text-violet-500">
                <Link href={''} />
              </FaRegFolderOpen>
            </button>
            <button >
              <FaRegNewspaper className="hover:text-violet-500">
                <Link href={''} />
              </FaRegNewspaper>
            </button>
            <button onClick={() => Function4()} style={{ color: State4 ? '#8b5cf6' : 'currentcolor' }}>
              <FaRegPaperPlane className="hover:text-violet-500">
                <Link href={''} />
              </FaRegPaperPlane>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
