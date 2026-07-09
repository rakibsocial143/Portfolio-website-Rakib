import { motion } from "framer-motion";

import react from "../../assets/icons/react-original.webp";
import nextJs from "../../assets/icons/nextjs-original.webp";
import typeScript from "../../assets/icons/typescript-original.webp";
import javascript from "../../assets/icons/javascript-original.webp";
import tailwindCss from "../../assets/icons/tailwindcss-icon.webp";
import nodeJs from "../../assets/icons/nodejs-original.webp";
import html_5 from "../../assets/icons/html5-original.webp";
import mondoDB from "../../assets/icons/mongodb-original.webp";
import vanilaCss from "../../assets/icons/css3-original.webp";

export default function FrontendCard() {
  const skills = [
    {
      name: "React",
      icon: react,
    },
    {
      name: "Next.js",
      icon: nextJs,
      invert: true,
    },
    {
      name: "TypeScript",
      icon: typeScript,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Tailwind CSS",
      icon: tailwindCss,
    },
    {
      name: "Node.js",
      icon: nodeJs,
    },
    {
      name: "HTML5",
      icon: html_5,
    },
    {
      name: "MongoDB",
      icon: mondoDB,
    },
    {
      name: "Vanilla CSS",
      icon: vanilaCss,
    },
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.12 },
    },
  };

  const riseUp = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const tagContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
  };

  const tagItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  const gridContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.15 },
    },
  };

  const flipCard = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="flex items-center justify-center max-w-7xl mx-auto bg-[#0d0d0d] p-4 sm:p-6 lg:p-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        variants={cardVariants}
        className="relative w-full max-w-7xl rounded-2xl sm:rounded-3xl overflow-hidden"
      >
        <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl sm:backdrop-blur-2xl p-5 sm:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start">
            <div>
              <motion.span
                variants={riseUp}
                className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-xs sm:text-sm"
              >
                Full Stack Developer
              </motion.span>

              <motion.h1
                variants={riseUp}
                className="mt-4 sm:mt-6 text-3xl sm:text-4xl xl:text-6xl lg:text-[54px] font-black text-white leading-tight"
              >
                Modern
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {" "}
                  Code with Modern Technologies
                </span>
              </motion.h1>

              <motion.p
                variants={riseUp}
                className="mt-4 sm:mt-6 text-sm sm:text-base lg:font-bold lg:text-[16px] text-gray-300 leading-6 sm:leading-8 xl:text-xl"
              >
                Building beautiful, responsive and accessible web applications
                with cutting-edge technologies.
              </motion.p>

              <motion.div
                variants={tagContainer}
                className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3 mt-4 sm:mt-6"
              >
                {tags.map((item) => (
                  <motion.span
                    key={item}
                    variants={tagItem}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2 text-xs sm:text-sm lg:text-base text-cyan-300 hover:scale-105 transition"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={gridContainer}
              className="grid grid-cols-3 gap-3 sm:gap-4 xl:gap-12 lg:gap-5"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={flipCard}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="aspect-square w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[140px] mx-auto rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-2 transition-colors duration-300 hover:border-cyan-400 hover:bg-black/60"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 object-contain flex-shrink-0 ${skill.invert ? "invert" : ""}`}
                  />

                  <p className="w-full text-white font-medium text-[10px] sm:text-xs lg:text-[13px] text-center leading-tight line-clamp-2 px-0.5">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
