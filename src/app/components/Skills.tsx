"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiCss3,
  SiFramer,
  SiVite,
  SiHtml5,
  SiJavascript,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { icon: <SiHtml5 className="text-purple-500" />, name: "HTML" },
  { icon: <SiCss3 className="text-blue-400" />, name: "CSS3" },
  { icon: <SiJavascript className="text-sky-400" />, name: "JavaScript" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
  { icon: <SiReact className="text-sky-400" />, name: "React" },
  { icon: <SiVite className="text-purple-500" />, name: "Vite" },
  {
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    name: "Next.js",
  },
  { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
  { icon: <SiFramer className="text-pink-500" />, name: "Framer Motion" },
  { icon: <SiFirebase className="text-orange-500" />, name: "Firebase" },
  { icon: <SiGit className="text-orange-500" />, name: "Git" },
  {
    icon: <SiGithub className="text-gray-800 dark:text-gray-100" />,
    name: "GitHub",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-18 text-center bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-4xl font-semibold tracking-tight"
      >
        My Skills & Tools
      </motion.h2>

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-5xl grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-10 p-10 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 shadow-lg"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{
              y: -6,
              scale: 1.08,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
          >
            {/* Smooth Bounce Animation */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2 + i * 0.15, // staggered timing for natural rhythm
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ rotate: 5 }}
              className="text-5xl drop-shadow-[0_0_6px_rgba(59,130,246,0.3)]"
            >
              {skill.icon}
            </motion.div>

            <span className="text-sm text-gray-300 font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Subtle bottom line */}
      <div className="absolute bottom-0 left-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent -translate-x-1/2" />
    </section>
  );
};

export default Skills;
