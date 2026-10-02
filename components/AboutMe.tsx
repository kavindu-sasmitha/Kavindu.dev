export default function AboutMe() {
  return (
    <section id="about" className="bg-[#0d0e1a] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* ── LEFT: Professional Photo ──────────────────── */}
          <div className="lg:w-5/12 flex justify-center lg:justify-center flex-shrink-0">
            <div className="relative">

              {/* Outer glow aura */}
              <div
                className="absolute -inset-8 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #7c3aed22 0%, #3b82f611 50%, transparent 80%)",
                }}
              />

              {/* Decorative corner brackets */}
              {/* Top-left bracket */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#7c3aed]/60 rounded-tl-xl z-20" />
              {/* Top-right bracket */}
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#7c3aed]/60 rounded-tr-xl z-20" />
              {/* Bottom-left bracket */}
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#7c3aed]/60 rounded-bl-xl z-20" />
              {/* Bottom-right bracket */}
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#7c3aed]/60 rounded-br-xl z-20" />

              {/* Main image container */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  width: 360,
                  height: 420,
                  boxShadow:
                    "0 0 0 1px #7c3aed30, 0 25px 60px #7c3aed20, 0 0 80px #3b82f610",
                }}
              >
                {/* Purple gradient overlay bottom */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 55%, #0d0e1a88 100%)",
                  }}
                />
                {/* Left edge fade */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, #0d0e1a11, transparent 20%, transparent 80%, #0d0e1a11)",
                  }}
                />

                <img
                  src="/profile.png"
                  alt="Kavindu Sasmitha"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "brightness(1.02) contrast(1.03)" }}
                />
              </div>

              {/* Floating badge — Name plate */}
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 bg-[#13142b] border border-[#7c3aed]/40 rounded-2xl px-5 py-3 text-center shadow-2xl shadow-[#7c3aed]/20 whitespace-nowrap"
              >
                <p className="text-white text-sm font-bold">Kavindu Sasmitha</p>
                <p className="text-[#8b5cf6] text-[11px] font-medium">Fullstack Engineer · AI/ML</p>
              </div>

              {/* Floating badge — Available */}
              <div className="absolute -top-4 -right-4 z-30 bg-[#13142b] border border-[#1e1f35] rounded-xl px-3 py-2 shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] text-white font-semibold">Available</span>
              </div>

              {/* Floating stat — Sri Lanka */}
              <div className="absolute -left-10 top-1/3 z-30 bg-[#13142b] border border-[#1e1f35] rounded-xl px-3 py-2 shadow-xl hidden lg:block">
                <p className="text-[10px] text-gray-400">Location</p>
                <p className="text-[12px] text-white font-semibold">🇱🇰 Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content ────────────────────────────── */}
          <div className="lg:w-7/12 space-y-7 mt-8 lg:mt-0">
            <div>
              <p className="text-[#8b5cf6] text-xs font-bold uppercase tracking-widest mb-3">
                ABOUT ME
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#3b82f6]">
                  Kavindu Sasmitha
                </span>
              </h2>
            </div>

            <div className="text-gray-300 text-[16px] leading-relaxed space-y-4">
              <p>
                Passionate{" "}
                <span className="text-white font-semibold">Computer Science Undergraduate</span>{" "}
                and{" "}
                <span className="text-white font-semibold">Certified AI &amp; ML Engineer</span>.
              </p>
              <p>
                I build modern full-stack applications and integrate intelligent AI/ML solutions
                to solve real-world problems with clean, scalable code.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "EDUCATION", value: "BSc Computer Science" },
                { label: "CERTIFICATION", value: "AI & ML Engineer" },
                { label: "FOCUS", value: "Full Stack + AI" },
                { label: "LOCATION", value: "Sri Lanka" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#13142b] border border-[#1e1f35] rounded-2xl p-4 text-sm hover:border-[#7c3aed]/40 transition-colors group"
                >
                  <p className="text-[#8b5cf6] text-[10px] tracking-widest mb-1 font-bold uppercase">
                    {item.label}
                  </p>
                  <p className="text-white font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap pt-2">
              <a
                href="#contact"
                className="inline-block px-7 py-3 bg-[#7c3aed] text-white text-sm font-bold rounded-full hover:bg-[#8b5cf6] transition-all shadow-lg shadow-[#7c3aed]/30"
              >
                Let&apos;s Work Together
              </a>
              <a
                href="/resume.pdf"
                download="Kavindu_Sasmitha_Resume.pdf"
                className="inline-block px-7 py-3 border border-[#7c3aed]/40 text-[#8b5cf6] text-sm font-bold rounded-full hover:bg-[#7c3aed]/10 transition-all"
              >
                Download CV ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}