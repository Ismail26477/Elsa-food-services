import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-10 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Elsa<span className="text-accent">.</span> Food Services
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Mohan Nagar, Nagpur — 440001
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="tel:08007611971"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Elsa Food Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
