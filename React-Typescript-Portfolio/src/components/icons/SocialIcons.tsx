import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App/Ui/ThemeContext";
import { FaGithub, FaDiscord, FaLinkedin} from "react-icons/fa";
// import { SiTelegram } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialIcons = () => {
  const { theme } = useContext(ThemeContext) || { theme: "light" };
  const isDarkMode = theme === "dark";

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Icon data with their colors for consistent styling
  const iconData = [
    /*{
      name: "Facebook",
      Icon: FaFacebook,
      lightModeColor: "rgba(37, 99, 235, 0.7)",
      darkModeColor: "rgba(59, 130, 246, 0.7)",
      lightModeHoverColor: "rgb(37, 99, 235)",
      darkModeHoverColor: "rgb(59, 130, 246)",
      url: "https://facebook.com",
      aos: "fade-up",
      aosDelay: 100,
    },
    {
      name: "Telegram",
      Icon: SiTelegram,
      lightModeColor: "rgba(96, 165, 250, 0.7)",
      darkModeColor: "rgba(96, 165, 250, 0.7)",
      lightModeHoverColor: "rgb(96, 165, 250)",
      darkModeHoverColor: "rgb(96, 165, 250)",
      url: "https://telegram.org",
      aos: "fade-up",
      aosDelay: 200,
    },*/
    {
      name: "Discord",
      Icon: FaDiscord,
      lightModeColor: "rgba(99, 102, 241, 0.7)",
      darkModeColor: "rgba(129, 140, 248, 0.7)",
      lightModeHoverColor: "rgb(99, 102, 241)",
      darkModeHoverColor: "rgb(129, 140, 248)",
      url: "https://discordapp.com/users/765309753261424681",
      aos: "fade-up",
      aosDelay: 300,
    },

    {
      name: "GitHub",
      Icon: FaGithub,
      lightModeColor: "rgba(31, 41, 55, 0.7)",
      darkModeColor: "rgba(107, 114, 128, 0.7)",
      lightModeHoverColor: "rgb(31, 41, 55)",
      darkModeHoverColor: "rgb(156, 163, 175)",
      url: "https://github.com/totocesmoi",
      aos: "fade-up",
      aosDelay: 400,
    },
    {
      name: "LinkedIn",
      Icon: FaLinkedin,
      lightModeColor: "rgba(99, 102, 241, 0.7)",
      darkModeColor: "rgba(129, 140, 248, 0.7)",
      lightModeHoverColor: "rgb(99, 102, 241)",
      darkModeHoverColor: "rgb(129, 140, 248)",
      url: "https://www.linkedin.com/in/muzard-thomas/",
      aos: "fade-up",
      aosDelay: 300,
    },
    /*{
      name: "GitLab",
      Icon: FaGitlab,
      lightModeColor: "rgba(234, 88, 12, 0.7)",
      darkModeColor: "rgba(249, 115, 22, 0.7)",
      lightModeHoverColor: "rgb(234, 88, 12)",
      darkModeHoverColor: "rgb(249, 115, 22)",
      url: "https://gitlab.com",
      aos: "fade-up",
      aosDelay: 500,
    },*/
  ];

  // Theme-dependent base text color
  const baseTextColor = isDarkMode ? "text-gray-200" : "text-gray-700";

  // Enhanced base and hover styles with reduced size
  const iconBaseStyle = "transition-all duration-300 ease-in-out";
  const iconHoverStyle = "transform scale-125";

  // Container background based on theme
  const containerBg = isDarkMode ? "bg-transparent" : "bg-transparent";

  return (
    <div
      className={`flex gap-8 text-2xl pt-4 rounded-lg ${containerBg}`}
      data-aos="fade-up"
      data-aos-delay="50"
    >
      {iconData.map(
        (
          {
            name,
            Icon,
            lightModeColor,
            darkModeColor,
            lightModeHoverColor,
            darkModeHoverColor,
            url,
            aos,
            aosDelay,
          },
          index
        ) => {
          // Determine colors based on current theme
          const glowColor = isDarkMode ? darkModeColor : lightModeColor;
          const hoverColor = isDarkMode
            ? darkModeHoverColor
            : lightModeHoverColor;

          return (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={name}
              data-aos={aos}
              data-aos-delay={aosDelay}
            >
              {/* Outer glow effect - visible on hover */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
                  transform: "scale(1.7)",
                  filter: "blur(6px)",
                  zIndex: -1,
                }}
              />

              {/* Inner glow effect - visible on hover */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 60%)`,
                  transform: "scale(1.3)",
                  filter: "blur(3px)",
                  zIndex: -1,
                }}
              />

              {/* Icon with custom hover effects */}
              <div className="relative z-10">
                <Icon
                  className={`${iconBaseStyle} ${baseTextColor} group-hover:${iconHoverStyle}`}
                  style={{
                    filter: "drop-shadow(0 0 0 transparent)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = `drop-shadow(0 0 4px ${glowColor}) drop-shadow(0 0 8px ${glowColor})`;
                    e.currentTarget.style.color = hoverColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "drop-shadow(0 0 0 transparent)";
                    e.currentTarget.style.color = isDarkMode
                      ? "rgb(229, 231, 235)"
                      : "rgb(55, 65, 81)";
                  }}
                />
              </div>
            </a>
          );
        }
      )}
    </div>
  );
};

export default SocialIcons;
