import { motion } from "framer-motion";

import email from "../../assets/icons/gmail.webp";
import facebook from "../../assets/icons/facebook.webp";
import github from "../../assets/icons/github-original.webp";
import whatsapp from "../../assets/icons/whatsapp.webp";

const contacts = [
  {
    title: "Email",
    value: "rakibsocial143@gmail.com",
    icon: email,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=rakibsocial143@gmail.com",
  },
  {
    title: "WhatsApp",
    value: "+880 1560046585",
    icon: whatsapp,
    color: "bg-green-500",
    link: "https://wa.me/8801560046585",
  },
  {
    title: "Facebook",
    value: "MD Rakib Islam",
    icon: facebook,
    color: "bg-blue-600",
    link: "https://facebook.com/rakibtnt69",
  },
  {
    title: "GitHub",
    value: "github.com/rakibdev",
    icon: github,
    color: "bg-gray-900",
    link: "https://github.com/rakibsocial143",
    invert: true,
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactCards() {
  return (
    <section className="bg-gray-400 pb-20 pt-10 px-5">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex text-4xl justify-center md:text-3xl lg:text-5xl font-extrabold text-[#0D2321] mt-10"
      >
        Contacts Us
      </motion.h2>
      <div className="w-14 h-1 justify-center mx-auto rounded-full bg-[#7C3AED] mt-3 mb-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariants}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {contacts.map((item) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              variants={cardVariants}
              whileTap={{ scale: 0.97 }}
              className="group block"
            >
              <div
                className="
                rounded-3xl
                border border-white/40
                bg-white/50
                backdrop-blur-xl
                p-6
                shadow-lg
                transition-all
                duration-300
                ease-out
                hover:shadow-2xl
                hover:-translate-y-1
                hover:bg-white/60
              "
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`${item.color} flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className={`w-6 h-6 object-contain ${item.invert ? "invert" : ""}`}
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-700 transition">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
