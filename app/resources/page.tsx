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
     <h1 className="font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-2">
       <span>Learning Resources</span>
       <span className="animate-bounce-slow">👇</span>
     </h1>
     <div className="grid gap-4 mb-12">
       {resources?.map((resource, index) => (
         <Link href={resource.link} target="_blank" key={index}>
           <div className="p-6 bg-gray-100/60 hover:bg-gray-200 dark:bg-black/60 dark:hover:bg-black/80 rounded-lg transform hover:-translate-y-1 transition-all duration-200 border border-gray-200 dark:border-gray-800 group">
             <div>
               <h1 className="font-semibold text-xl mb-2 flex items-center gap-1">
                 {resource.title}
                 <ArrowTopRightIcon className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
               </h1>
               <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 leading-relaxed">
                 {resource.description}
               </p>
               <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                 Language: {resource.language}
               </p>
             </div>
           </div>
         </Link>
       ))}
     </div>
     <h1 className="font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-2">
       <span className="animate-float">📚</span>
       <span>Books</span>
     </h1>
     <div className="grid gap-4">
       {books?.map((book, index) => (
         <Link href={book.link} target="_blank" key={index}>
           <div className="p-6 bg-gray-100/60 hover:bg-gray-200 dark:bg-black/60 dark:hover:bg-black/80 rounded-lg transform hover:-translate-y-1 transition-all duration-200 border border-gray-200 dark:border-gray-800 group">
             <div>
               <h1 className="font-semibold text-xl mb-2 flex items-center gap-1">
                 {book.title}
                 <ArrowTopRightIcon className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
               </h1>
               <p className="text-sm text-gray-600 dark:text-gray-300">
                 {book.author} • {book.category}
               </p>
             </div>
           </div>
         </Link>
       ))}
     </div>
   </>
 );
};

export default ResumePage;