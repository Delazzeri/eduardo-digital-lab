import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, Palette } from "lucide-react"; // Palette agora é um 'fallback'

const categories = ["Todos", "Social Media", "Materiais Gráficos", "Livros", "Identidade Visual", "Diversos"];

// 1. DADOS ATUALIZADOS: Adicionado o campo 'image'
const marketingProjects = [
  { 
    title: "Ebook: A Chave Mestra para Captação de Recursos", 
    category: "Livros", 
    description: "Ebook voltado para estratégias avançadas...", 
    link: "#",
    // Supondo que suas imagens estejam em: public/imagens/
    image: "/imagens/ebook-chave-mestra.jpg" 
  },
  { 
    title: "Feed Instagram Informativo", 
    category: "Social Media", 
    description: "Criação de série de posts...", 
    link: "https://www.instagram.com/unidifranco/",
    image: "/imagens/feed-unidi.jpg"
  },
  { 
    title: "Identidade Visual Phill's Burguer", 
    category: "Identidade Visual", 
    description: "Desenvolvimento completo da identidade...", 
    link: "#",
    // Se um item NÃO tiver imagem, ele mostrará o ícone antigo
    image: "" 
  },
  // ... adicione 'image' e 'link' nos outros projetos ...
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
          <h2 className="section-title mb-4">Projetos <span className="gradient-text">Criativos</span></h2>
          <p className="section-subtitle">Trabalhos de marketing digital, branding e design.</p>
        </motion.div>

        {/* Filtros */}
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

        {/* Grid de Projetos */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              // flex flex-col garante que o botão fique no final
              className="card-glass overflow-hidden group hover-lift flex flex-col"
            >
              
              {/* 2. ÁREA DA IMAGEM ATUALIZADA */}
              <div className="aspect-video relative overflow-hidden bg-muted">
                {/* Verifica se existe imagem definida nos dados */}
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  // Se não houver imagem, mostra o ícone Palette como fallback
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <Palette className="w-10 h-10 text-primary/30" />
                  </div>
                )}

                {/* Camada de Hover (Botão/Ícone Eye) */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Parte Inferior: Conteúdo */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[11px] font-medium text-primary mb-2 block">{project.category}</span>
                <h3 className="text-sm font-semibold text-foreground mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                
                {/* Botão Visualizar - mt-auto joga ele para o final do card */}
                <div className="mt-auto pt-2">
                   <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 text-xs"
                  >
                    <Eye className="w-3 h-3" />
                    Visualizar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingSection;