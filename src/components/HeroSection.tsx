import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: GraduationCap, value: "50+", label: "Corsi Attivi" },
  { icon: Users, value: "5000+", label: "Studenti Formati" },
  { icon: Award, value: "30+", label: "Anni di Esperienza" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              Ente di Formazione Professionale
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl"
          >
            Il tuo futuro <br />
            <span className="text-accent">inizia qui.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80"
          >
            Da oltre 30 anni formiamo professionisti qualificati con corsi riconosciuti
            dalla Regione Campania. Scopri i nostri percorsi formativi e investi nel tuo futuro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#corsi"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-all hover:brightness-110"
            >
              Scopri i Corsi
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3.5 font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
            >
              Contattaci
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-2xl"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm"
            >
              <stat.icon className="h-8 w-8 text-accent" />
              <div>
                <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
