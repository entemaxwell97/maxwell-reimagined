import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";
import PageHero from "@/components/PageHero";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero title="News" breadcrumb="News" />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default News;
