import { useContext } from "react";
import { ThemeContext } from "../../Ui/ThemeContext";
import Boxs from "../Box/Boxs";
import AboutSectionButtons from "../../../components/Buttons/AboutSectionButtons";

export default function AboutSection() {
  const { theme } = useContext(ThemeContext)!;
  const About = "About";
  const Me = "Me";
  // const imageUrl =
  //   "https://www.shutterstock.com/image-illustration/cool-anime-guy-casual-outfit-600nw-2258372411.jpg";

  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 "
    >
      <article className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 w-full max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-[48%] flex justify-center order-1 lg:order-1">
          {" "}
          {/* Reduced from 50% to 48% */}
          <div
            data-aos="fade-up"
            className="relative w-full max-w-[368px] xl:max-w-[384px]" /* Reduced from ~400px */
          >
            {/* Glow Background */}
            <div
              className={`absolute inset-0 rounded-xl blur-lg opacity-80 transform scale-[0.98]
                ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#00ff99]/50 via-[#0099ff]/40 to-[#00ff99]/50"
                    : "bg-gradient-to-br from-[#00ff99]/40 via-[#0099ff]/30 to-[#00ff99]/40"
                } animate-pulse-slow`}
              aria-hidden="true"
            />

            {/* Image Container */}
            <div
              className={`relative p-1.5 overflow-hidden transition-all duration-500 rounded-xl
                ${
                  theme === "dark"
                    ? "shadow-[0_0_30px_rgba(0,255,153,0.7)] hover:shadow-[0_0_50px_rgba(0,255,153,1)]"
                    : "shadow-[0_0_25px_rgba(0,255,153,0.5)] hover:shadow-[0_0_40px_rgba(0,255,153,0.8)]"
                } hover:scale-[1.02]`}
            >
              {/* Gradient Border */}
              <div
                className={`animate-spin-slow relative rounded-xl
                  ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-[#00ff99] via-[#0099ff] to-[#00ff99]"
                      : "bg-gradient-to-br from-[#00ff99] via-[#0099ff] to-[#00ff99]"
                  } p-1.5`}
              >
                <div
                  className={`bg-${
                    theme === "dark" ? "[#1c1c22]" : "white"
                  } rounded-lg overflow-hidden`}
                >
                  <img
                      src={`${import.meta.env.BASE_URL}ImageProfil.jpg`}
                    alt="Test"
                    className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-7/12 order-1 lg:order-2 space-y-6 sm:space-y-8">
          <h1
            data-aos="fade-down"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left"
          >
            <span>{About}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] pl-2 sm:pl-3 md:pl-4">
              {Me}
            </span>
          </h1>
          <div className="w-20 h-1 bg-[#00ff99] shadow-[0_0_10px_rgba(0,255,153,0.7)] mx-auto lg:mx-0"></div>
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            data-aos="fade-right"
          >
            I'm Thomas Muzard, I’m currently a third-year Computer Science student (BUT Informatique),
            completing my studies through a work-study program at Dufournier Industries.
            Passionate about technology especially the Microsoft ecosystem—I enjoy building
            cross-platform applications structured with solid design patterns.
            Beyond my technical skills as a developer, I’m also a certified basketball referee at
            the regional level..
          </p>
          {/* Short Info */}
          <div className="flex justify-center lg:justify-start">
            <Boxs />
          </div>
          {/* Action Buttons */}
          <div className="flex justify-center lg:justify-start">
            <AboutSectionButtons />
          </div>
        </div>
      </article>
    </section>
  );
}
