"use client";

import React from "react";
import Link from "next/link";
import { SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  const pathname = usePathname();
  const newPathname = pathname.slice(1);

  const navLinks = [
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
    <div className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b rounded-b-md border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between max-w-5xl mx-auto px-4 py-4">
        <nav className="flex gap-1 md:gap-2">
          {navLinks?.map((link, index) => (
            <div 
              className="relative group" 
              key={index}
            >
              <Link
                href={`/${link.url}`}
                className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200 
                  ${newPathname === link.url 
                    ? 'text-green-500 dark:text-green-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                {link.title}
              </Link>
              {newPathname === link.url && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-green-500 dark:bg-green-400 rounded-full" />
              )}
            </div>
          ))}
        </nav>

      <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;