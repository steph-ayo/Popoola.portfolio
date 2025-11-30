// "use client";

// import ParticlesComponent from "../components/Particles";
// import Link from "next/link";

// import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import {
//   fadeInUp,
//   fadeIn,
//   fadeInDown,
//   slideInLeft,
//   slideInRight,
//   scaleIn,
//   staggerContainer,
// } from "../../utils/animations";

// export default function Hero() {
//   return (
//     <section className="relative pt-28 pb-17 overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <ParticlesComponent />
//       </div>

//       <div className="container max-w-7xl mx-auto px-10">
//         <motion.div
//           className=" max-w-3xl mx-auto text-left md:text-center"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >
//           {/* Hero header text */}
//           <motion.div className="font-bold mb-7" variants={fadeInUp}>
//             <motion.h3
//               className="text-lg md:text-2xl font-thin mb-5"
//               variants={slideInLeft}
//               transition={{ delay: 0.1 }}
//             >
//               HELLO, I AM
//             </motion.h3>
//             <motion.h1
//               className="text-primary text-4xl md:text-7xl font-semibold max-w-full"
//               {...scaleIn}
//               transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
//             >
//               Popoola Stephen
//             </motion.h1>
//           </motion.div>

//           {/* Hero paragraph text */}
//           <motion.p
//             className="text-lg md:text-2xl font-normal text-gray-600 dark:text-gray-300 mt-4 mb-8"
//             {...fadeInUp}
//             transition={{ delay: 0.8 }}
//           >
//             A Frontend Engineer
//           </motion.p>

//           {/* Hero mail icon */}
//           <motion.a
//             href="mailto:popoolastephen19@gmail.com?subject=Contact%20Form&body=Hello%20Stephen,%0D%0A%0D%0A"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex flex-row gap-2 z-10 text-xl md:justify-center cursor-pointer text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
//             {...fadeInUp}
//             transition={{ delay: 0.7 }}
//           >
//             <FaEnvelope />
//             <p className="text-sm md:text-lg">popoolastephen19@gmail.com</p>
//           </motion.a>

//           {/* Hero icon links */}
//           <motion.div
//             className="flex justify-center space-x-4 mt-30 mb-8"
//             {...fadeInUp}
//             transition={{ delay: 0.9 }}
//           >
//             <motion.a
//               href="https://github.com/steph-ayo"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="z-10 text-2xl cursor-pointer text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaGithub />
//             </motion.a>
//             <motion.a
//               href="https://www.linkedin.com/in/stephen-popoola-b90990233"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaLinkedin />
//             </motion.a>
//             <motion.a
//               href="https://x.com/ayo_omopopoola"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <FaXTwitter />
//             </motion.a>
//           </motion.div>

//           {/* Hero icon button */}

//           <motion.div
//             className="text-center"
//             {...fadeInUp}
//             transition={{ delay: 1.1 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link
//               href="/contact"
//               className="bg-primary inline-block md:w-auto text-white px-8 py-3 rounded-3xl hover:bg-primary/90 transition-colors"
//             >
//               contact me
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//       {/* <ParticlesComponent /> */}
//     </section>
//   );
// }

"use client";

import ParticlesComponent from "../components/Particles";
import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  fadeInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
} from "../../utils/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ParticlesComponent />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-dark/50" />

      <div className="container max-w-7xl mx-auto px-6 md:px-10 py-20">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Professional greeting */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-green-600 rounded-full mb-6"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
            </span>
            <span className="text-sm font-medium">Available for work</span>
          </motion.div>

          {/* Main heading */}
          <motion.div className="mb-8" variants={fadeInUp}>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              {...scaleIn}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <span className="block text-gray-800 dark:text-white">
                Popoola Stephen
              </span>
              <span className="block text-primary mt-2">Frontend Engineer</span>
            </motion.h1>
          </motion.div>

          {/* Professional description */}
          <motion.p
            className="text-sm md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            Crafting exceptional digital experiences through clean code, modern
            design, and innovative solutions. Specialized in building scalable,
            user-centric web applications.
          </motion.p>

          {/* Key skills/highlights */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-dark/50 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
                >
                  {skill}
                </motion.span>
              )
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            {...fadeInUp}
            transition={{ delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl font-medium"
              >
                Let&#39;s Work Together
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.a
              href="/assets/POPOOLA.cv.pdf"
              download
              className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-dark/50 text-gray-800 dark:text-gray-200 px-8 py-4 rounded-xl hover:bg-gray-200 dark:hover:bg-dark/70 transition-all border border-gray-200 dark:border-gray-700 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <FaDownload />
            </motion.a>
          </motion.div>

          {/* Contact info and social links */}
          <motion.div
            className="flex flex-row md:flex-row items-start md:items-center gap-6 md:gap-8 pt-8 border-t border-gray-200 dark:border-gray-800"
            {...fadeInUp}
            transition={{ delay: 1 }}
          >
            {/* Email */}
            <motion.a
              href="mailto:popoolastephen19@gmail.com?subject=Contact%20Form&body=Hello%20Stephen,%0D%0A%0D%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors group"
              whileHover={{ x: 5 }}
            >
              <div className="p-2 bg-gray-100 dark:bg-dark/50 rounded-lg group-hover:bg-primary/10 transition-colors">
                <FaEnvelope className="text-xl" />
              </div>
              <span className="text-sm md:text-base font-medium">
                popoolastephen19@gmail.com
              </span>
            </motion.a>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 dark:text-gray-400 hidden md:block">
                Connect:
              </span>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/steph-ayo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark/50 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/stephen-popoola-b90990233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark/50 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://x.com/ayo_omopopoola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark/50 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaXTwitter className="text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Optional: Stats or achievements */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"
            {...fadeInUp}
            transition={{ delay: 1.2 }}
          >
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Projects Completed", value: "20+" },
              { label: "Technologies", value: "10+" },
              { label: "Client Satisfaction", value: "100%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
