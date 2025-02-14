import React, { useState } from 'react';
import { MessageCircle, X, Search, ExternalLink } from 'lucide-react';

const AIBuddy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickLinks = [
    { title: 'FAQs', url: '/faqs' },
    { title: 'Support', url: '/support' },
    { title: 'Pricing', url: '/pricing' },
    { title: 'Contact Us', url: '/contact' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-xl">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">AI Assistant</h3>
            <p className="text-gray-600">Hi! How can I help you today? 👋</p>
          </div>

          {/* Search Bar */}
          <div className="p-4 border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="p-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  className="flex items-center text-blue-500 hover:text-blue-600"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="p-4 bg-gray-50 rounded-b-lg">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Suggestions</h4>
            <p className="text-sm text-gray-600">
              Looking for our services? <a href="/services" className="text-blue-500 hover:text-blue-600">Click here!</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIBuddy;