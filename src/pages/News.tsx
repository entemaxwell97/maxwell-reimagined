import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="News"
        description="Ultime notizie e aggiornamenti dall'Ente di Formazione Professionale Maxwell di Napoli. Nuovi corsi, eventi e opportunità formative."
        path="/news"
      />
      <Header />
      <PageHero title="News" breadcrumb="News" />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default News;
