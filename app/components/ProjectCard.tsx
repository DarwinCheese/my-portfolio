import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type ProjectProps = {
  title: string;
  description: string;
  tech: Technologies[];
  link: string;
  repo: string;
};

type Technologies = {
  title: string;
};

const ProjectCard = ({ title, description, tech, link, repo }: ProjectProps) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }} // Only animate the first time it scrolls into view
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t: Technologies) => (
        <span key={t.title} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
          {t.title}
        </span>
      ))}
    </div>
    <div className="flex justify-between">
      <a href={link} className="text-blue-500 hover:underline">Live Demo</a>
      <a href={repo} className="text-gray-500 hover:underline">GitHub</a>
    </div>
  </motion.div>
);

export default ProjectCard;