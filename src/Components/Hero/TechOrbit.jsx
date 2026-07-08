import { useMemo } from "react";
import profile from "../../assets/profile.png";
import { motion } from "framer-motion";



const ICONS = [
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const RING_SIZE = 500;
const ICON_SIZE = 100;
const BOX_SIZE = RING_SIZE + 100;

const TechOrbit = () => {
  const positions = useMemo(() => {
    const radius = RING_SIZE / 2;
    return ICONS.map((icon, i) => {
      const angle = (i / ICONS.length) * 2 * Math.PI - Math.PI / 2;
      const x = radius + radius * Math.cos(angle) - ICON_SIZE / 2;
      const y = radius + radius * Math.sin(angle) - ICON_SIZE / 2;
      return { ...icon, x, y };
    });
  }, []);

  return (
    <div
      className="relative mx-auto
        w-[260px] h-[220px]
        sm:w-[340px] sm:h-[320px]
        md:w-[440px] md:h-[520px]
        lg:w-[420px] lg:h-[580px]
        xl:w-[620px] xl:h-[640px]"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="absolute 
         md:top-110 md:left-100 lg:top-128 lg:left-70 xl:top-140 xl:left-110 left-58 top-45 origin-center
          scale-[0.42]
          sm:scale-[0.548]
          md:scale-[0.71]
          lg:scale-[0.653]
          xl:scale-80"
        style={{
          width: BOX_SIZE,
          height: BOX_SIZE,
          marginLeft: -BOX_SIZE / 2,
          marginTop: -BOX_SIZE / 2,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[420px] h-[420px] rounded-full bg-emerald-500/20 blur-[120px]" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={profile}
            alt="Profile"
            className="mr-120 mb-80 h-auto object-contain"
          />
        </div>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow group"
          style={{
            width: RING_SIZE,
            height: RING_SIZE,
            background: `
            radial-gradient(circle at center, transparent 68%, rgba(168,85,247,.7) 69%, transparent 72%),
            radial-gradient(circle at center, transparent 73%, rgba(192,132,252,.45) 75%, transparent 78%)`,
            filter: "drop-shadow(0 0 18px #c084fc)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow group"
          style={{ width: RING_SIZE, height: RING_SIZE }}
        >
          {positions.map((icon) => (
            <div
              key={icon.name}
              className="absolute orbit-icon group-hover:[animation-play-state:paused]"
              style={{
                left: icon.x,
                top: icon.y,
                width: ICON_SIZE,
                height: ICON_SIZE,
                animation: "counter-spin 18s linear infinite",
              }}
            >
              <div className="orbit-bubble">
                <img src={icon.src} alt={icon.name} title={icon.name} />
              </div>
            </div>
          ))}
        </div>

        <style>{`
        .animate-spin-slow {
          animation: spin 18s linear infinite;
        }
        .group:hover.animate-spin-slow {
          animation-play-state: paused;
        }

        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Spins each icon in the opposite direction of the ring so the
           logos stay upright instead of rotating with the orbit. */
        @keyframes counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .orbit-bubble {
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.12);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }

        .orbit-bubble img {
          width: 55%;
          height: 55%;
          object-fit: contain;
        }

        .orbit-bubble:hover {
          transform: scale(1.25);
          box-shadow: 0 0 0 4px rgba(168,85,247,0.35), 0 8px 20px rgba(168,85,247,0.4);
          z-index: 20;
        }
      `}</style>
      </motion.div>
    </div>
  );
};

export default TechOrbit;