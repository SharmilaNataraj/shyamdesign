"use client";
import React, { useState } from "react";

const Testimonials = () => {
  const [active, setActive] = useState<number | null>(2); // default open: Web Design

  const services = [
    {
      title: "Branding & Logo Design",
      desc:
        "We offer complete branding & logo design services, creating unique identities that make your business memorable and stand out.",
    },
    {
      title: "Graphic Design",
      desc:
        "Creative graphic design solutions that communicate your brand message effectively across platforms.",
    },
    {
      title: "Web Design",
      desc:
        "We provide professional web design services to create responsive, user-friendly websites that support business goals and drive online growth.",
    },
    {
      title: "SEO",
      desc:
        "SEO strategies that improve your search engine rankings, increase traffic, and grow your online presence.",
    },
  ];

  const toggleItem = (index: number) => {
    setActive(active === index ? null : index); // open / close same item
  };

  return (
    <section className="bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            We specialize in Logo & Branding Design, Website Design, and Digital
            Solutions that help businesses connect with and grow their target
            audience.
          </h2>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="border-t border-white/20">
          {services.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                className="border-b border-white/20 py-7"
              >
                {/* HEADER */}
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-2xl md:text-3xl font-medium ${
                      isActive ? "text-yellow-400" : "text-white/50"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* ARROW BUTTON */}
                  <button
                    onClick={() => toggleItem(index)}
                    className={`text-xl transition-all ${
                      isActive
                        ? "text-yellow-400 rotate-90"
                        : "text-white/40"
                    }`}
                  >
                    →
                  </button>
                </div>

                {/* BODY */}
                {isActive && (
                  <div className="mt-4 max-w-xl">
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    <button className="mt-4 text-yellow-400 text-sm hover:underline">
                      Know More
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
