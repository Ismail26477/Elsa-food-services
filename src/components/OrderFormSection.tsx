import { useState } from "react";
import { Send } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

const OrderFormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const phone = data.get("phone");
    const plan = data.get("plan");
    const message = data.get("message");

    const whatsappText = `Hi, I'm ${name}. I'd like to order the ${plan} plan.${message ? ` Note: ${message}` : ""} My number: ${phone}`;
    window.open(
      `https://wa.me/918007611971?text=${encodeURIComponent(whatsappText)}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="order" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-2xl">
        <ScrollAnimate>
          <div className="text-center mb-12">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Quick Order
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Place Your <span className="text-gradient-warm">Order</span>
            </h2>
          </div>
        </ScrollAnimate>

        <ScrollAnimate delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-lg space-y-5"
          >
            <div>
              <label className="block text-foreground font-medium mb-2 text-sm">Your Name</label>
              <input
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-foreground font-medium mb-2 text-sm">Phone Number</label>
              <input
                name="phone"
                type="tel"
                required
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-foreground font-medium mb-2 text-sm">Select Plan</label>
              <select
                name="plan"
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Choose a plan</option>
                <option value="Daily (₹120/day)">Daily — ₹120/day</option>
                <option value="Weekly (₹699/week)">Weekly — ₹699/week</option>
                <option value="Monthly (₹2,999/month)">Monthly — ₹2,999/month</option>
              </select>
            </div>
            <div>
              <label className="block text-foreground font-medium mb-2 text-sm">Message (Optional)</label>
              <textarea
                name="message"
                rows={3}
                placeholder="Any special requests?"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-accent-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              <Send className="w-5 h-5" />
              {submitted ? "Redirecting to WhatsApp..." : "Order via WhatsApp"}
            </button>
          </form>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default OrderFormSection;
