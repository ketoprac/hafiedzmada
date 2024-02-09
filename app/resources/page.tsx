"use client";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect } from "react";
import { resources, books } from "@/utils/data";
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
        <Link
          href={resource.link}
          target="_blank"
          className="border p-4 dark:border-gray-600 mb-2 dark:hover:bg-gray-800 hover:bg-gray-200"
          key={index}
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
        </Link>
      ))}
      <h1 className="font-semibold text-2xl lg:text-3xl mb-2 mt-4">📚Books</h1>
      {books?.map((book, index) => (
        <Link
          href={book.link}
          target="_blank"
          className="border p-4 dark:border-gray-600 mb-2 dark:hover:bg-gray-800 hover:bg-gray-200"
          key={index}
        >
          <div>
            <h1 className="font-semibold text-xl">
              {book.title} <ArrowTopRightIcon className="inline-block" />
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-200">
              {book.author} • {book.category}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ResumePage;
