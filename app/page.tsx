"use client";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import {
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
      <h1 className="text-2xl lg:text-3xl font-medium">Hi!👋</h1>
      <p className="text-4xl lg:text-5xl font-bold">I&apos;m Hafiedz Mada M</p>
      <TypeAnimation
        sequence={[
          "Frontend Developer",
          1000,
          "Lifelong Learner",
          1000,
          "Ketoprak Enjoyer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 dark:text-gray-200"
      />
      <p className="text-justify text-gray-600 dark:text-gray-300">
        An experienced Frontend Developer based in Indonesia🇮🇩 with a year of
        hands-on expertise in building captivating user interfaces. My primary
        focus is on{" "}
        <span className="font-bold text-black dark:text-white">
          React, Next.js, Vue and Nuxt
        </span>
        , where I&apos;ve honed my skills in creating high-performance web
        applications. I&apos;m passionate about crafting seamless digital
        experiences and always eager to explore new opportunities in the
        frontend development realm.
      </p>
      <h1 className="font-semibold text-gray-800 dark:text-gray-100">
        Let&apos;s Connect!👇
      </h1>
      <div className="flex gap-x-2">
        <Link
          href="https://linkedin.com/in/hafiedzmada"
          target="_blank"
          aria-label="LinkedIn profile link"
        >
          <LinkedInLogoIcon className="w-6 h-6 hover:text-gray-700 dark:hover:text-gray-400" />
        </Link>
        <Link href="https://github.com/ketoprac" target="_blank" id="github">
          <GitHubLogoIcon className="w-6 h-6 hover:text-gray-700 dark:hover:text-gray-400" />
        </Link>
        <Link
          href="https://instagram.com/hafiedzmada"
          target="_blank"
          aria-label="Github profile link"
        >
          <InstagramLogoIcon className="w-6 h-6 hover:text-gray-700 dark:hover:text-gray-400" />
        </Link>
        <Link
          href="https://twitter.com/hafiedzmada"
          target="_blank"
          aria-label="Twitter profile link"
        >
          <TwitterLogoIcon className="w-6 h-6 hover:text-gray-700 dark:hover:text-gray-400" />
        </Link>
      </div>
    </>
  );
}
