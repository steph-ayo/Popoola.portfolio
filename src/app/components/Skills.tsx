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
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        icon: <SiJavascript className="text-yellow-400" />,
        name: "JavaScript",
      },
      { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
      { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <SiCss3 className="text-blue-400" />, name: "CSS" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { icon: <SiReact className="text-sky-400" />, name: "React" },
      {
        icon: <SiNextdotjs className="text-black dark:text-white" />,
        name: "Next.js",
      },
      {
        icon: <SiTailwindcss className="text-cyan-400" />,
        name: "Tailwind CSS",
      },
      { icon: <SiFramer className="text-pink-500" />, name: "Framer Motion" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
      { icon: <SiFirebase className="text-orange-500" />, name: "Firebase" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
      { icon: <SiPostgresql className="text-blue-700" />, name: "PostgreSQL" },
      { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
      { icon: <SiFirebase className="text-orange-500" />, name: "Firebase" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: <SiGit className="text-orange-600" />, name: "Git" },
      {
        icon: <SiGithub className="text-gray-800 dark:text-gray-100" />,
        name: "GitHub",
      },
      { icon: <SiVite className="text-purple-500" />, name: "Vite" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-18 bg-gradient-to-b from-gray-50 to-white dark:from-dark/30 dark:to-transparent"
    >
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & Technologies
          </h2>

          <p className="text-md md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Modern technologies and frameworks I use
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="group relative bg-white dark:bg-dark/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {/* Skill Icon */}
                    <motion.div
                      className="text-6xl mb-4 flex justify-center"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>

                    {/* Skill Name */}
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white text-center mb-2">
                      {skill.name}
                    </h4>

                    {/* Skill Level */}
                    {/* <div className="flex justify-center">
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 px-3 py-1 bg-gray-100 dark:bg-dark/70 rounded-full">
                        {skill.level}
                      </span>
                    </div> */}

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Always learning and exploring new technologies
          </p>
          <div className="flex justify-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-75" />
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150" />
          </div>
        </motion.div>

        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Always learning and exploring new technologies
          </p>
          <motion.div
            className="flex justify-center gap-2"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: [0, 1.2, 1],
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 0.6,
                    },
                  },
                }}
              />
            ))}
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;
