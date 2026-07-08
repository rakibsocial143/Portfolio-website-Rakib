// import { motion } from "framer-motion";

// const HeroTitle = () => {
//   return (
//     <div className="">
//       <section 
//       className="relative xl:min-h-[310px] xl:min-w-[650px] xl:pl-20 min-h-[200px] md:min-h-[340px] md:mt-80 lg:min-h-[330px] lg:min-w-[480px] flex items-center sm:px-6 lg:-top-30"
//       >
//         <div className="pointer-events-none absolute -top-32 -left-20 w-96 h-96 rounded-full bg-emerald-500/20 blur-[100px]" />
//         <div className="pointer-events-none absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-emerald-400/10 blur-[120px]" />
//         <div className="z-0">
//           <motion.h1
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-white font-extrabold tracking-tight pl-25 text-3xl w-80 lg:w-[440px] sm:text-5xl md:w-130 md:ml-20 md:text-5xl lg:text-[60px] xl:text-[70px] xl:font-extrabold leading-[1.1] lg:pl-0 lg:ml-5 xl:w-120"
//           >
//             Crafting{" "}
//             <em className="italic font-serif text-emerald-400">
//               High Performance
//             </em>{" "}
//             Websites That{" "}
//             <em className="italic font-serif text-emerald-400">Stand Out</em>
//           </motion.h1>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroTitle;





import { motion } from "framer-motion";
import useIsMobile from "./useMobiel";

const HeroTitle = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative flex items-center md:top-10 lg:top-10 justify-center lg:justify-start w-full lg:w-auto px-4 sm:px-6 py-10 lg:py-0">
      <div className="pointer-events-none absolute -top-32 -left-20 w-96 h-96 rounded-full bg-emerald-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-emerald-400/10 blur-[120px]" />

      <motion.h1
        initial={isMobile ? false : { opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={isMobile ? { duration: 0 } : { duration: 0.8 }}
        viewport={{ once: true }}
        className="text-white font-extrabold tracking-tight text-center lg:text-left
          text-3xl mt-8 w-[800px] sm:text-4xl md:min-w-[600px] lg:min-w-[400px] md:text-left md:text-5xl lg:text-[56px] xl:text-[70px]
          leading-[1.1] max-w-[90%]  sm:max-w-md lg:max-w-lg xl:max-w-xl"
      >
        Crafting{" "}
        <em className="italic font-serif text-emerald-400">High Performance</em>{" "}
        Websites That{" "}
        <em className="italic font-serif text-emerald-400">Stand Out.</em>
      </motion.h1>
    </section>
  );
};

export default HeroTitle;