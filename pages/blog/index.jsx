import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 7,
    slug: 'go-digital-laundry-shop-guide-modern-pos-management-software',
    title: 'Go Digital with Your Laundry Shop: A Guide to Modern POS & Management Software',
    excerpt: 'Are you still running your laundry or dry cleaning business with manual registers, excel sheets, and stacks of paper receipts? Discover how a modern POS system can transform your operations.',
    date: '2025-10-09',
    readTime: '8 min read',
    category: 'Business Growth',
    image: '/pos6.png'
  },
  {
    id: 6,
    slug: 'modern-pos-game-changer-laundry-business',
    title: 'Why a Modern POS is a Game-Changer for Your Laundry Business',
    excerpt: 'Discover how a modern POS system can transform your laundry business operations, improve customer experience, and boost your bottom line.',
    date: '2025-10-07',
    readTime: '10 min read',
    category: 'Business Growth',
    image: '/shifapos1.png'
  },
  {
    id: 5,
    slug: 'best-point-of-sale-software-guide',
    title: 'Best Point of Sale Software for Retail Stores and Small Businesses',
    excerpt: 'Discover the best POS software solutions for retail stores, small businesses, and restaurants. Learn about custom POS development and how to choose the right system for your specific needs.',
    date: '2025-10-01',
    readTime: '10 min read',
    category: 'Technology',
    image: '/pos main.jpg'
  },
  {
    id: 4,
    slug: 'dry-cleaning-profit-margin-100k-sales',
    title: 'What\'s the Profit Margin for a Dry Cleaner That Does $100K in Monthly Sales?',
    excerpt: 'Discover the typical profit margins for dry cleaning businesses and learn how to calculate potential earnings based on your monthly sales.',
    date: '2025-09-30',
    readTime: '8 min read',
    category: 'Business Growth',
    image: '/pos2.jpg'
  },
  {
    id: 1,
    slug: 'benefits-of-modern-pos-for-dry-cleaners',
    title: '5 Benefits of Modern POS Systems for Dry Cleaners',
    excerpt: 'Discover how modern POS systems can streamline your dry cleaning operations, improve customer experience, and boost your bottom line.',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Business Growth',
    image: '/pos main.jpg'
  },
  {
    id: 2,
    slug: 'choosing-right-pos-software',
    title: 'How to Choose the Right POS Software for Your Dry Cleaning Business',
    excerpt: 'A comprehensive guide to selecting the perfect POS system that meets your specific dry cleaning business needs and budget.',
    date: '2025-01-10',
    readTime: '7 min read',
    category: 'Technology',
    image: '/pos2.jpg'
  },
  {
    id: 3,
    slug: 'increasing-customer-retention',
    title: 'Strategies for Increasing Customer Retention in Dry Cleaning',
    excerpt: 'Learn proven strategies to keep your customers coming back and build long-term loyalty for your dry cleaning business.',
    date: '2025-01-05',
    readTime: '6 min read',
    category: 'Marketing',
    image: '/pos main.jpg'
  }
];

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Dry Cleaning POS Blog - Industry Insights & Tips</title>
        <meta 
          name="description" 
          content="Expert insights, tips, and industry news for dry cleaning businesses. Learn about POS systems, business growth, and customer retention strategies." 
        />
        <meta name="keywords" content="dry cleaning, POS systems, business tips, customer retention, dry cleaning software" />
        <meta property="og:title" content="Dry Cleaning POS Blog - Industry Insights & Tips" />
        <meta property="og:description" content="Expert insights and tips for dry cleaning businesses" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://drycleanpos.com/blog" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dry Cleaning POS Blog</h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert insights, industry news, and practical tips to grow your dry cleaning business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full text-sm">POS Systems</span>
              <span className="bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full text-sm">Business Growth</span>
              <span className="bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full text-sm">Customer Service</span>
              <span className="bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full text-sm">Technology</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-2xl mx-auto mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Get the latest dry cleaning industry insights and POS tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
