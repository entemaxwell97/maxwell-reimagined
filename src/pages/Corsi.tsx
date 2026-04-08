import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";
import PageHero from "@/components/PageHero";

const Corsi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero title="I Nostri Corsi" breadcrumb="Corsi" />
      <CoursesSection />
      <Footer />
    </div>
  );
};

export default Corsi;
