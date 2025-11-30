"use client";

import Link from "next/link";
import Image from "next/image";
import { MdFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown, scaleIn } from "@/utils/animations";
import popoola from "../../../public/popoola.jpg";

export default function About() {
  return (
    <section className="container max-w-7xl mx-auto py-20 bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Profile Section */}
        <motion.div
          className="md:w-2/5 relative flex justify-center"
          {...scaleIn}
          transition={{ delay: 0.2 }}
        >
          {/* Floating Gradient Aura */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-primary/10 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
          />

          {/* Floating Profile Image */}
          <motion.div
            className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/30"
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            <Image
              src={popoola}
              alt="Stephen Popoola"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>

          {/* Floating Role Badge */}
          <motion.span
            className="absolute -bottom-6 bg-primary text-white px-5 py-2 rounded-full text-sm shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            @popoolasteph
          </motion.span>
        </motion.div>

        {/* Right: Bio Section */}
        <motion.div className="md:w-3/5 text-left md:text-left" {...fadeInUp}>
          <motion.h1
            className="text-4xl md:text-5xl font-semibold mb-4 text-foreground"
            {...fadeInDown}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-sm md:text-base font-light text-secondary dark:text-white leading-relaxed mb-10"
            transition={{ delay: 0.4 }}
          >
            I’m a{" "}
            <span className="font-semibold text-primary">
              Frontend Engineer
            </span>{" "}
            driven by one principle;{" "}
            <span className="italic text-foreground">
              clarity in design, precision in code
            </span>
            .
            <br />
            <br />
            Over the past two years, I’ve built clean, clean, responsive, and
            user-focused interfaces that are not just functional, but deeply
            intuitive.
            <br />
            <br />I believe great developers aren’t defined by how much they
            know, but by{" "}
            <span className="font-medium text-primary">
              how fast they learn, adapt and find the right answers fast and
              build solutions that work
            </span>
            . That mindset has helped me turn ideas into products that users
            genuinely love.
            <br />
            <br />
            When not coding, I am also a{" "}
            <span className="font-semibold text-primary">
              scratch tutor
            </span>{" "}
            and an{" "}
            <span className="font-semibold text-primary">
              award-winning singer
            </span>
            .
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            {/* Download CV */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/assets/POPOOLA.cv.pdf"
                download
                className="bg-primary flex items-center justify-center gap-2 w-full sm:w-auto text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-md"
              >
                Download CV
                <MdFileDownload size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
