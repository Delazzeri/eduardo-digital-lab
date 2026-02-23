import { motion } from "framer-motion";
import { Code2, Palette, TrendingUp, Lightbulb, Brain, Flag } from "lucide-react";

const highlights = [
  { icon: Palette, label: "Design desde 2019" },
  { icon: TrendingUp, label: "Gerente de Marketing" },
  { icon: Code2, label: "Ciência da Computação" },
  { icon: Brain, label: "Conhecimento em IA" },
  { icon: Flag, label: "Liderança de equipe" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="badge-tech mb-4 inline-block">Sobre Mim</span>
          <h2 className="section-title mb-4">Trajetória &<br /><span className="gradient-text">Evolução</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >        
            <p>
              Minha jornada profissional começou em <strong className="text-foreground">2019</strong> na área de design e marketing digital. atualmente graduando em Ciência da Computação.
              Ao longo da minha trajetória, desenvolvi visão estratégica de marca, posicionamento e crescimento de negócios. Hoje, aplico essa base na construção de soluções tecnológicas orientadas a produto, experiência e performance.
            </p>
            <p>
              Como <strong className="text-foreground">gerente de marketing</strong>, liderei projetos de identidade visual, 
              campanhas digitais e estratégias de produto, sempre com foco em resultados mensuráveis. Com alto conhecimento em Inteligência Artificial aplicada à produtividade, automação e desenvolvimento, utilizando ferramentas como ChatGPT, Gemini e Lovable para prototipação rápida, geração estratégica de código, otimização de fluxos e aceleração de projetos digitais.
            </p>
            <p>
              Atualmente, curso <strong className="text-foreground">Ciência da Computação</strong> e estou em transição 
              estratégica para a área de desenvolvimento, unindo minha experiência em negócios com habilidades técnicas 
              em programação, produto e inovação.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="card-glass p-5 flex flex-col items-start gap-3 hover-lift"
              >
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
