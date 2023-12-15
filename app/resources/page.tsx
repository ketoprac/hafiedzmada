"use client";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      title: "Code With Antonio",
      link: "https://wwww.youtube.com/@codewithantonio",
      description:
        "One of my favorite channel to learn React and Next, learning by cloning famous web app.",
      language: "English",
    },
    {
      title: "Web Programming UNPAS",
      link: "https://www.youtube.com/@sandhikagalihWPU",
      description:
        "Well known for every Indonesian IT student, learn from the fundamentals.",
      language: "Bahasa Indonesia",
    },
    {
      title: "Cand Dev",
      link: "https://www.youtube.com/@CandDev",
      description:
        "Learn by building simple app or study case using modern tech stack.",
      language: "English",
    },
    {
      title: "JavaScript Mastery",
      link: "https://www.youtube.com/@javascriptmastery",
      description: "Learn to build full stack app using modern tech stack.",
      language: "English",
    },
    {
      title: "Josh tried coding",
      link: "https://www.youtube.com/@joshtriedcoding",
      description:
        "Mostly talk about frontend stuffs, insightful how he explains his perspective!",
      language: "English",
    },
    {
      title: "ByteGrad",
      link: "https://www.youtube.com/@ByteGrad",
      description: "React & Next.js tutorial with case study.",
      language: "English",
    },
    {
      title: "Programmer Zaman Now",
      link: "https://www.youtube.com/@ProgrammerZamanNow",
      description:
        "Also well known Indonesian IT Guy, talks about IT, deep tutorial.",
      language: "Bahasa Indonesia",
    },
    {
      title: "Fireship",
      link: "https://www.youtube.com/@Fireship",
      description: "Tech talk, insightful!",
      language: "English",
    },
    {
      title: "Roadmap.sh",
      link: "https://roadmap.sh/",
      description: "Helpful to guide developers to guide their learnings.",
      language: "English",
    },
    {
      title: "Alex Sidorenko",
      link: "https://twitter.com/asidorenko_",
      description: "Short useful videos about Next.js.",
      language: "English",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="container mx-auto w-full md:w-8/12 lg:w-1/2 flex flex-col gap-y-2 mt-8 px-4"
      >
        <h1 className="font-semibold text-2xl lg:text-3xl mb-2">
          Learning Resources I personally recommend👇
        </h1>
        {resources?.map((resource, index) => (
          <Link
            href={resource.link}
            target="_blank"
            className="border p-4 dark:border-gray-600 mb-2"
            key={index}
          >
            <div>
              <h1 className="font-semibold text-xl">
                {resource.title} <ArrowTopRightIcon className="inline-block" />
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                {resource.description}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                Language: {resource.language}
              </p>
            </div>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumePage;
