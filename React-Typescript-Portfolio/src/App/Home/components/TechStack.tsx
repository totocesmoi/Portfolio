import React, { useState } from "react";

interface TechSkill {
  id: number;
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "design";
  proficiency: number; // 1-5 scale
}

interface CategoryFilter {
  id: string;
  label: string;
}

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const categoryFilters: CategoryFilter[] = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools & DevOps" },
    { id: "design", label: "Design" },
  ];

  const techSkills: TechSkill[] = [
    // Frontend
    { id: 1, name: "React", icon: "⚛️", category: "frontend", proficiency: 5 },
    {
      id: 2,
      name: "TypeScript",
      icon: "📘",
      category: "frontend",
      proficiency: 4,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: "📜",
      category: "frontend",
      proficiency: 4,
    },
    { id: 4, name: "HTML5", icon: "🌐", category: "frontend", proficiency: 5 },
    { id: 5, name: "CSS3", icon: "🎨", category: "frontend", proficiency: 4 },
    {
      id: 6,
      name: "PHP",
      icon: "💨",
      category: "frontend",
      proficiency: 5,
    },

    // Backend
    { id: 7, name: "C", icon: "🇨", category: "backend", proficiency: 5 },
    { id: 8, name: "C++", icon: "C➕➕", category: "backend", proficiency: 4 },
    { id: 9, name: "Java", icon: "🃏", category: "backend", proficiency: 4 },
    {
      id: 10,
      name: "MongoDB",
      icon: "🍃",
      category: "backend",
      proficiency: 3,
    },
    {
      id: 11,
      name: "PostgreSQL",
      icon: "🐘",
      category: "backend",
      proficiency: 5,
    },
    {
      id: 12,
      name: "C#",
      icon: "🔥",
      category: "backend",
      proficiency: 5,
    },
    {
      id: 13,
      name: "Swift",
      icon: "🎯",
      category: "backend",
      proficiency: 4,
    },
    {
      id: 14,
      name: "Kotlin",
      icon: "🃏",
      category: "backend",
      proficiency: 3,
    },
    {
      id: 15,
      name: "Python",
      icon: "🐍",
      category: "backend",
      proficiency: 5,
    },

    // Tools & DevOps
    { id: 16, name: "Git", icon: "📊", category: "tools", proficiency: 4 },
    { id: 17, name: "GitHub", icon: "🐙", category: "tools", proficiency: 5 },
    { id: 18, name: "VS Code", icon: "📝", category: "tools", proficiency: 5 },
    { id: 19, name: "Docker", icon: "🐳", category: "tools", proficiency: 3 },

    // Design
    { id: 20, name: "Figma", icon: "🖌️", category: "design", proficiency: 4 },
  ];

  const handleCategoryChange = (category: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsAnimating(false);
    }, 300);
  };

  const filteredSkills =
    activeCategory === "all"
      ? techSkills
      : techSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="tech-stack" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down"
            className="text-2xl font-bold text-gray-400 mb-2"
          >
            TECHNOLOGIES
          </h2>
          {/* #00ff99 */}
          <h1 data-aos="fade-up" className="text-5xl font-bold mb-4">
            My Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99]">
              Stack
            </span>
          </h1>
          <div className="w-20 h-1 bg-[#00ff99] mx-auto shadow-[0_0_10px_rgba(0,255,153,0.7)]"></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className=" max-w-2xl mx-auto pt-8"
          >
            These are the technologies I've worked with. I'm always exploring
            new tools and frameworks to expand my skill set.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map((category) => (
            <button
              data-aos="fade-up"
              data-aos-delay="300"
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer  
                ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-[#1c1c22]"
                    : "bg-gray-800 text-gray-300 hover:bg-[#00ff99] hover:text-[#1c1c22]"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          {filteredSkills.map((skill) => (
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              key={skill.id}
              className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-[#00ff99] transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {skill.name}
              </h3>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full mx-1 ${
                      i < skill.proficiency ? "bg-[#00ff99]" : "bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
