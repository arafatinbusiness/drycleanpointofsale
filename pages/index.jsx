import Layout from '../components/Layout';
import Hero from '../components/Hero';
import BookingWidget from '../components/BookingWidget';

export default function Home() {
  return (
    <Layout 
      title="Laundry Shop POS System | Dry Cleaning POS Software | Quick Dry Cleaning Software"
      description="Best laundry shop POS system and dry cleaning management software. Touch screen POS, order management system, and quick dry cleaning software login for US businesses."
    >
      <Hero />
      
      {/* Problem/Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Dry Cleaning POS Software for US Businesses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced laundry shop POS system and dry cleaning management software designed for American businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Problems */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Common Problems</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span className="text-gray-700">Manual order tracking leads to lost items and customer complaints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span className="text-gray-700">Inventory management takes hours of manual work each week</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span className="text-gray-700">No integration between POS, scheduling, and customer management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span className="text-gray-700">Difficulty tracking customer preferences and order history</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span className="text-gray-700">Limited reporting makes business decisions difficult</span>
                </li>
              </ul>
            </div>
            
            {/* Solutions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Our Solution</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Automated order tracking with real-time status updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Smart inventory management with automated reordering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Fully integrated POS, CRM, and scheduling systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Customer profiles with preferences and order history</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Comprehensive analytics and business insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* ROI Calculator & Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Paper to Profit: See Your ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how switching from manual paper systems to digital POS can transform your bottom line
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Paper vs Digital Comparison */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Paper vs Digital: The Transformation</h3>
              
              <div className="space-y-6">
                {/* Time Savings */}
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Manual Order Tracking</span>
                  </div>
                  <div className="text-red-600 font-bold">3+ hours/day</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Digital Automation</span>
                  </div>
                  <div className="text-green-600 font-bold">15 minutes/day</div>
                </div>
                
                {/* Error Rates */}
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Paper System Errors</span>
                  </div>
                  <div className="text-red-600 font-bold">8-12% error rate</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Digital Accuracy</span>
                  </div>
                  <div className="text-green-600 font-bold">99.9% accuracy</div>
                </div>
                
                {/* Customer Satisfaction */}
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Paper System CSAT</span>
                  </div>
                  <div className="text-red-600 font-bold">75%</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Digital CSAT</span>
                  </div>
                  <div className="text-green-600 font-bold">95%+</div>
                </div>
              </div>
            </div>
            
            {/* ROI Calculator */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Calculate Your Potential ROI</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$12,000</div>
                  <div className="text-gray-700">Average Monthly Revenue Increase</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
                    <div className="text-sm text-gray-600">Hours Saved Weekly</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">40%</div>
                    <div className="text-sm text-gray-600">Efficiency Gain</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">25%</div>
                    <div className="text-sm text-gray-600">Customer Retention Boost</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">2</div>
                    <div className="text-sm text-gray-600">Months ROI Payback</div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Key ROI Drivers:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Reduced labor costs from automation</li>
                    <li>• Increased order capacity without additional staff</li>
                    <li>• Higher customer retention and repeat business</li>
                    <li>• Elimination of lost items and errors</li>
                    <li>• Better pricing and inventory optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Timeline */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Digital Transformation Journey</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Month 1 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-blue-100 rounded-lg p-4">
                      <div className="text-blue-600 font-bold mb-1">Month 1</div>
                      <div className="text-gray-700">System Implementation & Training</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <div className="text-gray-500">Initial setup and staff training</div>
                  </div>
                </div>
                
                {/* Month 2 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="text-gray-500">First efficiency gains visible</div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-green-100 rounded-lg p-4">
                      <div className="text-green-600 font-bold mb-1">Month 2</div>
                      <div className="text-gray-700">ROI Achieved - System Pays for Itself</div>
                    </div>
                  </div>
                </div>
                
                {/* Month 3+ */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-purple-100 rounded-lg p-4">
                      <div className="text-purple-600 font-bold mb-1">Month 3+</div>
                      <div className="text-gray-700">Pure Profit & Business Growth</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <div className="text-gray-500">$12K+ monthly revenue increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results: Elite Laundry Station
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we transformed a struggling dry cleaning business into an efficient, profitable operation
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">16,000+</div>
                <div className="text-gray-700 font-medium">Invoices Processed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium">Hours Saved Weekly</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-gray-700 font-medium">Efficiency Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">6M SR</div>
                <div className="text-gray-700 font-medium">Sales in 8 Months</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-6">
                "The custom POS system completely transformed our operations. We went from spending hours on manual tracking to having everything automated. Our customers love the real-time updates, and we've been able to handle 40% more orders with the same staff."
              </p>
              <p className="text-gray-900 font-semibold">- Sarah Johnson, Owner of Elite Laundry Station</p>
            </div>
            
            <div className="text-center mt-8 space-x-4">
              <a 
                href="/case-study" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Read Full Case Study
              </a>
              <a 
                href="/roi-calculator" 
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Calculate Your ROI
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
            <BookingWidget />
          </div>
        </div>
      </section>
    </Layout>
  );
}
