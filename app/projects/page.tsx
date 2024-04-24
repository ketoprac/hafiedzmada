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
      <h1 className="font-semibold text-2xl lg:text-3xl mb-2">
        🚀Featured Projects
      </h1>
      <div>
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className="p-4 bg-gray-100/60 hover:bg-gray-200 dark:bg-black/60 mb-2 dark:hover:bg-black/80"
          >
            <h1 className="text-xl font-semibold">
              {project.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {project.description}
            </p>
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
      <h1 className="font-semibold text-2xl lg:text-3xl mb-2 mt-8">
        🌟Mini Projects
      </h1>
      <div>
        {miniProjects.map((project, index) => (
          <div
            
            key={project.title}
            className="p-4 bg-gray-100/60 hover:bg-gray-200 dark:bg-black/60 mb-2 dark:hover:bg-black/80"
          >
            <h1 className="text-xl font-semibold">{project.title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {project.description}
            </p>
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
