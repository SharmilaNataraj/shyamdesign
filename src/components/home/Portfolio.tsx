import React from "react";
import Link from "next/link";

const BrandingPage = () => {
  return (
    <>
    

      {/* ===== CTA SECTION ===== */}
      <section className="bg-[#FFE94A] py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight">
            Let’s discuss your project,
            <br className="hidden md:block" />
            contact us today to get started!
          </h2>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-black px-10 py-4 text-lg font-medium text-black transition-all duration-300 hover:bg-black hover:text-[#FFE94A]"
            >
              Get in touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

        </div>
      </section>
        {/* ===== CONTENT SECTION ===== */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-semibold text-black leading-tight">
            Creative Branding & Logo Design Company <br />
            in Coimbatore
          </h1>

          <p className="mt-8 text-base md:text-lg text-black/80 leading-relaxed max-w-5xl">
            Designpluz Branding Services is a trusted branding and logo design
            company in Coimbatore, creating impactful brand identities that
            match your vision and meet global standards. Our brand strategy is
            focused on understanding the essence of your business and converting
            it into designs that effectively convey your message to the
            audience. No matter if you're just a startup, a small business, or
            an enterprise, we create custom branding solutions that fit your
            needs and help you grow.
            <br /><br />
            Our logo designs not only look great but also show what your brand
            is really about. We follow a thoughtful logo creation process that
            includes research, concept development, and final delivery of
            high-quality, scalable assets that reflect your visual brand
            identity.
          </p>

        </div>
      </section>
    </>
  );
};

export default BrandingPage;
