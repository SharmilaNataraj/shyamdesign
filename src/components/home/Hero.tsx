import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="home-hero bg-cover bg-center text-black py-20 relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl font-bold mb-6">
          Crafting Brands That Inspire
        </h1>
        <h3 className="text-2xl mb-6">
          Designpluz Branding Agency in Coimbatore
        </h3>
        <p className="text-xl mb-8 max-w-4xl mx-auto">
          Professional Logo Design, Branding & Rebranding, Brochure Design, Graphic Design, Website Design & Development, Business Card Design, Catalogue Design, Packaging Design, Marketing Collateral Design, and more.
        </p>
        <div className="space-x-4">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Get Quote
          </Link>
          <Link
            href="/portfolio"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;