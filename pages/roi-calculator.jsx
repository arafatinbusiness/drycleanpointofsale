import Layout from '../components/Layout';
import BookingWidget from '../components/BookingWidget';
import { useState } from 'react';

export default function ROICalculator() {
  const [dailyOrders, setDailyOrders] = useState(50);
  const [averageOrderValue, setAverageOrderValue] = useState(25);
  const [staffCount, setStaffCount] = useState(3);
  const [hourlyWage, setHourlyWage] = useState(15);

  // Calculations
  const monthlyOrders = dailyOrders * 30;
  const currentMonthlyRevenue = monthlyOrders * averageOrderValue;
  const monthlyLaborCost = staffCount * hourlyWage * 8 * 30;
  
  // Digital POS benefits
  const timeSavedHours = 15; // hours per week
  const efficiencyGain = 0.4; // 40%
  const errorReduction = 0.1; // 10% reduction in errors
  const retentionBoost = 0.25; // 25% increase in retention
  
  // ROI Calculations
  const laborSavings = (timeSavedHours * 4 * hourlyWage) * staffCount;
  const revenueIncrease = currentMonthlyRevenue * efficiencyGain;
  const errorCostSavings = (currentMonthlyRevenue * errorReduction * 0.1); // 10% of lost revenue due to errors
  const retentionRevenue = currentMonthlyRevenue * retentionBoost * 0.2; // 20% of retention boost converts to revenue
  
  const totalMonthlySavings = laborSavings + revenueIncrease + errorCostSavings + retentionRevenue;
  const annualROI = totalMonthlySavings * 12;
  const roiPaybackMonths = 2; // Based on typical implementation cost

  return (
    <Layout 
      title="ROI Calculator: Paper vs Digital POS | Dry Cleaning POS Systems"
      description="Calculate your potential ROI from switching to digital POS. See how much time and money you can save with automated systems."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ROI Calculator: Paper vs Digital POS
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover exactly how much switching from manual paper systems to digital POS can boost your profits
          </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">6M SR</div>
                <div className="text-blue-100">Sales in 8 Months</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">2</div>
                <div className="text-blue-100">Months ROI Payback</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
                <div className="text-blue-100">Hours Saved Weekly</div>
              </div>
            </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Calculate Your Custom ROI
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Input Section */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Metrics</h3>
                
                <div className="space-y-6">
                  {/* Daily Orders */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Daily Orders: <span className="text-blue-600 font-bold">{dailyOrders}</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      value={dailyOrders}
                      onChange={(e) => setDailyOrders(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>10</span>
                      <span>500</span>
                    </div>
                  </div>

                  {/* Average Order Value */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Average Order Value: <span className="text-blue-600 font-bold">${averageOrderValue}</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={averageOrderValue}
                      onChange={(e) => setAverageOrderValue(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>$5</span>
                      <span>$100</span>
                    </div>
                  </div>

                  {/* Staff Count */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Staff Count: <span className="text-blue-600 font-bold">{staffCount}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={staffCount}
                      onChange={(e) => setStaffCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>1</span>
                      <span>20</span>
                    </div>
                  </div>

                  {/* Hourly Wage */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Average Hourly Wage: <span className="text-blue-600 font-bold">${hourlyWage}</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="30"
                      value={hourlyWage}
                      onChange={(e) => setHourlyWage(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>$10</span>
                      <span>$30</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Potential ROI</h3>
                
                <div className="space-y-6">
                  {/* Monthly Savings */}
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      ${totalMonthlySavings.toLocaleString()}
                    </div>
                    <div className="text-gray-700 font-medium">Estimated Monthly Savings & Revenue Increase</div>
                  </div>

                  {/* Annual ROI */}
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      ${annualROI.toLocaleString()}
                    </div>
                    <div className="text-gray-700 font-medium">Annual ROI Potential</div>
                  </div>

                  {/* Breakdown */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">ROI Breakdown:</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Labor Cost Savings</span>
                        <span className="font-semibold text-green-600">${laborSavings.toLocaleString()}/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Revenue Increase</span>
                        <span className="font-semibold text-green-600">${revenueIncrease.toLocaleString()}/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Error Reduction Savings</span>
                        <span className="font-semibold text-green-600">${errorCostSavings.toLocaleString()}/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Customer Retention Boost</span>
                        <span className="font-semibold text-green-600">${retentionRevenue.toLocaleString()}/mo</span>
                      </div>
                    </div>
                  </div>

                  {/* Payback Period */}
                  <div className="bg-yellow-50 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-yellow-800 mb-1">
                      ROI Payback: {roiPaybackMonths} Months
                    </div>
                    <div className="text-sm text-yellow-700">
                      Your investment pays for itself in just {roiPaybackMonths} months
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Paper vs Digital: The Visual Difference
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Paper System */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📄</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-600">Paper System</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-gray-700">Time Spent on Admin</span>
                    <span className="text-red-600 font-bold">15+ hrs/wk</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-gray-700">Error Rate</span>
                    <span className="text-red-600 font-bold">8-12%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-gray-700">Customer Satisfaction</span>
                    <span className="text-red-600 font-bold">75%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-gray-700">Order Capacity</span>
                    <span className="text-red-600 font-bold">Limited</span>
                  </div>
                </div>
              </div>

              {/* Digital System */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-600">Digital POS</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Time Spent on Admin</span>
                    <span className="text-green-600 font-bold">2 hrs/wk</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Error Rate</span>
                    <span className="text-green-600 font-bold">0.1%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Customer Satisfaction</span>
                    <span className="text-green-600 font-bold">95%+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Order Capacity</span>
                    <span className="text-green-600 font-bold">40% More</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transformation Stats */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-6">The Digital Transformation Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-yellow-300 mb-2">87%</div>
                  <div className="text-blue-100">Reduction in Admin Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300 mb-2">99%</div>
                  <div className="text-blue-100">Error Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300 mb-2">25%</div>
                  <div className="text-blue-100">Customer Retention Boost</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300 mb-2">2x</div>
                  <div className="text-blue-100">Faster ROI vs Industry Avg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Real Business Transformations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Case Study 1 */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">ES</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Elite Laundry Station</div>
                    <div className="text-sm text-gray-600">Dubai, UAE</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Before:</span>
                    <span className="text-red-600 font-medium">Manual paper system</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">After:</span>
                    <span className="text-green-600 font-medium">Digital POS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Result:</span>
                    <span className="text-blue-600 font-medium">6M SR in 8 months</span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-700">
                  "The system paid for itself in 2 months. We achieved 6 million SR in sales over 8 months while handling 40% more orders with the same staff."
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">PC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Premium Cleaners</div>
                    <div className="text-sm text-gray-600">Dubai, UAE</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Before:</span>
                    <span className="text-red-600 font-medium">Excel spreadsheets</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">After:</span>
                    <span className="text-green-600 font-medium">Automated POS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Result:</span>
                    <span className="text-blue-600 font-medium">$8K/mo increase</span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-700">
                  "We eliminated 20 hours of manual work weekly and reduced errors by 95%. The ROI was immediate."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Calculate Your Exact ROI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a personalized ROI analysis and see exactly how much you can save by switching to digital POS
          </p>
          <div className="max-w-md mx-auto">
            <BookingWidget />
          </div>
        </div>
      </section>
    </Layout>
  );
}
