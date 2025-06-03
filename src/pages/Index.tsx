import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductGrid from "@/components/sections/ProductGrid";
import FeaturesSection from "@/components/sections/FeaturesSection";
import StatsSection from "@/components/sections/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductGrid />
        <FeaturesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
