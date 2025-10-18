import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="font-serif text-6xl font-bold tracking-wide text-white drop-shadow-2xl sm:text-7xl md:text-8xl lg:text-9xl">
            Amina Beauty
          </h1>
          
          {/* Subtitle */}
          <p className="mt-4 font-elegant text-xl tracking-widest text-white/95 drop-shadow-lg sm:text-2xl md:text-3xl">
            NAIROBI MAKEUP ARTIST
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-8 h-px w-24 bg-gold" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-px bg-white/50" />
          <div className="h-2 w-2 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
