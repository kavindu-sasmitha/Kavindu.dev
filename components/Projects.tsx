export default function Projects() {
  const academicProjects = [
    {
      title: "Food Farm",
      tag: "Java EE • Spring • MySQL",
      desc: "Full-stack food management web application covering product listings, order handling, and user management.",
      github: "https://github.com/kavindu-sasmitha/FoodFarm",
    },
    {
      title: "FairVision Age Classifier",
      tag: "Python • ML • Computer Vision",
      desc: "AI/ML academic project — an age classification model built with computer vision techniques, focusing on fairness and bias reduction.",
      github: "https://github.com/kavindu-sasmitha/FairVision-Age-Classifier",
    },
    {
      title: "My Portfolio",
      tag: "html • Tailwind CSS",
      desc: "Personal portfolio website built as an IT module project, showcasing projects, skills, and professional profile with a modern dark design.",
      github: "https://github.com/kavindu-sasmitha/MY-Portfolio",
    },
    {
      title: "SuperMarket Layered",
      tag: "Java • OOP • Layered Architecture",
      desc: "Supermarket management system following a layered architecture pattern — covers inventory, billing, and customer management.",
      github: "https://github.com/kavindu-sasmitha/superMarket-Layered",
    },
    {
      title: "Elite Driving School",
      tag: "Java • Hibernate ORM • MySQL",
      desc: "Driving school management system built with Hibernate ORM — handles student registration, lesson scheduling, and instructor management.",
      github:
        "https://github.com/kavindu-sasmitha/Elite-Driving-School-Orm-Project",
    },
    {
      title: "GigLanka",
      tag: "React • Node.js • AAD Module",
      desc: "Freelance marketplace platform built for the AAD module — connects clients with local service providers for task posting and bidding.",
      github: "https://github.com/kavindu-sasmitha/GigLanka",
    },
  ];

  const freelancingProjects = [
    {
      title: "Diniru Driving Training School",
      tag: "Java • RAD • MySQL",
      desc: "Full-featured driving school management system built as a client project — covers student enrollment, lesson scheduling, payments, and instructor management.",
      github:
        "https://github.com/kavindu-sasmitha/Diniru_Driving_Training_School",
    },
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="group relative bg-[#111a0f] border border-[#1e2e1e] rounded-3xl p-8 overflow-hidden hover:border-[#7aba3a]/60 transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7aba3a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <span className="inline-block px-4 py-1.5 text-xs font-bold bg-[#7aba3a]/10 text-[#7aba3a] rounded-full mb-4">
          {project.tag}
        </span>
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#7aba3a] transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
          {project.desc}
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#7aba3a] font-semibold hover:underline"
          >
            View Project →
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-6 bg-[#0a0f0a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#7aba3a] text-xs font-bold uppercase tracking-widest text-center mb-2">
          PORTFOLIO
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Featured Projects
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#7aba3a] mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#7aba3a]"></span>
            Academic Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#7aba3a] mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#7aba3a]"></span>
            Freelancing Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelancingProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
