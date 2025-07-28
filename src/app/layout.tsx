import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
// import { FaPhone, FaWhatsapp } from "react-icons/fa";
import FloatingButtons from "./components/FloatingButtons";



export const metadata: Metadata = {
  metadataBase: new URL("https://www.quoriumtechnologies.com"),
  title: "Quorium Technologies | Transforming Possibilities in Security & Software",
  description: "Quorium Technologies delivers next-gen cybersecurity, cloud, AI, and software solutions for tech-forward businesses. Empowering innovation, transformation, and digital leadership.",
  openGraph: {
    title: "Quorium Technologies | Transforming Possibilities in Security & Software",
    description: "Quorium Technologies delivers next-gen cybersecurity, cloud, AI, and software solutions for tech-forward businesses. Empowering innovation, transformation, and digital leadership.",
    url: "https://www.quoriumtechnologies.com/",
    siteName: "Quorium Technologies",
    images: [
      {
        url: "/globe.svg", // Will be resolved using metadataBase
        width: 120,
        height: 120,
        alt: "Quorium Technologies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Quorium Technologies | Transforming Possibilities in Security & Software",
    description: "Quorium Technologies delivers next-gen cybersecurity, cloud, AI, and software solutions for tech-forward businesses.",
    site: "@quoriumtech",
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Quorium Technologies",
              "url": "https://www.quoriumtechnologies.com/",
              "logo": "https://www.quoriumtechnologies.com/globe.svg",
              "description": "Quorium Technologies delivers next-gen cybersecurity, cloud, AI, and software solutions for tech-forward businesses.",
              "sameAs": [
                "https://www.linkedin.com/company/quoriumtechnologies/"
              ],
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+1-800-000-0000",
                "contactType": "customer support",
                "areaServed": "Worldwide",
                "availableLanguage": ["English"]
              }],
              "service": [
                {
                  "@type": "Service",
                  "name": "Managed Security Services",
                  "description": "24/7 monitoring, threat detection, and rapid response to secure your business."
                },
                {
                  "@type": "Service",
                  "name": "Cloud Security",
                  "description": "Comprehensive protection for your cloud infrastructure and data."
                },
                {
                  "@type": "Service",
                  "name": "Vulnerability Management",
                  "description": "Identify, assess, and remediate vulnerabilities before they become threats."
                },
                {
                  "@type": "Service",
                  "name": "Security Consulting",
                  "description": "Expert guidance to strengthen your security posture and compliance."
                },
                {
                  "@type": "Service",
                  "name": "Penetration Testing",
                  "description": "Simulated attacks to uncover and fix security weaknesses."
                },
                {
                  "@type": "Service",
                  "name": "Incident Response",
                  "description": "Rapid containment and recovery from cyber incidents and breaches."
                },
                {
                  "@type": "Service",
                  "name": "Security Awareness Training",
                  "description": "Empower your team to recognize and prevent cyber threats."
                },
                {
                  "@type": "Service",
                  "name": "Compliance & Risk Management",
                  "description": "Meet regulatory requirements and manage organizational risk effectively."
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-primary text-secondary font-sans">
        <a href="#main-content" className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 bg-accent text-primary px-4 py-2 rounded">Skip to main content</a>


        <main id="main-content" className="w-full min-h-[80vh] relative z-10">{children}</main>
        <FloatingButtons />
        <footer className="relative w-full bg-[#00004d] text-white pt-10 px-4 mt-12 overflow-hidden">
          {/* Background Image as cover */}
          <img
            src="/images/footer1.jpg"
            alt="Footer background"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            style={{ opacity: 0.45 }}
          />
          {/* Optional: Overlay for better contrast */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Main Footer Content (updated) */}
          <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 border-b border-white/20 pb-8">
            {/* Footer Section 1 */}
            <div>
              <div className="font-bold text-lg mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e7b43f] animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                CONTACT US
              </div>
              <ul className="text-sm space-y-1">
                <li><Link href="/request-quotation" className="hover:text-[#e7b43f] flex items-center gap-2"><span>📄</span>Request a Quote</Link></li>
                <li><Link href="/contact" className="hover:text-[#e7b43f] flex items-center gap-2"><span>📞</span>Contact with us</Link></li>
                <li><Link href="/career" className="hover:text-[#e7b43f] flex items-center gap-2"><span>💼</span>Jobs</Link></li>
              </ul>
              <div className="mt-4 text-xs">
                <span className="font-bold text-[#e7b43f]">Pune:</span> 704, Millennium ATLAS, Near Vission Mall Road, Tathawade, Pune-411033<br/>
                <span className="font-bold text-[#e7b43f]">Kharadi:</span> 5, Maa Residency, Chandan Nagar Bypass, Kharadi -411010<br/>
                <span className="font-bold text-[#e7b43f]">Dhule:</span> 02, Sushila Plaza, near Indira Garden Road, Dhule, Maharashtra 424002
              </div>
            </div>
            {/* Footer Section 2 */}
            <div>
              <div className="font-bold text-lg mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e7b43f] animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                QUICK LINKS
              </div>
              <ul className="text-sm space-y-1">
                <li><Link href="/about" className="hover:text-[#e7b43f] flex items-center gap-2"><span>ℹ️</span>About Us</Link></li>
                <li><Link href="/services" className="hover:text-[#e7b43f] flex items-center gap-2"><span>🛠️</span>Services</Link></li>
                <li><Link href="/blog" className="hover:text-[#e7b43f] flex items-center gap-2"><span>📰</span>Blogs</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-[#e7b43f] flex items-center gap-2"><span>🔒</span>Privacy Policy</Link></li>
              </ul>
            </div>
            {/* Footer Section 3 */}
            <div>
              <div className="font-bold text-lg mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e7b43f] animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                EXPERTISE
              </div>
              <ul className="text-sm space-y-1">
                <li>Security Consulting</li>
                <li>AI/ML & Automation</li>
                <li>Mobile App Development</li>
                <li>Compliance & Risk Management</li>
              </ul>
            </div>
            {/* Footer Section 4 */}
            <div>
              <div className="font-bold text-lg mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e7b43f] animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                SOCIAL ACCOUNTS
              </div>
              <ul className="flex gap-3 text-xl mt-2">
                <li><a href="https://facebook.com/" aria-label="Facebook" className="hover:text-[#e7b43f] transition-transform duration-200 hover:scale-125" target="_blank" rel="noopener noreferrer"><span role="img" aria-label="Facebook">📘</span></a></li>
                <li><a href="https://linkedin.com/company/quoriumtechnologies/" aria-label="LinkedIn" className="hover:text-[#e7b43f] transition-transform duration-200 hover:scale-125" target="_blank" rel="noopener noreferrer"><span role="img" aria-label="LinkedIn">💼</span></a></li>
                <li><a href="https://twitter.com/" aria-label="Twitter" className="hover:text-[#e7b43f] transition-transform duration-200 hover:scale-125" target="_blank" rel="noopener noreferrer"><span role="img" aria-label="Twitter">🐦</span></a></li>
              </ul>
            </div>
          </div>
          <div className="relative z-20 w-full pt-4 pb-2 flex justify-center">
            <p className="text-xs text-white/80 text-center tracking-wide font-semibold">
              Copyright © 2025 Quorium Technologies Pvt Ltd, All Rights reserved.
            </p>
          </div>
        </footer>

        {/* AI Chatbot Widget Placeholder */}
        <div aria-label="AI Chatbot" className="fixed bottom-6 right-6 z-50">
          <button className="w-16 h-16 rounded-full bg-accent shadow-lg flex items-center justify-center text-3xl animate-bounce focus:outline-none" title="Chat with AI (coming soon)">🤖</button>
        </div>
      </body>
    </html>
  );
}

