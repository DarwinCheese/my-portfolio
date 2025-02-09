"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/app/components/ProjectCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger each card's animation
    },
  },
};

const projectProps = {
  title: "Portfolio website",
  description: "This is my Personal Portfolio website.",
  tech: ["NextJS", "Azure", "TailwindCSS"],
  link: "https://example.com",
  repo: "https://github.com/DarwinCheese/my-portfolio",
};

export default function Page() {
    const projects = Array(1).fill(projectProps);
    return (
    <motion.section
        className="py-12"
        id="projects"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
        ))}
        </div>
    </motion.section>
    );
};