"use client";
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

  return (
    <nav className="flex shadow-md px-8 py-2 rounded-2xl gap-x-3 text-sm font-medium">
      {navLink?.map((link, index) => (
        <Link
          href={`${"/" + link.url}`}
          key={index}
          className={`${newPathname === link.url && "font-bold"}`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;