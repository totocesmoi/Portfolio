import { useState, FormEvent } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Define interfaces
interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode; // Changed from JSX.Element to React.ReactNode
  href: string;
  label: string;
}

// Navigation links
const NAV_LINKS: FooterLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  //{ label: "Contact", href: "#contact" },
];

// Social media links
const SOCIAL_LINKS: SocialLink[] = [
  { icon: <FaGithub />, href: "https://github.com/totocesmoi", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/muzard-thomas/", label: "LinkedIn" },
  //{ icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
  //{ icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#1c1c22] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-700 pb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff99] to-[#0099ff]">
              Portfolio
            </h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Crafting modern web experiences with creativity and precision.
              Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff99] transition-colors duration-300"
                  aria-label={`Visit my ${link.label}`}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#00ff99] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#00ff99] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#00ff99] mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Stay updated with the latest projects and insights.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-[#28282f] border border-gray-700 rounded-md text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00ff99] transition-all duration-200 pr-24"
                  required
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#00ff99] text-[#1c1c22] px-3 py-1 rounded-md text-sm font-medium hover:bg-[#00dd99] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-sm text-[#00ff99] animate-fade-in">
                  Thanks for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
