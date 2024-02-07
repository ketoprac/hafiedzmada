"use client";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect } from "react";
import { featuredProjects, miniProjects } from "@/utils/data";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="font-semibold text-2xl lg:text-3xl mb-2">
        🚀Featured Projects
      </h1>
      <div>
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="border p-4 dark:border-gray-600 mb-2 dark:hover:bg-gray-800 hover:bg-gray-200"
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
      <h1 className="font-semibold text-2xl lg:text-3xl mb-2 mt-8">
        🌟Mini Projects
      </h1>
      <div>
        {miniProjects.map((project, index) => (
          <div
            key={index}
            className="border p-4 dark:border-gray-600 mb-2 dark:hover:bg-gray-800 hover:bg-gray-200"
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
