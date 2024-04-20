"use client";

import React from "react";
import Link from "next/link";
import { SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const newPathname = pathname.slice(1);

  const navLink = [
    {
      url: "",
      title: "Home",
    },
    {
      url: "about",
      title: "About",
    },
    {
      url: "projects",
      title: "Projects",
    },
    {
      url: "resources",
      title: "Resources",
    },
  ];

  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center px-12 py-1.5 mt-8 border border-opacity-50 border-gray-600 dark:border-gray-200 rounded-full">
      <nav className="flex p-2 gap-x-3 text-sm font-medium">
        {navLink?.map((link, index) => (
          <Link
            href={`${"/" + link.url}`}
            key={index}
            className={`text-gray-600 dark:text-gray-200 py-1 px-2 rounded-full ${
              newPathname === link.url &&
              "bg-gray-500 bg-opacity-10 dark:bg-white dark:bg-opacity-10"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <button
        id="theme-switch"
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-100 text-gray-600 dark:text-gray-200 p-2 rounded dark:border-gray-500"
      >
        {theme === "dark" ? (
          <SunIcon />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-moon"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Navbar;
