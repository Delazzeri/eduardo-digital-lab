import { motion } from "framer-motion";
import { Users, Layers, PackageSearch, CodeXml } from "lucide-react";

const differentials = [
  {
    icon: PackageSearch,
    title: "Engenharia de Produto",
    description: "Compreendo o ciclo completo de desenvolvimento, da arquitetura à entrega, construindo soluções escaláveis, organizadas e orientadas à performance.",
  },
  {
    icon: Users,
    title: "Design de Interfaces",
    description: "Experiência em design aplicada ao desenvolvimento front-end, criando interfaces intuitivas, funcionais e centradas no usuário.",
  },
  {
    icon: CodeXml,
    title: "Arquitetura & Código",
    description: "Foco em escrever código limpo, estruturado e sustentável, aplicando boas práticas, lógica sólida e pensamento computacional.",
  },
  {
    icon: Layers,
    title: "Perfil Multidisciplinar",
    description: "Integro design, desenvolvimento e tecnologia para criar produtos digitais eficientes, funcionais e bem estruturados.",
  },
];

const DifferentialSection = () => {
  return (
    <section id="diferencial" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-tech mb-4 inline-block">Diferencial</span>
          <h2 className="section-title mb-4 mx-auto">
            Por que Marketing + Tecnologia
            <br />
            <span className="gradient-text">é um diferencial?</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A intersecção entre negócios e código cria profissionais que não apenas constroem, mas constroem com propósito e estratégia.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glass p-6 text-center hover-lift"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold font-display text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
