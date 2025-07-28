"use client";
import Image from "next/image";
import Link from "next/link";

export default function ResourceOutsourcingServicesPage() {
  return (
    <div className="bg-[#f9f9fa] min-h-screen flex flex-col">
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
      <section className="relative w-full h-[280px] flex items-center justify-center bg-[#181F4B] overflow-hidden">
        <Image
          src="/images/contact-banner.jpg"
          fill
          className="object-cover object-center absolute inset-0 z-0 opacity-80"
          alt="Banner"
          priority
        />
        <div className="relative z-10 w-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-xl">
            Resource Outsourcing Services
          </h1>
          <p className="text-white/90 text-lg font-medium">
            Flexible engagement models to meet your talent needs.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-6xl mx-auto px-3 md:px-0 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#181F4B] mb-4">
            Resource Outsourcing Services
          </h2>
          <p className="text-[#312C61] text-base md:text-lg leading-relaxed">
            Scale your projects with confidence using Quorium’s Resource Outsourcing Services. We provide experienced, certified professionals in cybersecurity, software development, DevOps, and IT support.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/customSolution.jpg"
            alt="Resource Outsourcing Services"
            width={340}
            height={280}
            className="object-contain"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f9f9fa] py-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 bg-[#6d42c7] rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 text-white hover:scale-105 transition-transform">
            <span className="text-4xl mb-2">🚀</span>
            <div className="font-bold text-lg mb-2">START A NEW PROJECT</div>
            <div className="text-sm text-white/90 mb-5">Share your ideas with us, we&apos;ll get back to you soon.</div>
            <Link
              href="/request-quotation"
              className="bg-white text-[#6d42c7] font-bold px-7 py-2 rounded-full shadow transition hover:bg-[#e7b43f] hover:text-[#181F4B]"
            >
              Request A Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
