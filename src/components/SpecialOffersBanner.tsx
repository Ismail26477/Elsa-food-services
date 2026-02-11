import { Sparkles } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

const SpecialOffersBanner = () => {
  return (
    <section className="py-6 bg-gradient-gold">
      <ScrollAnimate>
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Sparkles className="w-6 h-6 text-accent-foreground" />
          <p className="text-accent-foreground font-bold text-lg">
            🎉 Special Offer: First Week Trial at just ₹499! &nbsp;|&nbsp; Monthly Plans starting ₹2,999
          </p>
          <a
            href="tel:08007611971"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            Claim Now
          </a>
        </div>
      </ScrollAnimate>
    </section>
  );
};

export default SpecialOffersBanner;
