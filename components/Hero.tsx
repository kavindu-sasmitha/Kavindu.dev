import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#0d0e1a] min-h-[92vh] overflow-hidden">

      {/* Purple radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, #7c3aed28 0%, #3b82f614 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom left, #3b82f610 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[92vh] flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center justify-center lg:justify-start relative z-10">

        {/* ── LEFT: Text Content ── */}
        <div className="flex flex-col justify-center pt-12 pb-6 lg:py-0 order-2 lg:order-1 text-center lg:text-left w-full">
          <p className="text-[#8b5cf6] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Hello I&apos;m Kavindu
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
            Fullstack
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#3b82f6]">
              Software
            </span>
            <br />
            Engineer
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-sm mx-auto lg:mx-0 mb-8 leading-relaxed">
            I design and build clean, scalable, and high-performance web
            applications — from pixel-perfect UI to robust backend systems.
          </p>

          <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-block px-6 sm:px-8 py-3 bg-[#7c3aed] text-white text-sm font-black uppercase tracking-wider rounded-full hover:bg-[#8b5cf6] transition-all shadow-xl shadow-[#7c3aed]/30"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="inline-block px-6 sm:px-8 py-3 border border-[#7c3aed]/50 text-[#8b5cf6] text-sm font-bold uppercase tracking-wider rounded-full hover:bg-[#7c3aed]/10 transition-all"
            >
              My Work
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-6 sm:gap-8 mt-10 pt-8 border-t border-[#1e1f35] justify-center lg:justify-start">
            {[
              { value: "2+", label: "Years Exp." },
              { value: "20+", label: "Projects" },
              { value: "10+", label: "Clients" },
              { value: "0", label: "Awards" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-none">{s.value}</p>
                <p className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Profile Photo ── */}
        <div className="order-1 lg:order-2 flex items-center justify-center pt-10 lg:pt-0">
          <div className="relative">
            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, #7c3aed44 0%, #3b82f622 50%, transparent 70%)",
                transform: "scale(1.35)",
              }}
            />
            {/* Spinning ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#7c3aed]/25"
              style={{ transform: "scale(1.15)", animation: "spinRing 20s linear infinite" }}
            />
            {/* Solid ring */}
            <div
              className="absolute inset-0 rounded-full border border-[#7c3aed]/40"
              style={{ transform: "scale(1.05)" }}
            />

            {/* Photo */}
            <div
              className="relative rounded-full overflow-hidden border-4 border-[#7c3aed]/50"
              style={{
                width: "min(340px, 72vw)",
                height: "min(340px, 72vw)",
                boxShadow: "0 0 40px #7c3aed44, 0 0 80px #7c3aed22",
              }}
            >
              <Image
                src="/photo.png"
                alt="Kavindu Sasmitha"
                fill
                className="object-cover object-top"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 60%, #0d0e1a22 100%)" }}
              />
            </div>

            {/* Floating badge — Available */}
            <div className="absolute bottom-2 -left-2 sm:-left-6 bg-[#13142b] border border-[#1e1f35] rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-xs text-white font-semibold whitespace-nowrap">Available for work</span>
            </div>

            {/* Floating badge — Experience */}
            <div className="absolute top-2 -right-2 sm:-right-6 bg-[#13142b] border border-[#1e1f35] rounded-2xl px-3 py-2 shadow-xl">
              <p className="text-[9px] sm:text-xs text-gray-400">Experience</p>
              <p className="text-[11px] sm:text-sm font-bold text-white">Fullstack + AI</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spinRing {
          from { transform: scale(1.15) rotate(0deg); }
          to   { transform: scale(1.15) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}