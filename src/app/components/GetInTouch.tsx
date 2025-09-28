"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn } from "../../utils/animations";

const GetInTouch = () => {
  return (
    <section className=" p-10 gap-10 flex flex-col md:flex-col lg:flex-row justify-between">
      <div>
        <h1 className="text-4xl md:text-7xl underline">
          <Link href="/">Get in touch</Link>
        </h1>
      </div>

      <div className="w-full md:w-3/5 gap-10 flex flex-col md:flex-row md:justify-between lg:justify-around">
        {/* Socials */}
        <div className="gap-4">
          <h3 className="text-xl mb-6">Socials</h3>
          <motion.a
            href="https://github.com/steph-ayo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-sm text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
            <p>Github</p>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/stephen-popoola-b90990233"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-sm text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
            <p>LinkedIn</p>
          </motion.a>
          <motion.a
            href="https://x.com/ayo_omopopoola"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-sm text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaXTwitter />
            <p>X (formerly Twitter)</p>
          </motion.a>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xl mb-6">Quick Links</h3>
          <p>
            {" "}
            <Link href="/">Portfolio</Link>
          </p>
          <p>
            {" "}
            <Link href="/">Skills</Link>
          </p>
          <p>
            {" "}
            <Link href="/">Contact</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
