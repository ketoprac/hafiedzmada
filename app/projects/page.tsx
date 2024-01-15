"use client";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect } from "react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "AI SaaS",
      description:
        "AI SaaS Web App - Next.js, Prisma, Tailwind, OpenAI, Stripe",
      demo: "https://ai-saas-ketoprac.vercel.app/",
      repository: "https://github.com/ketoprac/ai-saas",
    },
    {
      title: "Next.js E-commerce",
      description: "E-commerce Web App - Next.js, Prisma, Tailwind",
      demo: "#",
      repository: "#",
    },
    {
      title: "Netflix UI Clone",
      description: "Netflix Custom UI Clone - React, Tailwind",
      demo: "https://netflix-ui-clone-green.vercel.app/",
      repository: "https://github.com/ketoprac/netflix-ui-clone",
    },
    {
      title: "StoreGG",
      description: "Gaming Online Shop - Next.js",
      demo: "https://storegg-sample.vercel.app/",
      repository: "https://github.com/ketoprac/storegg-sample",
    },
    {
      title: "Github Repository Explorer",
      description: "Gaming Online Shop - React, SWR",
      demo: "https://frontend-test-sable.vercel.app/",
      repository: "https://github.com/ketoprac/frontend-test",
    },
    {
      title: "Jobless UI",
      description: "Simple Job Portal UI - React, Tailwind",
      demo: "https://jobless-ui.vercel.app/",
      repository: "https://github.com/ketoprac/jobless-ui",
    },
    {
      title: "Simple Notes App",
      description: "Dicoding React Developer Final Task - React, Tailwind",
      demo: "https://notes-app-ecru-five.vercel.app/",
      repository: "https://github.com/ketoprac/notes-app",
    },
    {
      title: "Simple Movie App",
      description: "Simple Movie App - React, Omdb API",
      demo: "https://react-movie-app-puce.vercel.app/",
      repository: "https://github.com/ketoprac/react-movie-app/",
    },
    {
      title: "BMI Calculator App",
      description: "BMI Calculator - React",
      demo: "https://react-bmi-calculator-beta.vercel.app/",
      repository: "https://github.com/ketoprac/react-bmi-calculator",
    },
    {
      title: "Shopping List App",
      description: "Shopping List - React",
      demo: "https://react-shopping-list.vercel.app/",
      repository: "https://github.com/ketoprac/react-shopping-list",
    },
    {
      title: "Emoji Finder",
      description: "Emoji Finder - React",
      demo: "https://react-emoji-finder.vercel.app/",
      repository: "https://github.com/ketoprac/react-emoji-finder",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="font-semibold text-2xl lg:text-3xl mb-2">
      🚀Featured Projects
      </h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="border p-4 dark:border-gray-600 mb-2 dark:hover:bg-gray-800 hover:bg-gray-200">
            <h1 className="text-xl font-semibold">{project.title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">{project.description}</p>
            <div className="flex items-center mt-2 text-sm">
              <Link
                target="_blank"
                href={project.repository}
                className="flex items-center text-gray-500 dark:text-gray-200 hover:text-gray-700"
              >
                <GitHubLogoIcon className="w-4 h-4 mr-1" />
                <span>Repository</span>
              </Link>
              <span className="mx-2">|</span>
              <Link
                target="_blank"
                href={project.demo}
                className="flex items-center text-gray-500 dark:text-gray-200 hover:text-gray-700"
              >
                <span className="mr-1">Demo</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
