import { motion } from "framer-motion";

const projects = [
  {
    title: "Ciência da Computação",
    description: "Ferramentas e tecnologias para desenvolvimento de software, análise de dados, criação de sistemas e soluções computacionais.",
    techs: ["Python", "TypeScript", "JavaScript", "HTML", "CSS", "GitHub", "VSCode"],
  },
  {
    title: "Adobe Crative Cloud",
    description: "Ferramentas líderes de mercado para design, fotografia, vídeo e web.",
    techs: ["Illustrator", "Photoshop", "Premiere", "InDesign", "Acrobat", "After Effects", "Lightroom", "Podcast"],
  },
  {
    title: "Microsoft Office",
    description: "Ferramentas para tarefas corporativas, como edição de textos, planilhas e apresentações.",
    techs: ["Excel", "Word", "PowerPoint", "Copilot"],
  },
  {
    title: "Google Workspace",
    description: "Ferramentas para colaboração e produtividade corporativa, como criação de documentos, planilhas, apresentações, reuniões e gestão de e-mails.",
    techs: ["Drive", "Planilhas", "Documentos", "Apresentações", "Formulários", "Meet", "Agenda", "Meu negócio", "Gmail", "YouTube", "NotebookLM", "Gemini"],
  },
  {
    title: "Inteligência Artificial",
    description: "Ferramentas que tornam os processos mais ágeis, precisos e estratégicos, além de aumentarem a produtividade dentro das organizações.",  
    techs: ["ChatGPT", "Gemini", "TurboScribe", "Lovable", "NotebookLM"],
  },
  {
    title: "Automações",
    description: "Ferramentas que automatizam tarefas e fluxos de trabalho, tornando os processos mais ágeis, eficientes e organizados dentro das organizações.",
    techs: ["ManyChat", "WordPress", "Respondi", "Monday", "Make", "Dripify", "tl;dv"],
  },
];

const FerramentasSection = () => {
  return (
    <section id="ferramentas" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="badge-tech mb-4 inline-block">Ferramentas</span>
          <h2 className="section-title mb-4">Ferramentas que<span className="gradient-text">Utilizo</span></h2>
          <p className="section-subtitle">Tecnologias, bibliotecas e ferramentas que utilizo para desenvolver, testar e otimizar aplicações.</p>
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

export default FerramentasSection;
