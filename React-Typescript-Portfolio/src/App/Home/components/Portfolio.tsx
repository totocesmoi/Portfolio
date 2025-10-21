import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "web" | "mobile" | "api" | "other";
  technologies: string[];
  link: string;
  github?: string;
  featured: boolean;
}

interface CategoryFilter {
  id: string;
  label: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categoryFilters: CategoryFilter[] = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "api", label: "API" },
    { id: "web", label: "Web Development" },
    { id: "other", label: "Other Projects" },
  ];

  const projects: Project[] = [
    {
      id: 2,
      title: "Flora Fauna GO Mobile APP",
      description:
        "FloraFauna GO is a mobile app that gamifies nature exploration by letting users discover " +
          "and collect virtual plants, animals, and insects in real-life locations, similar to Pokémon GO. " +
          "It encourages outdoor activity, " +
          "environmental awareness, and builds an interactive encyclopedia of species.",
      image:
        "/FloraFaunaGO.png",
      category: "mobile",
      technologies: ["React", "Zus Tand", "React Query"],
      link: "https://example.com/project1",
      github: "https://github.com/totocesmoi/FloraFaunaGO-MobileApp",
      featured: false,
    },
    {
      id: 1,
      title: "Flora Fauna GO API",
      description:
        "The FloraFauna GO API powers the mobile app by handling user data, species tracking, " +
          "geolocation, and quest management. It ensures secure, scalable interactions between the " +
          "app and the database, " +
          "enabling real-time updates, progress tracking, and species collection syncing.",
      image:
        "/API.png",
      category: "api",
      technologies: ["C#", "Entity Framework", "JWT", "Python"],
      link: "https://codefirst.iut.uca.fr/containers/FloraFauna_GO-api/swagger/index.html",
      github: "https://github.com/totocesmoi/FloraFaunaGO-Api",
      featured: true,
    },
  ];

  const handleFilterChange = (filter: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsAnimating(false);
    }, 300);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down"
            className="text-2xl font-bold text-gray-400 mb-2"
          >
            MY WORK
          </h2>
          <h1 data-aos="fade-up" className="text-5xl font-bold mb-4">
            Featured Projects
          </h1>
          <div className="w-20 h-1 bg-[#00ff99] mx-auto shadow-[0_0_10px_rgba(0,255,153,0.7)]"></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className=" max-w-2xl mx-auto"
          >
            A selection of my recent projects showcasing my skills in web
            development, mobile applications, and UI/UX design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map((filter) => (
            <button
              data-aos="fade-up"
              data-aos-delay="300"
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer 
                ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-[#1c1c22]"
                    : "bg-gray-800 text-gray-300 hover:bg-[#00ff99] hover:text-[#1c1c22]"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          {filteredProjects.map((project) => (
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:border-[#00ff99] transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-[#1c1c22] text-xs px-2 py-1 rounded-md">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-[#1c1c22] px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-[#00ff99] text-[#1c1c22] text-sm font-medium rounded-md hover:bg-transparent hover:border hover:border-[#00ff99] hover:text-[#00ff99] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#00ff99]/50"
                  >
                    View Project
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-transparent border border-[#00ff99] text-[#00ff99] text-sm font-medium rounded-md hover:bg-[#00ff99] hover:text-[#1c1c22] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#00ff99]/50 active:shadow-[#00ff99]/70 hover:scale-105"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom indicator */}
              <div
                className={`h-1 bg-[#00ff99] transition-all duration-300 ${
                  hoveredProject === project.id ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
