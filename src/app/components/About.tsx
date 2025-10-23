"use client";

import Link from "next/link";
import Image from "next/image";

import { MdFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown, scaleIn } from "@/utils/animations";
import popoola from "../../../public/popoola.jpg";

export default function About() {
  return (
    <section className="container max-w-7xl mx-auto py-15 bg-white dark:bg-dark/50">
      {/* About Image */}
      <div className="flex flex-col md:flex-row size-full gap-10  ">
        {/* <motion.div
          className="md:w-2/5"
          {...scaleIn}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={popoola}
            alt="Profile"
            width={400}
            height={400}
            className="w-80 h-100 justify-self-center border-8 border-gray-600 rounded-full"
          />
        </motion.div> */}

        <motion.div
          className="md:w-2/5 relative flex justify-center"
          {...scaleIn}
          transition={{ delay: 0.2 }}
        >
          {/* Glow Circle Behind */}
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 opacity-30 -z-10 animate-pulse"></div>

          {/* Floating Profile Image */}
          <motion.div
            className="w-80 h-80 rounded-full overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95, rotate: 0 }}
          >
            <Image
              src={popoola}
              alt="Profile"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>

        {/* About Bio */}
        <motion.div className=" md:w-3/5" {...fadeInUp}>
          <motion.h1 className="text-4xl font-bold mb-4" {...fadeInDown}>
            About Me
          </motion.h1>

          <p className="text-sm md:text-base font-light  text-secondary dark:text-white max-w-3xl mx-auto mb-10">
            As a Frontend Engineer with over 2 years of experience, I specialize
            in building clean, responsive, and user-focused web experiences that
            not only look great but feel right to use. I thrive in fast-paced
            environments, adapting quickly and leading projects with precision
            and creativity.
            <br />
            <br />
            I don’t claim to know everything, the best developers don’t; but I
            know how to find the right answers fast and build solutions that
            work. My passion for learning and growth drives me to deliver
            impactful results and meaningful user experiences.
            <br />
            <br />
            When not coding, I am also a scratch tutor and an award winning
            singer.
          </p>

          {/* About buttons */}
          <motion.div
            className="flex flex-row gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/assets/POPOOLA.cv.pdf"
                download
                className="bg-primary flex flex-row gap-2 w-full md:w-auto text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Download CV
                <MdFileDownload />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
