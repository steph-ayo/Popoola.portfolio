// "use client";
// import { FaCode, FaGraduationCap } from "react-icons/fa";
// import { motion } from "framer-motion";

// import {
//   fadeInUp,
//   // fadeInDown,
//   fadeIn,
//   staggerContainer,
//   cardHover,
//   // cardHoverSmall,
// } from "@/utils/animations";

// const Skills = () => {
//   return (
//     <section>
//       {/* Skills Section */}
//       <motion.section
//         id="skills"
//         className="mb-12 p-10 bg-white dark:bg-dark/50 shadow-md"
//         {...fadeIn}
//         transition={{ delay: 0.2 }}
//       >
//         <motion.h2 className="section-title" {...fadeInUp}>
//           My Skills
//         </motion.h2>
//         <motion.div
//           //   className="border border-red-600 not-first:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           className="flex flex-col gap-6"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >
//           <motion.div
//             className="bg-white dark:bg-dark p-6 rounded-lg shadow-md"
//             variants={fadeInUp}
//             {...cardHover}
//           >
//             <FaCode className="h-8 w-8 text-primary mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Frontend</h3>
//             <ul className="text-secondary space-y-2 md:flex flex-row gap-8">
//               <li>React.js/vite</li>
//               <li>Next.js</li>
//               <li>TypeScript</li>
//               <li>Tailwind CSS</li>
//             </ul>
//           </motion.div>

//           <motion.div
//             className="bg-white dark:bg-dark p-6 rounded-lg shadow-md"
//             variants={fadeInUp}
//             {...cardHover}
//           >
//             <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
//             <ul className="text-secondary space-y-2 md:flex flex-row gap-8">
//               <li>Git / GitHub</li>
//               <li>CSS animations</li>
//             </ul>
//           </motion.div>
//         </motion.div>
//       </motion.section>
//     </section>
//   );
// };

// export default Skills;

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
} from "react-icons/si";
import {
  fadeInUp,
  // fadeInDown,
  // fadeIn,
  // staggerContainer,
  // cardHover,
  // cardHoverSmall,
} from "@/utils/animations";

const icons = [
  { icon: <SiReact className="text-sky-400" />, name: "React" },
  {
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    name: "Next.js",
  },
  { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
  { icon: <SiGit className="text-orange-500" />, name: "Git" },
  {
    icon: <SiGithub className="text-gray-800 dark:text-gray-100" />,
    name: "GitHub",
  },
  { icon: <SiCss3 className="text-blue-400" />, name: "CSS3" },
  { icon: <SiFramer className="text-pink-500" />, name: "Framer" },
  { icon: <SiVite className="text-purple-500" />, name: "Vite" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      // className="relative overflow-hidden py-24 bg-gradient-to-b from-dark via-dark/80 to-black text-center"
      className="relative overflow-hidden py-24 bg-white dark:bg-dark/50 shadow-md text-center"
    >
      {/* Title */}
      <motion.h2
        className="mb-16 section-title"
        {...fadeInUp}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="relative space-y-16">
        <motion.div
          className="flex gap-20 justify-around"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...icons, ...icons].map((skill, i) => (
            <motion.div
              key={`top-${i}`}
              whileHover={{
                scale: 1.4,
                rotate: 10,
                y: -10,
                filter: "drop-shadow(0px 0px 15px rgba(0,255,255,0.8))",
              }}
              className="flex flex-col items-center justify-center text-6xl cursor-pointer"
              style={{ perspective: 1000 }}
            >
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear",
                }}
              >
                {skill.icon}
              </motion.div>
              <span className="text-sm text-gray-300 mt-2">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
