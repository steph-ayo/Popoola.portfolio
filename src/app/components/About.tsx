"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
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
import popoola from "../../../public/ay.png";
import CV from "../../../public/assets";

export default function About() {
  return (
    <section className="container max-w-7xl mx-auto py-15 bg-white dark:bg-dark/50">
      {/* About Image */}
      <div className="flex flex-col md:flex-row size-full gap-10  ">
        <motion.div
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
        </motion.div>

        {/* About Bio */}
        <motion.div className=" md:w-3/5" {...fadeInUp}>
          <motion.h1 className="text-4xl font-bold mb-4" {...fadeInDown}>
            About Me
          </motion.h1>

          <p className="text-sm md:text-base font-light  text-secondary dark:text-white max-w-3xl mx-auto mb-10">
            As an experienced front-end engineer with about 2 years of
            expertise, I excel in initiating and leading successful projects,
            thriving in dynamic, fast-paced environments.
            <br />
            <br />
            Whether collaborating within a team or working independently, I
            demonstrate exceptional adaptability and proficiency. My enthusiasm
            for learning drives me to craft impactful solutions that drive
            progress and deliver tangible outcomes. I am committed to continuous
            growth and development in the ever-evolving technological landscape,
            ready to contribute effectively to any organization.
            <br />
            <br />
            When not coding, I am also a scratch tutor and singer.
          </p>

          {/* About buttons */}
          <motion.div
            className="flex flex-row gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={CV}
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
