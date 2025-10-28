"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn, fadeInDown } from "@/utils/animations";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="container max-w-7xl mx-auto py-12 border-b border-gray-200 dark:border-gray-600 ">
        <motion.h1
          className="text-3xl font-bold mb-8 text-center"
          {...fadeInUp}
        >
          Contact Me
        </motion.h1>

        <motion.p className="text-sm md:text-lg mb-8 dark:text-gray-400">
          Let’s connect! Whether you’re looking for collaboration, have a
          question, or just want to chat, feel free to reach out. I’d love to
          hear from you!
        </motion.p>

        <div className="">
          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            {...fadeInDown}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md placeholder:text-sm placeholder:text-white/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md placeholder:text-sm placeholder:text-white/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md placeholder:text-sm placeholder:text-white/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary text-sm md:text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "success" && (
                <motion.p
                  className="text-green-500 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully!
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  className="text-red-500 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
}
