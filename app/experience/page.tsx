"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger each card's animation
    },
  },
};

export default function Page() {
    return (
    <motion.section
        className="py-12"
        id="projects"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* This is where my jobs/experiences will be displayed */}
        </div>
    </motion.section>
    );
};