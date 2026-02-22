import { motion } from "framer-motion";

const events = [
  { year: "2019", title: "Início na área de Design", description: "Primeiros trabalhos como designer gráfico freelancer." },
  { year: "2020", title: "Marketing Digital", description: "Transição para marketing digital com foco em estratégia e branding." },
  { year: "2021", title: "Gerência de Marketing", description: "Promoção a gerente de marketing, liderando equipe e projetos estratégicos." },
  { year: "2022", title: "Consolidação", description: "Ampliação de portfólio com projetos de identidade visual e campanhas nacionais." },
  { year: "2023", title: "Ciência da Computação", description: "Início da graduação em Ciência da Computação e primeiros projetos em programação." },
  { year: "2024", title: "Desenvolvimento Web", description: "Projetos em React, TypeScript e APIs. Certificações técnicas concluídas." },
  { year: "2025", title: "Transição Estratégica", description: "Foco em oportunidades de desenvolvimento, produto e tecnologia." },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="badge-tech mb-4 inline-block">Evolução</span>
          <h2 className="section-title mb-4">Linha do<br /><span className="gradient-text">Tempo</span></h2>
        </motion.div>

        <div className="relative">
          <div className="timeline-line" />

          <div className="space-y-8">
            {events.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <div className="card-glass p-5">
                  <span className="text-xs font-bold text-primary">{event.year}</span>
                  <h3 className="text-base font-semibold font-display text-foreground mt-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
