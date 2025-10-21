import React, { useState } from "react";

interface CategoryFilter {
  id: string;
  label: string;
}

const Blog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const categoryFilters: CategoryFilter[] = [
    { id: "all", label: "All Articles" },
    { id: "technology", label: "Technology" },
    { id: "design", label: "Design" },
    { id: "business", label: "Business" },
    { id: "personal", label: "Personal" },
  ];

  interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: "technology" | "design" | "business" | "personal";
    tags: string[];
    date: string;
    readTime: string;
    author: string;
    featured: boolean;
  }

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of React in 2023",
      excerpt: "Exploring the latest trends and features in React ecosystem",
      content: "",
      image:
        "https://static.vecteezy.com/system/resources/previews/049/401/766/non_2x/react-icon-on-white-square-button-free-png.png",
      category: "technology",
      tags: ["React", "Frontend", "JavaScript"],
      date: "2023-05-15",
      readTime: "8 min read",
      author: "Jane Developer",
      featured: true,
    },
    {
      id: 2,
      title: "UX Principles for Modern Web Apps",
      excerpt: "Key design principles to improve user experience",
      content: "",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*oxK0EDien5p2_sIm.",
      category: "design",
      tags: ["UX", "Design", "UI"],
      date: "2023-04-22",
      readTime: "6 min read",
      author: "Alex Designer",
      featured: true,
    },
    {
      id: 3,
      title: "Building Scalable Microservices",
      excerpt: "Architecture patterns for growing applications",
      content: "",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHohEEguHyyOg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1685162806957?e=2147483647&v=beta&t=t0esxHsPahQNtRuA6sFfiQ2MHZM2KDKA74V7r5pCUR4",
      category: "technology",
      tags: ["Backend", "Architecture", "Node.js"],
      date: "2023-03-10",
      readTime: "10 min read",
      author: "Sam Engineer",
      featured: false,
    },
    {
      id: 4,
      title: "Remote Work Productivity Tips",
      excerpt: "How to stay productive while working from home",
      content: "",
      image:
        "https://islucid.com/wp-content/uploads/2023/02/8968947_4028561.jpg",
      category: "business",
      tags: ["Productivity", "Remote Work"],
      date: "2023-02-28",
      readTime: "5 min read",
      author: "Taylor Writer",
      featured: true,
    },
    {
      id: 5,
      title: "My Journey Learning TypeScript",
      excerpt: "Personal experiences transitioning from JavaScript",
      content: "",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*dSEr1chkE6quhDeOI4I-7w.jpeg",
      category: "personal",
      tags: ["TypeScript", "Learning"],
      date: "2023-01-15",
      readTime: "7 min read",
      author: "Chris Coder",
      featured: false,
    },
    {
      id: 6,
      title: "Sustainable Web Design Practices",
      excerpt: "Reducing the environmental impact of websites",
      content: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdg-tJIK78Hu--dqeJBhrb2UnEIqtTW56SGg&s",
      category: "design",
      tags: ["Sustainability", "Web Design"],
      date: "2022-12-05",
      readTime: "9 min read",
      author: "Eco Designer",
      featured: false,
    },
  ];

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredPosts =
    activeFilter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  return (
    <section id="blogs" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            data-aos="fades-down"
            className="text-2xl font-bold text-gray-400 mb-2"
          >
            BLOG
          </h2>
          <h1 data-aos="fade-up" className="text-5xl font-bold mb-4">
            Latest Articles
          </h1>
          <div className="w-20 h-1 bg-[#00ff99] mx-auto shadow-[0_0_10px_rgba(0,255,153,0.7)]"></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-2xl mx-auto "
          >
            Thoughts, stories and ideas about technology, design and more.
          </p>
        </div>
        {/* Category Filter */}{" "}
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
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                {post.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-[#1c1c22] text-xs px-2 py-1 rounded-md">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-white mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-white mb-4">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-[#1c1c22] px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-white">By {post.author}</span>
                  <a
                    href={`/blog/${post.id}`}
                    className="text-sm font-medium text-[#00ff99] hover:text-[#00cc99] transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>

              {/* Bottom indicator */}
              <div
                className={`h-1 bg-[#00ff99] transition-all duration-300 ${
                  hoveredPost === post.id ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
