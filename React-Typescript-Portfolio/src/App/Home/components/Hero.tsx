import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Ui/ThemeContext";
import SocialIcons from "../../../components/icons/SocialIcons";
import Buttons from "../../../components/Buttons/Buttons";
import "../../../Animation.css";

export default function HeroSection() {
  const themeProvider = useContext(ThemeContext);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Occasional Front-End Web Developer",
    "Full Stack Developer",
    "Regional Basketball Referee",
    "Mobile App Developer",
    "Advanced C# Developer",
  ];

  const theme = themeProvider?.theme ?? "light";

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, roles]);

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <article className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 mt-8 lg:mt-0">
          {/* Main Heading */}
          <h1
            data-aos="fade-right"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99]"
              data-aos="fade-right"
              data-aos-delay="100"
            >
               Hello!
            </span>
            <span
              className="pl-2 sm:pl-4"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              I'm Thomas Muzard
            </span>
          </h1>

          <div className="w-20 h-1 bg-[#00ff99] mx-auto lg:mx-0 shadow-[0_0_10px_rgba(0,255,153,0.7)]"></div>

          {/* Animated Subheading */}
          <div className="relative text-xl sm:text-2xl lg:text-3xl font-medium h-10 sm:h-12">
            <h2
              data-aos="fade-right"
              data-aos-delay="200"
              className="absolute top-0 left-0 w-full text-center lg:text-left"
            >
              <span className="inline-block min-w-[1ch]">{displayText}</span>
              <span className="ml-1 sm:ml-1.5 inline-block w-0.5 sm:w-1 h-6 sm:h-8 bg-[#00ff99] animate-blink align-middle"></span>
            </h2>
          </div>

          {/* Description Paragraph */}
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            <span className="font-medium">
              FullStack developer skilled in modern web, mobile and app tech,
            </span>{" "}
            responsive design, and performance optimization. Let&apos;s build
            something amazing together!
          </p>

          {/* Social Icons */}
          <div
            className="flex justify-center lg:justify-start mt-6"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <SocialIcons />
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <Buttons />
          </div>
        </div>

        {/* Image Section */}
        <div
          data-aos="fade-left"
          className="relative flex justify-center w-full lg:w-1/2"
        >
          <div
            className={`relative rounded-full p-1 overflow-hidden transition-all duration-300 
              ${
                theme === "dark"
                  ? "shadow-[0_0_15px_rgba(0,255,153,0.6)] hover:shadow-[0_0_25px_rgba(0,255,153,0.9)]"
                  : "shadow-[0_0_10px_rgba(0,255,153,0.4)] hover:shadow-[0_0_20px_rgba(0,255,153,0.7)]"
              } animate-bounce-slow w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px]`}
          >
            <div
              className={`rounded-full animate-spin-slow relative
                ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#00ff99] via-[#0099ff] to-[#00ff99]"
                    : "bg-gradient-to-r from-[#00ff99] via-[#0099ff] to-[#00ff99]"
                } p-1 w-full h-full`}
            >
              <div
                className={`${
                  theme === "dark" ? "bg-[#1c1c22]" : "bg-white"
                } rounded-full p-1 overflow-hidden w-full h-full`}
              >
                <img
                    src={`${import.meta.env.BASE_URL}ProfilPicture2.jpg`}
                  alt="ProfilPicture2 is not available"
                  className="rounded-full w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
