import { FaReact, FaNodeJs, FaCode, FaDatabase } from "react-icons/fa";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  {
    icon: <FaReact className="text-cyan-400 text-3xl" />,
    className: "top-4 left-1/2 -translate-x-1/2 animate-float1",
  },
  {
    icon: <SiExpress className="text-white text-3xl" />,
    className: "top-12 right-8 animate-float2",
  },
  {
    icon: <SiNextdotjs className="text-white text-3xl" />,
    className: "top-1/2 right-0 -translate-y-1/2 animate-float1",
  },
  {
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
    className: "bottom-12 right-8 animate-float2",
  },
  {
    icon: <FaDatabase className="text-sky-400 text-3xl" />,
    className: "bottom-12 left-8 animate-float1",
  },
];

export default function About() {
  const avatars = [
    "https://i.pravatar.cc/80?img=12",
    "https://i.pravatar.cc/80?img=32",
    "https://i.pravatar.cc/80?img=45",
    "https://i.pravatar.cc/80?img=5",
  ];

  return (
    <section className="bg-[#0d0d0d] max-w-7xl mx-auto text-white py-20 overflow-hidden">
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        .animate-float1 { animation: float1 4s ease-in-out infinite; }
        .animate-float2 { animation: float2 4.5s ease-in-out infinite; }
      `}</style>

      <div className="container mx-auto px-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{
              x: 120,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.5,
            }}
            className=""
          >
            <span className="border border-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-[1.03] px-4 py-2">
              About Me
            </span>

            <h1 className="text-4xl mt-8 sm:text-5xl font-bold leading-tight">
              EVERYTHING ABOUT
            </h1>
            <h2 className="text-4xl sm:text-5xl italic font-serif text-emerald-400 mb-8">
              RAKIB
            </h2>

            <p className="text-gray-400 leading-8">
              Hi,{" "}
              <span className="text-white font-semibold">RAKIB HASAN</span>{" "}
              a passionate{" "}
              <span className="text-green-400 font-semibold">
                Full Stack Developer
              </span>{" "}
              who loves crafting beautiful web applications.
            </p>

            <p className="text-gray-400 leading-8 mt-6">
              Expertise in{" "}
              <span className="text-green-400">
                React, Next.js, Node.js, Express &amp; PostgreSQL
              </span>
              . I build fast, modern and scalable applications.
            </p>

            <div className="mt-8 lg:mt-10 flex flex-wrap items-center gap-x-8 lg:gap-x-10 gap-y-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-9 h-9 rounded-full border-2 border-[#0a0c0a] object-cover"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="text-white font-semibold leading-tight">
                    100%
                  </p>
                  <p className="text-gray-500 leading-tight">Success Rate</p>
                </div>
              </div>

              <div className="flex items-center gap-8 lg:gap-10">
                <div>
                  <p className="text-white text-2xl font-bold leading-tight">
                    33+
                  </p>
                  <p className="text-gray-500 text-sm">Projects Completed</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-white text-2xl font-bold leading-tight">
                    4+
                  </p>
                  <p className="text-gray-500 text-sm">Years Of Experience</p>
                </div>
              </div>
            </div>

            <button className="group mt-8 relative flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-[#5B21B6] to-[#3e2b5e] border border-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-[1.03]">
              <span>More About Me</span>
              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { x: -120, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="relative w-[420px] h-[420px]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-violet-500/10 blur-3xl"></div>

              <div className="absolute inset-0 rounded-full border border-emerald-400/20 shadow-[0_0_60px_rgba(16,185,129,.15)]"></div>

              <div className="absolute inset-10 rounded-full border border-violet-500/20 shadow-[0_0_40px_rgba(139,92,246,.15)]"></div>

              <div className="absolute inset-20 rounded-full border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,.15)]"></div>

              <div className="absolute inset-32 rounded-full border border-slate-700"></div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-emerald-500/10 blur-2xl"></div>

              <motion.div
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="w-24 h-24 rounded-2xl border border-white/10 bg-[#171717]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,.5)] flex justify-center items-center">
                  <FaCode className="text-4xl text-white" />
                </div>
              </motion.div>

              {technologies.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  className={`absolute ${item.className}`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(255,255,255,.05)] flex items-center justify-center hover:scale-110 transition duration-300">
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}