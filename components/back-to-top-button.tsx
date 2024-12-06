import { useEffect, useState } from "react";
import { PinTopIcon } from "@radix-ui/react-icons";

const BackToTopButton = () => {
 const [isVisible, setIsVisible] = useState(false);

 // Show button when page is scrolled up to given distance
 const toggleVisibility = () => {
   if (window.scrollY > 300) {
     setIsVisible(true);
   } else {
     setIsVisible(false);
   }
 };

 // Add scroll event listener when component mounts
 useEffect(() => {
   window.addEventListener("scroll", toggleVisibility);
   return () => {
     window.removeEventListener("scroll", toggleVisibility);
   };
 }, []);

 const scrollToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 };

 return (
   <button
     aria-label="Back to top"
     onClick={scrollToTop}
     className={`
       fixed bottom-6 right-6 p-3
       bg-gray-100 dark:bg-gray-800
       hover:bg-gray-200 dark:hover:bg-gray-700
       rounded-full shadow-lg
       transform transition-all duration-300
       ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
       focus:outline-none focus:ring-2 focus:ring-green-500
     `}
   >
     <PinTopIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
   </button>
 );
};

export default BackToTopButton;