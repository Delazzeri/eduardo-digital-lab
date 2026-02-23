import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Site de portfólio pessoal construído com React, TypeScript e Tailwind CSS.",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    deploy: "#",
  },
  {
    title: "Plataforma de cursos",
    description: "API RESTful para gerenciamento de tarefas com autenticação JWT.",
    techs: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com",
  },
  {
    title: "E-commerce Dashboard",
    description: "Dashboard analítico para e-commerce com gráficos interativos e filtros.",
    techs: ["React", "Recharts", "Supabase"],
    github: "https://github.com",
    deploy: "#",
  },
  {
    title: "Weather App",
    description: "Aplicação de previsão do tempo com geolocalização e dados em tempo real.",
    techs: ["JavaScript", "API REST", "CSS3"],
    github: "https://github.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="badge-tech mb-4 inline-block">Programação</span>
          <h2 className="section-title mb-4">Projetos de<br /><span className="gradient-text">Desenvolvimento</span></h2>
          <p className="section-subtitle">Projetos que demonstram minhas habilidades técnicas em desenvolvimento web.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glass p-6 hover-lift group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold font-display text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.deploy && (
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span key={tech} className="badge-tech text-[11px]">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
