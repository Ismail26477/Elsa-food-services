import { Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious homemade Indian thali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-warm opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-warm-gold uppercase tracking-[0.3em] text-sm font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Homemade • Fresh • Delivered
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold text-warm-cream leading-tight">
            Elsa Food
            <span className="block text-warm-gold">Services</span>
          </h1>
          <p className="text-warm-cream/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Experience the warmth of home-cooked meals delivered fresh to your doorstep.
            Authentic flavors, made with love in Nagpur.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="tel:08007611971"
              className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Order Now
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 border-2 border-warm-gold text-warm-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-warm-gold/10 transition-colors"
            >
              View Menu
            </a>
          </motion.div>
          <div className="flex items-center justify-center gap-2 pt-6 text-warm-cream/70 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Mohan Nagar, Nagpur</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
