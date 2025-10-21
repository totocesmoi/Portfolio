import { useEffect, useRef } from "react";

export default function CodeLoader() {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rotation = 0;
    let animationFrameId: number;

    const rotateIcon = () => {
      rotation = (rotation + 2) % 360;
      if (iconRef.current) {
        iconRef.current.style.transform = `rotate(${rotation}deg)`;
      }
      animationFrameId = requestAnimationFrame(rotateIcon);
    };

    animationFrameId = requestAnimationFrame(rotateIcon);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-64 w-64 relative">
      {/* Main rotating icon */}
      <div ref={iconRef} className="relative transition-transform">
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/332/153/non_2x/code-flat-color-outline-icon-free-png.png"
          alt="Code Icon"
          className="w-24 h-24"
        />
      </div>

      {/* Loading text */}
      <div className="mt-6 text-lg font-medium text-gray-700">
        <span className="inline-block animate-pulse">Loading</span>
        <span className="inline-block animate-bounce delay-75">.</span>
        <span className="inline-block animate-bounce delay-150">.</span>
        <span className="inline-block animate-bounce delay-300">.</span>
      </div>
    </div>
  );
}
