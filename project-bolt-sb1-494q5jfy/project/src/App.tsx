import React from 'react';
import Navbar from './components/Navbar';
import AIBuddy from './components/AIBuddy';
import Footer from './components/Footer';
import { ArrowRight, Code, Cloud, Shield, Zap, Users, Database, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Innovating the Future of Technology
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We build cutting-edge solutions that transform businesses and drive digital innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Custom Development', description: 'Tailored software solutions built with cutting-edge technology' },
              { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and migration services' },
              { icon: Shield, title: 'Cybersecurity', description: 'Advanced security measures to protect your digital assets' },
              { icon: Zap, title: 'AI & Machine Learning', description: 'Intelligent solutions powered by advanced algorithms' },
              { icon: Database, title: 'Data Analytics', description: 'Transform your data into actionable insights' },
              { icon: Globe, title: 'Digital Transformation', description: 'Guide your business into the digital age' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team Collaboration"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We're a team of passionate technologists dedicated to solving complex problems with innovative solutions. With years of experience across various industries, we bring expertise and creativity to every project.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-900">Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-900">Secure Solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-900">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-900">Global Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Clients Worldwide' },
              { number: '1000+', label: 'Projects Completed' },
              { number: '50+', label: 'Team Members' },
              { number: '10+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's work together to build something amazing. Contact us today to get started.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Contact Us Now
          </button>
        </div>
      </section>

      <AIBuddy />
      <Footer />
    </div>
  );
}

export default App;