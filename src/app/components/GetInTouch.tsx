"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
// import { fadeInUp, fadeIn, scaleIn } from "../../utils/animations";

const GetInTouch = () => {
  return (
    <section className="p-5 mb-15 mt-15 gap-10 flex flex-col md:flex-col lg:flex-row justify-between">
      <div className="">
        <h3 className="text-lg md:text-xl mb-4">
          Based in Lagos, working worldwide.
        </h3>
        <h1 className="text-4xl md:text-7xl underline">
          <Link href="/contact">Get in touch</Link>
        </h1>
      </div>

      <div className="w-full md:w-3/5 flex flex-row md:flex-row gap-15 md:gap-40 lg:pl-20">
        {/* Socials */}
        <div className="gap-4">
          <h3 className="text-lg md:text-xl font-semibold mb-6">Socials</h3>
          <motion.a
            href="https://github.com/steph-ayo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-md md:text-lg font-thin mb-3 text-gray-600  dark:text-gray-300 transition-colors"
            // whileHover={{ scale: 1.2 }}
            // whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
            <p>Github</p>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/stephen-popoola-b90990233"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-md md:text-lg font-thin mb-3 text-gray-600 dark:text-gray-300 transition-colors"
            // whileHover={{ scale: 1.2 }}
            // whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
            <p>LinkedIn</p>
          </motion.a>
          <motion.a
            href="https://x.com/ayo_omopopoola"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-md md:text-lg font-thin text-gray-600  dark:text-gray-300  transition-colors"
            // whileHover={{ scale: 1.2 }}
            // whileTap={{ scale: 0.9 }}
          >
            <FaXTwitter />
            <p>X (formerly Twitter)</p>
          </motion.a>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-6">Quick Links</h3>

          <Link href="/projects">
            <p className="text-md md:text-lg font-thin mb-3">Projects</p>
          </Link>
          <Link href="/#skills">
            <p className="text-md md:text-lg font-thin mb-3">Skills</p>
          </Link>
          <Link href="/contact">
            <p className="text-md md:text-lg font-thin">Contact</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
