import Head from 'next/head';
import Header from './Header';

export default function Layout({ children, title = "Dry Cleaning POS Software | Laundry Shop POS System USA", description = "Top-rated dry cleaning POS software and laundry management system for US businesses. Touch screen POS, order management, and automated solutions for dry cleaners." }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="laundry shop pos system, pos system for laundry, dry cleaning pos system, dry cleaning pos software, dry cleaning software australia, dry cleaning business software, laundry box pos and order management system, dry cleaning pos touch screen system, dry cleaning management software, quick dry cleaning software, dry cleaning pos software login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DryClean POS Software",
              "url": "https://drycleanpointofsale.com",
              "logo": "https://drycleanpointofsale.com/logo.png",
              "description": "Custom POS and management software solutions for dry cleaning and laundry businesses in the USA",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://twitter.com/drycleanpos"
              ]
            })
          }}
        />
        
        {/* Structured Data - Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "DryClean POS Software",
              "description": "Custom POS and management software solutions for dry cleaning and laundry businesses",
              "url": "https://drycleanpointofsale.com",
              "telephone": "+1-555-123-4567",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "areaServed": "US",
              "serviceType": "POS System Development",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "POS Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Laundry Shop POS System",
                      "description": "Advanced point of sale system for laundry and dry cleaning businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Order Management System",
                      "description": "Complete laundry box POS and order management system"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dry Cleaning Management Software",
                      "description": "Comprehensive business management software for dry cleaners"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drycleanpointofsale.com" />
        <meta property="og:site_name" content="DryClean POS Software" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@drycleanpos" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">DryClean POS</h3>
                <p className="text-gray-300 mb-4">
                  Custom POS and management software solutions for dry cleaning businesses. 
                  Transform your operations with automated systems that save time and increase revenue.
                </p>
                <p className="text-gray-400 text-sm">
                  © 2024 DryClean POS. All rights reserved.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                  <li><a href="/case-study" className="text-gray-300 hover:text-white transition-colors">Case Study</a></li>
                  <li><a href="/book-call" className="text-gray-300 hover:text-white transition-colors">Book Call</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Email: info@drycleanpointofsale.com</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Hours: Mon-Fri 9AM-6PM EST</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
