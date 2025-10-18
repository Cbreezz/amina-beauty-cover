import { Button } from "@/components/ui/button";

const Contact = () => {
  // Replace with actual WhatsApp number or email
  const contactLink = "mailto:hello@aminabeauty.com";
  // For WhatsApp: const contactLink = "https://wa.me/254700000000";

  return (
    <section className="bg-luxury-dark px-4 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Let's Create Something Beautiful
        </h2>
        <div className="mx-auto mb-12 h-px w-32 bg-gold" />
        <p className="mb-12 font-elegant text-lg text-white/80 md:text-xl">
          Ready to enhance your natural beauty? Get in touch to discuss your vision.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="text-base md:text-lg"
          asChild
        >
          <a href={contactLink}>Inquire About a Booking</a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
