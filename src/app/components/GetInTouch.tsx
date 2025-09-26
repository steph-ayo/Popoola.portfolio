"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn } from "../../utils/animations";

const GetInTouch = () => {
  return (
    <section className="border border-red-600">
      <h1>
        <Link href="/">Get in touch</Link>
      </h1>

      <div>
        <h3>Socials</h3>
        <motion.a
          href="https://github.com/steph-ayo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
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
          className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
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
          className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTwitter />
          <p>X (formerly Twitter)</p>
        </motion.a>
      </div>

      <div>
        <h3>Quick Links</h3>
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
    </section>
  );
};

export default GetInTouch;
