export default function TechMarquee() {
  const techs = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Node.js", icon: "🟢" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "GraphQL", icon: "◈" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Figma", icon: "🎨" },
    { name: "Git", icon: "🔀" },
    { name: "REST API", icon: "🔌" },
  ];

  // Duplicate for seamless loop
  const doubled = [...techs, ...techs];

  return (
    <div className="relative bg-[#0a0b18] border-y border-[#1e1f35] py-5 overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0a0b18, transparent)" }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0a0b18, transparent)" }} />

      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track">
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 mx-6 px-5 py-2 rounded-full border border-[#1e1f35] bg-[#13142b] text-sm font-medium text-gray-300 whitespace-nowrap hover:border-[#7c3aed]/50 hover:text-white transition-colors cursor-default"
          >
            <span className="text-base leading-none">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
