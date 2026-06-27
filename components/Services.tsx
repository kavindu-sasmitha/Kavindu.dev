export default function Services() {
  return (
    <section id="services" className="bg-[#0a3714] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#7aba3a] text-xs font-bold uppercase tracking-widest text-center mb-2">
          What I Do
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900">
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "⚡",
              title: "Frontend Development",
              desc: "Pixel-perfect UIs with React, Next.js, and Tailwind CSS. Fast, accessible, and responsive across all devices.",
            },
            {
              icon: "🛠️",
              title: "Backend Engineering",
              desc: "Scalable REST & GraphQL APIs with Node.js, databases, authentication, and cloud deployments.",
            },
            {
              icon: "🎨",
              title: "UI/UX Design",
              desc: "Clean, modern interfaces with great user experience using Figma and design systems.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#7aba3a]/50 hover:shadow-xl hover:shadow-[#7aba3a]/10 transition-all group"
            >
              <div className="w-12 h-12 bg-[#7aba3a]/10 text-[#7aba3a] rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:bg-[#7aba3a]/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}