import BookingWidget from './BookingWidget';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Custom POS Systems for<br />
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Dry Cleaning Businesses
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Save <span className="font-bold text-yellow-300">15+ hours weekly</span> with automated order tracking, 
          inventory management, and customer systems designed specifically for dry cleaners.
        </p>
        
        <div className="mb-12">
          <BookingWidget />
        </div>
        
        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
            <div className="text-blue-100">Hours Saved Weekly</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-yellow-300 mb-2">40%</div>
            <div className="text-blue-100">Increase in Efficiency</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-yellow-300 mb-2">100+</div>
            <div className="text-blue-100">Orders Processed Daily</div>
          </div>
        </div>
      </div>
    </section>
  );
}
