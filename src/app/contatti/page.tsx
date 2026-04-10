import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contatti – Ente Maxwell Formazione Professionale Napoli",
  description:
    "Contatta l'Ente Maxwell per informazioni sui corsi. Siamo a Napoli in via G. A. Campano, 105. Tel: 081-5854334",
};

export default function Contatti() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero title="Contatti" breadcrumb="Contatti" />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-8">Dove Trovarci</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Sede Principale</h3>
                <p className="text-muted-foreground">
                  Via G. A. Campano, 105<br />
                  80142 Napoli (NA)<br />
                  Italia
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Telefono</h3>
                <p className="text-muted-foreground">
                  <a href="tel:081-5854334" className="text-primary hover:underline">
                    081-5854334
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:info@entemaxwell.it" className="text-primary hover:underline">
                    info@entemaxwell.it
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Orari di Apertura</h3>
                <p className="text-muted-foreground">
                  Lunedì – Venerdì: 09:00 – 18:00<br />
                  Sabato: Su appuntamento<br />
                  Domenica: Chiuso
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-8">Modulo di Contatto</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Il tuo nome"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="La tua email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Il tuo telefono"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Il tuo messaggio"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:opacity-90"
              >
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
