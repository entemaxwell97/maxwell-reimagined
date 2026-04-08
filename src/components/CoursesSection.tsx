import { motion } from "framer-motion";
import { BookOpen, Monitor, Heart, Shield, Cpu, Globe, Zap, PenTool, Award, Laptop, Box } from "lucide-react";

const courses = [
  {
    icon: Box,
    title: "Masterclass BIM Specialist",
    description: "Corso avanzato per diventare BIM Specialist. Acquisizione di competenze nella modellazione informativa degli edifici con metodologia BIM.",
    tag: "Nuovo",
  },
  {
    icon: BookOpen,
    title: "Preparazione Concorsi Pubblici",
    description: "Preparazione per concorsi pubblici con lezioni in presenza e da remoto tenute da docenti esperti. Bando Ripam per 3997 assistenti e altri concorsi attivi.",
    tag: "Concorsi",
  },
  {
    icon: Monitor,
    title: "Operatore Informatico",
    description: "Qualifica professionale IeFP riconosciuta dalla Regione Campania e in ambito europeo. Corso gratuito triennale finanziato dal PR Campania FSE+ 2021-2027.",
    tag: "IeFP",
  },
  {
    icon: Heart,
    title: "BLSD",
    description: "Acquisizione di strumenti conoscitivi e metodologici per prevenire il danno anossico cerebrale, riconoscere stati d'incoscienza e tecniche di primo soccorso.",
    tag: "Sanitario",
  },
  {
    icon: Globe,
    title: "Tecnico Web",
    description: "Ideazione, progettazione, sviluppo e aggiornamento di siti web pubblicati su Internet. Gestione di tutte le fasi dalla creazione alla manutenzione.",
    tag: "IT",
  },
  {
    icon: Award,
    title: "EIPASS",
    description: "Certificazione informatica riconosciuta a livello europeo. Attesta l'acquisizione di competenze informatiche avanzate, alternativa alla ECDL/ICDL.",
    tag: "Certificazione",
  },
  {
    icon: Cpu,
    title: "Tecnico Hardware",
    description: "Assemblaggio, installazione e manutenzione di componenti hardware e software di sistemi e reti informatiche. Configurazione e riparazioni.",
    tag: "IT",
  },
  {
    icon: Shield,
    title: "RSPP",
    description: "Responsabile del Servizio Prevenzione e Protezione secondo il D.Lgs. 81/08. Figura aziendale obbligatoria per la sicurezza sul lavoro.",
    tag: "Sicurezza",
  },
  {
    icon: PenTool,
    title: "Web Designer",
    description: "Progettazione e creazione di pagine web: funzionamento tecnico, comunicazione, aspetto grafico e coinvolgimento degli utenti.",
    tag: "IT",
  },
  {
    icon: Zap,
    title: "Progettista Impianti Fotovoltaici",
    description: "Corso per progettista di impianti fotovoltaici, sfruttando l'energia solare per produrre energia elettrica pulita e rinnovabile.",
    tag: "Energia",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
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
