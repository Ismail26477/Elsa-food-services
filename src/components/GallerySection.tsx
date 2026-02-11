import { useState } from "react";
import ScrollAnimate from "./ScrollAnimate";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Paneer Butter Masala" },
  { src: gallery2, alt: "Fresh Chapati" },
  { src: gallery3, alt: "Dal Tadka" },
  { src: gallery4, alt: "Veg Biryani" },
  { src: gallery5, alt: "Mixed Veg Sabzi" },
  { src: gallery6, alt: "Gulab Jamun" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimate>
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Our Kitchen
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Food <span className="text-gradient-warm">Gallery</span>
            </h2>
          </div>
        </ScrollAnimate>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <ScrollAnimate key={i} delay={i * 0.08}>
              <div
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-warm-cream font-bold text-lg">{img.alt}</span>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
