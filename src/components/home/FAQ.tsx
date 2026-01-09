"use client";

import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do you work with overseas clients?',
      answer: 'Yes! We serve clients worldwide, including Australia, Singapore, Malaysia, USA, UK, Canada, and many other countries. Designpluz Branding Services provides professional logo design, branding and rebranding services, brochure design, graphic design, website design and development, business card design, catalogue design, packaging design, marketing collateral design, and more. We use effective digital strategies to create impactful solutions for businesses across the globe.'
    },
    {
      question: 'Why do I need Branding for my business?',
      answer: 'Branding builds trust, enhances recognition, and reflects your business\'s values and personality. It connects you with the right audience and makes your brand stand out in a crowded market.'
    },
    {
      question: 'What is the average logo design price in Coimbatore?',
      answer: 'The costs of logo design depend on several factors, including the complexity of the design, customization preferences, and the scope of the project. At Designpluz, we provide tailored logo design solutions to suit your needs and budget.'
    },
    {
      question: 'Can you redesign logos, business cards, posters and banners?',
      answer: 'Yes, Designpluz specialises in logo redesign, business cards, posters, and banners. We provide a refreshing image to your brand, giving it a new look.'
    },
    {
      question: 'What type of industries do you provide branding and logo design services for?',
      answer: 'Manufacturing, technology, healthcare, retail, education, travel, fashion, finance, and real estate are just a few of the areas for which we provide logo and branding services in Coimbatore.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="home-faq py-20 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h3>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item mb-4 border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 transition duration-300 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-black">{faq.question}</span>
                <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;