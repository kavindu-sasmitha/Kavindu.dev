import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#0d0e1a] min-h-[92vh] overflow-hidden">

      {/* Subtle radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, #7c3aed28 0%, #3b82f614 40%, transparent 70%)",
        }}
      />
      {/* Bottom-left subtle glow */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, #3b82f610 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 min-h-[92vh] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">

        {/* ── LEFT: Text Content ──────────────────────────── */}
        <div className="flex flex-col justify-center pt-16 pb-10 lg:py-0 order-1">
          <p className="text-[#8b5cf6] text-xs font-bold uppercase tracking-[0.3em] mb-5">
            Hello I&apos;m Kavindu
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-7">
            Fullstack
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#3b82f6]">
              Software
            </span>
            <br />
            Engineer
          </h1>

          <p className="text-gray-400 text-base max-w-sm mb-10 leading-relaxed">
            I design and build clean, scalable, and high-performance web
            applications — from pixel-perfect UI to robust backend systems.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-[#7c3aed] text-white text-sm font-black uppercase tracking-wider rounded-full hover:bg-[#8b5cf6] transition-all shadow-xl shadow-[#7c3aed]/30"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="inline-block px-8 py-3 border border-[#7c3aed]/50 text-[#8b5cf6] text-sm font-bold uppercase tracking-wider rounded-full hover:bg-[#7c3aed]/10 transition-all"
            >
              My Work
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-14 pt-8 border-t border-[#1e1f35]">
            {[
              { value: "0.5+", label: "Years Exp." },
              { value: "20+", label: "Projects" },
              { value: "5+", label: "Clients" },
              { value: "0", label: "Awards" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl lg:text-3xl font-black text-white leading-none">
                  {s.value}
                </p>
                <p className="text-gray-500 text-[10px] uppercase tracking-wider mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Profile Photo ────────────────────────── */}
        <div className="order-2 flex items-center justify-center lg:justify-end py-12 lg:py-0">
          <div className="relative">

            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #7c3aed44 0%, #3b82f622 50%, transparent 70%)",
                transform: "scale(1.35)",
              }}
            />

            {/* Spinning dashed ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#7c3aed]/25"
              style={{
                transform: "scale(1.18)",
                animation: "spinRing 20s linear infinite",
              }}
            />

            {/* Solid ring */}
            <div
              className="absolute inset-0 rounded-full border border-[#7c3aed]/40"
              style={{ transform: "scale(1.06)" }}
            />

            {/* Photo container */}
            <div
              className="relative rounded-full overflow-hidden border-4 border-[#7c3aed]/50"
              style={{
                width: 460,
                height: 460,
                boxShadow:
                  "0 0 40px #7c3aed44, 0 0 80px #7c3aed22, 0 0 0 1px #7c3aed33",
              }}
            >
              <Image
                src="/photo.png"
                alt="Kavindu Sasmitha"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle inner gradient overlay — blends bottom into bg */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 60%, #0d0e1a22 100%)",
                }}
              />
            </div>

            {/* Floating badge — Available */}
            <div
              className="absolute bottom-4 -left-6 bg-[#13142b] border border-[#1e1f35] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white font-semibold">Available for work</span>
            </div>

            {/* Floating badge — Experience */}
            <div
              className="absolute top-4 -right-6 bg-[#13142b] border border-[#1e1f35] rounded-2xl px-4 py-3 shadow-xl"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <p className="text-xs text-gray-400">Experience</p>
              <p className="text-sm font-bold text-white">Fullstack + AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation for spinning ring */}
      <style>{`
        @keyframes spinRing {
          from { transform: scale(1.18) rotate(0deg); }
          to   { transform: scale(1.18) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}