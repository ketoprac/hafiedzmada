"use client";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
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
      url: "resume",
      title: "Resume",
    },
  ];

  const { theme, setTheme } = useTheme();
  return (
    <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="flex items-center gap-x-4 px-16 pb-4 pt-8">
      <nav className="flex shadow-md dark:border-gray-500 dark:border-2 px-8 py-2 rounded-2xl gap-x-3 text-sm font-medium">
        {navLink?.map((link, index) => (
          <Link
            href={`${"/" + link.url}`}
            key={index}
            className={`${newPathname === link.url && "border-b-2 border-black "}`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <motion.button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="text-center shadow-md dark:shadow-none hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-100 text-gray-800 dark:text-white p-2 rounded-full dark:border-2 dark:border-gray-500"
        whileHover={{ scale: 1.1 }}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </motion.button>
    </motion.div>
  );
};

export default Navbar;
