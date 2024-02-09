"use client";
import { motion } from "framer-motion";
import { SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
    <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="flex items-center px-16 pb-4 pt-8">
      <nav className="flex p-2 gap-x-3 text-sm font-medium rounded">
        {navLink?.map((link, index) => (
          <Link
            href={`${"/" + link.url}`}
            key={index}
            className={`pb-1 ${newPathname === link.url && "border-b-2 dark:border-gray-500"}`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <button
        id="theme-switch"
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-100 text-gray-800 dark:text-white p-2 rounded dark:border-gray-500"
      >
        {theme === "dark" ? <SunIcon /> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>}
      </button>
    </motion.div>
  );
};

export default Navbar;
