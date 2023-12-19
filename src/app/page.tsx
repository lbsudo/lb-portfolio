"use client"
import React, { useState, useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Skills from "@/components/resume/Skills";
import Profile from "@/components/profile";
import AboutMe from "@/components/about/AboutMe";
import MyServices from "@/components/about/MyServices";
import Knowledge from "@/components/resume/Knowledge";
import ProjectGrid from "@/components/works/ProjectGrid";
import Contact from "@/components/contact/contact";
import ProfileLarge from "@/components/ProfileLarge";
import { NaviLarge } from "@/components/NaviLarge";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const [showAboutMe, setshowAboutMe] = useState(true);
  const [showResume, setshowResume] = useState(false);
  const [showWorks, setshowWorks] = useState(false);
  const [showContact, setshowContact] = useState(false);

  const handleButtonClick1 = () => {
    setshowAboutMe(true);
    setshowResume(false);
    setshowWorks(false);
    setshowContact(false);
  };

  const handleButtonClick2 = () => {
    setshowAboutMe(false);
    setshowResume(true);
    setshowWorks(false);
    setshowContact(false);
  };
  const handleButtonClick3 = () => {
    setshowAboutMe(false);
    setshowResume(false);
    setshowWorks(true);
    setshowContact(false);
  };
  const handleButtonClick4 = () => {
    setshowAboutMe(false);
    setshowResume(false);
    setshowWorks(false);
    setshowContact(true);
  };

  return (
    <div>
      <AnimatePresence>
        <div className="relative z-10 w-full h-full hidden md:flex justify-center items-center">
          <section className=" w-5/6 h-screen flex justify-center items-center pt-16">
            <NaviLarge
              Function1={handleButtonClick1}
              Function2={handleButtonClick2}
              Function3={handleButtonClick3}
              Function4={handleButtonClick4}
              State1={showAboutMe}
              State2={showResume}
              State3={showWorks}
              State4={showContact}
            />
            <div className="flex justify-center items-center h-auto w-auto">
              <ProfileLarge />
              {/* <Profile /> */}
            </div>
            <div className="flex flex-col justify-start items-start h-[448px] w-3/6 bg-stone-800/50 overflow-y-auto">
              {showAboutMe && (
                <motion.div
                  className=" w-full"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: .5, ease: "easeInOut" }}
                >
                  <AboutMe />
                  <MyServices />
                </motion.div>
              )}
              {showResume && (
                <motion.div
                  className=" w-full"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: .5, ease: "easeInOut" }}
                >
                  <Skills />
                  <Knowledge />
                </motion.div>
              )}
              {showWorks && (
                <motion.div
                  className=" w-full"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: .5, ease: "easeInOut" }}
                >
                  <ProjectGrid />
                </motion.div>
              )}
              {showContact && (
                <motion.div
                  className=" w-full"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: .5, ease: "easeInOut" }}
                >
                  <Contact />
                </motion.div>
              )}
            </div>
          </section>
        </div>
      </AnimatePresence>





      {/* Mobile Page */}
      <div className="relative z-20 md:hidden">
        <section className="w-full h-auto pb-12 flex justify-center ">
          <Profile />
        </section>
        <section className="pb-6">
          <AboutMe />
          <MyServices />
        </section>
        <section className="pb-6">
          <Skills />
          <Knowledge />
        </section>
        <section className="pb-6">
          <ProjectGrid />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </div>
  );
}
