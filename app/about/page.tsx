"use client";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">💬 Story</h2>
        <div className="text-justify text-gray-600 dark:text-gray-300 mx-8 my-4">
          I started my coding journey at the end of 2020, then I discovered I am
          passionate about software engineering. In early 2021, I got the
          opportunity to intern at a startup called Kamar Pelajar. It was the
          first time I collaborated with peers and sharpened my skills; it was
          quite a journey. In the middle of 2021, I joined the MBKM program at
          Glints Academy. It was my first time coding React collaboratively, and
          I found it rewarding since we built this project from scratch with
          over 40 students. Through this MBKM program, I gained a lot of
          knowledge, both hard skills and soft skills. Long story short, I
          graduated at the end of 2022 and got my first full-time job in early
          2023 as a Frontend Developer at CODE.ID.
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">💼Experiences</h2>
        <div className="relative mx-8 my-4">
          <div
            className="border-r-2 border-gray-500 dark:border-gray-200 absolute h-full top-0 mt-2"
            style={{
              left: "15px",
            }}
          />
          <ul className="list-none m-0 p-0">
            <li className="mb-4">
              <div className="flex items-center mb-1">
                <div className="bg-gray-500 dark:bg-gray-200 rounded-full h-4 w-4 ml-2" />
                <div className="flex-1 ml-4 font-medium">
                  Frontend Developer
                </div>
              </div>
              <div className="ml-12 text-gray-600 dark:text-gray-300">
                CODE.ID - Fulltime
              </div>
              <div className="ml-12 text-gray-500 dark:text-gray-400">
                Mar 2023 - Present
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center mb-1">
                <div className="bg-gray-500 dark:bg-gray-200 rounded-full h-4 w-4 ml-2" />
                <div className="flex-1 ml-4 font-medium">
                  Frontend Developer
                </div>
              </div>
              <div className="ml-12 text-gray-600 dark:text-gray-300">
                Glints x Kampus Merdeka - Internship
              </div>
              <div className="ml-12 text-gray-500 dark:text-gray-400">
                Aug 2021 - Feb 2022
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center mb-1">
                <div className="bg-gray-500 dark:bg-gray-200 rounded-full h-4 w-4 ml-2" />
                <div className="flex-1 ml-4 font-medium">
                  Frontend Developer
                </div>
              </div>
              <div className="ml-12 text-gray-600 dark:text-gray-300">
                Kamar Pelajar - Internship
              </div>
              <div className="ml-12 text-gray-500 dark:text-gray-400">
                Jan 2021 - Apr 2021
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">🎓Education</h2>
        <div className="relative mx-8 my-4">
          <div
            className="border-r-2 border-gray-500 dark:border-gray-200 absolute h-full top-0 mt-2"
            style={{
              left: "15px",
            }}
          />
          <ul className="list-none m-0 p-0">
            <li className="mb-4">
              <div className="flex items-center mb-1">
                <div className="bg-gray-500 dark:bg-gray-200 rounded-full h-4 w-4 ml-2" />
                <div className="flex-1 ml-4 font-medium">
                  Associate Degree of Information System
                </div>
              </div>
              <div className="ml-12 text-gray-600 dark:text-gray-300">
                Universitas Bina Sarana Informatika
              </div>
              <div className="ml-12 text-gray-500 dark:text-gray-400">
                Graduated: 2022 GPA: 3.91
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
