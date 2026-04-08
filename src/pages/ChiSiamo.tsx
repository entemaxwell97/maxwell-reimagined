import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import PageHero from "@/components/PageHero";

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero title="Chi Siamo" breadcrumb="Chi Siamo" />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default ChiSiamo;
