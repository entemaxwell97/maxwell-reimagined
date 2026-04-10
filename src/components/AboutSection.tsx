'use client';

import { motion } from "framer-motion";
import { CircleCheck as CheckCircle } from "lucide-react";

const features = [
  "Ente accreditato dalla Regione Campania",
  "Docenti qualificati e professionisti del settore",
  "Corsi in presenza e formazione a distanza (FAD)",
  "Attestati e qualifiche riconosciute a livello europeo",
  "Programma GOL – Garanzia Occupabilità Lavoratori",
  "Percorsi IeFP finanziati e gratuiti",
];

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Chi siamo
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Ente di Formazione Professionale Maxwell
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Da oltre trent'anni, l'Ente Maxwell è un punto di riferimento per la formazione
              professionale a Napoli. Offriamo percorsi formativi di qualità, riconosciuti dalla
              Regione Campania, per preparare i nostri studenti alle sfide del mondo del lavoro.
            </p>
            <p className="mt-4 text-muted-foreground">
              Dalla Scuola di Alta Formazione in Scienze Sociali ai corsi tecnici e sanitari,
              il nostro obiettivo è fornire competenze concrete e immediatamente spendibili nel mercato del lavoro.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-card"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-card-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
