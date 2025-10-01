"use client";

import ParticlesComponent from "../components/Particles";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn } from "../../utils/animations";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-17">
      <div className="container max-w-7xl mx-auto px-6">
        <div className=" max-w-3xl mx-auto text-left md:text-center">
          {/* Hero header text */}
          <motion.div
            className="font-bold mb-7"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <motion.h3 className="text-lg md:text-2xl font-thin mb-5">
              HELLO, I AM
            </motion.h3>
            <motion.h1
              className="text-primary text-4xl md:text-7xl font-semibold max-w-full"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Popoola Stephen
            </motion.h1>
          </motion.div>

          {/* Hero paragraph text */}
          <motion.p
            className=" text-lg md:text-2xl font-normal text-gray-600 dark:text-gray-300 mt-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            A Frontend Engineer
          </motion.p>

          {/* Hero mail icon */}
          <motion.a
            href="mailto:popoolastephen19@gmail.com?subject=Contact%20Form&body=Hello%20Stephen,%0D%0A%0D%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 z-10 text-xl md:justify-center cursor-pointer text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <FaEnvelope />
            <p className="text-sm md:text-lg">popoolastephen19@gmail.com</p>
          </motion.a>

          {/* Hero icon links */}
          <motion.div
            className="flex justify-center space-x-4 mt-30 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/steph-ayo"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 text-2xl cursor-pointer text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
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
              <FaXTwitter />
            </motion.a>
          </motion.div>

          {/* Hero icon buttons */}

          <motion.div
            className="text-center"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="bg-primary inline-block md:w-auto text-white px-8 py-3 rounded-3xl hover:bg-primary/90 transition-colors"
            >
              contact me
            </Link>
          </motion.div>
        </div>
      </div>
      <ParticlesComponent />
    </section>
  );
}
