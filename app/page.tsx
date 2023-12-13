"use client";
import { TypeAnimation } from "react-type-animation";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 1, delay: 0.1 }}
        className="w-full md:w-8/12 lg:w-1/2 flex flex-col gap-y-2 mt-8"
      >
        <h1 className="text-2xl lg:text-3xl font-medium">Hi!👋 </h1>
        <p className="text-4xl lg:text-5xl font-bold">
          I&apos;m Hafiedz Mada M
        </p>
        <TypeAnimation
          sequence={[
            "Software Engineer",
            1000,
            "Frontend Developre",
            "Frontend Developer",
            1000,
            "Lifelong Learner",
            1000,
            "Ketoprak Eater",
            1000,
            "Dota 2 Offlaner",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800"
        />
        <p className="text-justify text-gray-600">
          An experienced Frontend Developer with a year of hands-on expertise in
          building captivating user interfaces. My primary focus is on{" "}
          <span className="font-bold text-black">React, Vue and Next.js</span>,
          where I&apos;ve honed my skills in creating high-performance web
          applications. I&apos;m passionate about crafting seamless digital
          experiences and always eager to explore new opportunities in the
          frontend development realm.
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
