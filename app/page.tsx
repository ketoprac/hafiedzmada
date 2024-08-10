"use client";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="text-2xl lg:text-3xl font-medium">Nice to meet you!👋</h1>
      <p className="text-4xl lg:text-5xl font-semibold">I&apos;m Hafiedz Mada</p>
      <TypeAnimation
        sequence={[
          "Frontend Developer",
          1000,
          "Lifelong Learner",
          1000,
          "Ketoprak Eater",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-400"
      />
      <p className="text-justify text-gray-600 dark:text-gray-300">
        An experienced Frontend Developer based in Indonesia🇮🇩 with two years of
        hands-on expertise in building captivating user interfaces. My primary
        focus is on{" "}
        <span className="font-bold text-black dark:text-white">
          React, Next.js and Vue
        </span>
        , where I&apos;ve honed my skills in building interactive web
        applications. I&apos;m passionate about crafting seamless digital
        experiences and always eager to explore new opportunities in
        frontend development.
      </p>
      <h1 className="text-gray-800 dark:text-gray-100 text-2xl lg:text-3xl mt-8">
        Let&apos;s Connect!👇
      </h1>
      <div className="flex gap-x-4">
        <Link
          href="mailto:hafiedzmada@gmail.com"
          target="_blank"
          aria-label="Email"
        >
          <EnvelopeClosedIcon className="w-6 h-6 hover:text-green-500 hover:rotate-6 duration-150" />
        </Link>
        <Link
          href="https://linkedin.com/in/hafiedzmada"
          target="_blank"
          aria-label="LinkedIn profile link"
        >
          <LinkedInLogoIcon className="w-6 h-6 hover:text-green-500 hover:rotate-6 duration-150" />
        </Link>
        <Link href="https://github.com/ketoprac" target="_blank" id="github">
          <GitHubLogoIcon className="w-6 h-6 hover:text-green-500 hover:rotate-6 duration-150" />
        </Link>
        <Link
          href="https://instagram.com/hafiedzmada"
          target="_blank"
          aria-label="Github profile link"
        >
          <InstagramLogoIcon className="w-6 h-6 hover:text-green-500 hover:rotate-6 duration-150" />
        </Link>
        <Link
          href="https://twitter.com/hafiedzmada"
          target="_blank"
          aria-label="Twitter profile link"
        >
          <TwitterLogoIcon className="w-6 h-6 hover:text-green-500 hover:rotate-6 duration-150" />
        </Link>
      </div>
    </>
  );
}
