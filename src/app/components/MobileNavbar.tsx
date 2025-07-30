// components/MobileNavbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-4 py-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="text-black text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-[60px] left-0 w-full bg-white text-black z-40 p-6 space-y-4 text-lg">
          <Link href="/" className="hover:text-[#e7b43f] block">🏠 Home</Link>
          <Link href="/about" className="hover:text-[#e7b43f] block">ℹ️ About Us</Link>
          <Link href="/services" className="hover:text-[#e7b43f] block">🛠️ Services</Link>
          <Link href="/portfolio" className="hover:text-[#e7b43f] block">🖼️ Portfolio</Link>
          <Link href="/payment" className="hover:text-[#e7b43f] block">💳 Payment</Link>
          <Link href="/career" className="hover:text-[#e7b43f] block">💼 Career</Link>
          <Link href="/courses" className="hover:text-[#e7b43f] block">📚 Course & Internship</Link>
          <Link href="/contact" className="hover:text-[#e7b43f] block">📞 Contact Us</Link>
          <p className="text-xs mt-4 text-white/60">
            Copyright © 2025 Quorium Technologies Pvt Ltd, All Rights reserved.
          </p>
        </div>
      )}
    </>
  );
}
