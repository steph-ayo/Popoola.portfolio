"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
  scaleIn,
} from "@/utils/animations";
import popoola from "../../../public/popoola.jpg";

export default function About() {
  return (
    <section className="container max-w-7xl mx-auto py-12 mb-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <div className="flex flex-col md:flex-row size-full gap-10  bg-white dark:bg-dark/50 rounded-t-full md:rounded-l-full ">
        <motion.div
          className="md:w-2/5"
          {...scaleIn}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={popoola}
            alt="Profile"
            className="p-10 object-cover rounded-t-full md:rounded-full"
          />
        </motion.div>

        <motion.div className=" md:w-3/5 grid place-items-center" {...fadeInUp}>
          <p className="text-md md:text-lg text-secondary dark:text-white max-w-3xl mx-auto text-center mb-10">
            I&apos;m a passionate Frontend Developer with expertise in building
            modern web applications. With a strong foundation in both frontend
            and backend technologies, I create seamless user experiences and
            robust server-side solutions.
          </p>

          {/* Hero buttons */}
          <motion.div
            className="flex flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Download CV
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Hire me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
