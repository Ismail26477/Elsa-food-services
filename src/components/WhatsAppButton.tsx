import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918007611971?text=Hi%2C%20I%20want%20to%20order%20a%20tiffin!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
      aria-label="Order on WhatsApp"
      style={{ animationDuration: "2s", animationIterationCount: "3" }}
    >
      <MessageCircle className="w-8 h-8 text-white fill-white" />
    </a>
  );
};

export default WhatsAppButton;
