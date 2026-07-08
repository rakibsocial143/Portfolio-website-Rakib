import { FaFacebookF, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const contacts = [
  {
    title: "Email",
    value: "rakibsocial143@gmail.com",
    icon: <MdEmail />,
    color: "bg-blue-500",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=rakibsocial143@gmail.com",
  },
  {
    title: "WhatsApp",
    value: "+880 1560046585",
    icon: <FaWhatsapp />,
    color: "bg-green-500",
    link: "https://wa.me/8801560046585",
  },
  {
    title: "Facebook",
    value: "MD Rakib Islam",
    icon: <FaFacebookF />,
    color: "bg-blue-600",
    link: "https://facebook.com/rakibtnt69",
  },
  {
    title: "GitHub",
    value: "github.com/rakibdev",
    icon: <FaGithub />,
    color: "bg-gray-900",
    link: "https://github.com/rakibsocial143",
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.4, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 14,
      mass: 0.6,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -90, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 12,
      delay: 0.15,
    },
  },
};

export default function ContactCards() {
  return (
    <section className="bg-gray-400 pb-20 pt-10 px-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex text-4xl justify-center md:text-3xl lg:text-5xl font-extrabold text-[#0D2321] mt-10"
      >
        Contacts Us
      </motion.h2>
      <div className="w-14 h-1 justify-center mx-auto rounded-full bg-[#7C3AED] mt-3 mb-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
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
              whileHover={{ scale: 1.04 }}
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
                transition-shadow
                duration-300
                hover:shadow-2xl
              "
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    variants={iconVariants}
                    className={`${item.color} flex h-12 w-12 items-center justify-center rounded-full text-2xl text-white shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>

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