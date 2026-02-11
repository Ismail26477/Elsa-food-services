import { Star } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Elsa Food Services has been delivering my daily tiffin for 6 months now. The food tastes just like home! Highly recommended.",
    rating: 5,
    role: "Working Professional",
  },
  {
    name: "Rahul Deshmukh",
    text: "Best tiffin service in Nagpur! The weekly plan is perfect for our office. Fresh, tasty and always on time.",
    rating: 5,
    role: "Office Manager",
  },
  {
    name: "Anita Pillai",
    text: "I ordered for a family gathering and the food was amazing. Everyone loved the paneer and dal. Great quality!",
    rating: 5,
    role: "Homemaker",
  },
  {
    name: "Vikram Joshi",
    text: "Affordable and delicious! The monthly plan saves me so much money compared to eating out. Thank you Roshni ma'am!",
    rating: 4,
    role: "College Student",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimate>
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Happy Customers
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What People <span className="text-gradient-warm">Say</span>
            </h2>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <ScrollAnimate key={t.name} delay={i * 0.1}>
              <div className="bg-background rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-5 h-5 ${idx < t.rating ? "text-warm-gold fill-warm-gold" : "text-border"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
