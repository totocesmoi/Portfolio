import { useState } from "react";

export default function Experience() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const experienceItems = [
    {
      id: 1,
      period: "09/2023 - ",
      title: "Full Stack Developer",
      institution: "Dufournier Industries",
      description:
        "I develop utility software in C# (.NET) to communicate with embedded machines, improving automation and system integration.",
      skills: ["C#", "WinForm", "Maui", "WPF", "Python"],
      icon: "💻",
    },
    {
      id: 2,
      period: "06/2022 - 09/2023",
      title: "Versatile Employees",
      institution: "Mc Donalds",
      description:
        "Versatile team member responsible for recording and preparing customer orders.",
      skills: [
        "Thoroughness",
        "Communication",
        "Teamwork",
      ],
      icon: "",
    },
    {
      id: 3,
      period: "2016 - ",
      title: "Regional Basketball Referee",
      institution: "FFBB",
      description:
        "Delivered custom web solutions for 12+ small businesses and startups. Specialized in responsive design, CMS integration, and SEO optimization that increased client traffic by an average of 37%.",
      skills: ["Thoroughness", "Leadership", "Communication"],
      icon: "",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full min-h-screen py-16 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down"
            className="text-2xl font-bold text-gray-400 mb-2"
          >
            PROFESSIONAL JOURNEY
          </h2>
          <h1 data-aos="fade-up" className="text-5xl font-bold mb-4">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99]">
              Experience
            </span>
          </h1>
          <div className="w-20 h-1 bg-[#00ff99] mx-auto shadow-[0_0_10px_rgba(0,255,153,0.7)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {experienceItems.map((item) => (
            <div
              data-aos="fade-up"
              key={item.id}
              className="relative border border-[#00ff99]/30 rounded-xl bg-gray-800/80 backdrop-blur-sm 
                   hover:bg-gray-700 transition-all duration-300
                   transform hover:-translate-y-2 shadow-xl overflow-hidden
                   group hover:border-[#00ff99]/60 hover:shadow-[0_0_15px_rgba(0,255,153,0.3)]"
              onMouseEnter={() => setActiveCard(item.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Glow effect container */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,153,0.1)_0%,_transparent_70%)] 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>

              {/* Top accent bar with subtle glow */}
              <div className="h-2 w-full bg-[#00ff99] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,255,153,0.6),transparent)] 
                          w-full h-full opacity-0 group-hover:opacity-100 
                          animate-[shimmer_2s_infinite]"
                ></div>
              </div>

              <div className="p-6 relative z-10">
                {/* Period badge with glow */}
                <div
                  className="absolute top-4 right-4 bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] 
                          text-xs text-[#1c1c22] px-3 py-1 rounded-full 
                          shadow-[0_0_8px_rgba(0,255,153,0.5)]"
                >
                  {item.period}
                </div>

                {/* Icon with hover glow */}
                <div
                  className="text-4xl mb-4 transition-all duration-300 
                          group-hover:text-[#00ff99] group-hover:drop-shadow-[0_0_8px_rgba(0,255,153,0.6)]"
                >
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00ff99] transition-colors duration-300">
                  {item.title}
                </h3>
                <h4 className="text-[#00ff99] text-sm mb-4">
                  {item.institution}
                </h4>
                <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Skills with enhanced glow */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] 
                            text-[#1c1c22] px-2 py-1 rounded-md 
                            shadow-[0_0_5px_rgba(0,255,153,0.5)]
                            hover:shadow-[0_0_10px_rgba(0,255,153,0.8)] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Active indicator with glow */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-[#00ff99] transition-all duration-300 
                        ${
                          activeCard === item.id
                            ? "w-full shadow-[0_0_10px_#00ff99]"
                            : "w-0"
                        }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
