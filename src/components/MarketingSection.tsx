import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, Palette } from "lucide-react";

const categories = ["Todos", "Social Media", "Materiais Gráficos", "Livros", "Identidade Visual", "Diversos"];

const marketingProjects = [
  { 
    title: "Ebook: A Chave Mestra para Captação de Recursos", 
    category: "Livros", 
    description: "Ebook voltado para estratégias avançadas para captação corporativa, social e governamental. \n Identação | Ilustração | Capa | Revisão | 201 páginas", 
    link: "https://drive.google.com/drive/folders/1Niw95DcgxcUjgJVAGck16n2lSgeiLacV?usp=sharing",
    image: "/public/captacao.jpeg" 
  },
    /*/imagens/ebook-chave-mestra.jpg */
  { 
    title: "Feed Instagram Informativo", 
    category: "Social Media", 
    description: "Criação de série de posts para redes sociais com foco na apresentação e fortalecimento da marca.", 
    link: "https://www.instagram.com/unidifranco/",
    image: "#"
  },

  { 
    title: "Identidade Visual Phill's Burguer", 
    category: "Identidade Visual", 
    description: "Desenvolvimento completo da identidade visual e posicionamento de marca para hamburgueria.", 
    link: "https://drive.google.com/drive/folders/11H27UyrG5wc7WoAQUekTQXJqiSKfhX41?usp=sharing",
    image: "#" 
  },

  { 
    title: "Ebook: Como Aumentar o Valor da Sua Empresa", 
    category: "Livros", 
    description: "O conteúdo ensina o empresário a medir o Enterprise Value e a equilibrar três pilares fundamentais: crescimento, margem de lucro e redução de riscos. \n Identação | Ilustração | Capa | Revisão | 21 páginas", 
    link: "https://drive.google.com/drive/folders/1jrDX5-1OPIwHoiCoFRggJgX4xN3ciVDd?usp=sharing",
    image: "#" 
  },

  { 
    title: "Identidade Visual Vispe Capital", 
    category: "Identidade Visual", 
    description: "Desenvolvimento completo da identidade visual e posicionamento de marca para empresa de consultoria financeira e geração de Equity.", 
    link: "https://drive.google.com/file/d/1UyE9hJCcj2jP3yBCI_TfrxMB7GGz18Pj/view?usp=sharing",
    image: "#"
  },

  { 
    title: "Ebook: Jogo de Gente Grande", 
    category: "Livros", 
    description: "Material voltado para empreendedores que buscam acelerar o crescimento ou planejar uma sucessão com liquidez. \n Identação | Ilustração | Capa | Revisão | 29 páginas", 
    link: "https://drive.google.com/drive/folders/1dPkAk2IdxutJZMWP_2MDGCmKc0elET2c?usp=sharing",
    image: "#" 
  },
   
  { 
    title: "XV Bianca Borba", 
    category: "Materiais Gráficos", 
    description: "#", 
    link: "https://drive.google.com/drive/folders/1_QU1lMFWBesP1QmtpBqD4lTrFrFBKT_t?usp=sharing",
    image: "#" 
  },

  { 
    title: "Livro: Códigos do Equity", 
    category: "Livros", 
    description: "Livro físico de como construir empresas que crescem e geram riqueza. \n Identação | Ilustração | Capa | Revisão | 236 páginas", 
    link: "https://drive.google.com/drive/folders/1HpZO9MdegIAxG0t5iSmKwR1Rq5b01hbA?usp=sharing",
    image: "#"
  },

  { 
    title: "Feed Instagram Planejado", 
    category: "Social Media", 
    description: "Série de posts para redes sociais com foco em engajamento, conversão, informação e posicionamento de marca.", 
    link: "https://www.instagram.com/vispecapital/",
    image: "#"
  },

  { 
    title: "Ebook: O Cemitério de Empresas", 
    category: "Livros", 
    description: "Este guia trabalha com a prevenção de crises e gestão de riscos. Ele analisa as lições por trás de grandes colapsos corporativos, detalhando os cinco estágios do declínio e erros fatais comuns. \n Identação | Ilustração | Capa | Revisão | 25 páginas", 
    link: "https://drive.google.com/drive/folders/130iMGlRWZzACXS5W5518-epRa-pJmuf7?usp=sharing",
    image: "#" 
  },

  { 
    title: "Tatuagem Mitológica", 
    category: "Diversos", 
    description: "#", 
    link: "https://drive.google.com/drive/folders/1mQwvYTqshpuJVKxH6xvobDgt2jQLtWo6?usp=sharing",
    image: "#"
  },

  { 
    title: "Tatuagem Cultura Oriental", 
    category: "Diversos", 
    description: "#", 
    link: "https://drive.google.com/drive/folders/1s__B9nOev21l9I1XJfUy3qkVr0HPz1A2?usp=sharing",
    image: "#"
  },

  { 
    title: "Quadros", 
    category: "Materiais Gráficos", 
    description: "#", 
    link: "https://drive.google.com/drive/folders/1gsOFmckyAcmGta92PRoQIsa3gXgr2KAW?usp=sharing",
    image: "#"
  },

  { 
    title: "Placas de Banheiro", 
    category: "Materiais Gráficos", 
    description: "#", 
    link: "https://drive.google.com/drive/folders/1rxgcch8DbKqojhe1byJ9nS3eiPEBOJDe?usp=sharing",
    image: "#"
  },

  { 
    title: "Mousepad", 
    category: "Materiais Gráficos", 
    description: "#", 
    link: "https://drive.google.com/drive/folders/1-h430eZhmr6JZc7PWBdnA7-nPOBx-zwy?usp=sharing",
    image: "#"
  },

  { 
    title: "Hotel Madrid", 
    category: "Diversos", 
    description: "#", 
    link: "https://drive.google.com/drive/folders/1PCo9ITXgetbXi2GRZaP0EyvQXozur12j?usp=sharing",
    image: "#"
  },

  { 
    title: "Adesivação de Elevador", 
    category: "Materiais Gráficos", 
    description: "#", 
    link: "https://drive.google.com/drive/folders/1kq-eVpVxCtAl4cNtrGG1XS6H5c464tWG?usp=sharing",
    image: "#"
  },

  { 
    title: "Carta de Bem-vindos", 
    category: "Materiais Gráficos", 
    description: "#", 
    link: "https://drive.google.com/drive/folders/1MIojHuvA513TJNAvrRujE7Ix0BUw0M8g?usp=sharing",
    image: "#"
  },

  { 
    title: "Caneca", 
    category: "Materiais Gráficos", 
    description: "#", 
    link: "https://drive.google.com/drive/folders/1JH7CcBa68M66_geb5BYhRbRWEhUoc3hG?usp=sharing",
    image: "#"
  },

  { 
    title: "Cadernos", 
    category: "Materiais Gráficos", 
    description: "#", 
    link: "https://drive.google.com/drive/folders/1QJwigZu_rDK6s2Nou6WJHODWuat8wcIs?usp=sharing",
    image: "#"
  },

  { 
    title: "Banner", 
    category: "Materiais Gráficos", 
    description: "#", 
    link: "https://drive.google.com/drive/folders/1YpVIwiqJKqHyUrUQJyoGR_pCtQj0yJAm?usp=sharing",
    image: "#"
  },
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

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="card-glass overflow-hidden group hover-lift flex flex-col"
            >
              
              <div className="aspect-video relative overflow-hidden bg-muted">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <Palette className="w-10 h-10 text-primary/30" />
                  </div>
                )}

              </div>

              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[11px] font-medium text-primary mb-2 block">{project.category}</span>
                <h3 className="text-sm font-semibold text-foreground mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                
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