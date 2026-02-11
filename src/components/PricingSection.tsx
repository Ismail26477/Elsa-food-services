import { Check, Phone } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

const plans = [
  {
    name: "Daily",
    price: "₹120",
    period: "/day",
    features: ["2 Chapati", "1 Sabzi", "Dal", "Rice", "Salad"],
    popular: false,
  },
  {
    name: "Weekly",
    price: "₹699",
    period: "/week",
    features: ["Full Thali Daily", "2 Sabzi Varieties", "Dal + Rice", "Chapati", "Salad + Pickle", "Weekend Special"],
    popular: true,
  },
  {
    name: "Monthly",
    price: "₹2,999",
    period: "/month",
    features: ["Full Thali Daily", "Rotating Menu", "Dal + Rice", "Chapati", "Salad + Pickle", "Sweet (Weekends)", "Free Delivery"],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimate>
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Affordable Plans
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tiffin <span className="text-gradient-warm">Plans</span>
            </h2>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <ScrollAnimate key={plan.name} delay={i * 0.15}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  plan.popular
                    ? "bg-gradient-warm text-warm-cream shadow-2xl scale-105"
                    : "bg-card text-foreground shadow-lg"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-accent-foreground px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.popular ? "text-warm-cream/70" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-warm-gold" : "text-accent"}`} />
                      <span className={plan.popular ? "text-warm-cream/90" : "text-muted-foreground"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:08007611971"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-center transition-transform hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-gold text-accent-foreground"
                      : "bg-gradient-warm text-warm-cream"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  Order Now
                </a>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
