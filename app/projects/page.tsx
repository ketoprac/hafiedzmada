"use client";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="container mx-auto w-full md:w-8/12 lg:w-1/2 flex flex-col gap-y-2 mt-8 px-4"
      >
        <h1 className="font-semibold text-2xl lg:text-3xl mb-2">Featured Projects</h1>
        <div>
          <p>Featured Projects</p>
        </div>
        <h1 className="font-semibold text-2xl lg:text-3xl mb-2">Projects</h1>
        <div>
          <p>Mini Projects</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectsPage;
