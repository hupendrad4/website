"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const services = [
  { title: "Custom Product Development", link: "/services/custom-product-development" },
  { title: "Web Application Development", link: "/services/web-application-development" },
  { title: "Mobile Application Development", link: "/services/mobile-application-development" },
  { title: "Software Testing Services", link: "/services/software-testing-services" },
  { title: "Web Application Security Services", link: "/services/web-application-security-services" },
  { title: "IT Staffing and Software Consulting", link: "/services/it-consulting" },
  { title: "Resource Outsourcing Services", link: "/services/resource-outsourcing-services" },
  { title: "Graphics Designs Services", link: "/services/graphics-designs-services" },
];

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);
const timeoutRef = useRef(null); // ✅ valid in JavaScript


  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150); // delay avoids flickering on fast mouse moves
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Services Label */}
      <span
        role="button"
        className="cursor-pointer font-semibold text-[#6d42c7] transition flex items-center gap-1 px-2 py-1"
      >
        Services
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>

      {/* Dropdown List */}
      {open && (
        <div className="absolute left-0 mt-2 w-80 bg-white border border-gray-200 shadow-xl rounded-lg z-50">
          <ul className="py-2">
            {services.map((service, index) => (
              <li key={index}>
                <Link
                  href={service.link}
                  className="block px-5 py-2 text-sm font-medium text-gray-800 hover:bg-[#f5f5f5] hover:text-[#6d42c7] transition-all duration-150"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
