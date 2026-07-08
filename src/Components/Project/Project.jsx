import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import project_1 from "../../assets/project1.png";
import project_2 from "../../assets/project2.png";
import project_3 from "../../assets/project3.png";
import project_4 from "../../assets/project4.png";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A task management application built with React and Firebase.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: project_3,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Daly News Website",
    description: "A full e-commerce website UI built with React.",
    tags: ["React", "Context API", "Tailwind CSS"],
    image: project_1,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Apps Store Type",
    description: "A responsive blog website built with React.",
    tags: ["React", "React Router", "CSS"],
    image: project_2,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Phone Pricing",
    description: "A weather application that shows real-time weather data.",
    tags: ["React", "API", "CSS"],
    image: project_4,
    demoUrl: "#",
    githubUrl: "#",
  },
];

// Card fades + rises up
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// Image "curtain wipe" reveal — clips open from left to right
const wipeVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1], delay: 0.15 },
  },
};

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardVariants}
      className="w-full h-[420px]"
    >
      <div
        className="card h-full w-full bg-base-100 border border-base-200 shadow-sm
                   transition-all duration-300 ease-out
                   hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/30
                   flex flex-col overflow-hidden group"
      >
        <figure className="relative h-50 w-full shrink-0 overflow-hidden bg-base-300">
          <motion.div variants={wipeVariants} className="w-full h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </motion.div>
        </figure>

        <div className="card-body p-5 gap-3 flex-1 flex flex-col">
          <h3 className="card-title text-base font-semibold text-base-content leading-snug line-clamp-1">
            {project.title}
          </h3>

          <p className="text-sm text-base-content/60 leading-relaxed -mt-1 line-clamp-2 h-10">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-1 h-8 overflow-hidden">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-ghost bg-base-200 text-base-content/70 border-none text-xs font-normal py-2.5
                           transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-[#0EC8F5]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-5 pt-3 border-t border-base-200">
            <a
              href={project.demoUrl}
              className="link link-hover flex items-center gap-1.5 text-sm font-medium text-[#0EC8F5] transition-transform duration-200 hover:translate-x-0.5"
            >
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="link link-hover flex items-center gap-1.5 text-sm font-medium text-base-content/70
                         transition-transform duration-200 hover:translate-x-0.5"
            >
              <FaGithub className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MyProjects() {
  return (
    <div className="bg-[#0D2321] py-16 max-w-7xl mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-base-content">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#7C3AED]">
              <HiOutlineViewGrid className="w-4.5 h-4.5" />
            </span>
            My Projects
          </h2>
          <div className="w-14 h-1 rounded-full bg-[#7C3AED] mt-3" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <button className="group relative flex items-center gap-2 mx-3 px-6 py-3 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-[#5B21B6] to-[#3e2b5e] border border-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-[1.03]">
            <span>View All Projects</span>
            <ArrowRight
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}