"use client";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
          <span className="animate-bounce-slow">💬</span> 
          <span>Story</span>
        </h2>
        <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-6 max-w-3xl">
          <p>
            I began my coding journey in late 2020 and quickly discovered a passion for software engineering. In early 2021, I had the privilege of interning at Kamar Pelajar, a startup where I collaborated with peers and honed my technical skills—an invaluable early experience. Later that year, I joined the MBKM program at Glints Academy, where I participated in building a React-based project from the ground up alongside over 40 students. This experience not only deepened my technical expertise but also enhanced my collaboration, teamwork, and problem-solving skills.
          </p>
          <p>
            After graduating in late 2022, I secured my first full-time role as a Software Engineer at CODE.ID in early 2023. Since then, I have learned a great deal and made significant progress in my role, further refining my skills and contributing to impactful projects. This journey has reinforced my commitment to continuous learning and growth in the software engineering field.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
          <span className="animate-float">💼</span>
          <span>Experiences</span>
        </h2>
        <div className="relative pl-8">
          <div className="border-l-2 border-gray-200 dark:border-gray-700 absolute h-full top-0 left-[11px]" />
          <ul className="space-y-8">
            {[
              {
                role: "Software Engineer",
                company: "CODE.ID",
                type: "Fulltime",
                period: "Mar 2023 - Present"
              },
              {
                role: "Software Engineer",
                company: "Glints x Kampus Merdeka",
                type: "Internship",
                period: "Aug 2021 - Feb 2022"
              },
              {
                role: "Software Engineer",
                company: "Kamar Pelajar",
                type: "Internship",
                period: "Jan 2021 - Apr 2021"
              }
            ].map((job, index) => (
              <li key={index} className="relative transform hover:translate-x-2 transition-transform duration-300">
                <div className="absolute -left-8">
                  <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 ml-1" />
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                  <h3 className="font-semibold text-lg mb-1">{job.role}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{job.company} - {job.type}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{job.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
          <span className="animate-wiggle">🎓</span>
          <span>Education</span>
        </h2>
        <div className="relative pl-8">
          <div className="border-l-2 border-gray-200 dark:border-gray-700 absolute h-full top-0 left-[11px]" />
          <ul>
            <li className="relative transform hover:translate-x-2 transition-transform duration-300">
              <div className="absolute -left-8">
                <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 ml-1" />
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-lg mb-1">Associate Degree of Information System</h3>
                <p className="text-gray-600 dark:text-gray-300">Universitas Bina Sarana Informatika</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Graduated: 2022 · GPA: 3.91/4.00</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;