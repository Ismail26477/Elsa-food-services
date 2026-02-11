import { Clock, Leaf, Truck, Heart } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

const features = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Only the freshest vegetables and spices" },
  { icon: Clock, title: "On-Time Delivery", desc: "Your meal arrives hot and on schedule" },
  { icon: Heart, title: "Made with Love", desc: "Home-style cooking with authentic recipes" },
  { icon: Truck, title: "Doorstep Service", desc: "Convenient delivery across Nagpur" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <ScrollAnimate>
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Taste the <span className="text-gradient-warm">Difference</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              At Elsa Food Services, we believe every meal should feel like home.
              Run by Roshni Thomas, we bring you authentic, hygienically prepared
              tiffin meals right to your doorstep in Nagpur.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <ScrollAnimate key={f.title} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-card hover:bg-secondary transition-colors group">
                <div className="w-16 h-16 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <f.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
