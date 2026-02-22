import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, Palette } from "lucide-react";

const categories = ["Todos", "Social Media", "Branding", "Revistas", "Mockups", "Identidade Visual"];

const marketingProjects = [
  { title: "Campanha Digital Verão", category: "Social Media", description: "Série de posts para redes sociais com foco em engajamento e conversão." },
  { title: "Identidade Visual Startup", category: "Branding", description: "Criação completa de marca para startup de tecnologia." },
  { title: "Revista Corporativa", category: "Revistas", description: "Design editorial para revista trimestral de empresa do setor financeiro." },
  { title: "Mockup App Mobile", category: "Mockups", description: "Apresentação visual de aplicativo mobile para pitch de investidores." },
  { title: "Rebranding Empresa", category: "Branding", description: "Processo completo de rebranding incluindo manual de marca." },
  { title: "Kit de Materiais Gráficos", category: "Identidade Visual", description: "Papelaria, cartão de visita, envelope e materiais impressos." },
  { title: "Feed Instagram Planejado", category: "Social Media", description: "Planejamento visual de feed com 30 posts e stories." },
  { title: "Logo + Identidade Visual", category: "Identidade Visual", description: "Desenvolvimento de logotipo e guia de aplicação da marca." },
];

const MarketingSection = () => {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos"
    ? marketingProjects
    : marketingProjects.filter((p) => p.category === active);

  return (
    <section id="marketing" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="badge-tech mb-4 inline-block">Marketing & Design</span>
          <h2 className="section-title mb-4">Projetos<br /><span className="gradient-text">Criativos</span></h2>
          <p className="section-subtitle">Trabalhos de marketing digital, branding e design gráfico.</p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="card-glass overflow-hidden group hover-lift"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                <Palette className="w-10 h-10 text-primary/30" />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-medium text-primary mb-2 block">{project.category}</span>
                <h3 className="text-sm font-semibold text-foreground mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingSection;
