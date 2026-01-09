import React from 'react';
import Link from 'next/link';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      image: '/portfolio1.jpg' // Placeholder
    },
    {
      title: 'Logo Design',
      category: 'Logo',
      image: '/portfolio2.jpg' // Placeholder
    },
    {
      title: 'Website Design',
      category: 'Web Design',
      image: '/portfolio3.jpg' // Placeholder
    },
    {
      title: 'Packaging Design',
      category: 'Packaging',
      image: '/portfolio4.jpg' // Placeholder
    },
    {
      title: 'Brochure Design',
      category: 'Print',
      image: '/portfolio5.jpg' // Placeholder
    },
    {
      title: 'Business Card Design',
      category: 'Print',
      image: '/portfolio6.jpg' // Placeholder
    }
  ];

  return (
    <section className="home-portfolio py-20 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center mb-12 text-black">Our Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-card bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2 text-black">{item.title}</h4>
                <p className="text-gray-600">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;