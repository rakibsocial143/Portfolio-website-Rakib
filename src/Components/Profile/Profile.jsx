
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import profile2 from '../../assets/rakib.webp'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function TestimonialCard() {
  return (
    <section className="bg-[#0B0B0B] max-w-7xl mx-auto py-14 sm:py-20 lg:py-24 flex flex-col items-center overflow-hidden px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="font-bold text-white mb-8 sm:mb-14 tracking-wide uppercase text-center"
        style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
      >
        Rakib Hasan
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        variants={container}
        className="relative w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
      >
        <div className="hidden md:block absolute top-5 -left-4 w-full h-full rounded-3xl border border-[#5d3fd3] rotate-[-3deg] opacity-40" />
        <div className="hidden md:block absolute top-3 -left-2 w-full h-full rounded-3xl border border-[#5d3fd3] rotate-[-1.5deg] opacity-60" />

        <motion.div
          variants={fadeUp}
          className="relative bg-[#111111] border border-[#5d3fd3] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-5 sm:gap-8 z-10"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="hidden md:flex absolute md:-left-6 lg:-left-10 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#5d3fd3] bg-[#141414] items-center justify-center text-white hover:bg-[#5d3fd3]/20 hover:border-[#8a6ef0] transition-colors duration-300 shrink-0"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft size={14} />
          </motion.button>

          <motion.div
            variants={fadeUp}
            className="rounded-xl overflow-hidden shrink-0 mx-auto md:mx-0"
            style={{
              width: "clamp(140px, 40vw, 250px)",
              height: "clamp(180px, 50vw, 320px)",
            }}
          >
            <img
              src={profile2}
              alt="Rakib Hasan"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left min-w-0 w-full">
            <motion.div
              variants={fadeUp}
              className="text-[#5d3fd3] leading-none font-bold mb-2 sm:mb-4 select-none"
              style={{ fontSize: "clamp(3rem, 8vw, 5.625rem)" }}
            >
              "
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-white/90 font-medium max-w-[650px]"
              style={{
                fontSize: "clamp(1rem, 2.2vw, 1.75rem)",
                lineHeight: "clamp(1.5rem, 3.2vw, 2.75rem)",
              }}
            >
              As a Full Stack Developer, I love crafting modern, responsive,
              and user-friendly web experiences. I pay close attention to
              design, performance, and clean code to build websites that
              leave a lasting impression.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="text-[#5d3fd3] leading-none font-bold self-center md:self-end select-none mt-2"
              style={{ fontSize: "clamp(3rem, 8vw, 5.625rem)" }}
            >
              "
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="hidden md:flex absolute md:-right-6 lg:-right-10 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#5d3fd3] bg-[#141414] items-center justify-center text-white hover:bg-[#5d3fd3]/20 hover:border-[#8a6ef0] transition-colors duration-300 shrink-0"
            aria-label="Next testimonial"
          >
            <FaArrowRight size={14} />
          </motion.button>

          <motion.div variants={fadeUp} className="flex md:hidden gap-4 mt-1">
            <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#5d3fd3] bg-[#141414] flex items-center justify-center text-white active:bg-[#5d3fd3]/20">
              <FaArrowLeft size={13} />
            </button>
            <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#5d3fd3] bg-[#141414] flex items-center justify-center text-white active:bg-[#5d3fd3]/20">
              <FaArrowRight size={13} />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}