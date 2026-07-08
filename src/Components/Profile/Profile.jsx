import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import profile2 from '../../assets/rakib.png'

export default function TestimonialCard() {
  return (
    <section className="bg-[#0B0B0B] max-w-7xl mx-auto py-20 flex flex-col items-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl font-bold text-white mb-14 tracking-wide uppercase"
      >
        RAKIB HASAN
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[1100px]"
      >

        <div className="absolute top-5 -left-4 w-full h-full rounded-3xl border border-[#5d3fd3] rotate-[-3deg] opacity-40"></div>

        <div className="absolute top-3 -left-2 w-full h-full rounded-3xl border border-[#5d3fd3] rotate-[-1.5deg] opacity-60"></div>

        <div className="relative bg-[#111111] border border-[#5d3fd3] rounded-3xl p-6 flex items-center gap-8 z-10">

          <button className="absolute -left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#5d3fd3] bg-[#141414] flex items-center justify-center text-white hover:bg-[#1d1d1d] duration-300">
            <FaArrowLeft size={14} />
          </button>

          <div className="w-[250px] h-[320px] rounded-xl overflow-hidden shrink-0">
            <img
              src={profile2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">

            <div className="text-white text-[90px] leading-none font-bold mb-4">
              "
            </div>

            <p className="text-white text-[34px] leading-[52px] font-medium max-w-[700px]">As a Full Stack Developer, I love crafting modern, responsive, and user-friendly web experiences. I pay close attention to design, performance, and clean code to build websites that leave a lasting impression.
            </p>

            <div className="text-white text-[90px] leading-none font-bold flex justify-end mr-60">
              "
            </div>


          </div>

          <button className="absolute -right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#5d3fd3] bg-[#141414] flex items-center justify-center text-white hover:bg-[#1d1d1d] duration-300">
            <FaArrowRight size={14} />
          </button>

        </div>
      </motion.div>
    </section>
  );
}