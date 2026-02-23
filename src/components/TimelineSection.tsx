import { motion } from "framer-motion";

const events = [
  { year: "2019", title: "Início na área de Design", description: "Início dos estudos em ferramentas de design, utilizando softwares da Adobe, como Photoshop, Illustrator, InDesign, After Effects e Premiere Pro, em trabalhos escolares e na criação de materiais." },
  { year: "2020", title: "Aprimoramento em Design", description: "Expansão de ideias criativas, aprimoramento no uso das ferramentas do Pacote Adobe e realização de cursos de capacitação." },
  { year: "2021", title: "Cursos e desenvolvimento profissional", description: "Ano dedicado ao aprimoramento técnico e criativo por meio da realização de cursos, com foco no desenvolvimento de habilidades em design, marketing e ferramentas digitais, consolidando uma base sólida para atuação profissional." },
  { year: "2022", title: "Preparação para ingresso na UFRGS", description: "Período dedicado ao pré-vestibular com foco na preparação para ingresso na Universidade Federal do Rio Grande do Sul (UFRGS), desenvolvendo disciplina, organização e aprofundamento em conteúdos fundamentais." },
  { year: "2023", title: "Continuidade na preparação para a UFRGS", description: "Continuidade na preparação para o vestibular da Universidade Federal do Rio Grande do Sul (UFRGS), com foco em constância, evolução acadêmica e fortalecimento da base teórica para a graduação." },
  { year: "2024", title: "Ciência da Computação", description: "Iniciei minha graduação em Ciência da Computação, buscando sempre alinhar design e programação, visto que ambos caminham juntos para proporcionar a melhor experiência do usuário (UX)." },
  { year: "2025", title: "Vispe Capital", description: "“Ao assumir o setor de marketing da empresa, fui responsável por estruturá-lo completamente, desenvolvendo materiais padrão, padronizando as redes sociais, organizando o fluxo de postagens, além de atuar na criação, ilustração e diagramação de um livro, bem como na idealização e edição de um podcast." },
  { year: "2026", title: "Líder em marketing", description: "“Ao assumir a posição de liderança, trabalhei em colaboração com os demais profissionais sob minha gestão e, juntos, impulsionamos o setor com foco em tráfego pago por meio do Meta Ads e do Google Ads. Após a estruturação do setor, pude direcionar meu foco para a área na qual estudo. Atualmente, estou aplicando e aprimorando meus conhecimentos em TI e Inteligência Artificial." },
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
