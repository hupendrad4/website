// app/request-quotation/page.tsx (or app/contact/page.tsx)

import Image from "next/image";
import Link from "next/link";

export default function RequestQuotationPage() {
  return (
    <div className="bg-[#f9f9fa] min-h-screen">
      {/* === TOP INFO STRIP === */}
      <div className="bg-[#111a4d] text-white px-6 py-2 flex justify-between items-center text-xs">
        <div className="flex gap-4 items-center">
          <span>
            <a href="mailto:info@quorium.com" className="hover:underline">
              info@quorium.com
            </a>
          </span>
          <span>|</span>
          <span>+91 7972092290</span>
        </div>
        <div className="flex gap-2 items-center">
          <span>Follow Us:</span>
          <a href="#" className="hover:text-[#e7b43f] ml-1">LinkedIn</a>
          <a href="#" className="hover:text-[#e7b43f] ml-1">Twitter</a>
          <a href="#" className="hover:text-[#e7b43f] ml-1">Facebook</a>
        </div>
      </div>

      {/* === MAIN HEADER WITH LOGO & NAV === */}
      <div className="w-full bg-white flex items-center justify-between py-5 px-10 shadow-sm border-b border-[#eaeaea]">
        <div className="flex items-center gap-6">
          <Image
            src="/images/quorium logo.png"
            alt="Quorium Technologies Logo"
            width={65}
            height={65}
            className="object-contain"
            style={{
              filter: "drop-shadow(0 2px 8px #181F4B33)",
              background: "transparent"
            }}
          />
          <span className="text-3xl font-extrabold text-[#111a4d] tracking-wide" style={{ letterSpacing: "1px" }}>
            Quorium Technologies
          </span>
        </div>
        <nav className="flex gap-6 items-center">
          <Link href="/" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">Home</Link>
          <Link href="/about" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">About</Link>
          <Link href="/services" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">Services</Link>
          <Link href="/case-studies" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">Case Studies</Link>
          <Link href="/blog" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">Blog</Link>
          <Link href="/contact" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">Contact</Link>
          <Link href="/career" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">Career</Link>
        </nav>
        <Link href="/request-quotation">
          <button className="ml-8 bg-[#6d42c7] hover:bg-[#54367a] text-white font-bold px-7 py-2 rounded-full shadow transition text-base">
            REQUEST A QUOTE
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[250px] flex items-center justify-center bg-[#181F4B]">
        <Image
          src="/images/contact-banner.jpg"
          fill
          className="object-cover object-center absolute inset-0 z-0 opacity-70"
          alt="Contact Banner"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-xl">
            CONTACT US
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Whether you&apos;re looking for digital transformation, software development, or expert security consulting,
            reach out to Quorium Technologies. Let&apos;s connect and turn your vision into reality.
          </p>
        </div>
      </section>

      {/* Three Option Cards */}
      <div className="max-w-5xl mx-auto -mt-20 flex flex-col md:flex-row gap-8 justify-center items-stretch z-20 relative">
        {/* Start a Project */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg border-t-4 border-[#6d42c7] flex flex-col items-center p-8 hover:shadow-2xl transition">
          <div className="mb-4 text-4xl text-[#6d42c7]">
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="2" width="36" height="36" rx="8" stroke="#6d42c7" strokeWidth="2"/>
            </svg>
          </div>
          <div className="font-bold text-lg mb-2">START A PROJECT</div>
          <div className="text-sm text-gray-500 mb-6">Want to discuss your project with us?</div>
          <button className="bg-[#6d42c7] hover:bg-[#e7b43f] text-white font-bold px-6 py-2 rounded-full shadow transition">
            REQUEST A QUOTE
          </button>
        </div>
        {/* Join Our Team */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg border-t-4 border-[#e7b43f] flex flex-col items-center p-8 hover:shadow-2xl transition">
          <div className="mb-4 text-4xl text-[#e7b43f]">
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="20" cy="16" r="5" stroke="#e7b43f" strokeWidth="2"/>
              <rect x="2" y="2" width="36" height="36" rx="8" stroke="#e7b43f" strokeWidth="2"/>
            </svg>
          </div>
          <div className="font-bold text-lg mb-2">JOIN OUR TEAM</div>
          <div className="text-sm text-gray-500 mb-6">Want to be a part of our team?</div>
          <button className="border-2 border-[#e7b43f] text-[#e7b43f] font-bold px-6 py-2 rounded-full shadow transition hover:bg-[#e7b43f] hover:text-white">
            CAREER
          </button>
        </div>
        {/* General */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg border-t-4 border-[#6d42c7] flex flex-col items-center p-8 hover:shadow-2xl transition">
          <div className="mb-4 text-4xl text-[#6d42c7]">
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="20" cy="20" r="9" stroke="#6d42c7" strokeWidth="2"/>
              <rect x="2" y="2" width="36" height="36" rx="8" stroke="#6d42c7" strokeWidth="2"/>
            </svg>
          </div>
          <div className="font-bold text-lg mb-2">GENERAL</div>
          <div className="text-sm text-gray-500 mb-6">Unable to find what you are looking for?</div>
          <button className="bg-[#6d42c7] hover:bg-[#e7b43f] text-white font-bold px-6 py-2 rounded-full shadow transition">
            CONTACT
          </button>
        </div>
      </div>

      {/* Reach Us Out Section */}
      <div className="max-w-6xl mx-auto mt-16 px-3 flex flex-col md:flex-row gap-8">
        {/* Form Card */}
        <form className="flex-1 bg-white shadow-xl rounded-2xl p-8 mb-8 md:mb-0 border border-gray-200">
          <h2 className="text-2xl font-extrabold text-[#181F4B] mb-6">
            <span className="border-l-8 border-[#6d42c7] pl-3">Reach Us Out</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4 mb-3">
            <input className="border px-4 py-3 rounded-lg flex-1" placeholder="Name*" required />
            <input className="border px-4 py-3 rounded-lg flex-1" placeholder="Email Address*" required type="email" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-3">
            <input className="border px-4 py-3 rounded-lg flex-1" placeholder="Phone*" required />
            <input className="border px-4 py-3 rounded-lg flex-1" placeholder="How did you find Quorium?" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-3">
            <select className="border px-4 py-3 rounded-lg flex-1 text-gray-500">
              <option>Interested in</option>
              <option>Web Application</option>
              <option>Mobile Application</option>
              <option>Security Consulting</option>
              <option>AI/ML & Automation</option>
            </select>
            <select className="border px-4 py-3 rounded-lg flex-1 text-gray-500">
              <option>Project Budget in USD</option>
              <option>&lt; $2,500</option>
              <option>$2,500 - $10,000</option>
              <option>$10,000 - $50,000</option>
              <option>$50,000+</option>
            </select>
          </div>
          <textarea className="border px-4 py-3 rounded-lg w-full mb-3" placeholder="Message*" rows={4} required />
          <div className="flex gap-4 items-center mb-6">
            <input className="border px-4 py-3 rounded-lg w-40" placeholder="Enter Captcha" />
            <span className="bg-gray-200 px-6 py-2 rounded-lg font-mono text-xl select-none">QUR123</span>
          </div>
          <button className="bg-[#6d42c7] hover:bg-[#e7b43f] text-white font-bold px-8 py-3 rounded-full transition shadow">
            SEND YOUR ENQUIRY
          </button>
        </form>
        {/* Contact Info Card */}
        <div className="w-full md:w-[340px] bg-[#181F4B] bg-opacity-80 shadow-xl rounded-2xl text-white flex flex-col gap-8 p-8 items-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl mb-2">📩</span>
            <div className="font-bold text-sm">MAIL TO OUR SALES DEPARTMENT</div>
            <a href="mailto:info@quorium.com" className="text-[#e7b43f] hover:underline text-xs">
              info@quorium.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl mb-2">📞</span>
            <div className="font-bold text-sm">CALL FOR MORE INFO</div>
            <div className="text-xs">+91 7972092290</div>
          </div>
          {/* All addresses formatted */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl mb-2">📍</span>
            <div className="font-bold text-sm">ADDRESSES</div>
            <div className="text-xs text-center">
              <span className="font-bold text-[#e7b43f]">Pune</span><br />
              704, Millennium ATLAS,<br />
              Near Vission Mall Road,<br />
              Tathawade, Pune-411033<br /><br />
              <span className="font-bold text-[#e7b43f]">Kharadi</span><br />
              5, Maa Residency,<br />
              Chandan Nagar Bypass,<br />
              Kharadi -411010<br /><br />
              <span className="font-bold text-[#e7b43f]">Dhule</span><br />
              02, Sushila Plaza, near Indira Garden Road,<br />
              Dhule, Maharashtra 424002
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-4xl mx-auto my-16 rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5481889118975!2d73.7581692!3d18.5034974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff6e6e2d3f3%3A0x77efba5a5c92cfee!2sQuorium%20Technologies!5e0!3m2!1sen!2sin!4v1721373195851!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
