import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Radial Graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-60 hidden lg:block">
        <Image
          src="/radial-lines.svg"
          alt="Radial lines"
          width={600}
          height={600}
          className="animate-spin-slow"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex items-center min-h-screen">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Brands that <br />
            are <span className="text-yellow-400">loud</span> are{" "}
            <span className="text-yellow-400">found</span>
          </h1>

          <p className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-white">
              No.1 Logo Design & Branding Agency in Coimbatore
            </span>
            <br />
            Designpluz Branding Services is a well-established branding and logo
            designing company with 15+ years of experience delivering
            exceptional results.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-yellow-400 px-6 py-3 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
            Get quote →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
