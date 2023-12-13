"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 1, delay: 0.1 }}
        className="container mx-auto px-4 py-8 w-full md:w-8/12 lg:w-1/2 flex flex-col gap-y-2 mt-8"
      >
        <section className="mb-16">
          <h2 className="text-2xl font-semibold">Jobs</h2>
          <div className="relative m-8">
            <div
              className="border-r-2 border-gray-500 absolute h-full top-0 mt-2"
              style={{
                left: "15px",
              }}
            />
            <ul className="list-none m-0 p-0">
              <li className="mb-4">
                <div className="flex items-center mb-1">
                  <div className="bg-gray-500 rounded-full h-4 w-4 ml-2" />
                  <div className="flex-1 ml-4 font-medium">
                    Frontend Developer
                  </div>
                </div>
                <div className="ml-12 text-gray-600">CODE.ID</div>
                <div className="ml-12 text-gray-500">Mar 2023 - Present</div>
              </li>
              <li className="mb-4">
                <div className="flex items-center mb-1">
                  <div className="bg-gray-500 rounded-full h-4 w-4 ml-2" />
                  <div className="flex-1 ml-4 font-medium">
                    Frontend Developer
                  </div>
                </div>
                <div className="ml-12 text-gray-600">
                  Glints x Kampus Merdeka
                </div>
                <div className="ml-12 text-gray-500">Aug 2021 - Feb 2022</div>
              </li>
              <li className="mb-4">
                <div className="flex items-center mb-1">
                  <div className="bg-gray-500 rounded-full h-4 w-4 ml-2" />
                  <div className="flex-1 ml-4 font-medium">
                    Frontend Developer
                  </div>
                </div>
                <div className="ml-12 text-gray-600">Kamar Pelajar</div>
                <div className="ml-12 text-gray-500">Jan 2021 - Apr 2021</div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="relative m-8">
            <div
              className="border-r-2 border-gray-500 absolute h-full top-0 mt-2"
              style={{
                left: "15px",
              }}
            />
            <ul className="list-none m-0 p-0">
              <li className="mb-4">
                <div className="flex items-center mb-1">
                  <div className="bg-gray-500 rounded-full h-4 w-4 ml-2" />
                  <div className="flex-1 ml-4 font-medium">
                    Associate Degree of Information System
                  </div>
                </div>
                <div className="ml-12 text-gray-600">
                  Universitas Bina Sarana Informatika
                </div>
                <div className="ml-12 text-gray-500">
                  Graduated: 2022 GPA: 3.91
                </div>
              </li>
            </ul>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutPage;