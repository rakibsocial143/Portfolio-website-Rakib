import { motion } from "framer-motion";
import useIsMobile from "../Hero/useMobiel";

import react from '../../assets/icons/react-original.webp'
import nodeJs from '../../assets/icons/nodejs-original.webp'
import next from '../../assets/icons/nextjs-original.webp'
import express from '../../assets/icons/express-original.webp'
import awro from '../../assets/icons/arow.webp'
import database from '../../assets/icons/postgresql-original.webp'

const technologies = [
  {
    icon: react,
    alt: "React",
    style: { top: "0%", left: "50%", transform: "translate(-50%, 0)" },
    anim: "animate-float1",
  },
  {
    icon: express,
    alt: "Express",
    style: { top: "12%", right: "0%" },
    anim: "animate-float2",
    invert: true,
  },
  {
    icon: next,
    alt: "Next.js",
    style: { top: "50%", right: "-4%", transform: "translateY(-50%)" },
    anim: "animate-float1",
    invert: true,
  },
  {
    icon: nodeJs,
    alt: "Node.js",
    style: { bottom: "12%", right: "0%" },
    anim: "animate-float2",
  },
  {
    icon: database,
    alt: "Database",
    style: { bottom: "12%", left: "0%" },
    anim: "animate-float1",
  },
];

const CODE_ICON =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg";

const ARROW_RIGHT_ICON = awro;

export default function About() {
  const isMobile = useIsMobile();

  const avatars = [
    "https://i.pravatar.cc/80?img=12",
    "https://i.pravatar.cc/80?img=32",
    "https://i.pravatar.cc/80?img=45",
    "https://i.pravatar.cc/80?img=5",
  ];

  const TextWrap = isMobile ? "div" : motion.div;
  const OrbitWrap = isMobile ? "div" : motion.div;
  const OrbitCircle = isMobile ? "div" : motion.div;
  const IconWrap = isMobile ? "div" : motion.div;

  const textMotionProps = isMobile
    ? {}
    : {
        initial: { x: 120, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        viewport: { once: false, amount: 0.5 },
      };

  const orbitWrapperMotionProps = isMobile
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.2 },
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
        },
      };

  const orbitCircleMotionProps = isMobile
    ? {}
    : {
        variants: {
          hidden: { x: -120, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          },
        },
      };

  const iconMotionProps = isMobile
    ? {}
    : {
        variants: {
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
        },
      };

  return (
    <section className="bg-[#0d0d0d] max-w-7xl mx-auto text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <style>{`
        @keyframes float1 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes float2 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(10px); } }
        .animate-float1 { animation: float1 4s ease-in-out infinite; }
        .animate-float2 { animation: float2 4.5s ease-in-out infinite; }
      `}</style>

      <div className="container mx-auto px-4 sm:px-8 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <TextWrap {...textMotionProps}>
            <span className="inline-block border border-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-[1.03] px-4 py-2 text-sm sm:text-base">
              About Me
            </span>
        
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-6 sm:mt-8 font-bold leading-tight">
              EVERYTHING ABOUT
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl italic font-serif text-emerald-400 mb-6 sm:mb-8">
              RAKIB
            </h2>

            <p className="text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base">
              Hi, <span className="text-white font-semibold">RAKIB HASAN</span> a passionate{" "}
              <span className="text-green-400 font-semibold">Full Stack Developer</span> who loves
              crafting beautiful web applications.
            </p>

            <p className="text-gray-400 leading-7 sm:leading-8 mt-4 sm:mt-6 text-sm sm:text-base">
              Expertise in{" "}
              <span className="text-green-400">React, Next.js, Node.js, Express &amp; PostgreSQL</span>.
              I build fast, modern and scalable applications.
            </p>

            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap items-center gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-5 sm:gap-y-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <img key={i} src={src} alt="" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[#0a0c0a] object-cover" />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="text-white font-semibold leading-tight">100%</p>
                  <p className="text-gray-500 leading-tight">Success Rate</p>
                </div>
              </div>

              <div className="flex items-center gap-6 sm:gap-8 lg:gap-10">
                <div>
                  <p className="text-white text-xl sm:text-2xl font-bold leading-tight">33+</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Projects Completed</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-white text-xl sm:text-2xl font-bold leading-tight">4+</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Years Of Experience</p>
                </div>
              </div>
            </div>

            <button className="group mt-6 sm:mt-8 relative flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-white font-semibold text-base sm:text-lg bg-gradient-to-r from-[#5B21B6] to-[#3e2b5e] border border-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-[1.03]">
              <span>More About Me</span>
              <img
                src={ARROW_RIGHT_ICON}
                alt=""
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </TextWrap>

          <OrbitWrap {...orbitWrapperMotionProps} className="flex justify-center w-full">
            <OrbitCircle
              {...orbitCircleMotionProps}
              className="relative w-70 h-70 sm:w-110 sm:h-110 lg:w-[420px] lg:h-[420px] mx-auto"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/10 to-violet-500/20 blur-3xl"></div>
              <div className="absolute inset-0 rounded-full border border-emerald-400/30 shadow-[0_0_60px_rgba(16,185,129,.15)]"></div>
              <div className="absolute inset-[6%] rounded-full border border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,.15)]"></div>
              <div className="absolute inset-[14%] rounded-full border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,.15)]"></div>
              <div className="absolute inset-[22%] rounded-full border border-slate-600"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24%] h-[24%] rounded-full bg-emerald-500/10 blur-2xl"></div>

              <IconWrap {...iconMotionProps} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl border border-white/10 bg-[#171717]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,.5)] flex justify-center items-center">
                  <img src={CODE_ICON} alt="Code" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
              </IconWrap>

              {technologies.map((item, index) => (
                <IconWrap key={index} {...iconMotionProps} className={`absolute ${item.anim}`} style={item.style}>
                  <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(255,255,255,.05)] flex items-center justify-center hover:scale-110 transition duration-300">
                    <img
                      src={item.icon}
                      alt={item.alt}
                      className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 object-contain ${item.invert ? "invert" : ""}`}
                    />
                  </div>
                </IconWrap>
              ))}
            </OrbitCircle>
          </OrbitWrap>
        </div>
      </div>
    </section>
  );
}