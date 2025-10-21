import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App/Ui/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSectionButtons = () => {
  const context = useContext(ThemeContext);
  const isDarkMode = context?.theme === "dark";

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-right" data-aos-delay="400" className="flex gap-4">
      {/*  View My Work Button */}
      <div className="relative group" data-aos="zoom-in-up">
        {/* Enhanced glow wrapper */}
        <div
          className={`absolute -inset-0.5 rounded-lg ${
            isDarkMode
              ? "bg-gradient-to-r from-emerald-400 to-green-400"
              : "bg-gradient-to-r from-emerald-500 to-green-500"
          } opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 group-hover:scale-105`}
        />

        <a
          href="#portfolio"
          className={`relative flex items-center justify-center gap-2 py-4 px-6 font-medium rounded-lg transition-all duration-300 z-10
      ${
        isDarkMode
          ? "bg-gradient-to-r from-emerald-400 to-green-400 text-gray-900 hover:from-emerald-300 hover:to-green-300"
          : "bg-gradient-to-r from-emerald-500 to-green-500 text-gray-900 hover:from-emerald-400 hover:to-green-400"
      }
      border ${
        isDarkMode ? "border-emerald-400/30" : "border-emerald-500/30"
      } hover:border-transparent
      shadow-lg ${
        isDarkMode ? "shadow-emerald-400/20" : "shadow-emerald-500/20"
      } hover:shadow-emerald-400/40`}
        >
          View My Work
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </a>
      </div>

      {/* My Tech Stack Button */}
      <div
        className="relative group"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        {/* Enhanced glow wrapper with animation */}
        <div
          className={`absolute -inset-0.5 rounded-lg ${
            isDarkMode
              ? "bg-gradient-to-r from-emerald-400 to-green-400"
              : "bg-gradient-to-r from-emerald-500 to-green-500"
          } opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 group-hover:scale-105`}
        />

        <a
          href="#tech-stack"
          className={`relative flex items-center justify-center gap-2 py-4 px-6 font-medium rounded-lg transition-all duration-300 z-10
      border ${
        isDarkMode
          ? "border-emerald-400 text-emerald-400 hover:text-gray-900"
          : "border-emerald-500 text-emerald-500 hover:text-gray-900"
      }
      bg-gradient-to-r ${
        isDarkMode
          ? "from-transparent via-emerald-900/10 to-transparent hover:from-emerald-400 hover:to-green-400"
          : "from-transparent via-emerald-100/50 to-transparent hover:from-emerald-500 hover:to-green-500"
      }
      shadow-lg ${
        isDarkMode ? "shadow-emerald-400/10" : "shadow-emerald-500/10"
      } hover:shadow-emerald-400/30`}
        >
          My Tech Stack
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AboutSectionButtons;
