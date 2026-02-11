import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecialOffersBanner from "@/components/SpecialOffersBanner";
import MenuSection from "@/components/MenuSection";
import PricingSection from "@/components/PricingSection";
import WeeklyMenuSection from "@/components/WeeklyMenuSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OrderFormSection from "@/components/OrderFormSection";
import GoogleMapSection from "@/components/GoogleMapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SpecialOffersBanner />
      <MenuSection />
      <PricingSection />
      <WeeklyMenuSection />
      <GallerySection />
      <AboutSection />
      <TestimonialsSection />
      <OrderFormSection />
      <GoogleMapSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
