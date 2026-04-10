import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const Corsi = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="I Nostri Corsi"
        description="Tutti i corsi di formazione professionale dell'Ente Maxwell: informatica, sicurezza, sanità, green economy, scienze sociali SAFSS e molto altro."
        path="/corsi"
      />
      <Header />
      <PageHero title="I Nostri Corsi" breadcrumb="Corsi" />
      <CoursesSection />
      <Footer />
    </div>
  );
};

export default Corsi;
