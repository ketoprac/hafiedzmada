"use client";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect } from "react";
import { featuredProjects, miniProjects } from "@/utils/data";
import BackToTopButton from "@/components/back-to-top-button";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BackToTopButton />
      <h1 className="font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-2">
        <span className="animate-float">🚀</span>
        <span>Featured Projects</span>
      </h1>
      <div className="grid gap-4">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="p-6 bg-gray-100/60 hover:bg-gray-200 dark:bg-black/60 dark:hover:bg-black/80 rounded-lg transform hover:-translate-y-1 transition-all duration-200 border border-gray-200 dark:border-gray-800"
          >
            <h1 className="text-xl font-semibold mb-2">
              {project.title}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                target="_blank"
                href={project.repository}
                className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <GitHubLogoIcon className="w-4 h-4" />
                <span>Repository</span>
              </Link>
              <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full" />
              <Link
                target="_blank"
                href={project.demo}
                className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <span>Demo</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <h1 className="font-bold text-2xl lg:text-3xl mb-6 mt-12 flex items-center gap-2">
        <span className="animate-spin-slow">🌟</span>
        <span>Mini Projects</span>
      </h1>
      <div className="grid gap-4">
        {miniProjects.map((project) => (
          <div
            key={project.title}
            className="p-6 bg-gray-100/60 hover:bg-gray-200 dark:bg-black/60 dark:hover:bg-black/80 rounded-lg transform hover:-translate-y-1 transition-all duration-200 border border-gray-200 dark:border-gray-800"
          >
            <h1 className="text-xl font-semibold mb-2">{project.title}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                target="_blank"
                href={project.repository}
                className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <GitHubLogoIcon className="w-4 h-4" />
                <span>Repository</span>
              </Link>
              <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full" />
              <Link
                target="_blank"
                href={project.demo}
                className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <span>Demo</span>
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