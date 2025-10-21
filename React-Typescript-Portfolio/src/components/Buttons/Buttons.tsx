import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App/Ui/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Buttons = () => {
  const { theme } = useContext(ThemeContext) ?? { theme: "light" };
  const isDarkMode = theme === "dark";

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-right" data-aos-delay="400" className="flex gap-4">
      {/* Download CV Button */}
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
          href={`${import.meta.env.BASE_URL}CV_2025.pdf`}
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
          Download CV
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      {/* Hire Me Button */}
      <div
        className="relative group"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        <div
          className={`absolute -inset-0.5 rounded-lg ${
            isDarkMode
              ? "bg-gradient-to-r from-emerald-400 to-green-400"
              : "bg-gradient-to-r from-emerald-500 to-green-500"
          } opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 group-hover:scale-105`}
        />

        <a
          href="#about"
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
          About Me
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Buttons;
