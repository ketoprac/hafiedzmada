"use client";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect } from "react";
import { resources, books } from "@/utils/data";
import { motion } from "framer-motion";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="font-semibold text-2xl lg:text-3xl mb-2">
        Learning Resources👇
      </h1>
      {resources?.map((resource, index) => (
        <Link href={resource.link} target="_blank" key={index}>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: "tween", duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-gray-100/60 hover:bg-gray-200 dark:bg-black/60 mb-2 dark:hover:bg-black/80"
          >
            <div>
              <h1 className="font-semibold text-xl">
                {resource.title} <ArrowTopRightIcon className="inline-block" />
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                {resource.description}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                Language: {resource.language}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
      <h1 className="font-semibold text-2xl lg:text-3xl mb-2 mt-4">📚Books</h1>
      {books?.map((book, index) => (
        <Link href={book.link} target="_blank" key={index}>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: "tween", duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-gray-100/60 hover:bg-gray-200 dark:bg-black/60 mb-2 dark:hover:bg-black/80"
          >
            <div>
              <h1 className="font-semibold text-xl">
                {book.title} <ArrowTopRightIcon className="inline-block" />
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                {book.author} • {book.category}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default ResumePage;
