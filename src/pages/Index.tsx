import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, GraduationCap, CheckCircle2, Phone, Mail, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { courses } from "@/data/courses";

const highlights = [
  { icon: GraduationCap, value: "50+", label: "Corsi Attivi" },
  { icon: Users, value: "5000+", label: "Studenti Formati" },
  { icon: Award, value: "30+", label: "Anni di Esperienza" },
];

const features = [
  "Corsi riconosciuti dalla Regione Campania",
  "Qualifiche valide in ambito europeo",
  "Docenti esperti e qualificati",
  "Formazione in presenza e a distanza (FAD)",
  "Percorsi IeFP finanziati dal FSE+",
  "Certificazioni informatiche EIPASS",
];

const testimonials = [
  {
    name: "Marco R.",
    role: "Ex studente – Tecnico Hardware",
    text: "Grazie al corso di Tecnico Hardware ho trovato lavoro in un'azienda IT di Napoli. I docenti sono preparatissimi e le esercitazioni pratiche fanno la differenza.",
  },
  {
    name: "Anna L.",
    role: "Ex studentessa – EIPASS",
    text: "La certificazione EIPASS mi ha permesso di scalare le graduatorie e ottenere il posto che desideravo. Consiglio l'Ente Maxwell a tutti.",
  },
  {
    name: "Giuseppe T.",
    role: "Ex studente – RSPP",
    text: "Il corso RSPP è stato fondamentale per la mia carriera. Ora gestisco la sicurezza in un'azienda di 200 dipendenti. Formazione eccellente.",
  },
];

const Index = () => {
  const featuredCourses = courses.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Formazione Professionale Napoli"
        description="Ente di Formazione Professionale Maxwell a Napoli. Corsi accreditati dalla Regione Campania: informatica, sicurezza, lingue, sanitario, scienze sociali e molto altro."
        path="/"
      />
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
        </div>
      </section>

      {/* Featured courses */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">I Nostri Corsi</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Scopri la nostra offerta formativa completa: dai percorsi IeFP alle certificazioni professionali.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course, i) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={`/corsi/${course.slug}`}
                  className="group relative flex flex-col h-full min-h-[280px] rounded-xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <course.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {course.tag}
                    </span>
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-card-foreground">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {course.shortDescription}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Scopri di più <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/corsi"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              <BookOpen className="h-4 w-4" />
              Vedi Tutti i Corsi
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us – features checklist */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                La Tua Formazione, <br />
                <span className="text-primary">il Nostro Impegno</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                L'Ente Maxwell è accreditato dalla Regione Campania per l'erogazione di corsi di formazione professionale.
                Offriamo percorsi formativi di qualità per aiutarti a raggiungere i tuoi obiettivi professionali.
              </p>
              <ul className="mt-8 space-y-3">
                {features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{f}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/chi-siamo"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
                >
                  Scopri di più su di noi
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-xl border border-border bg-card p-6 shadow-card text-center">
                <div className="text-4xl font-bold text-primary">30+</div>
                <div className="mt-1 text-sm text-muted-foreground">Anni di attività</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card text-center">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="mt-1 text-sm text-muted-foreground">Corsi professionali</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card text-center">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="mt-1 text-sm text-muted-foreground">Riconoscimento UE</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card text-center">
                <div className="text-4xl font-bold text-primary">FAD</div>
                <div className="mt-1 text-sm text-muted-foreground">Formazione a distanza</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Cosa Dicono i Nostri Studenti
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Le esperienze di chi ha scelto l'Ente Maxwell per la propria formazione professionale.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div className="mt-4 border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Pronto a Investire nel Tuo Futuro?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Contattaci per maggiori informazioni sui nostri corsi o vieni a trovarci nella nostra sede di Napoli.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-all hover:brightness-110"
              >
                <Phone className="h-4 w-4" />
                Contattaci Ora
              </Link>
              <Link
                to="/corsi"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                <BookOpen className="h-4 w-4" />
                Scopri i Corsi
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Via G. A. Campano, 105 – Napoli
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> 081-5854334
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@entemaxwell.it
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
