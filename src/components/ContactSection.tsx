import { Phone, MapPin, Mail } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-warm text-warm-cream">
      <div className="container mx-auto max-w-4xl text-center">
        <ScrollAnimate>
          <p className="text-warm-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Order Your <span className="text-warm-gold">Tiffin</span> Today
          </h2>
        </ScrollAnimate>

        <ScrollAnimate delay={0.2}>
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <a
              href="tel:08007611971"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-warm-cream/10 hover:bg-warm-cream/20 transition-colors"
            >
              <Phone className="w-8 h-8 text-warm-gold" />
              <span className="font-bold text-lg">Call Us</span>
              <span className="text-warm-cream/80 text-sm">080076 11971</span>
            </a>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-warm-cream/10">
              <MapPin className="w-8 h-8 text-warm-gold" />
              <span className="font-bold text-lg">Visit Us</span>
              <span className="text-warm-cream/80 text-sm text-center">
                House No. 125/B, Near Shiv Mandir, Khalasi Line, Mohan Nagar, Nagpur - 440001
              </span>
            </div>
            <a
              href="https://wa.me/918007611971"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-warm-cream/10 hover:bg-warm-cream/20 transition-colors"
            >
              <Mail className="w-8 h-8 text-warm-gold" />
              <span className="font-bold text-lg">WhatsApp</span>
              <span className="text-warm-cream/80 text-sm">Message us</span>
            </a>
          </div>
        </ScrollAnimate>

        <ScrollAnimate delay={0.3}>
          <a
            href="tel:08007611971"
            className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now: 080076 11971
          </a>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default ContactSection;
