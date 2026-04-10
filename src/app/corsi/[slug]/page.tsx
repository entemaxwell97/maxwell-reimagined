import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CourseFAQ from "@/components/CourseFAQ";
import { courses } from "@/data/courses";
import { CircleCheck as CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Corso non trovato",
    };
  }

  return {
    title: `${course.title} – Ente Maxwell Formazione Napoli`,
    description: course.shortDescription,
    openGraph: {
      title: course.title,
      description: course.shortDescription,
    },
  };
}

export default async function CorsoDetail({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero title={course.title} breadcrumb={course.title} />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-6">{course.title}</h1>
          <p className="text-lg text-muted-foreground">{course.shortDescription}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Informazioni</h2>
            <div className="space-y-3">
              <div>
                <span className="text-sm text-muted-foreground">Categoria</span>
                <p className="font-medium text-foreground">{course.category}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Durata</span>
                <p className="font-medium text-foreground">{course.durata}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Stage/Tirocinio</span>
                <p className="font-medium text-foreground">{course.stage}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Esame Finale</span>
                <p className="font-medium text-foreground">{course.esamefinale}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Titolo di Studio</span>
                <p className="font-medium text-foreground">{course.titoloDiStudio}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Descrizione Breve</h2>
            <p className="text-muted-foreground leading-relaxed">{course.shortDescription}</p>
          </div>
        </div>

        {course.description && (
          <div className="mb-12 pb-12 border-b border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Descrizione Completa</h2>
            <div className="space-y-4">
              {course.description.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        )}

        {course.competenze && course.competenze.length > 0 && (
          <div className="mb-12 pb-12 border-b border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Competenze Acquisite</h2>
            <ul className="space-y-3">
              {course.competenze.map((comp, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-foreground">{comp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {course.perche && course.perche.length > 0 && (
          <div className="mb-12 pb-12 border-b border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Perché Scegliere Questo Corso</h2>
            <ul className="space-y-3">
              {course.perche.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {course.destinatari && course.destinatari.length > 0 && (
          <div className="mb-12 pb-12 border-b border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Destinatari</h2>
            <ul className="space-y-3">
              {course.destinatari.map((dest, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-foreground">{dest}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {course.faq && course.faq.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Domande Frequenti</h2>
            <CourseFAQ faqs={course.faq} />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
