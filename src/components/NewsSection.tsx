import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const news = [
  {
    title: "Preparazione Concorsi Pubblici",
    excerpt: "L'ente Maxwell offre la possibilità di seguire corsi di formazione per vari concorsi pubblici. Preparazione in presenza e da remoto con docenti esperti.",
    date: "Gennaio 2026",
    tag: "Concorsi",
  },
  {
    title: "IeFP – Istruzione e Formazione Professionale",
    excerpt: "Grazie alle risorse del PNRR e ai percorsi IeFP organizzati dalla Regione Campania è possibile acquisire una qualifica professionale spendibile nel mercato del lavoro.",
    date: "Marzo 2024",
    tag: "IeFP",
  },
  {
    title: "Programma GOL – Nuovi Corsi Attivati",
    excerpt: "L'Ente Maxwell aderisce al programma Garanzia Occupabilità Lavoratori della Regione Campania con nuovi corsi approvati.",
    date: "2023",
    tag: "GOL",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Aggiornamenti
          </span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Ultime News
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="hero-gradient p-6">
                <span className="inline-block rounded-full bg-primary-foreground/20 px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {item.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </div>
                <h3 className="mt-3 font-sans text-lg font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-secondary">
                    Leggi di più <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
