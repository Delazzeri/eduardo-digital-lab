import { motion } from "framer-motion";
import { Megaphone, Code2, BookOpen, GraduationCap, Eye } from "lucide-react";

const certCategories = [
  {
    title: "Linguagens de Programação",
    icon: Code2,
    link: "https://drive.google.com/drive/folders/14l5893B1dHfRmphemoyVJj-CG3rm1bK7?usp=sharing",
    certs: [
      "Lógica de programação: mergulhe em programação com JavaScript",
      "Lógica de programação: explore funções e listas",
      "Imersão Dados com Python",
      "Carreira Node.js: boas-vindas e primeiros passos",
      "JavaScript em 7 Dias + Projetos Reais",
      "Lógica de Programação Para Iniciantes e Estudantes",
    ],
  },
  {
    title: "Livros",
    icon: BookOpen,
    link: "https://drive.google.com/drive/folders/1_WzgKd41QN_tIP1BNl3v6is7cePR6rKa?usp=sharing",
    certs: [
      "Cientista do Marketing Digital - Dener Lippert",
      "Aprenda JavaScript com Dashboards - Casa do Código",
      "Use a Cabeça! JavaScript - Michael Morrison",
    ],
  },
  {
    title: "Marketing e Design",
    icon: Megaphone,
    link: "https://drive.google.com/drive/folders/1B9gePxsoPQJhQuwG-hv7sboDCmTMkOWG?usp=sharing",
    certs: [
      "Design Gráfico do Zero ao Avançado",
      "Design Gráfico e Visual de Alto Nível",
    ],
  },
  {
    title: "Formação Complementar",
    icon: GraduationCap,
    link: "https://drive.google.com/drive/folders/1P3vxUjy684SvV8pQVpFHqrREKiei7pO2?usp=sharing",
    certs: [
      "VSCode: aprendendo dicas e truques",
      "Carreira Exponencial",
      "Temas Transversais",
    ],
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificados" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="badge-tech mb-4 inline-block">Certificações</span>
          <h2 className="section-title mb-4">Certificados &<br /><span className="gradient-text">Leituras</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glass p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold font-display text-foreground">{cat.title}</h3>
              </div>
              <ul className="space-y-3">
              {cat.certs.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {cert}
                </li>
              ))}
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
      </div>
    </section>
  );
};

export default CertificatesSection;
