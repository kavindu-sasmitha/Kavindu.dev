export default function AboutMe() {
  return (
    <section id="about" className="bg-[#0d130d] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Profile Image - Smaller */}
          <div className="lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-[#7aba3a]/30 shadow-xl">
                <img
                  src="/img.png"
                  alt="Kavindu Sasmitha"
                  className="w-full  object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-4 border border-[#7aba3a]/20 rounded-3xl -z-10" />
            </div>
          </div>

          {/* Content - Compact */}
          <div className="lg:w-7/12 space-y-6">
            <div>
              <p className="text-[#7aba3a] text-xs font-bold uppercase tracking-widest mb-2">
                ABOUT ME
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Hi, I&apos;m <span className="text-[#7aba3a]">Kavindu Sasmitha</span>
              </h2>
            </div>

            <div className="text-gray-300 text-[16.5px] leading-relaxed space-y-4">
              <p>
                Passionate <span className="text-white font-medium">Computer Science Undergraduate</span> 
                and <span className="text-white font-medium">Certified AI &amp; ML Engineer</span>.
              </p>
              <p>
                I build modern full-stack applications and integrate intelligent AI/ML solutions 
                to solve real-world problems with clean, scalable code.
              </p>
            </div>

            {/* Compact Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "EDUCATION", value: "BSc Computer Science" },
                { label: "CERTIFICATION", value: "AI & ML Engineer" },
                { label: "FOCUS", value: "Full Stack + AI" },
                { label: "LOCATION", value: "Sri Lanka" },
              ].map((item) => (
                <div key={item.label} className="bg-[#111a0f] border border-[#1e2e1e] rounded-2xl p-4 text-sm">
                  <p className="text-[#7aba3a] text-xs tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}