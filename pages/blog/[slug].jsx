import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ImageModal from '../../components/ImageModal';

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = {
  'modern-pos-game-changer-laundry-business': {
    id: 6,
    slug: 'modern-pos-game-changer-laundry-business',
    title: 'Why a Modern POS is a Game-Changer for Your Laundry Business',
    excerpt: 'Discover how a modern POS system can transform your laundry business operations, improve customer experience, and boost your bottom line.',
    content: `
      <div class="mb-8">
        <img src="/shifapos1.png" alt="Modern POS System for Laundry Business" class="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>

      <p>Imagine a busy Monday morning. The phone is ringing, a customer is at the counter asking about their order status, and a delivery driver needs the next set of addresses.</p>

      <p>In the midst of this chaos, managing everything with pen and paper or a basic cash register feels nearly impossible. But what if a single, powerful system could bring order to this chaos?</p>

      <p>This isn't a fantasy; it's the reality offered by a modern Laundry POS System.</p>

      <h2>Beyond Billing: Your All-in-One Management Hub</h2>

      <p>A Point of Sale (POS) system for a laundry business is so much more than a digital cash register. Think of it as your central command center that revolutionizes every aspect of your operations.</p>
      
      <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 class="text-xl font-bold mb-4 text-blue-800">The Modern POS Advantage</h3>
        <ul class="list-disc pl-6 space-y-2 text-blue-700">
          <li><strong>Automated Tracking:</strong> Each garment is tagged with a unique number, ensuring nothing gets lost and every item is accountable from drop-off to pickup.</li>
          <li><strong>Real-Time Status Updates:</strong> You and your customers can see exactly where an order is – from "Received" to "Washing," "Pressing," and "Ready for Pickup."</li>
          <li><strong>Intelligent Reporting:</strong> Gain instant insights into your most profitable services, monthly revenue trends, and peak business hours, all from a simple dashboard.</li>
          <li><strong>Customer Relationship Management:</strong> Build lasting relationships with automated reminders, personalized offers, and loyalty programs.</li>
        </ul>
      </div>

      <h2>Key Features That Transform Operations</h2>

      <p>What should you look for in a dedicated Dry Cleaning Management Software? Here are the essentials that make a modern POS system truly game-changing:</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-bold mb-3 text-green-800">Operational Efficiency</h3>
          <ul class="space-y-2 text-green-700">
            <li>✅ Intuitive Touch-Screen Interface</li>
            <li>✅ Automated Order Processing</li>
            <li>✅ Real-Time Inventory Tracking</li>
            <li>✅ Staff Performance Analytics</li>
          </ul>
        </div>
        <div class="bg-purple-50 p-6 rounded-lg">
          <h3 class="text-lg font-bold mb-3 text-purple-800">Customer Experience</h3>
          <ul class="space-y-2 text-purple-700">
            <li>✅ Integrated Customer Profiles</li>
            <li>✅ Automated SMS/Email Notifications</li>
            <li>✅ Loyalty & Rewards Programs</li>
            <li>✅ Online Ordering Integration</li>
          </ul>
        </div>
      </div>

      <h2>The ROI of Modern POS Systems</h2>

      <p>Many laundry business owners hesitate to invest in modern POS systems due to upfront costs, but the return on investment is substantial:</p>

      <div class="bg-yellow-50 p-6 rounded-lg mb-6">
        <h3 class="text-xl font-bold mb-4 text-yellow-800">Tangible Benefits You Can Expect</h3>
        <ul class="list-disc pl-6 space-y-2 text-yellow-700">
          <li><strong>30-50% Reduction in Administrative Time:</strong> Automate manual tasks like order tracking, billing, and reporting</li>
          <li><strong>20-40% Increase in Customer Retention:</strong> Better service leads to loyal customers who return regularly</li>
          <li><strong>15-25% Boost in Average Order Value:</strong> Upsell opportunities and package deals become easier to implement</li>
          <li><strong>50-70% Fewer Order Errors:</strong> Digital tracking eliminates lost items and miscommunication</li>
        </ul>
      </div>

      <h2>Off-the-Shelf vs. Custom-Tailored Solutions</h2>

      <p>While there are many excellent pre-built Dry Cleaning POS Software options available, sometimes a standard solution isn't enough.</p>

      <p>If your business model is unique—perhaps you offer specialized subscription plans, complex delivery networks, or unique service combinations—a custom POS software solution might be your best investment.</p>

      <p>Custom solutions are designed to fit your workflow perfectly, offering unparalleled control and efficiency that grows with your business.</p>

      <p>They can integrate with your existing systems, accommodate your specific pricing models, and scale as you expand to multiple locations.</p>

      <h2>Future-Proofing Your Business</h2>

      <p>The laundry industry is evolving rapidly, with customers expecting digital convenience and personalized service.</p>

      <p>A modern POS system positions your business for future success by:</p>

      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Enabling Mobile Integration:</strong> Customers can place orders, track progress, and make payments from their smartphones</li>
        <li><strong>Supporting Multiple Locations:</strong> Manage multiple stores from a single dashboard with centralized reporting</li>
        <li><strong>Adapting to New Technologies:</strong> Cloud-based systems can easily integrate with emerging technologies like AI and IoT</li>
        <li><strong>Meeting Changing Customer Expectations:</strong> Digital receipts, contactless payments, and online booking become standard features</li>
      </ul>

      <h2>Conclusion: Elevate Your Business Today</h2>

      <p>Investing in a sophisticated Laundry Management System isn't just about purchasing a tool; it's about future-proofing your business.</p>

      <p>It empowers you to stay ahead of the competition, build stronger customer loyalty, and reclaim your most valuable resource: time.</p>

      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Ready to Experience the Difference?</h3>
        <p class="mb-4">The transition to a modern POS system is smoother than you might think, and the benefits start from day one.</p>
        <p class="mb-4">From reduced operational headaches to increased revenue and happier customers, the impact is immediate and lasting.</p>
        <p><strong>Don't let outdated systems hold your business back.</strong> Embrace the technology that's transforming the laundry industry and position your business for sustainable growth.</p>
      </div>
    `,
    date: '2025-10-07',
    readTime: '10 min read',
    category: 'Business Growth',
    author: 'Shurabi Akter Shifa',
    authorRole: 'Content Writer at Labinitial',
    metaDescription: 'Discover how a modern POS system can transform your laundry business operations, improve customer experience, and boost your bottom line with real ROI benefits.',
    keywords: 'laundry shop pos system, pos system for laundry, dry cleaning pos system, dry cleaning pos software, dry cleaning software australia, dry cleaning business software, laundry box pos and order management system, dry cleaning pos touch screen system, dry cleaning management software, quick dry cleaning software login'
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
