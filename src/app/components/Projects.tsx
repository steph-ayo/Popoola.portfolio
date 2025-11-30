"use client";

// import { useState } from "react";
import { projects } from "@/contents/projects";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export default function Projects() {
  // const [filter, setFilter] = useState("all");

  // Extract unique categories (optional - remove if not needed)
  // const categories = [
  //   "all",
  //   ...new Set(projects.flatMap((p) => p.categories || [])),
  // ];

  return (
    <section className="py-18 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark/30">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm font-medium">Featured Work</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>

          <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A curated collection of projects showcasing my expertise in building
            modern, scalable web applications with cutting-edge technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="bg-white dark:bg-dark/50 rounded-2xl shadow-xl overflow-hidden group border border-gray-100 dark:border-gray-800 hover:border-primary/20 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              {/* Large Image Section */}
              <div className="relative h-80 md:h-96 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Project Number Badge */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-white font-bold text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Quick Action Buttons */}
                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/95 dark:bg-dark/95 rounded-xl hover:bg-white dark:hover:bg-dark transition-colors backdrop-blur-sm shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                  </motion.a>
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-dark/90 rounded-full hover:bg-white dark:hover:bg-dark transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="h-5 w-5 text-white" />
                  </motion.a>
                </div>

                {/* Bottom Info Bar on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/30">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base md:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>

                {/* All Technologies */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 dark:bg-dark/70 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary transition-all"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Links */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-all font-medium shadow-lg shadow-primary/20 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Live Project</span>
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-dark/70 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl hover:bg-gray-200 dark:hover:bg-dark transition-all font-medium border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="h-5 w-5" />
                    <span>Source Code</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/steph-ayo"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-lg group"
            whileHover={{ x: 5 }}
          >
            <span>Explore All Projects</span>
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
