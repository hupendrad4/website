// components/Jumbotron.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundDots from "./BackgroundDots"; // ADD THIS!

export default function HeroSection() {
  return (
    <div className="w-full">
      {/* === TOP CONTACT STRIP === */}
      <div className="bg-[#181F4B] text-white px-4 py-2 flex justify-between items-center text-xs z-30">
        <div className="flex gap-4 items-center">
          <span>
            <a href="mailto:info@quorium.com" className="hover:underline">
              info@quorium.com
            </a>
          </span>
          <span>|</span>
          <span>+91 7972092290</span>
        </div>
        <div className="hidden md:flex gap-3 items-center">
          <span>Follow Us:</span>
          <a href="#" className="hover:text-[#e7b43f] transition">LinkedIn</a>
          <a href="#" className="hover:text-[#e7b43f] transition">Twitter</a>
          <a href="#" className="hover:text-[#e7b43f] transition">Facebook</a>
        </div>
      </div>

      {/* === HEADER LOGO/NAV STRIP (WHITE) === */}
      <div className="bg-white w-full px-4 md:px-10 py-2 flex justify-between items-center shadow z-20 relative">
        {/* LOGO & NAME */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/quorium logo.png"
            alt="Quorium Technologies"
            width={100}
            height={100}
            className="object-contain"
            style={{ filter: "drop-shadow(0 2px 8px #181F4B44)" }}
            priority
          />
          <span className="text-2xl md:text-3xl font-extrabold text-[#181F4B] tracking-wide" style={{ letterSpacing: "1px" }}>
            Quorium Technologies
          </span>
        </Link>
        {/* NAVIGATION */}
        <nav className="flex gap-4 md:gap-8 text-[#181F4B] font-semibold text-[16px] md:text-lg">
          <Link href="/" className="hover:text-[#e7b43f] transition">Home</Link>
          <Link href="/about" className="hover:text-[#e7b43f] transition">About</Link>
          <Link href="/services" className="hover:text-[#e7b43f] transition">Services</Link>
          <Link href="/case-studies" className="hover:text-[#e7b43f] transition">Case Studies</Link>
          <Link href="/blog" className="hover:text-[#e7b43f] transition">Blog</Link>
          <Link href="/contact" className="hover:text-[#e7b43f] transition">Contact</Link>
          <Link href="/career" className="hover:text-[#e7b43f] transition">Career</Link>
        </nav>
        {/* REQUEST QUOTE BUTTON (optional, right) */}
        <Link href="/request-quotation" className="hidden md:inline-block">
          <button className="bg-[#6d42c7] hover:bg-[#e7b43f] hover:text-[#181F4B] text-white font-bold px-6 py-2 rounded-full shadow transition-all ml-4">
            REQUEST A QUOTE
          </button>
        </Link>
      </div>

      {/* === HERO/JUMBOTRON SECTION === */}
      <section
        className="w-full relative bg-fixed bg-center bg-cover h-[520px] md:h-[620px] flex flex-col"
        style={{
          backgroundImage: `url('/images/backgroundImage.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a0352d9] to-[#060d1fd4] pointer-events-none z-0" />
        {/* Decorative Dots ABOVE overlay but BELOW text */}
        <BackgroundDots />
        {/* === JUMBOTRON CONTENT === */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 flex flex-col items-center text-center px-4 max-w-screen-xl mx-auto flex-1"
          style={{
            paddingTop: "4rem",
            paddingBottom: "1.5rem",
          }}
        >
          <h1 className="mb-4 text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl drop-shadow-xl">
            Transforming <span className="text-[#f7b71d]">Digital Possibilities</span> into Reality
          </h1>
          <p className="mb-8 text-lg sm:text-2xl font-semibold text-white lg:text-xl drop-shadow">
            Custom Software Development | Mobile App Solutions | IT Consulting
          </p>
          <p className="mb-10 max-w-2xl mx-auto text-white text-lg drop-shadow">
            We deliver cutting-edge digital solutions tailored to your business needs...
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/services">
              <button className="bg-[#f7b71d] hover:bg-[#e9a812] text-[#23214e] font-bold px-8 py-3 rounded-lg shadow-lg text-lg transition-all">
                Explore Our Services
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white hover:bg-[#f7b71d] text-[#23214e] hover:text-[#23214e] font-bold px-8 py-3 rounded-lg shadow-lg text-lg transition-all border-2 border-white">
                Book a Free Consultation
              </button>
            </Link>
          </div>
        </motion.div>
        {/* Absolute Button at the Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="absolute left-0 right-0 bottom-8 md:bottom-10 flex justify-center z-30"
        >
          <Link href="/request-quotation">
            <button className="bg-[#6d42c7] hover:bg-[#e7b43f] text-white px-10 py-4 rounded-full font-bold shadow-xl text-xl transition-all">
              Request a Quotation
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
