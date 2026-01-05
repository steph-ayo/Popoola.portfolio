"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { fadeInUp } from "@/utils/animations";

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/steph-ayo" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/stephen-popoola-b90990233",
  },
  { name: "X (Twitter)", icon: Twitter, href: "https://x.com/ayo_omopopoola" },
];

const quickLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/contact" },
];

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//   }),
// };

export default function GetInTouch() {
  return (
    <section className="px-6 pt-20 pb-10 md:px-12 bg-gradient-to-br from-background to-muted/30  backdrop-blur-sm flex flex-col lg:flex-row justify-between items-start gap-16">
      {/* LEFT SIDE */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex-1"
      >
        <h3 className="text-lg md:text-xl text-muted-foreground mb-4">
          Working worldwide 🌍
        </h3>

        <motion.h1
          whileHover={{ x: 5 }}
          className="text-5xl md:text-7xl font-bold relative inline-block"
        >
          <Link
            href="/contact"
            className="group underline decoration-transparent hover:decoration-current transition-all duration-500"
          >
            Get in touch
            <ArrowRight className="inline-block ml-3 size-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.h1>
      </motion.div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col sm:flex-row gap-12 md:gap-24 flex-1">
        {/* SOCIALS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-6">Socials</h3>
          <ul>
            {socials.map(({ name, icon: Icon, href }, i) => (
              <motion.li
                key={name}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-3"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group text-gray-600 dark:text-gray-300 hover:text-primary transition-all"
                >
                  <motion.div className=" flex gap-2 group-hover:translate-x-1 transition-transform">
                    <Icon className="size-5" />
                    <span className="">{name}</span>
                  </motion.div>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-6">Quick Links</h3>
          <ul>
            {quickLinks.map(({ name, href }, i) => (
              <motion.li
                key={name}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-3"
              >
                <Link
                  href={href}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-all flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {name}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
