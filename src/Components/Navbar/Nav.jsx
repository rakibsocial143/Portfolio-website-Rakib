import { useState } from "react";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (isActive) =>
    isActive
      ? `relative overflow-hidden px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 text-white bg-white/[0.05] shadow-[0_0_25px_rgba(255,255,255,0.18),inset_0_0_20px_rgba(255,255,255,0.04)] before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:shadow-[0_0_12px_rgba(255,255,255,0.8)] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:shadow-[0_0_12px_rgba(255,255,255,0.8)]`
      : "px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 text-base md:text-[16px] lg:text-[18px] font-normal text-[#d8d8d8] hover:text-white transition";

  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="flex justify-center w-full">
        <div className="w-full border border-white/10 rounded-md overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.35)] relative z-30 bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150">
          <div className="flex items-center justify-between lg:grid lg:grid-cols-5">
            <div className="lg:col-span-1">
              <Logo />
            </div>

            <div className="hidden md:flex justify-center lg:col-span-3">
              <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
                Home
              </NavLink>
              <div className="w-px bg-white/10" />

              <div className="hidden md:flex px-6 py-4 lg:px-8 lg:py-5 items-center justify-center">
                <Sparkles
                  size={26}
                  strokeWidth={2.5}
                  className="text-white rotate-45 lg:w-[30px] lg:h-[30px]"
                />
              </div>
              <div className="hidden md:block w-px bg-white/10" />

              <NavLink
                to="/about"
                className={({ isActive }) => linkClass(isActive)}
              >
                About Me
              </NavLink>
              <div className="w-px bg-white/10" />

              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `hidden lg:block ${linkClass(isActive)}`
                }
              >
                My Skills
              </NavLink>
              <div className="hidden lg:block w-px bg-white/10" />
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `hidden lg:block ${linkClass(isActive)}`
                }
              >
                Contacts
              </NavLink>
            </div>

            <div className="hidden lg:flex justify-end lg:col-span-1">
              <button
                type="button"
                className="group relative flex items-center gap-2 mx-3 px-6 py-3 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-[#5B21B6]/80 to-[#3e2b5e]/80 backdrop-blur-md border border-[#7C3AED]/60 shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-[1.03]"
              >
                <span>Let's Go</span>
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden relative z-40 p-3 text-white cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/[0.03] backdrop-blur-xl ${
              isOpen ? "max-h-[600px] border-t border-white/10" : "max-h-0"
            }`}
          >
            <div className="flex flex-col">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `md:hidden ${linkClass(isActive)}`}
              >
                Home
              </NavLink>
              <div className="h-px bg-white/10 md:hidden" />
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `md:hidden ${linkClass(isActive)}`}
              >
                About Me
              </NavLink>
              <div className="h-px bg-white/10 md:hidden" />

              <NavLink
                to="/skills"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => linkClass(isActive)}
              >
                My Skills
              </NavLink>
              <div className="h-px bg-white/10" />
              <NavLink
                to="/contacts"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => linkClass(isActive)}
              >
                Contacts
              </NavLink>
              <div className="h-px bg-white/10" />
              <div className="p-4">
                <button
                  type="button"
                  className="group relative w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-[#5B21B6]/80 to-[#3e2b5e]/80 backdrop-blur-md border border-[#7C3AED]/60 shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.6)]"
                >
                  <span>Let's Go</span>
                  <ArrowRight
                    size={22}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;