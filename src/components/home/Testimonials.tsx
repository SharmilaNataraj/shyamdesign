import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Mr. Kumaravel',
      position: 'Managing Director at FREHNIG',
      logo: '/freshing.svg', // Placeholder
      quote: 'The logo and stationery design for our company, was carried out by the very much to our satisfaction. The designers understood our requirements and worked on our expectations and provided the results. Will work with them again!'
    },
    {
      name: 'Sekar',
      position: 'Proprietor',
      logo: '/naaval-logo.svg', // Placeholder
      quote: 'The designs provided by design pluz team is really what i looked for. They look into client convenience and work. so a good designing place.'
    },
    {
      name: 'Pavan ML',
      position: 'Supply Chain Management',
      logo: '/designparamapriya.svg', // Placeholder
      quote: 'In our journey so far, the very first company we have collaborated with and would remember till our brand exists is "Designpluz" as we got our Identity (LOGO) and Faces for our products (Labels) from "Designpluz" team. The entire team were very professional from onboarding till delivery – Not the end of our journey though :)'
    },
    {
      name: 'Some Client',
      position: 'Proprietor',
      logo: '/client-logo.svg', // Placeholder
      quote: 'DesignPluz Branding Agency in Coimbatore exceeded my expectations with their creative logo design services. They understood my vision, provided innovative options, and delivered a standout final design. Their professionalism and quality make them my top choice for branding needs.'
    }
  ];

  return (
    <section className="home-testimonials py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center mb-12 text-black">What Our Clients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={testimonial.logo} alt={testimonial.name} className="w-12 h-12 mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;