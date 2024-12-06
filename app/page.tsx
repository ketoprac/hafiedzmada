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
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl lg:text-3xl font-semibold flex items-center gap-2">
        Nice to meet you! <span className="animate-wave">👋</span>
      </h1>

      <h1 className="text-4xl lg:text-5xl font-extrabold font-jakarta bg-gradient-to-r from-violet-600 via-green-500 to-purple-600 text-transparent bg-clip-text animate-gradient bg-300% duration-150">
        I&apos;m Hafiedz Mada
      </h1>

      <TypeAnimation
        sequence={[
          "Frontend Developer",
          1000,
          "Software Engineer",
          1000,
          "Ketoprak Eater",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300"
      />

      <p className="text-justify text-gray-600 dark:text-gray-300 leading-relaxed max-w-full">
        Web developer from Indonesia 🇮🇩 with two years of experience crafting
        modern web applications. Specializing in{" "}
        <span className="font-bold text-black dark:text-white">
          React and Next.js
        </span>
        , with practical experience in{" "}
        <span className="font-bold text-black dark:text-white">
          Angular, NestJS, and Vue.
        </span>{" "}
        I focus on building effective, accessible web solutions while keeping up
        with modern development practices.
      </p>

      <div className="pt-4">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4 flex items-center gap-2">
          Let&apos;s Connect! <span className="animate-bounce-slow">👇</span>
        </h2>

        <div className="flex gap-6">
          <Link
            href="mailto:hafiedzmada@gmail.com"
            target="_blank"
            aria-label="Email"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <EnvelopeClosedIcon className="w-7 h-7 hover:text-green-500" />
          </Link>

          <Link
            href="https://linkedin.com/in/hafiedzmada"
            target="_blank"
            aria-label="LinkedIn profile"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <LinkedInLogoIcon className="w-7 h-7 hover:text-green-500" />
          </Link>

          <Link
            href="https://github.com/ketoprac"
            target="_blank"
            aria-label="GitHub profile"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <GitHubLogoIcon className="w-7 h-7 hover:text-green-500" />
          </Link>

          <Link
            href="https://instagram.com/hafiedzmada"
            target="_blank"
            aria-label="Instagram profile"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <InstagramLogoIcon className="w-7 h-7 hover:text-green-500" />
          </Link>

          <Link
            href="https://twitter.com/hafiedzmada"
            target="_blank"
            aria-label="Twitter profile"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <TwitterLogoIcon className="w-7 h-7 hover:text-green-500" />
          </Link>

          <Link
            href="https://leetcode.com/u/ketoprac"
            target="_blank"
            aria-label="LeetCode profile"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Image
              src="/leetcode-svgrepo-com.svg"
              alt="LeetCode"
              width={28}
              height={28}
              className="hover:text-green-500"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
