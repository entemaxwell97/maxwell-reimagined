import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: GraduationCap, value: "50+", label: "Corsi Attivi" },
  { icon: Users, value: "5000+", label: "Studenti Formati" },
  { icon: Award, value: "30+", label: "Anni di Esperienza" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* Quick intro */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Perché scegliere l'Ente Maxwell?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Da oltre 30 anni formiamo professionisti qualificati con corsi riconosciuti dalla Regione Campania.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <h.icon className="mx-auto h-10 w-10 text-primary" />
                <div className="mt-3 text-3xl font-bold text-foreground">{h.value}</div>
                <div className="text-sm text-muted-foreground">{h.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/corsi"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              <BookOpen className="h-4 w-4" />
              Scopri i Corsi
            </Link>
            <Link
              to="/chi-siamo"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              Chi Siamo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
