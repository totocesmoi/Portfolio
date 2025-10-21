export default function Boxs() {
  return (
    <div className="flex gap-6">
      {/* Box 1 */}
      <div data-aos="zoom-in-up" className="relative group">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00ff99] to-[#00cc99] opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-300"></div>

        <div className="relative flex items-center justify-center w-30 h-28 bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,153,0.7)]">
          <div className="flex flex-col items-center justify-center h-full w-full p-2 text-[#1c1c22]">
            <span className="text-2xl font-bold mb-1">4+</span>
            <div className="w-12 h-0.5 bg-[#1c1c22] rounded-full my-1 opacity-70"></div>
            <p className="text-center text-md font-medium">Projects</p>
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div
        data-aos="zoom-in-up"
        data-aos-delay="200"
        className="relative group"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00ff99] to-[#00cc99] opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-300"></div>

        <div className="relative flex items-center justify-center w-30 h-28 bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,153,0.7)]">
          <div className="flex flex-col items-center justify-center h-full w-full p-2 text-[#1c1c22]">
            <span className="text-2xl font-bold mb-1">2+</span>
            <div className="w-12 h-0.5 bg-[#1c1c22] rounded-full my-1 opacity-70"></div>
            <p className="text-center text-md font-medium">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Box 3 */}
        {/*<div
        data-aos="zoom-in-up"
        data-aos-delay="300"
        className="relative group"
      >

        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00ff99] to-[#00cc99] opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-300"></div>

        <div className="relative flex items-center justify-center w-30 h-28 bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,153,0.7)]">
          <div className="flex flex-col items-center justify-center h-full w-full p-2 text-[#1c1c22]">
            <span className="text-2xl font-bold mb-1">12+</span>
            <div className="w-12 h-0.5 bg-[#1c1c22] rounded-full my-1 opacity-70"></div>
            <p className="text-center text-md font-medium">Happy Clients</p>
          </div>
        </div>
      </div>*/}
    </div>
  );
}
