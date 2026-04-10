import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, GraduationCap, FileCheck, BookOpen, ArrowLeft, CheckCircle2, Phone, Users, HelpCircle, ChevronDown, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { courses } from "@/data/courses";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CorsoDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <Navigate to="/corsi" replace />;

  const details = [
    { icon: Clock, label: "Durata", value: course.durata },
    { icon: GraduationCap, label: "Titolo di Studio", value: course.titoloDiStudio },
    { icon: FileCheck, label: "Esame Finale", value: course.esamefinale },
    { icon: BookOpen, label: "Stage", value: course.stage },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={course.title}
        description={course.shortDescription}
        path={`/corsi/${course.slug}`}
      />
      <Header />

      {/* Hero */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="mb-4 text-sm text-primary-foreground/70">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <Link to="/corsi" className="hover:text-primary-foreground transition-colors">Corsi</Link>
              <span className="mx-2">›</span>
              <span className="text-primary-foreground">{course.title}</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                {course.tag}
              </span>
              <span className="rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground/80">
                {course.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              {course.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Descrizione */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Descrizione del Corso</h2>
              <div className="space-y-4">
                {course.description.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            {/* Perché scegliere */}
            {course.perche && course.perche.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Perché scegliere questo corso</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {course.perche.map((item, i) => {
                    const [titolo, ...resto] = item.split(" – ");
                    const desc = resto.join(" – ");
                    return (
                      <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-card">
                        <div className="flex items-start gap-3">
                          <Star className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <div>
                            <h4 className="font-semibold text-foreground">{titolo}</h4>
                            {desc && <p className="mt-1 text-sm text-muted-foreground">{desc}</p>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Competenze */}
            {course.competenze && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Competenze Acquisite</h2>
                <ul className="space-y-3">
                  {course.competenze.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Destinatari */}
            {course.destinatari && course.destinatari.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">A chi è rivolto</h2>
                <div className="flex flex-wrap gap-3">
                  {course.destinatari.map((d, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                    >
                      <Users className="h-4 w-4 text-primary" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            {course.faq && course.faq.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Domande Frequenti</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {course.faq.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="rounded-xl border border-border bg-card px-5 shadow-sm"
                    >
                      <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

            <Link
              to="/corsi"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Torna a tutti i corsi
            </Link>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Dettagli Corso</h3>
              <div className="space-y-4">
                {details.map((d) => (
                  <div key={d.label} className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <d.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{d.label}</div>
                      <div className="font-medium text-foreground">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-3">Sei interessato?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contattaci per maggiori informazioni o per iscriverti a questo corso.
              </p>
              <Link
                to="/contatti"
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 w-full"
              >
                <Phone className="h-4 w-4" />
                Contattaci
              </Link>
              <div className="mt-3 text-center text-sm text-muted-foreground">
                oppure chiama il <strong>081-5854334</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CorsoDetail;
