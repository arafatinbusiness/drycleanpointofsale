import { useState } from 'react';
import Layout from '../components/Layout';
import BookingWidget from '../components/BookingWidget';
import ImageModal from '../components/ImageModal';

export default function CaseStudy() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc, alt) => {
    setSelectedImage({ imageSrc, alt });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <Layout 
      title="Case Study: Elite Laundry Station | Dry Cleaning POS Systems"
      description="See how Elite Laundry Station achieved 6,000,000 SR in sales over 8 months with our custom POS subscription system."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Study: Elite Laundry Station
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              How a custom POS system transformed operations and achieved 6,000,000 SR (60 lacs) in sales over 8 months
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">16,059+</div>
                <div className="text-blue-100">Invoices Processed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
                <div className="text-blue-100">Hours Saved Weekly</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">40%</div>
                <div className="text-blue-100">Efficiency Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">$12K</div>
                <div className="text-blue-100">Monthly Revenue Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Background</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Elite Laundry Station</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Business Details:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Premium dry cleaning service in Dubai, UAE</li>
                    <li>• Operating for 8+ years with multiple locations</li>
                    <li>• 16,000+ invoices processed through our system</li>
                    <li>• Multi-currency support (AED, USD)</li>
                    <li>• VAT-compliant with automated tax calculations</li>
                    <li>• Bilingual support (English & Arabic)</li>
                    <li>• Website: www.elitelaundrystation.com</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Previous System:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Manual paper-based tracking</li>
                    <li>• Separate Excel spreadsheets</li>
                    <li>• No customer database or CRM</li>
                    <li>• Basic cash register with no analytics</li>
                    <li>• No automated tax calculations</li>
                    <li>• Limited payment method support</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-100 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-blue-800 mb-2">Key Business Challenge:</h4>
                <p className="text-blue-700">
                  Processing 150+ daily orders manually led to inefficiencies, lost items, and customer dissatisfaction. 
                  The business needed a scalable solution to handle growing demand while maintaining quality service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">The Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-4">Operational Inefficiencies</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>3+ hours daily spent on manual order tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Frequent lost items and customer complaints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>No real-time inventory visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Difficulty managing multiple locations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-4">Business Impact</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Limited growth due to manual processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>High employee turnover from repetitive tasks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Inability to track customer preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>No data for business decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Custom Solution</h2>
            
            <div className="bg-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Key Features Implemented</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Core POS Features</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Automated order tracking with barcodes</li>
                    <li>• Real-time status updates for customers</li>
                    <li>• Integrated payment processing</li>
                    <li>• Multi-location inventory sync</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Advanced Features</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Customer CRM with order history</li>
                    <li>• Automated SMS/email notifications</li>
                    <li>• Comprehensive analytics dashboard</li>
                    <li>• Staff performance tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* EliteLaundryStation POS System Images */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">EliteLaundryStation POS System Interface</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div 
                    className="cursor-pointer w-full max-w-md mx-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => openImage('/pos main.jpg', 'EliteLaundryStation POS Main Interface - Order management and customer details')}
                  >
                    <img 
                      src="/pos main.jpg" 
                      alt="EliteLaundryStation POS Main Interface" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <p className="mt-3 text-gray-600 text-sm">Main POS interface showing order management and customer details</p>
                </div>
                <div className="text-center">
                  <div 
                    className="cursor-pointer w-full max-w-md mx-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => openImage('/pos2.jpg', 'EliteLaundryStation POS Features - Inventory tracking and analytics')}
                  >
                    <img 
                      src="/pos2.jpg" 
                      alt="EliteLaundryStation POS Features" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <p className="mt-3 text-gray-600 text-sm">Advanced features including inventory tracking and analytics</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 border border-gray-200 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-gray-700 font-medium">Weeks Implementation</div>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-700 font-medium">Training Sessions</div>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Measurable Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Operational Improvements</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>15+ hours saved weekly on manual tasks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>40% increase in processing efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>99% reduction in lost items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Real-time inventory across all locations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Business Growth</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>6,000,000 SR (60 lacs) total sales in 8 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>750,000 SR monthly average (≈$200,000 USD)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>25% increase in customer retention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Ability to handle 40% more orders</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <p className="text-xl text-gray-700 italic mb-6">
                "The custom POS subscription system completely transformed our operations. We went from spending hours on manual tracking to having everything automated. Our customers love the real-time updates, and we've been able to handle 40% more orders with the same staff. The investment paid for itself in just two months and helped us achieve 6 million SR in sales over 8 months."
              </p>
              <div className="font-semibold text-gray-900">Md Sumon Hossain</div>
              <div className="text-gray-600">Owner, Elite Laundry Station</div>
              <div className="mt-2">
                <a 
                  href="https://www.elitelaundrystation.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  www.elitelaundrystation.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Similar Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss how we can transform your dry cleaning business with a custom POS system
          </p>
          <div className="max-w-md mx-auto">
            <BookingWidget />
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
