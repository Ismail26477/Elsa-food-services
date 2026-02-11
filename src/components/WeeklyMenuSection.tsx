import ScrollAnimate from "./ScrollAnimate";

const days = [
  { day: "Monday", items: "Paneer Masala, Dal Fry, Jeera Rice, Chapati, Salad" },
  { day: "Tuesday", items: "Aloo Gobi, Moong Dal, Steamed Rice, Chapati, Pickle" },
  { day: "Wednesday", items: "Chole, Tadka Dal, Rice, Chapati, Raita" },
  { day: "Thursday", items: "Mix Veg, Masoor Dal, Rice, Chapati, Salad" },
  { day: "Friday", items: "Bhindi Masala, Arhar Dal, Rice, Chapati, Papad" },
  { day: "Saturday", items: "Special Veg Biryani, Raita, Gulab Jamun 🎉" },
];

const WeeklyMenuSection = () => {
  return (
    <section id="weekly-menu" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimate>
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              This Week
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Weekly <span className="text-gradient-warm">Menu</span>
            </h2>
          </div>
        </ScrollAnimate>

        <div className="space-y-4">
          {days.map((d, i) => (
            <ScrollAnimate key={d.day} delay={i * 0.08}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-background rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-accent font-bold text-lg min-w-[110px]">{d.day}</span>
                <span className="text-muted-foreground leading-relaxed">{d.items}</span>
              </div>
            </ScrollAnimate>
          ))}
        </div>

        <ScrollAnimate delay={0.5}>
          <p className="text-center text-muted-foreground text-sm mt-8">
            * Menu may vary based on seasonal availability. Sunday closed.
          </p>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default WeeklyMenuSection;
