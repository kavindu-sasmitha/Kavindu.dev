export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend & UI",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Flutter"],
    },
    {
      title: "Backend & Frameworks",
      skills: ["Node.js", "Express", "Java EE", "Spring", "REST API", "GraphQL"],
    },
    {
      title: "Databases & ORM",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "JDBC", "ORM", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["Artificial Intelligence", "Machine Learning", "Certified AI & ML Engineer"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "AWS"],
    },
    {
      title: "Software Engineering & Architecture",
      skills: ["Layered Architecture", "OOP", "Software Engineering", "Design Patterns", "Microservices", "RAD"],
    },
    {
      title: "Core Computer Science",
      skills: ["DSA", "Network Programming", "Internet Technologies", "CNS", "Multi-Threading", "RegEx"],
    },
  ];

  return (
    <section className="bg-[#0d0e1a] py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#8b5cf6] text-xs font-bold uppercase tracking-widest text-center mb-2">TECH STACK</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-16">
          Skills &amp; Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-3 sm:space-y-4">
              <h3 className="text-[#8b5cf6] text-base sm:text-lg font-bold tracking-wider uppercase border-b border-[#1e1f35] pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-[#13142b] border border-[#1e1f35] rounded-full text-xs sm:text-sm font-medium text-gray-300 hover:border-[#7c3aed]/70 hover:text-[#8b5cf6] hover:bg-[#1a1b3a] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}