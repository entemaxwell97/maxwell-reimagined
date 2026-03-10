import { motion } from "framer-motion";
import { BookOpen, Monitor, Heart, Shield, Cpu, Globe, Zap, Languages } from "lucide-react";

const courses = [
  {
    icon: BookOpen,
    title: "Preparazione Concorsi Pubblici",
    description: "Preparazione per concorsi pubblici con lezioni in presenza e da remoto tenute da docenti esperti.",
    tag: "Nuovo",
  },
  {
    icon: Monitor,
    title: "Operatore Informatico",
    description: "Qualifica professionale IeFP riconosciuta dalla Regione Campania e in ambito europeo. Corso gratuito triennale.",
    tag: "IeFP",
  },
  {
    icon: Heart,
    title: "BLSD",
    description: "Acquisizione di strumenti conoscitivi per prevenire il danno anossico cerebrale e tecniche di primo soccorso.",
    tag: "Sanitario",
  },
  {
    icon: Globe,
    title: "Tecnico Web",
    description: "Ideazione, progettazione, sviluppo e aggiornamento di siti web pubblicati su Internet.",
    tag: "IT",
  },
  {
    icon: Shield,
    title: "RSPP",
    description: "Responsabile del Servizio Prevenzione e Protezione secondo il D.Lgs. 81/08 sulla sicurezza sul lavoro.",
    tag: "Sicurezza",
  },
  {
    icon: Cpu,
    title: "Tecnico Hardware",
    description: "Assemblaggio, installazione e manutenzione di componenti hardware e software di sistemi informatici.",
    tag: "IT",
  },
  {
    icon: Zap,
    title: "Impianti Fotovoltaici",
    description: "Corso per progettista di impianti fotovoltaici, sfruttando l'energia solare per produrre energia elettrica.",
    tag: "Energia",
  },
  {
    icon: Languages,
    title: "Inglese B1 – B2",
    description: "Certificazione della lingua inglese allineata al syllabus Advanced di AIM Awards – Anglia ESOL.",
    tag: "Lingue",
  },
];

const CoursesSection = () => {
  return (
    <section id="corsi" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
            La nostra offerta
          </span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            I Nostri Corsi
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Percorsi formativi professionali riconosciuti, pensati per prepararti al mondo del lavoro
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <span className="absolute right-4 top-4 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {course.tag}
              </span>
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <course.icon className="h-6 w-6" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-card-foreground">
                {course.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {course.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
