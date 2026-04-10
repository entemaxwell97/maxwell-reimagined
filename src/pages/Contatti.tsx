import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contatti = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contatti"
        description="Contatta l'Ente di Formazione Professionale Maxwell a Napoli. Via G. A. Campano 105, telefono 081-5854334, email info@entemaxwell.it."
        path="/contatti"
      />
      <Header />
      <PageHero title="Contatti" breadcrumb="Contatti" />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-foreground">Vieni a trovarci</h2>
              <p className="mt-4 text-muted-foreground">
                Siamo disponibili per fornirti tutte le informazioni sui nostri corsi di formazione.
                Non esitare a contattarci!
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Indirizzo</h3>
                    <p className="text-sm text-muted-foreground">Via G. A. Campano, 105 – Napoli</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Telefono</h3>
                    <p className="text-sm text-muted-foreground">081-5854334 / 320-8681476</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">info@entemaxwell.it</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Orari</h3>
                    <p className="text-sm text-muted-foreground">Lun–Ven: 9:00–11:00, 17:00–19:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden rounded-xl border border-border shadow-card"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.9!2d14.2!3d40.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUyJzEyLjAiTiAxNMKwMTInMDAuMCJF!5e0!3m2!1sit!2sit!4v1"
                width="100%"
                height="100%"
                className="min-h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Sede Ente Maxwell"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;
