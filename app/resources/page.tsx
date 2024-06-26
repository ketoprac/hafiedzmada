"use client";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect } from "react";
import { resources, books } from "@/utils/data";
import BackToTopButton from "@/components/back-to-top-button";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BackToTopButton />
      <h1 className="font-semibold text-2xl lg:text-3xl mb-2">
        Learning Resources👇
      </h1>
      {resources?.map((resource, index) => (
        <Link href={resource.link} target="_blank" key={index}>
          <div
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
          </div>
        </Link>
      ))}
      <h1 className="font-semibold text-2xl lg:text-3xl mb-2 mt-4">📚Books</h1>
      {books?.map((book, index) => (
        <Link href={book.link} target="_blank" key={index}>
          <div
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
          </div>
        </Link>
      ))}
    </>
  );
};

export default ResumePage;
