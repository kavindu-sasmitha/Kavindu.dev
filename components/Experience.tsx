export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Software Engineer",
      company: "Ministry of Finance",
      period: "1 Year",
      type: "Full-time",
      location: "Sri Lanka",
      color: "#7c3aed",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      desc: "Developed and maintained full-stack web applications for government financial systems. Built scalable REST APIs, managed databases, and delivered robust digital solutions to support Ministry operations.",
      tags: ["React", "Next.js", "Node.js", "PostgreSQL", "REST API"],
    },
    {
      role: "Java Spring Boot Backend Developer",
      company: "CeylixSoft Solutions",
      period: "1 Year",
      type: "Part-time",
      location: "Sri Lanka",
      color: "#3b82f6",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
      desc: "Designed and built backend services using Java Spring Boot for enterprise-grade applications. Implemented RESTful APIs, database integrations, and backend architecture aligned with business requirements.",
      tags: ["Java", "Spring Boot", "MySQL", "REST API", "OOP"],
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "2 Years",
      type: "Freelance",
      location: "Remote",
      color: "#a855f7",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      desc: "Delivered end-to-end software solutions for multiple clients. Handled full project lifecycle from requirements to deployment — building web apps, management systems, and custom software.",
      tags: ["React", "Node.js", "Java", "MySQL", "Figma"],
    },
  ];

  return (
    <section id="experience" className="bg-[#0a0b18] py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#8b5cf6] text-xs font-bold uppercase tracking-[0.3em] mb-3">Career</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#3b82f6]">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-[15px] leading-relaxed px-4">
            My professional journey building software for government, enterprise, and clients worldwide.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#7c3aed]/60 via-[#3b82f6]/40 to-transparent" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-6 sm:gap-10 group">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-8 sm:w-16 flex items-start justify-center pt-2">
                  <div
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                    style={{
                      borderColor: exp.color,
                      backgroundColor: `${exp.color}33`,
                      boxShadow: `0 0 10px ${exp.color}44`,
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="flex-1 relative rounded-2xl border bg-[#13142b] p-5 sm:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: `${exp.color}30` }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${exp.color}0a 0%, transparent 60%)` }}
                  />
                  <div
                    className="absolute top-0 right-0 w-20 h-20 opacity-10 rounded-tr-2xl pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${exp.color}, transparent)` }}
                  />

                  <div className="relative">
                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${exp.color}18`, color: exp.color, border: `1px solid ${exp.color}30` }}
                        >
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-lg font-bold text-white leading-tight">{exp.role}</h3>
                          <p className="text-xs sm:text-sm font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2 sm:px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                          style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}>
                          {exp.type}
                        </span>
                        <span className="px-2 sm:px-3 py-1 rounded-full text-[10px] font-bold bg-[#1e1f35] text-gray-400 border border-[#2a2b45]">
                          {exp.period}
                        </span>
                        <span className="px-2 sm:px-3 py-1 rounded-full text-[10px] text-gray-500 bg-[#1e1f35] border border-[#2a2b45]">
                          📍 {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-[13px] sm:text-[14px] leading-relaxed mb-4">{exp.desc}</p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-[#0d0e1a] border border-[#1e1f35] text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
