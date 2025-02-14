import React, { useState } from 'react';
import { Menu, Search, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const services = ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI Integration'];
  const portfolio = ['Case Studies', 'Client Work', 'Open Source', 'Testimonials'];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold">CompanyLogo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-blue-400 transition-colors">About Us</a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center hover:text-blue-400 transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white text-gray-900 ${isServicesOpen ? 'block' : 'hidden'}`}>
                <div className="py-1">
                  {services.map((service) => (
                    <a
                      key={service}
                      href={`/services/${service.toLowerCase().replace(' ', '-')}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Portfolio Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center hover:text-blue-400 transition-colors"
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
              >
                Portfolio <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white text-gray-900 ${isPortfolioOpen ? 'block' : 'hidden'}`}>
                <div className="py-1">
                  {portfolio.map((item) => (
                    <a
                      key={item}
                      href={`/portfolio/${item.toLowerCase().replace(' ', '-')}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a>
            <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
          <a href="/" className="block px-3 py-2 hover:text-blue-400">Home</a>
          <a href="/about" className="block px-3 py-2 hover:text-blue-400">About Us</a>
          <a href="/services" className="block px-3 py-2 hover:text-blue-400">Services</a>
          <a href="/portfolio" className="block px-3 py-2 hover:text-blue-400">Portfolio</a>
          <a href="/blog" className="block px-3 py-2 hover:text-blue-400">Blog</a>
          <a href="/contact" className="block px-3 py-2 hover:text-blue-400">Contact</a>
          <div className="px-3 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="px-3 py-2">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;