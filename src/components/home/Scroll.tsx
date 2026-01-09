"use client";
import React from "react";

const logos = [
  "/logos/mustang.png",
  "/logos/agni.png",
  "/logos/abirami.png",
  "/logos/arkay.png",
  "/logos/almetech.png",
  "/logos/coiron.png",
  "/logos/edacc.png",
  "/logos/vet.png",
  "/logos/srigana.png",
  "/logos/banyan.png",
];

const Scroll = () => {
  return (
    <section className="bg-[#f3f3f3] py-14 overflow-hidden">
      <div className="relative w-full">
        <div className="flex w-max gap-8 animate-logo-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-[220px] h-[120px] bg-white rounded-xl 
                         flex items-center justify-center shadow-sm
                         grayscale hover:grayscale-0 transition"
            >
              <img
                src={logo}
                alt="logo"
                className="max-h-[70px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scroll;
