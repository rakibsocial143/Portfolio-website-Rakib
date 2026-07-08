import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function FrontendCard() {
  const skills = [
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "Vanilla CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  ];

  const tags = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "HTML5",
    "CSS",
    "MongoDB",
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.18,
      },
    },
  };

  const riseUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const tagContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  };

  const tagItem = {
    hidden: { opacity: 0, y: 12, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const gridContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: 0.25 },
    },
  };

  const flipCard = {
    hidden: {
      opacity: 0,
      rotateX: -70,
      y: 40,
      scale: 0.85,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section className="flex items-center justify-center max-w-7xl mx-auto bg-[#0d0d0d] p-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        variants={cardVariants}
        className="relative w-full max-w-7xl rounded-3xl overflow-hidden"
        style={{ perspective: 1200 }}
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-green-400 animate-pulse blur-xl opacity-40"></div>

        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <motion.span
                variants={riseUp}
                className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm"
              >
                Full Stack Developer
              </motion.span>

              <motion.h1
                variants={riseUp}
                className="mt-6 text-6xl font-black text-white leading-tight"
              >
                Modern
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {" "}
                  Code with Modern Technologies
                </span>
              </motion.h1>

              <motion.p
                variants={riseUp}
                className="mt-6 text-lg text-gray-300 leading-8"
              >
                Building beautiful, responsive and accessible web applications
                with cutting-edge technologies.
              </motion.p>

              <motion.div
                variants={tagContainer}
                className="flex flex-wrap gap-3 mt-8"
              >
                {tags.map((item) => (
                  <motion.span
                    key={item}
                    variants={tagItem}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 hover:scale-105 transition"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={gridContainer}
              className="grid grid-cols-3 gap-6"
              style={{ perspective: 1000 }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={flipCard}
                  whileHover={{
                    scale: 1.08,
                    rotateY: 10,
                    transition: { duration: 0.3 },
                  }}
                  className="group aspect-square rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col items-center justify-center transition-colors duration-300 hover:border-cyan-400"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className={`text-5xl ${skill.color} group-hover:rotate-12 transition`}
                  >
                    {skill.icon}
                  </div>

                  <p className="mt-4 text-white font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}