import Layout from '../components/Layout';
import BookingWidget from '../components/BookingWidget';

export default function BookCall() {
  return (
    <Layout 
      title="Book a Free Consultation | Dry Cleaning POS Systems"
      description="Book a free 30-minute consultation to discuss your dry cleaning business needs and get a custom POS solution proposal."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Free POS Assessment
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Let's discuss how we can transform your dry cleaning business with a custom POS system
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">30 min</div>
                <div className="text-blue-100">Free Consultation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">No Cost</div>
                <div className="text-blue-100">No Obligation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">Custom</div>
                <div className="text-blue-100">Solution Proposal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calendly Widget */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Schedule Your Call</h2>
                <p className="text-gray-600 mb-8">
                  Choose a time that works best for you. We'll discuss your current challenges, 
                  explore potential solutions, and provide a custom proposal for your business.
                </p>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <BookingWidget />
                </div>
              </div>

              {/* What to Expect */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">During the Call</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Review your current operations and pain points</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Discuss specific features you need</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Explore integration requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Answer all your questions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">After the Call</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Receive custom solution proposal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Detailed timeline and pricing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Implementation roadmap</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>No pressure to proceed</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">Preparation Tips</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Think about your biggest operational challenges</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Note down any specific features you want</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Consider your budget and timeline</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Have any current system details ready</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Alternative Contact Methods
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Can't find a suitable time? Prefer to email? We're here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us your requirements and we'll get back to you within 24 hours.
                </p>
                <a 
                  href="mailto:arafatinbusiness@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  arafatinbusiness@gmail.com
                </a>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our team during business hours.
                </p>
                <a 
                  href="tel:+8801842701601" 
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  +8801842701601
                </a>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Chat with us in real-time for quick questions and support.
                </p>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How long does the consultation take?
                </h3>
                <p className="text-gray-600">
                  Our initial consultations are 30 minutes. This gives us enough time to understand your needs and determine if we're a good fit for your project.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is there any cost for the consultation?
                </h3>
                <p className="text-gray-600">
                  No, the initial consultation is completely free and there's no obligation to proceed with our services.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What information do I need to prepare?
                </h3>
                <p className="text-gray-600">
                  Just think about your current challenges, what you'd like to improve, and any specific features you need. We'll guide you through the rest.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How soon can we start development?
                </h3>
                <p className="text-gray-600">
                  Once we agree on the scope and sign the contract, we can typically start development within 1-2 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
