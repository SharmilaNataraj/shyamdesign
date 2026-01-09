import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Shyam Design
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;