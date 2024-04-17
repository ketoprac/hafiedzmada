"use client";
import { motion } from "framer-motion";

const Template = ({ children }: { children: React.ReactNode }) => {

  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      exit="hidden"
      animate="enter"
      transition={{ type: "linear", duration: 0.5 }}
      key="test"
      className="container mx-auto w-full md:w-8/12 lg:w-1/2 flex flex-col gap-y-2 mt-8 px-4"
    >
      {children}
    </motion.div>
  );
};

export default Template;
