import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Chi Siamo"
        description="Scopri l'Ente di Formazione Professionale Maxwell a Napoli. Da oltre 30 anni formiamo professionisti con corsi accreditati dalla Regione Campania."
        path="/chi-siamo"
      />
      <Header />
      <PageHero title="Chi Siamo" breadcrumb="Chi Siamo" />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default ChiSiamo;
