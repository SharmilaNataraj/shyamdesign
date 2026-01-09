import React from 'react';
import Link from 'next/link';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Logo Design',
      description: 'Professional logo design services to create a memorable brand identity.',
      icon: '🎨'
    },
    {
      title: 'Branding & Rebranding',
      description: 'Comprehensive branding solutions to establish or refresh your brand presence.',
      icon: '🏷️'
    },
    {
      title: 'Graphic Design',
      description: 'Creative graphic design for brochures, posters, and marketing materials.',
      icon: '✏️'
    },
    {
      title: 'Website Design & Development',
      description: 'Modern, responsive websites that engage your audience and drive conversions.',
      icon: '💻'
    },
    {
      title: 'Business Card Design',
      description: 'Professional business cards that make a lasting impression.',
      icon: '📇'
    },
    {
      title: 'Catalogue Design',
      description: 'Eye-catching catalogues that showcase your products effectively.',
      icon: '📖'
    },
    {
      title: 'Packaging Design',
      description: 'Innovative packaging designs that protect and promote your products.',
      icon: '📦'
    },
    {
      title: 'Marketing Collateral',
      description: 'Design marketing materials that support your sales and promotional efforts.',
      icon: '📈'
    }
  ];

  return (
    <section className="home-services py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center mb-12 text-black">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-black">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;