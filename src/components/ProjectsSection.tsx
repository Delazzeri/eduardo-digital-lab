import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Site de portfólio pessoal desenvolvido com auxílio de inteligência artificial, com versionamento e edição utilizando Git no VS Code.",
    techs: ["Lovable", "TypeScript", "Git"],
    github: "https://github.com/Delazzeri/eduardo-digital-lab",
    deploy: "https://eduardo-digital-lab.vercel.app/",  
  },
  {
    title: "Landing Page de Conversão",
    description: "Página de conversão para mentoria gratuita com foco em geração de lead.",
    techs: ["Lovable", "Typescript", "Git"],
    github: "https://github.com/Delazzeri/lp-revolucao-equity",
    deploy: "https://lp-revolucao-equity.vercel.app/",
  },
  {
    title: "Site Institucional Vispe Capital",
    description: "Desenvolvimento do site institucional da Vispe Capital em WordPress, com apresentação de soluções empresariais, cases de sucesso, clientes e equipe, priorizando estratégias de otimização para mecanismos de busca (SEO).",
    techs: ["HTML", "WordPress", "Plugins", "Webhook"],
    deploy: "https://vispe.com.br/",
  },
  {
    title: "Site Institucional UniDiFranco",
    description: "Site institucional da UniDiFranco desenvolvido em WordPress, voltado à divulgação de cursos técnicos, supletivo EJA e outras modalidades de ensino, otimizado para SEO.",
    techs: ["WordPress", "Plugins", "Webhook"],
    deploy: "https://unidifranco.com.br/",
  },
  {
    title: "Plataforma de curso Vispe Skills (em desenvolvimento)",
    description: "Plataforma de cursos online desenvolvida de forma autoral, voltada à venda e gestão de cursos digitais, com foco em usabilidade, desempenho e conversão.",
    techs: ["Lovable"],
    deploy: "https://lovable.dev/projects/b23278f4-51a4-45fb-9d62-e3c38f1f173e",
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
          <h2 className="section-title mb-4">Projetos de <span className="gradient-text">Desenvolvimento</span></h2>
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
