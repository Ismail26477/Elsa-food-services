import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#menu" },
  { label: "Plans", href: "#pricing" },
  { label: "Menu", href: "#weekly-menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Order", href: "#order" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
          Elsa<span className="text-accent">Food Services</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:08007611971"
            className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            <Phone className="w-4 h-4" />
            Order Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-foreground text-lg font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:08007611971"
            className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-5 py-3 rounded-full text-sm font-bold w-full justify-center"
          >
            <Phone className="w-4 h-4" />
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
