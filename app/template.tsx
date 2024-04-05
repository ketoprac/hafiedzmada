"use client";
import { motion } from "framer-motion";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="container mx-auto w-full md:w-8/12 lg:w-1/2 flex flex-col gap-y-2 mt-8 px-4"
    >
      {children}
    </motion.div>
  );
};

export default Template;
