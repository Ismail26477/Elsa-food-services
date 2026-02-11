import ScrollAnimate from "./ScrollAnimate";
import tiffinBox from "@/assets/tiffin-box.jpg";
import menuSpread from "@/assets/menu-spread.jpg";
import tiffinDelivery from "@/assets/tiffin-delivery.jpg";

const menuItems = [
  {
    title: "Daily Tiffin",
    description: "Fresh chapati, dal, sabzi, rice & salad delivered daily to your doorstep.",
    image: tiffinBox,
    tag: "Most Popular",
  },
  {
    title: "Party Orders",
    description: "Customized meals for gatherings, celebrations, and office events.",
    image: menuSpread,
    tag: "Custom Menu",
  },
  {
    title: "Bulk Delivery",
    description: "Reliable tiffin service for offices, hostels, and large groups.",
    image: tiffinDelivery,
    tag: "Best Value",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimate>
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-gradient-warm">Services</span>
            </h2>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <ScrollAnimate key={item.title} delay={i * 0.15}>
              <div className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-gradient-gold text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
