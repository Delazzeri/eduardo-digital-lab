import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, Palette } from "lucide-react";
import { url } from "inspector";

const categories = ["Todos", "Social Media", "Materiais Gráficos", "Livros", "Identidade Visual", "Diversos"];

const marketingProjects = [
  { title: "Ebook: A Chave Mestra para Captação de Recursos", category: "Livros", description: "Ebook voltado para estratégias avançadas para captação corporativa, social e governamental. \n Identação | Ilustração | Capa | Revisão | 201 páginas" },

  { title: "Feed Instagram Informativo", category: "Social Media", description: "Criação de série de posts para redes sociais com foco na apresentação e fortalecimento da marca.", link: "https://www.instagram.com/unidifranco/"},

  { title: "Identidade Visual Phill's Burguer", category: "Identidade Visual", description: "Desenvolvimento completo da identidade visual e posicionamento de marca para hamburgueria." },
  
  { title: "Ebook: Como Aumentar o Valor da Sua Empresa", category: "Livros", description: "O conteúdo ensina o empresário a medir o Enterprise Value e a equilibrar três pilares fundamentais: crescimento, margem de lucro e redução de riscos. \n Identação | Ilustração | Capa | Revisão | 21 páginas" },
  
  { title: "Identidade Visual Vispe Capital", category: "Identidade Visual", description: "Desenvolvimento completo da identidade visual e posicionamento de marca para empresa de consultoria financeira e geração de Equity." },
  
  { title: "Ebook: Jogo de Gente Grande", category: "Livros", description: "Material voltado para empreendedores que buscam acelerar o crescimento ou planejar uma sucessão com liquidez. \n Identação | Ilustração | Capa | Revisão | 29 páginas" },
  
  { title: "Kit de Materiais Gráficos", category: "Materiais Gráficos", description: "Criação de materiais gráficos diversos, como banners, cadernos personalizados, adesivação de elevador, mousepads, placas de sinalização, quadros decorativos e kits de boas-vindas."},
  
  { title: "Livro: Códigos do Equity", category: "Livros", description: "Livro físico de como construir empresas que crescem e geram riqueza. \n Identação | Ilustração | Capa | Revisão | 236 páginas" },
  
  { title: "Feed Instagram Planejado", category: "Social Media", description: "Série de posts para redes sociais com foco em engajamento, conversão, informação e posicionamento de marca."},
  
  { title: "Ebook: O Cemitério de Empresas", category: "Livros", description: "Este guia trabalha com a prevenção de crises e gestão de riscos. Ele analisa as lições por trás de grandes colapsos corporativos, detalhando os cinco estágios do declínio e erros fatais comuns. \n Identação | Ilustração | Capa | Revisão | 25 páginas"},

  { title: "Minha tatuagem", category: "Diversos", description: "Este guia trabalha com a prevenção de crises e gestão de riscos. Ele analisa as lições por trás de grandes colapsos corporativos, detalhando os cinco estágios do declínio e erros fatais comuns. \n Identação | Ilustração | Capa | Revisão | 25 páginas"},

  { title: "Tatuagem Lucas", category: "Diversos", description: "Este guia trabalha com a prevenção de crises e gestão de riscos. Ele analisa as lições por trás de grandes colapsos corporativos, detalhando os cinco estágios do declínio e erros fatais comuns. \n Identação | Ilustração | Capa | Revisão | 25 páginas", link: "#"},
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

            {/*----------------------------------------------------------------*/}
             <div className="grid sm:grid-cols-2 gap-6">
                {marketingProjects.map((cat, i) => (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="card-glass p-6 hover-lift"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <h3 className="font-semibold font-display text-foreground">{cat.title}</h3>
                    </div>
                    <ul className="space-y-3">
                  </ul>
                  <a
                  href={cat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
                >
                  <Eye className="w-4 h-4" />
                  Visualizar
                </a>
                  </motion.div>
                ))}
              </div>
             
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingSection;
