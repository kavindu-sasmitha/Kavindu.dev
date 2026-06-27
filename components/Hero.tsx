import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 min-h-[92vh] grid grid-cols-1 lg:grid-cols-2 gap-0 items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/photo.png"
          alt="Kavindu Sasmitha Background"
          fill
          className="object-cover object-center opacity-25"
          priority
        />
      </div>

      {/* Left Content */}
      <div className="order-1 flex flex-col justify-center pt-16 pb-10 lg:py-0 z-10">
        <p className="text-[#7aba3a] text-xs font-bold uppercase tracking-[0.3em] mb-5">
          Hello I'm Kavindu
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-7">
          Fullstack
          <br />
          <span className="text-[#7aba3a]">Software</span>
          <br />
          Engineer
        </h1>
        <p className="text-gray-400 text-base max-w-sm mb-10 leading-relaxed">
          I design and build clean, scalable, and high-performance web
          applications — from pixel-perfect UI to robust backend systems.
        </p>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#7aba3a] text-black text-sm font-black uppercase tracking-wider rounded-full hover:bg-[#8fd44a] transition-all shadow-xl shadow-[#7aba3a]/30"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="inline-block px-8 py-3 border border-[#7aba3a]/50 text-[#7aba3a] text-sm font-bold uppercase tracking-wider rounded-full hover:bg-[#7aba3a]/10 transition-all"
          >
            My Work
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-14 pt-8 border-t border-[#1a2a1a]">
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

      {/* Right Side (for visual balance) */}
      <div className="order-2 h-full min-h-[500px] lg:min-h-[92vh] z-10 pointer-events-none" />
    </section>
  );
}