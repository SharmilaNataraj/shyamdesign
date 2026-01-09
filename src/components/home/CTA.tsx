"use client";

import React, { useState } from 'react';

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="home-cta py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h4 className="text-4xl font-bold text-center mb-12">Let's Work Together</h4>
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="company"
                placeholder="COMPANY NAME"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="PHONE"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-black"
                required
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                name="projectDetails"
                placeholder="PROJECT DETAILS"
                value={formData.projectDetails}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-black h-32"
                required
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;