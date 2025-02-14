import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@company.com" className="hover:text-white transition-colors">
                  info@company.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: 'https://facebook.com' },
                { Icon: Twitter, href: 'https://twitter.com' },
                { Icon: Instagram, href: 'https://instagram.com' },
                { Icon: Linkedin, href: 'https://linkedin.com' },
                { Icon: Youtube, href: 'https://youtube.com' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Company Name. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;