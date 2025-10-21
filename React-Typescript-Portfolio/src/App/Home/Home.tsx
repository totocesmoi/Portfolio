import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HerSection from "./components/Hero";
import AboutSection from "./components/About";
import Education from "./components/Education";
import CodeLoader from "../../components/Loading/CodeLoader";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
//import Blog from "./components/Blog";
//import Contact from "./components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS after loading completes
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Initialize AOS after content is loaded
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CodeLoader />
      </div>
    );
  }

  return (
    <main>
      <HerSection />
      <AboutSection />
      <Education />
      <Experience />
      <TechStack />
      <Portfolio />
    </main>
  );
}
