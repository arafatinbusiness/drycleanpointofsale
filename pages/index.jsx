import { useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import BookingWidget from '../components/BookingWidget';
import ImageModal from '../components/ImageModal';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc, alt) => {
    setSelectedImage({ imageSrc, alt });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <Layout 
      title="Custom POS System Development | Mobile POS | Cloud POS | Android POS"
      description="Custom POS system development starting at $5000. We build mobile POS, cloud POS, and Android POS systems for businesses. One-time investment with lifetime support."
    >
      <Hero />
      
      {/* Direct POS System Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom POS System Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Starting at <span className="text-green-600 font-bold">$5000</span> - One-time investment for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Custom Cloud Based POS */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Cloud Based POS</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">$5000</div>
              <div className="text-sm text-purple-500 mb-4">Starting Price</div>
              <p className="text-gray-700 mb-6">
                Web-based POS accessible from any device with automatic updates and centralized management
              </p>
              <ul className="text-gray-600 space-y-2 text-left mb-6">
                <li>• Access from any browser</li>
                <li>• Automatic updates</li>
                <li>• Multi-location sync</li>
                <li>• Real-time analytics</li>
              </ul>
              <div className="w-full">
                <BookingWidget buttonText="Order or Contact Us" buttonClass="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium w-full" />
              </div>
            </div>
            
            {/* Mobile POS System */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 text-center">
              <div className="w-full max-w-xs mx-auto mb-6">
                <img 
                  src="/mobile_reponsive pos.png" 
                  alt="Mobile POS System" 
                  className="w-full rounded-xl shadow-md"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile POS System</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$3000</div>
              <div className="text-sm text-blue-500 mb-4">Starting Price</div>
              <p className="text-gray-700 mb-6">
                Complete POS solution optimized for mobile devices with offline capabilities and real-time sync
              </p>
              <ul className="text-gray-600 space-y-2 text-left mb-6">
                <li>• iOS and Android compatible</li>
                <li>• Offline order processing</li>
                <li>• Mobile payment integration</li>
                <li>• Customer management</li>
              </ul>
              <div className="w-full">
                <BookingWidget buttonText="Order or Contact Us" buttonClass="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium w-full" />
              </div>
            </div>
            
            {/* Mobile+Computer POS */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile+Computer POS</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$15000</div>
              <div className="text-sm text-green-500 mb-4">Starting Price</div>
              <p className="text-gray-700 mb-6">
                Complete hybrid solution with mobile and desktop capabilities for maximum flexibility
              </p>
              <ul className="text-gray-600 space-y-2 text-left mb-6">
                <li>• Mobile and desktop applications</li>
                <li>• Cross-platform synchronization</li>
                <li>• Advanced reporting features</li>
                <li>• Enterprise-grade security</li>
              </ul>
              <div className="w-full">
                <BookingWidget buttonText="Order or Contact Us" buttonClass="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium w-full" />
              </div>
            </div>
          </div>
          
          {/* Pricing Highlight */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">One-Time Investment</h3>
              <div className="text-4xl font-bold mb-2">$5000+</div>
              <p className="text-blue-100 mb-4">Starting price for custom POS system development</p>
              <ul className="text-blue-100 space-y-2 text-left max-w-md mx-auto">
                <li>• Complete source code ownership</li>
                <li>• Lifetime technical support</li>
                <li>• Custom features and integrations</li>
                <li>• Training and documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POS System Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Our Custom POS System in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real screenshots from Elite Laundry Station - 16,000+ invoices processed, 6M SR in sales over 8 months
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Main POS Interface - Dedicated Section */}
            <div className="text-center mb-16">
              <div 
                className="cursor-pointer w-full max-w-4xl mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
                onClick={() => openImage('/pos main.jpg', 'Custom POS System Main Interface - Order management and customer details')}
              >
                <img 
                  src="/pos main.jpg" 
                  alt="Custom POS System Main Interface" 
                  className="w-full rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Main POS Interface</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete order management with customer details, real-time status tracking, and integrated payment processing
              </p>
            </div>
            
            {/* Additional Features - Smaller Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Mobile Responsive POS */}
              <div className="text-center">
                <div 
                  className="cursor-pointer w-full max-w-sm mx-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => openImage('/mobile_reponsive pos.png', 'Mobile Responsive POS System - Optimized for mobile devices')}
                >
                  <img 
                    src="/mobile_reponsive pos.png" 
                    alt="Mobile Responsive POS System" 
                    className="w-full rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Mobile Responsive POS</h3>
                <p className="text-gray-600">
                  Fully optimized for mobile devices with touch-friendly interface and offline capabilities
                </p>
              </div>
              
              {/* POS Advanced Features */}
              <div className="text-center">
                <div 
                  className="cursor-pointer w-full max-w-sm mx-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => openImage('/pos2.jpg', 'Custom POS System Advanced Features - Inventory tracking and analytics')}
                >
                  <img 
                    src="/pos2.jpg" 
                    alt="Custom POS System Advanced Features" 
                    className="w-full rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Advanced Features</h3>
                <p className="text-gray-600">
                  Inventory management, analytics dashboard, staff performance tracking, and automated reporting
                </p>
              </div>
            </div>
          </div>
          
          {/* Case Study Results */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Elite Laundry Station Results</h3>
              <p className="text-blue-100 text-lg">
                Custom POS system delivered 6,000,000 SR in sales over 8 months
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">16,059+</div>
                <div className="text-blue-100">Invoices Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
                <div className="text-blue-100">Hours Saved Weekly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">40%</div>
                <div className="text-blue-100">Efficiency Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">$12K</div>
                <div className="text-blue-100">Monthly Revenue Increase</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-blue-100 italic mb-4">
                "The custom POS system completely transformed our operations. We went from spending hours on manual tracking to having everything automated. Our customers love the real-time updates, and we've been able to handle 40% more orders with the same staff."
              </p>
              <p className="text-white font-semibold">- Md Sumon Hossain, Owner of Elite Laundry Station</p>
              <a 
                href="https://www.elitelaundrystation.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-200 font-medium inline-block mt-2"
              >
                www.elitelaundrystation.com
              </a>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="/case-study" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                View Full Case Study
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Dry Cleaning Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation to discuss your specific needs and get a custom solution proposal
          </p>
          <div className="max-w-md mx-auto">
            <BookingWidget 
              buttonText="Book Free Call" 
              buttonClass="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        imageSrc={selectedImage?.imageSrc}
        alt={selectedImage?.alt}
        onClose={closeImage}
      />
    </Layout>
  );
}
