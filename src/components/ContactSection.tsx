import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="badge-tech mb-4 inline-block">Contato</span>
          <h2 className="section-title mb-4">Vamos<br /><span className="gradient-text">Conversar?</span></h2>
          <p className="section-subtitle mx-auto text-center mb-10">
            Estou aberto a oportunidades de estágio, posições júnior e projetos colaborativos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:seuemail@email.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
            >
              <Download className="w-4 h-4" />
              Currículo
            </a>
          </div>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} — Feito com estratégia, código e criatividade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
