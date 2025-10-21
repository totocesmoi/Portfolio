import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 h-1.5">
      <div
        className="h-full transition-all duration-300 ease-out bg-[#00ff99] shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      >
        <div
          className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 
            bg-gradient-to-r from-[#00ff99]/40 to-[#00ff99]/80 blur-sm`}
        ></div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;
