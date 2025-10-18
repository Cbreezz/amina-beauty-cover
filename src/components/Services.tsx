import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Bridal Makeup",
    description:
      "Make your special day unforgettable with flawless, long-lasting bridal makeup tailored to your unique beauty and wedding vision.",
  },
  {
    id: 2,
    title: "Photoshoot & Film",
    description:
      "Camera-ready makeup artistry for editorial shoots, music videos, and film productions. Professional looks that translate beautifully on screen.",
  },
  {
    id: 3,
    title: "Personal Masterclass",
    description:
      "Learn the techniques behind stunning makeup application. One-on-one sessions customized to your skill level and beauty goals.",
  },
];

const Services = () => {
  return (
    <section className="bg-muted px-4 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Services
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-lg bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mb-8 flex-grow font-elegant text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Button variant="secondary" className="w-full">
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
