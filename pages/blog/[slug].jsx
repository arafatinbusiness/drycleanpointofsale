import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ImageModal from '../../components/ImageModal';

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = {
  'benefits-of-modern-pos-for-dry-cleaners': {
    id: 1,
    slug: 'benefits-of-modern-pos-for-dry-cleaners',
    title: '5 Benefits of Modern POS Systems for Dry Cleaners',
    excerpt: 'Discover how modern POS systems can streamline your dry cleaning operations, improve customer experience, and boost your bottom line.',
    content: `
      <p>In today's competitive dry cleaning industry, having the right technology can make all the difference. Modern Point of Sale (POS) systems offer numerous advantages that can transform your business operations and customer experience.</p>

      <h2>1. Streamlined Operations</h2>
      <p>Modern POS systems automate many manual tasks that traditionally consumed valuable time in dry cleaning businesses. From order tracking to inventory management, these systems handle it all efficiently.</p>
      <ul>
        <li>Automated order tracking and status updates</li>
        <li>Real-time inventory management</li>
        <li>Simplified pricing and discount applications</li>
        <li>Integrated payment processing</li>
      </ul>

      <h2>2. Enhanced Customer Experience</h2>
      <p>Today's customers expect convenience and personalization. A modern POS system helps you deliver exactly that.</p>
      <ul>
        <li>Quick and accurate order processing</li>
        <li>Customer preference tracking</li>
        <li>Automated SMS/email notifications</li>
        <li>Loyalty program integration</li>
      </ul>

      <h2>3. Improved Financial Management</h2>
      <p>Gain better insights into your business finances with comprehensive reporting and analytics.</p>
      <ul>
        <li>Daily sales reports</li>
        <li>Revenue tracking by service type</li>
        <li>Expense monitoring</li>
        <li>Tax calculation and reporting</li>
      </ul>

      <h2>4. Better Inventory Control</h2>
      <p>Never run out of essential supplies or overstock unnecessary items with smart inventory management.</p>
      <ul>
        <li>Real-time stock monitoring</li>
        <li>Automated reordering alerts</li>
        <li>Waste reduction through better planning</li>
        <li>Supplier management</li>
      </ul>

      <h2>5. Scalability and Growth</h2>
      <p>As your business grows, your POS system should grow with you. Modern systems are designed to scale.</p>
      <ul>
        <li>Multi-location support</li>
        <li>Employee management features</li>
        <li>Integration with other business tools</li>
        <li>Cloud-based accessibility</li>
      </ul>

      <p>Investing in a modern POS system is no longer a luxury but a necessity for dry cleaning businesses looking to stay competitive and provide exceptional service to their customers.</p>
    `,
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Business Growth',
    author: 'John Smith',
    authorRole: 'POS Specialist',
    metaDescription: 'Discover how modern POS systems can streamline your dry cleaning operations, improve customer experience, and boost your bottom line.',
    keywords: 'dry cleaning POS, business efficiency, customer experience, inventory management'
  },
  'choosing-right-pos-software': {
    id: 2,
    slug: 'choosing-right-pos-software',
    title: 'How to Choose the Right POS Software for Your Dry Cleaning Business',
    excerpt: 'A comprehensive guide to selecting the perfect POS system that meets your specific dry cleaning business needs and budget.',
    content: `
      <p>Choosing the right POS software for your dry cleaning business is a critical decision that can impact your operations for years to come. Here's what to consider:</p>

      <h2>Understand Your Business Needs</h2>
      <p>Before evaluating any software, clearly define what your business requires.</p>
      <ul>
        <li>Number of locations</li>
        <li>Daily transaction volume</li>
        <li>Types of services offered</li>
        <li>Current pain points</li>
        <li>Future growth plans</li>
      </ul>

      <h2>Key Features to Look For</h2>
      <p>Not all POS systems are created equal. Look for these essential features:</p>
      <ul>
        <li>Order tracking and management</li>
        <li>Customer database with preferences</li>
        <li>Inventory management</li>
        <li>Reporting and analytics</li>
        <li>Payment processing integration</li>
        <li>Mobile accessibility</li>
      </ul>

      <h2>Consider Your Budget</h2>
      <p>POS systems come with various pricing models. Consider both upfront and ongoing costs.</p>
      <ul>
        <li>Hardware requirements</li>
        <li>Software licensing fees</li>
        <li>Payment processing fees</li>
        <li>Support and maintenance costs</li>
        <li>Training expenses</li>
      </ul>

      <h2>Evaluate Ease of Use</h2>
      <p>The best POS system is one that your team can use effectively.</p>
      <ul>
        <li>Intuitive interface</li>
        <li>Minimal training required</li>
        <li>Clear documentation</li>
        <li>Responsive customer support</li>
      </ul>

      <h2>Check Integration Capabilities</h2>
      <p>Your POS should work well with other tools you use.</p>
      <ul>
        <li>Accounting software integration</li>
        <li>Email marketing platforms</li>
        <li>Loyalty program systems</li>
        <li>Online booking tools</li>
      </ul>

      <p>Take your time, do thorough research, and don't hesitate to ask for demos and trial periods before making your final decision.</p>
    `,
    date: '2025-01-10',
    readTime: '7 min read',
    category: 'Technology',
    author: 'Sarah Johnson',
    authorRole: 'Technology Consultant',
    metaDescription: 'A comprehensive guide to selecting the perfect POS system for your dry cleaning business needs and budget.',
    keywords: 'POS software selection, dry cleaning technology, business software, system evaluation'
  },
  'increasing-customer-retention': {
    id: 3,
    slug: 'increasing-customer-retention',
    title: 'Strategies for Increasing Customer Retention in Dry Cleaning',
    excerpt: 'Learn proven strategies to keep your customers coming back and build long-term loyalty for your dry cleaning business.',
    content: `
      <p>Customer retention is crucial for dry cleaning businesses. It costs significantly less to retain existing customers than to acquire new ones. Here are proven strategies to boost customer loyalty:</p>

      <h2>1. Exceptional Service Quality</h2>
      <p>Consistently deliver high-quality service that exceeds customer expectations.</p>
      <ul>
        <li>Thorough stain removal</li>
        <li>Proper garment handling</li>
        <li>Attention to special instructions</li>
        <li>Quality control checks</li>
      </ul>

      <h2>2. Personalized Customer Experience</h2>
      <p>Make each customer feel valued and understood.</p>
      <ul>
        <li>Remember customer preferences</li>
        <li>Use customer names</li>
        <li>Track special occasions</li>
        <li>Offer personalized recommendations</li>
      </ul>

      <h2>3. Loyalty Programs</h2>
      <p>Implement a rewards system that encourages repeat business.</p>
      <ul>
        <li>Points-based systems</li>
        <li>Frequency discounts</li>
        <li>Referral bonuses</li>
        <li>Tiered membership levels</li>
      </ul>

      <h2>4. Convenient Services</h2>
      <p>Make it easy for customers to do business with you.</p>
      <ul>
        <li>Flexible pickup and delivery options</li>
        <li>Extended business hours</li>
        <li>Online booking and payment</li>
        <li>Mobile app integration</li>
      </ul>

      <h2>5. Effective Communication</h2>
      <p>Keep customers informed and engaged.</p>
      <ul>
        <li>Order status updates</li>
        <li>Promotional offers</li>
        <li>Service reminders</li>
        <li>Feedback collection</li>
      </ul>

      <h2>6. Handle Complaints Gracefully</h2>
      <p>Turn negative experiences into positive ones.</p>
      <ul>
        <li>Listen actively to concerns</li>
        <li>Apologize sincerely</li>
        <li>Offer fair compensation</li>
        <li>Follow up to ensure satisfaction</li>
      </ul>

      <p>By implementing these strategies consistently, you can build a loyal customer base that not only returns regularly but also refers new customers to your business.</p>
    `,
    date: '2025-01-05',
    readTime: '6 min read',
    category: 'Marketing',
    author: 'Michael Chen',
    authorRole: 'Customer Experience Expert',
    metaDescription: 'Learn proven strategies to keep your customers coming back and build long-term loyalty for your dry cleaning business.',
    keywords: 'customer retention, dry cleaning loyalty, customer service, business growth'
  },
  'dry-cleaning-profit-margin-100k-sales': {
    id: 4,
    slug: 'dry-cleaning-profit-margin-100k-sales',
    title: 'What\'s the Profit Margin for a Dry Cleaner That Does $100K in Monthly Sales?',
    excerpt: 'Discover the typical profit margins for dry cleaning businesses and learn how to calculate potential earnings based on your monthly sales.',
    content: `
      <p>Understanding profit margins is crucial for any dry cleaning business owner. If you're generating $100,000 in monthly sales, you might be wondering: how much of that actually becomes profit?</p>

      <h2>Typical Profit Margin Range</h2>
      <p>The profit margin for a dry cleaner can vary widely based on several factors:</p>
      <ul>
        <li><strong>Location:</strong> Rent costs in different areas</li>
        <li><strong>Operational Costs:</strong> Labor, utilities, supplies</li>
        <li><strong>Hardware and Software Costs:</strong> POS systems, equipment</li>
        <li><strong>Taxes:</strong> Local, state, and federal taxes</li>
        <li><strong>Efficiency:</strong> How well you manage operations</li>
      </ul>

      <p>Typically, profit margins for dry cleaning businesses range from <strong>10% to 30%</strong>.</p>

      <h2>Calculating Profit Based on Different Margins</h2>
      <p>You can calculate your potential profit using this simple formula:</p>
      
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <p class="font-bold text-lg">Profit = Sales × Profit Margin (%)</p>
      </div>

      <h3>Low Estimate (10% Margin)</h3>
      <p>For a conservative estimate, assuming higher operational costs:</p>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p>$100,000 × 0.10 = <strong>$10,000 monthly profit</strong></p>
        <p class="text-sm text-gray-600">Annual profit: $120,000</p>
      </div>

      <h3>Average Estimate (20% Margin)</h3>
      <p>For a well-managed operation with moderate costs:</p>
      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <p>$100,000 × 0.20 = <strong>$20,000 monthly profit</strong></p>
        <p class="text-sm text-gray-600">Annual profit: $240,000</p>
      </div>

      <h3>High Estimate (30% Margin)</h3>
      <p>For highly efficient operations with optimized costs:</p>
      <div class="bg-yellow-50 p-4 rounded-lg mb-6">
        <p>$100,000 × 0.30 = <strong>$30,000 monthly profit</strong></p>
        <p class="text-sm text-gray-600">Annual profit: $360,000</p>
      </div>

      <h2>Factors That Impact Your Profit Margin</h2>
      
      <h3>Cost Control Strategies</h3>
      <ul>
        <li><strong>Labor Optimization:</strong> Proper staff scheduling and training</li>
        <li><strong>Supply Management:</strong> Bulk purchasing and waste reduction</li>
        <li><strong>Energy Efficiency:</strong> Modern equipment with lower utility costs</li>
        <li><strong>Technology:</strong> Efficient POS systems to reduce administrative time</li>
      </ul>

      <h3>Revenue Enhancement</h3>
      <ul>
        <li><strong>Additional Services:</strong> Alterations, shoe repair, laundry services</li>
        <li><strong>Pricing Strategy:</strong> Competitive yet profitable pricing</li>
        <li><strong>Customer Retention:</strong> Loyalty programs to maintain steady business</li>
        <li><strong>Upselling:</strong> Offering premium services and treatments</li>
      </ul>

      <h2>Example Calculation</h2>
      <p>Let's use a more detailed example with a 25% profit margin:</p>
      <div class="bg-gray-100 p-4 rounded-lg">
        <p><strong>Monthly Sales:</strong> $100,000</p>
        <p><strong>Profit Margin:</strong> 25%</p>
        <p><strong>Calculation:</strong> $100,000 × 0.25 = $25,000</p>
        <p><strong>Monthly Profit:</strong> $25,000</p>
        <p><strong>Annual Profit:</strong> $300,000</p>
      </div>

      <h2>Improving Your Profit Margin</h2>
      <p>To move from the lower end (10%) to the higher end (30%) of the profit margin range:</p>
      <ul>
        <li>Implement efficient POS systems to reduce manual work</li>
        <li>Optimize your pricing strategy</li>
        <li>Reduce waste in supplies and utilities</li>
        <li>Train staff for maximum productivity</li>
        <li>Regularly review and adjust your business processes</li>
      </ul>

      <p>Remember, while $100,000 in monthly sales sounds impressive, the real measure of success is how much of that revenue you can retain as profit. By focusing on efficiency and cost control, you can maximize your dry cleaning business's profitability.</p>
    `,
    date: '2025-09-30',
    readTime: '8 min read',
    category: 'Business Growth',
    author: 'Arafat Hossain',
    authorRole: 'Founder of labinitial',
    metaDescription: 'Learn about dry cleaning profit margins for businesses generating $100K in monthly sales. Calculate potential earnings and discover strategies to improve profitability.',
    keywords: 'dry cleaning profit margin, business profitability, $100K sales, dry cleaning earnings, business finance'
  },
  'best-point-of-sale-software-guide': {
    id: 5,
    slug: 'best-point-of-sale-software-guide',
    title: 'Best Point of Sale Software for Retail Stores and Small Businesses',
    excerpt: 'Discover the best POS software solutions for retail stores, small businesses, and restaurants. Learn about custom POS development and how to choose the right system for your specific needs.',
    content: `
      <p>Point of Sale (POS) software is the virtual area where you manage your inventories, print invoices and receipts, generate QR codes, and scan through scanners for efficient service delivery. <br> Choosing the right POS system can make or break your business operations.</p> <br><br>

      <h2><b>Understanding POS Software</b></h2>
      <p>A POS system is more than just a cash register - it's the central hub of your business operations. It handles everything from sales transactions to inventory management, customer relationships, and business analytics.</p>
      
      <div style="text-align: center; margin: 2rem 0;">
        <img src="/pos main.jpg" alt="Modern POS System Interface" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <p style="margin-top: 0.5rem; font-style: italic; color: #666;">Modern POS systems streamline business operations with intuitive interfaces</p>
      </div>
      <br>

      <h2>Types of POS Systems Available</h2>
      <br>

      <h3>1. Online POS Systems</h3>
      <p>These cloud-based systems are perfect for businesses looking for flexibility and minimal upfront costs. You should go online and look at different systems to understand which suits your business best.</p>
      <p>Online POS systems typically operate on a subscription model with minimal fees that can be paid monthly, half-yearly, or yearly. The key benefits include cloud-based access from anywhere, automatic software updates, and scalable pricing that grows with your business. These systems are ideal for small to medium businesses that have stable internet connectivity and want the flexibility of remote access.</p>
      <br>

      <h3>2. Traditional Handwritten Systems</h3>
      <p>Some business owners prefer handwritten tickets as they want to be very descriptive and personal. For them, it's not about time-saving, but about customer interaction.</p>
      <p>The advantages of handwritten systems include unlimited customization and a personal touch that can enhance customer relationships. However, they are time-consuming and prone to human error. It's worth considering that some modern POS systems might limit what information you can enter, which is why some businesses stick with traditional methods.</p>
      <br>

      <h3>3. Custom POS Software Solutions</h3>
      <p>This is where the real power lies. Custom POS software is developed specifically for your business, fulfilling your exact requirements to make the selling process faster and more reliable.</p>
      <p>The development process begins with the developer understanding your business requirements, analyzing your daily unit sales, and defining your goals for the system. The benefits include a perfect fit for your operations and a competitive advantage in your market. For example, laundry POS systems can be developed for multiple branches where the mother branch receives 25% commission for each unit sale across all locations.</p>
      <br>

      <h2>Choosing the Right POS for Your Business Type</h2>
      <br>

      <h3>Best POS Software for Retail Stores</h3>
      <p>Retail stores need robust inventory management, barcode scanning, and customer loyalty features. Look for systems that offer real-time inventory tracking, barcode and QR code generation capabilities, comprehensive customer databases with purchase history, and multi-store management capabilities for businesses with multiple locations.</p>
      <br>

      <h3>Best POS Software for Small Businesses</h3>
      <p>Small businesses need affordable, easy-to-use solutions that can grow with them. Consider systems with simple pricing structures, easy setup and training processes, basic reporting and analytics for business insights, and mobile compatibility for on-the-go management.</p>
      <br>

      <h3>Best POS Software for Medium Businesses</h3>
      <p>Medium-sized businesses require more advanced features and scalability. Essential features include multi-user access with permission controls, advanced inventory management systems, integration with accounting software for streamlined financial management, and detailed reporting and analytics for data-driven decision making.</p>
      <br>

      <h3>Best POS Software for Restaurants</h3>
      <p>Restaurants have unique needs including table management, kitchen orders, and menu customization. Key features to look for include table layout management systems, kitchen display systems for efficient order processing, menu item customization capabilities, and online ordering integration for modern customer convenience.</p>
      <br>

      <h2>The Power of Custom POS Solutions</h2>
      <p>Custom POS software development offers unparalleled advantages for businesses with specific needs. Here's how it works:</p>

      <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 class="text-xl font-bold mb-4">Custom POS Development Process</h3>
        <ol class="list-decimal pl-6 space-y-2">
          <li><strong>Requirement Analysis:</strong> Understanding your business workflow and specific needs</li>
          <li><strong>Daily Sales Analysis:</strong> Analyzing your transaction volume and patterns</li>
          <li><strong>Goal Setting:</strong> Defining what you want to achieve with the POS system</li>
          <li><strong>Development:</strong> Building the software tailored to your requirements</li>
          <li><strong>Testing & Training:</strong> Ensuring everything works perfectly and training your team</li>
        </ol>
      </div>

      <h3>Real-World Example: Laundry POS System</h3>
      <p>Consider a laundry POS system specifically developed to work across multiple branches. The mother branch receives 25% commission for each unit sale across all locations. This creates:</p>
      
      <div style="text-align: center; margin: 2rem 0;">
        <img src="/pos2.jpg" alt="Custom POS System Features" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <p style="margin-top: 0.5rem; font-style: italic; color: #666;">Custom POS systems offer tailored features for specific business needs</p>
      </div>
      
      <ul>
        <li>Centralized control and reporting</li>
        <li>Automated commission calculations</li>
        <li>Real-time inventory across all locations</li>
        <li>Unified customer database</li>
      </ul>

      <h2>Research and Selection Process</h2>
      <p>Before making a decision, follow these steps:</p>

      <h3>1. Do Your Own Research</h3>
      <ul>
        <li>Compare different POS systems online</li>
        <li>Read reviews from similar businesses</li>
        <li>Check for industry-specific features</li>
      </ul>

      <h3>2. Get References</h3>
      <ul>
        <li>Talk to other business owners in your industry</li>
        <li>Ask for recommendations from trusted sources</li>
        <li>Look at case studies and success stories</li>
      </ul>

      <h3>3. Go Online for Reviews</h3>
      <ul>
        <li>Check software review websites</li>
        <li>Read customer testimonials</li>
        <li>Watch video demonstrations</li>
      </ul>

      <h2>Free Consultation Opportunity</h2>
      <p>We understand that choosing the right POS system can be overwhelming. That's why we offer free consultations to help you make the best decision for your business.</p>

      <div class="bg-green-50 p-6 rounded-lg mb-6">
        <h3 class="text-xl font-bold mb-4">Schedule Your Free 30-Minute Consultation</h3>
        <p>During our free consultation, we'll:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Discuss your specific business challenges and goals</li>
          <li>Analyze your current workflow and pain points</li>
          <li>Recommend the best POS solution for your needs</li>
          <li>Show you how the right POS can increase your ROI</li>
          <li>Help you find a system that makes you happy and productive</li>
        </ul>
      </div>

      <h2>Conclusion</h2>
      <p>Choosing the right POS software is one of the most important decisions you'll make for your business. Whether you need a simple online system, prefer the personal touch of handwritten tickets, or require a custom solution tailored to your specific needs, there's a perfect POS system out there for you.</p>

      <p>Remember: The best POS system is the one that fits your business like a glove, enhances your customer interactions, and helps you achieve your business goals. Take your time, do thorough research, and don't hesitate to seek professional guidance.</p>

      <p>Ready to find the perfect POS solution for your business? <strong>Schedule your free consultation today</strong> and let us help you transform your business operations!</p>
    `,
    date: '2025-10-01',
    readTime: '10 min read',
    category: 'Technology',
    author: 'Arafat Hossain',
    authorRole: 'Founder of labinitial',
    metaDescription: 'Discover the best POS software solutions for retail stores, small businesses, and restaurants. Learn about custom POS development and how to choose the right system for your specific needs.',
    keywords: 'best point of sale software, best point of sale software for retail store, best point of sale software for small business, best point of sale software for medium business, best point of sale software for small retail business, best point of sale software for restaurants, custom POS development'
  }
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc, alt) => {
    setSelectedImage({ imageSrc, alt });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  // If the page is still loading
  if (!slug) {
    return <div>Loading...</div>;
  }

  const post = blogPosts[slug];

  // If post not found
  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{post.title} - DryClean POS Blog</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        <link rel="canonical" href={`https://drycleanpos.com/blog/${post.slug}`} />
      </Head>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/blog" className="text-gray-500 hover:text-blue-600">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center space-x-4">
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-sm text-gray-500">{post.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-blue prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Dry Cleaning Business?</h3>
          <p className="text-gray-600 mb-6">
            Get a personalized demo of our modern POS system and see how it can benefit your business.
          </p>
          <Link 
            href="/book-call" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block"
          >
            Book Free Consultation
          </Link>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Articles
          </Link>
        </div>
      </article>

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
