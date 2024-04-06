"use client";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect } from "react";
import { featuredProjects, miniProjects } from "@/utils/data";
import { motion } from "framer-motion";

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
        {featuredProjects.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: "tween", duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
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
          </motion.div>
        ))}
      </div>
      <h1 className="font-semibold text-2xl lg:text-3xl mb-2 mt-8">
        🌟Mini Projects
      </h1>
      <div>
        {miniProjects.map((project) => (
           <motion.div
           initial={{ opacity: 0, scale: 0.6 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 0.6 }}
           transition={{ type: "tween", duration: 0.5 }}
           whileHover={{ scale: 1.02 }}
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
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
