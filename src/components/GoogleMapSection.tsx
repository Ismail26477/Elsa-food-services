import ScrollAnimate from "./ScrollAnimate";

const GoogleMapSection = () => {
  return (
    <section id="map" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimate>
          <div className="text-center mb-12">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Find Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-gradient-warm">Location</span>
            </h2>
          </div>
        </ScrollAnimate>

        <ScrollAnimate delay={0.2}>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Elsa Food Services Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sMohan%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default GoogleMapSection;
