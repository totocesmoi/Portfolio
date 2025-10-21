import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // fatch API from formspree
      const response = await fetch(
        "https://<ReplaceWithYourAPIKeyFrom(Formspree)>",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error("Submission failed");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen py-16 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down"
            className="text-2xl font-bold text-gray-400 mb-2"
          >
            GET IN TOUCH
          </h2>
          <h1 data-aos="fade-up" className="text-5xl font-bold mb-4">
            Contact{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Me
            </span>
          </h1>
          <div className="w-20 h-1 bg-[#00ff99] mx-auto shadow-[0_0_10px_rgba(0,255,153,0.7)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div
            data-aos="fade-right"
            className="relative border border-[#00ff99]/30 rounded-xl bg-gray-800/80 backdrop-blur-sm 
                     p-8 shadow-xl hover:shadow-[0_0_20px_rgba(0,255,153,0.3)] transition-all duration-300"
          >
            {/* Glow effect container */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,153,0.1)_0%,_transparent_70%)] 
                            opacity-0 hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="relative z-10">
              {/* Name Field */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                    activeField === "name" ? "text-[#00ff99]" : "text-gray-300"
                  }`}
                >
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="your name..."
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveField("name")}
                    onBlur={() => setActiveField(null)}
                    required
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      activeField === "name"
                        ? "border-[#00ff99] ring-[#00ff99]/50 text-white"
                        : "border-gray-600 text-gray-300"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00ff99] transition-all duration-300 ${
                      activeField === "name" ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                    activeField === "email" ? "text-[#00ff99]" : "text-gray-300"
                  }`}
                >
                  Your Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your email..."
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField("email")}
                    onBlur={() => setActiveField(null)}
                    required
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      activeField === "email"
                        ? "border-[#00ff99] ring-[#00ff99]/50 text-white"
                        : "border-gray-600 text-gray-300"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00ff99] transition-all duration-300 ${
                      activeField === "email" ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                    activeField === "message"
                      ? "text-[#00ff99]"
                      : "text-gray-300"
                  }`}
                >
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                    required
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      activeField === "message"
                        ? "border-[#00ff99] ring-[#00ff99]/50 text-white"
                        : "border-gray-600 text-gray-300"
                    }`}
                  ></textarea>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00ff99] transition-all duration-300 ${
                      activeField === "message" ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? "bg-[#00cc99] cursor-not-allowed"
                    : "bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] hover:shadow-[0_0_15px_rgba(0,255,153,0.5)]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Status Message */}
              {submitStatus && (
                <div
                  className={`mt-4 p-3 rounded-lg text-center ${
                    submitStatus === "success"
                      ? "bg-green-900/50 text-green-400 border border-green-400/30"
                      : "bg-red-900/50 text-red-400 border border-red-400/30"
                  }`}
                >
                  {submitStatus === "success"
                    ? "Message sent successfully! I'll get back to you soon."
                    : "Failed to send message. Please try again later."}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="relative border border-[#00ff99]/30 rounded-xl bg-gray-800/80 backdrop-blur-sm 
                         p-8 shadow-xl hover:shadow-[0_0_20px_rgba(0,255,153,0.3)] transition-all duration-300"
            >
              {/* Glow effect container */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,153,0.1)_0%,_transparent_70%)] 
                              opacity-0 hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                Contact Information
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-[#00ff99] text-2xl mr-4 mt-1">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:hello@example.com"
                      className="text-white hover:text-[#00ff99] transition-colors duration-300"
                    >
                      hello@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 text-[#00ff99] text-2xl mr-4 mt-1">
                    📍
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                      Location
                    </h4>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 text-[#00ff99] text-2xl mr-4 mt-1">
                    🔗
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                      Social
                    </h4>
                    <div className="flex space-x-4">
                      {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="text-white hover:text-[#00ff99] transition-colors duration-300"
                        >
                          {social}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="relative border border-[#00ff99]/30 rounded-xl bg-gray-800/80 backdrop-blur-sm 
                         p-8 shadow-xl hover:shadow-[0_0_20px_rgba(0,255,153,0.3)] transition-all duration-300"
            >
              {/* Glow effect container */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,153,0.1)_0%,_transparent_70%)] 
                              opacity-0 hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                My Availability
              </h3>

              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white font-medium">
                    9:00 AM - 5:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Weekends</span>
                  <span className="text-white font-medium">
                    Limited availability
                  </span>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">
                    I typically respond to emails within 24 hours on weekdays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
