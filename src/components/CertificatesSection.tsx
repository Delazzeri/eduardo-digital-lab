import { motion } from "framer-motion";
import { Award, Code2, BookOpen, GraduationCap, Eye } from "lucide-react";

const certCategories = [
  {
    title: "Linguagens de Programação",
    icon: Code2,
    certs: [
      "JavaScript - Fundamentos",
      "Python - Básico ao Intermediário",
      "TypeScript - Essentials",
      "HTML5 & CSS3 Avançado",
      <a
        href="https://drive.google.com/drive/folders/1sNiNkOyaxDNAWpdzosx4bYYI_YC7A2ZW?usp=sharing"
        target="_blank"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-meditransition-all duration-300 hover:border-primary/50 hover:bg-secondary"
        >
        <Eye className="w-4 h-4" />
        Visualizar
      </a>
    ],
  },
  {
    title: "Cursos Técnicos",
    icon: BookOpen,
    certs: [
      "Desenvolvimento Web Full Stack",
      "Banco de Dados SQL",
      "Git & GitHub",
      "Lógica de Programação",
    ],
  },
  {
    title: "Bootcamps",
    icon: GraduationCap,
    certs: [
      "Bootcamp Desenvolvimento Web",
      "Bootcamp React",
      "Imersão Dev",
    ],
  },
  {
    title: "Formação Complementar",
    icon: Award,
    certs: [
      "UX/UI Design",
      "Marketing Digital",
      "Gestão de Projetos",
      "Metodologias Ágeis",
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
          <h2 className="section-title mb-4">Formação &<br /><span className="gradient-text">Certificados</span></h2>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
