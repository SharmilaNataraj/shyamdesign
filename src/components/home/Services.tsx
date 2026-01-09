"use client";

import React, { useEffect, useState } from "react";

const left = [
  { img: "/tm-img-100x100-3.jpg", h: "h-[260px]" },
  { img: "/tm-img-100x100-4.jpg", h: "h-[320px]" },
  { img: "/tm-img-310x180-4.jpg", h: "h-[260px]" },
];

const center = [
  "/tm-img-310x180-2.jpg",
  "/tm-img-310x180-4.jpg",
  "/tm-img-310x180-2.jpg",
  "/tm-img-310x180-4.jpg",
];

const right = [
  { img: "/tm-img-310x180-4.jpg", h: "h-[280px]" },
  { img: "/tm-img-310x180-4.jpg", h: "h-[320px]" },
  { img: "/tm-img-310x180-4.jpg", h: "h-[260px]" },
];

const CARD_HEIGHT = 360; // MUST match CenterCard wrapper height

const Services = () => {
  const [index, setIndex] = useState(0);

  // AUTO SCROLL
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % center.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

        {/* LEFT (STATIC) */}
        <Column items={left} />

        {/* CENTER (AUTO SCROLL + CENTERED) */}
        <div className="relative h-[360px] flex items-center justify-center overflow-hidden">
          <div
            className="transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateY(-${index * CARD_HEIGHT}px)`
            }}
          >
            {center.map((img, i) => (
              <CenterCard key={i} img={img} />
            ))}
          </div>
        </div>

        {/* RIGHT (STATIC) */}
        <Column items={right} />

      </div>
    </section>
  );
};

const Column = ({ items }: any) => (
  <div className="space-y-4">
    {items.map((item: any, i: number) => (
      <div
        key={i}
        className={`rounded-xl overflow-hidden ${item.h}`}
      >
        <img
          src={item.img}
          alt=""
          className="w-full h-full object-cover transition duration-700 hover:scale-105"
        />
      </div>
    ))}
  </div>
);

const CenterCard = ({ img }: { img: string }) => (
  <div className="h-[360px] w-[320px] flex items-center justify-center">
    <div className="h-[300px] w-full rounded-xl overflow-hidden">
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover transition duration-700 hover:scale-105"
      />
    </div>
  </div>
);

export default Services;
 