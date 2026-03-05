import { useState } from "react";

export default function Education() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const educationItems = [
    {
      id: 1,
      period: "2020 - 2021",
      title: "High school graduate",
      institution: "Godfroy de Bouillon",
      description:
        "This academic path combines scientific rigor and analytical thinking. " +
          "With Mathematics and Physics-Chemistry, it develops problem-solving, logic, a" +
          "nd a solid scientific foundation. The addition of Economics and Social Sciences" +
          "broadens perspectives on societal structures, economics, " +
          "and human behavior—fostering both technical and critical thinking skills.",
      skills: [
        "Mathematics",
        "Physical Chemistry",
        "Economic & Social Science",
      ],
      icon: "🎓",
    },
    {
      id: 2,
      period: "2021-2025",
      title: "BUT Informatique",
      institution: "IUT Clermont Auvergne",
      description:
        "Focused on software development, system design, data management, and IT project management. " +
          "It combines academic learning with hands-on experience",
      skills: ["Teamwork", "Soft Skills", "Hard Skill", "Design Pattern", "Communication Skill"],
      icon: "🎓",
    },
    {
      id: 3,
      period: "2025 - ",
      title: "Engineering School",
      institution: "ESIEA Laval",
      description:
        "This engineering school program emphasizes a comprehensive education in computer science, " +
          "covering programming, cybersecurity, embedded systems, and project management. " +
          "It combines theoretical knowledge with practical applications, preparing students for diverse roles in the tech industry.",
      skills: ["Programming", "Cybersecurity", "Embedded Systems", "Project Management"],
      icon: "🎓",
    },
  ];

  return (
    <section
      id="education"
      className="w-full min-h-screen py-16 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down"
            className="text-2xl font-bold text-gray-400 mb-2"
          >
            LEARNING JOURNEY
          </h2>
          <h1 data-aos="fade-up" className="text-5xl font-bold mb-4">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99]">
              Training
            </span>
          </h1>
          <div className="w-20 h-1 bg-[#00ff99] mx-auto shadow-[0_0_10px_rgba(0,255,153,0.7)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {educationItems.map((item) => (
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              key={item.id}
              className="relative border border-[#00ff99]/30 rounded-xl bg-gray-800/80 backdrop-blur-sm 
                       hover:bg-gray-700 transition-all duration-300
                       transform hover:-translate-y-2 shadow-xl overflow-hidden
                       group hover:border-[#00ff99]/60 hover:shadow-[0_0_20px_rgba(0,255,153,0.3)]"
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

              {/* Top accent bar with glow */}
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

                {/* Icon with glow */}
                <div
                  className="text-4xl mb-4 transition-all duration-300 
                              group-hover:text-[#00ff99] group-hover:drop-shadow-[0_0_12px_rgba(0,255,153,0.8)]"
                >
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00ff99] transition-colors duration-300">
                  {item.title}
                </h3>
                <h4 className="text-[#00ff99] text-sm mb-4 group-hover:drop-shadow-[0_0_8px_rgba(0,255,153,0.5)]">
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
                                shadow-[0_0_6px_rgba(0,255,153,0.5)]
                                hover:shadow-[0_0_12px_rgba(0,255,153,0.8)] transition-all duration-300"
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
                                ? "w-full shadow-[0_0_15px_#00ff99]"
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
