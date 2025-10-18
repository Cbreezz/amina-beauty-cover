import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  { id: 1, image: portfolio1, title: "Wedding Glam", span: "row-span-2" },
  { id: 2, image: portfolio2, title: "Editorial Drama", span: "row-span-1" },
  { id: 3, image: portfolio3, title: "Natural Beauty", span: "row-span-2" },
  { id: 4, image: portfolio4, title: "Evening Elegance", span: "row-span-2" },
  { id: 5, image: portfolio5, title: "Artistic Vision", span: "row-span-1" },
  { id: 6, image: portfolio6, title: "Bridal Romance", span: "row-span-2" },
];

const PortfolioGallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-background px-4 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Portfolio
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <p className="mt-6 font-elegant text-lg text-muted-foreground md:text-xl">
            A collection of my artistry
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg ${item.span}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-luxury-dark/70 transition-opacity duration-300 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="font-elegant text-2xl font-semibold tracking-wide text-white md:text-3xl">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
