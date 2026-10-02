export default function AboutMe() {
  return (
    <section id="about" className="bg-[#0d0e1a] py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* ── Photo ── */}
          <div className="w-full lg:w-5/12 flex justify-center flex-shrink-0">
            <div className="relative">
              {/* Glow aura */}
              <div
                className="absolute -inset-6 rounded-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, #7c3aed1a 0%, transparent 75%)" }}
              />
              {/* Corner brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#7c3aed]/60 rounded-tl-xl z-20" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#7c3aed]/60 rounded-tr-xl z-20" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#7c3aed]/60 rounded-bl-xl z-20" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#7c3aed]/60 rounded-br-xl z-20" />

              {/* Image */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  width: "min(300px, 80vw)",
                  height: "min(360px, 96vw)",
                  boxShadow: "0 0 0 1px #7c3aed30, 0 20px 50px #7c3aed20",
                }}
              >
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent 55%, #0d0e1a66 100%)" }}
                />
                <img
                  src="/profile.png"
                  alt="Kavindu Sasmitha"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "brightness(1.02) contrast(1.03)" }}
                />
              </div>

              {/* Name badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 bg-[#13142b] border border-[#7c3aed]/40 rounded-xl px-4 py-2 text-center shadow-xl whitespace-nowrap">
                <p className="text-white text-xs sm:text-sm font-bold">Kavindu Sasmitha</p>
                <p className="text-[#8b5cf6] text-[10px] font-medium">Fullstack Engineer · AI/ML</p>
              </div>

              {/* Available badge */}
              <div className="absolute -top-3 -right-3 z-30 bg-[#13142b] border border-[#1e1f35] rounded-xl px-2 py-1.5 shadow-xl flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-white font-semibold">Available</span>
              </div>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="lg:w-7/12 space-y-6 mt-8 lg:mt-0 w-full">
            <div>
              <p className="text-[#8b5cf6] text-xs font-bold uppercase tracking-widest mb-2">ABOUT ME</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#3b82f6]">
                  Kavindu Sasmitha
                </span>
              </h2>
            </div>

            <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-3">
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
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "EDUCATION", value: "BSc Computer Science" },
                { label: "CERTIFICATION", value: "AI & ML Engineer" },
                { label: "FOCUS", value: "Full Stack + AI" },
                { label: "LOCATION", value: "Sri Lanka" },
              ].map((item) => (
                <div key={item.label} className="bg-[#13142b] border border-[#1e1f35] rounded-xl p-3 sm:p-4 text-sm hover:border-[#7c3aed]/40 transition-colors">
                  <p className="text-[#8b5cf6] text-[9px] tracking-widest mb-1 font-bold uppercase">{item.label}</p>
                  <p className="text-white font-semibold text-xs sm:text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3 flex-wrap pt-1">
              <a href="#contact" className="inline-block px-5 sm:px-7 py-2.5 sm:py-3 bg-[#7c3aed] text-white text-xs sm:text-sm font-bold rounded-full hover:bg-[#8b5cf6] transition-all shadow-lg shadow-[#7c3aed]/30">
                Let&apos;s Work Together
              </a>
              <a href="/resume.pdf" download="Kavindu_Sasmitha_Resume.pdf" className="inline-block px-5 sm:px-7 py-2.5 sm:py-3 border border-[#7c3aed]/40 text-[#8b5cf6] text-xs sm:text-sm font-bold rounded-full hover:bg-[#7c3aed]/10 transition-all">
                Download CV ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}