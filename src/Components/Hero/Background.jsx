import Nav from "../Navbar/Nav";
import { motion } from "framer-motion";
import Tech2 from '../Hero/Tech2'
import HeroTitle from './HeroTitle'

const Background = () => {
  return (
    <>
      <motion.section
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -18, 0],
        }}
        className=""
      >
        <div className="z-50 absolute top-2 w-full">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
          <Nav />
        </div>

        <div className="relative bg-[#050505] overflow-hidden">

          <div
            className="absolute -top-24 sm:-top-32 lg:-top-40 left-1/2 -translate-x-1/2 
                       w-[140%] sm:w-[120%] 
                       h-[220px] sm:h-[300px] lg:h-[600px] 
                       bg-emerald-500/40 blur-[80px] sm:blur-[100px] lg:blur-[120px] 
                       rounded-full pointer-events-none"
          />

          <div
            className="absolute -bottom-24 sm:-bottom-32 lg:-bottom-40 left-1/2 -translate-x-1/2 
                       w-[140%] sm:w-[120%] 
                       h-[220px] sm:h-[300px] lg:h-[600px] 
                       bg-emerald-500/40 blur-[80px] sm:blur-[100px] lg:blur-[120px] 
                       rounded-full pointer-events-none"
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:40px_100%] sm:bg-[size:60px_100%] lg:bg-[size:90px_100%]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:100%_60px] sm:bg-[size:100%_80px] lg:bg-[size:100%_100px]" />

          <div className="absolute inset-0 bg-black/40 pointer-events-none">
            <div className="w-full h-full flex items-center justify-center px-4">
              <h1
                className="text-[13vw] sm:text-[11vw] lg:text-[140px] xl:text-[200px] font-black text-transparent text-center leading-none select-none"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,.1)" }}
              >
                {"[ (A) => {B} ]"} <br />
                {"</> !== # ||"}
              </h1>
            </div>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 pt-10 lg:pt-0">
              <HeroTitle />
              <Tech2 />
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            <div className="absolute top-8 left-8 w-3 h-3 bg-white/15 rounded-sm" />
            <div className="absolute top-8 right-8 w-3 h-3 bg-white/15 rounded-sm" />
            <div className="absolute bottom-8 left-8 w-3 h-3 bg-white/15 rounded-sm" />
            <div className="absolute bottom-8 right-8 w-3 h-3 bg-white/15 rounded-sm" />
            <div className="absolute left-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/15 rounded-sm" />
            <div className="absolute right-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/15 rounded-sm" />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Background;