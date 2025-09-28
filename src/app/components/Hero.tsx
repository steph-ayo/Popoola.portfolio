"use client";

import ParticlesComponent from "../components/Particles";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn } from "../../utils/animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 border border-red-600">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Hero header text */}
          <motion.span
            className="font-bold mb-6 "
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <motion.h3 className="text-xl md:text-xl justify-self-start">
              HELLO, I AM
            </motion.h3>
            <motion.h1
              className="text-primary text-6xl max-w-full justify-self-start"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Popoola Stephen
            </motion.h1>
          </motion.span>

          {/* Hero paragraph text */}
          <motion.p
            className=" text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-4 mb-8 justify-self-end"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            A FRONTEND DEVELOPER
          </motion.p>

          {/* Hero icon links */}
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/steph-ayo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
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
            </motion.a>
          </motion.div>

          {/* Hero buttons */}
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className=" inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                contact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <ParticlesComponent />
    </section>
  );
}
