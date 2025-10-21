import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../src/App/Ui/ThemeContext";
import ScrollProgressBar from "./ProgressBar/ScrollProgressBar";

// Define TypeScript interfaces
interface NavItem {
  label: string;
  href: string;
}

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
// LOGO TEXT
const LOGO = "Portfolio";

// LOGO IMAGE URL (dark mode toggle)
const CodeLogoUrl = (theme: "light" | "dark") =>
  theme === "dark"
    ? "https://cdn-icons-png.flaticon.com/512/711/711284.png"
    : "https://cdn-icons-png.flaticon.com/512/711/711284.png";
// Navbar
const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Tech-Stack", href: "#tech-stack" },
  { label: "Portfolio", href: "#portfolio" },
  //{ label: "Blogs", href: "#blogs" },
  //{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const themeContext = useContext(ThemeContext) as ThemeContextType;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const [scrolled, setScrolled] = useState<boolean>(false);

  if (!themeContext) {
    throw new Error("Navbar must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Handle scroll events to update active section and navbar appearance
  useEffect(() => {
    const handleScroll = (): void => {
      // Update scrolled state for compact header on scroll
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));

      let currentSection = "#hero";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < minDistance) {
            minDistance = distance;
            currentSection = `#${section}`;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Ensure body scroll is restored when component unmounts
      document.body.style.overflow = "auto";
    };
  }, [activeSection]);

  // Close mobile menu on window resize (if moving to desktop view)
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 z-50 w-full 
          ${
            theme === "dark"
              ? "bg-[#1c1c22] text-white"
              : "bg-white text-gray-900"
          }
          shadow-md transition-all duration-300
          ${scrolled ? "py-6" : "py-6"}
        `}
        aria-label="Main Navigation"
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2"
              aria-label="Home"
            >
              <img
                src={CodeLogoUrl(theme)}
                alt="Code Logo"
                className="w-6 h-6 md:w-8 md:h-8"
              />
              <span>{LOGO}</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-3 lg:space-x-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className={`
                      text-base lg:text-lg font-medium 
                      transition-colors 
                      pb-1
                      ${
                        item.href === activeSection
                          ? "text-[#00ff99]"
                          : theme === "dark"
                          ? "text-gray-200 hover:text-[#00ff99]"
                          : "text-gray-800 hover:text-[#00ff99]"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                  <span
                    className={`
                      absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff99]
                      transition-all duration-300 ease-in-out group-hover:w-full
                      ${item.href === activeSection ? "w-full" : ""}
                    `}
                  />
                </li>
              ))}

              {/* Theme Toggle Switch */}
              <li>
                <div
                  className="relative inline-block w-12 h-6 cursor-pointer"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`}
                  role="switch"
                  aria-checked={theme === "dark"}
                >
                  {/* Track */}
                  <div
                    className={`
                      absolute inset-0 rounded-full 
                      transition-colors duration-300
                      ${theme === "dark" ? "bg-blue-600" : "bg-gray-400"}
                    `}
                  />

                  {/* Thumb with better contrast */}
                  <div
                    className={`
                      absolute top-1/2 -translate-y-1/2 
                      w-6 h-6 rounded-full shadow-lg
                      transition-all duration-300 flex
                      items-center justify-center
                      ${
                        theme === "dark"
                          ? "translate-x-6 bg-gray-800 text-yellow-200"
                          : "translate-x-0 bg-white text-yellow-500"
                      }
                    `}
                  >
                    {theme === "dark" ? (
                      <span className="text-xs">🌙</span>
                    ) : (
                      <span className="text-xs">☀️</span>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`text-white font-medium transform transition-all duration-200 
             hover:scale-105 active:scale-95 flex items-center justify-center
             bg-gray-800/80 hover:bg-gray-800 rounded-lg 
             focus:outline-none focus:ring-2 focus:ring-white/50 
             focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer
             ${isMobileMenuOpen ? "px-3 py-3" : "px-4 py-4"}`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 transition-opacity duration-300"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Slide-in */}
      <nav
        className={`
          fixed top-0 right-0 z-50 h-full w-64 sm:w-72
          bg-[#1c1c22] text-white
          shadow-lg overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <span className="text-xl font-bold text-[#00ff99]">{LOGO}</span>
          <button
            onClick={toggleMobileMenu}
            className="relative w-8 h-8 focus:outline-none flex items-center justify-center text-white hover:text-[#00ff99] transition-colors duration-200 cursor-pointer"
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform duration-300 hover:rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="relative group">
              <a
                href={item.href}
                className={`
                  block px-6 py-3 
                  hover:bg-[#28282f] 
                  ${
                    item.href === activeSection
                      ? "text-[#00ff99]"
                      : "text-white hover:text-[#00ff99]"
                  }
                  transition-all duration-200
                  relative
                `}
                onClick={toggleMobileMenu}
              >
                {item.label}
                <span
                  className={`
                  absolute bottom-0 left-0 h-0.5 bg-[#00ff99]
                  transition-all duration-300 ease-in-out group-hover:w-full
                  ${item.href === activeSection ? "w-full" : "w-0"}
                `}
                ></span>
              </a>
            </li>
          ))}
          <li className="px-6 py-4">
            <div className="flex items-center">
              <div
                className="relative inline-block w-14 h-7 cursor-pointer overflow-hidden rounded-full"
                onClick={() => {
                  toggleTheme();
                }}
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                role="switch"
                aria-checked={theme === "dark"}
              >
                <div
                  className={`
                    absolute inset-0 transition-colors duration-300
                    ${theme === "dark" ? "bg-blue-800" : "bg-gray-600"}
                  `}
                />
                <div
                  className={`
                    absolute top-1/2 -translate-y-1/2 
                    w-6 h-6 bg-white rounded-full 
                    shadow-md transition-all duration-300
                    flex items-center justify-center text-sm
                    ${theme === "dark" ? "translate-x-7" : "translate-x-1"}
                  `}
                >
                  {theme === "dark" ? "🌙" : "☀️"}
                </div>
              </div>
              <span className="ml-3 text-sm text-gray-300">
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
              </span>
            </div>
          </li>
        </ul>
      </nav>
      {/* ProgressBar */}
      <ScrollProgressBar />
    </>
  );
}
