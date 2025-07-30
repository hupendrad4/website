"use client";

import Link from "next/link";
import Image from "next/image";
import TestimonialsMarquee from "./components/TestimonialsMarquee";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaUserShield,
  FaUsers,
  FaCheckCircle,
  FaCogs,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaEnvelope,
  FaLinkedinIn,
  FaWhatsapp,
  FaSyncAlt,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import HeroSection from "./components/Jumbotron";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";


// ======= Proud Numbers / Stats =======
const stats = [
  {
    icon: <FaCheckCircle />,
    value: "10",
    label: "Successful Projects",
    bg: "bg-[#f9d6fd]",
    color: "text-[#a929b6]",
  },
  {
    icon: <FaLaptopCode />,
    value: "4",
    label: "Web Applications",
    bg: "bg-[#d6f3fd]",
    color: "text-[#29a9b6]",
  },
  {
    icon: <FaMobileAlt />,
    value: "2",
    label: "Mobile Apps",
    bg: "bg-[#fff3cd]",
    color: "text-[#e5b100]",
  },
  {
    icon: <FaCogs />,
    value: "4",
    label: "Custom Software",
    bg: "bg-[#e0e7ff]",
    color: "text-[#6659b6]",
  },
  {
    icon: <FaUsers />,
    value: "8",
    label: "Happy Customers",
    bg: "bg-[#d6f8e6]",
    color: "text-[#3bbd74]",
  },
  {
    icon: <FaStar />,
    value: "5",
    label: "5-Star Ratings",
    bg: "bg-[#fbe9e6]",
    color: "text-[#fca311]",
  },
];

// -- Captcha generator --
function generateCaptcha(length = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  let res = "";
  for (let i = 0; i < length; i++) {
    res += chars[Math.floor(Math.random() * chars.length)];
  }
  return res;
}

// === Decorative Floating Dots Component ===
// function BackgroundDots() {
//   // Array of dot positions
//   const dots = [
//     { left: "27.12%", top: "90.57%", translate: "-49.82px" },
//     { left: "64.77%", top: "76.23%", translate: "-8.49px" },
//     { left: "98.90%", top: "85.50%", translate: "-63.88px" },
//     { left: "33.09%", top: "78.66%", translate: "-44.28px" },
//     { left: "63.70%", top: "20.33%", translate: "-44.51px" },
//     { left: "19.48%", top: "28.97%", translate: "-12.81px" },
//     { left: "55.40%", top: "37.95%", translate: "-52.39px" },
//     { left: "77.41%", top: "93.05%", translate: "-9.80px" },
//     { left: "17.86%", top: "56.55%", translate: "-3.89px" },
//     { left: "82.53%", top: "16.40%", translate: "-65.14px" },
//     { left: "83.23%", top: "4.44%", translate: "-83.50px" },
//     { left: "7.59%", top: "8.44%", translate: "-4.20px" },
//     { left: "43.09%", top: "75.26%", translate: "-23.40px" },
//     { left: "9.65%", top: "96.28%", translate: "-42.92px" },
//     { left: "1.09%", top: "78.99%", translate: "-91.40px" },
//     { left: "4.96%", top: "47.86%", translate: "-0.95px" },
//     { left: "69.31%", top: "89.63%", translate: "-1.47px" },
//     { left: "49.49%", top: "57.96%", translate: "-1.22px" },
//     { left: "13.25%", top: "7.92%", translate: "-46.55px" },
//     { left: "92.85%", top: "12.59%", translate: "-4.46px" },
//   ];
//   return (
//     <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none z-0">
//       {dots.map((dot, i) => (
//         <div
//           key={i}
//           className="absolute w-2 h-2 rounded-full bg-indigo-500"
//           style={{
//             left: dot.left,
//             top: dot.top,
//             transform: `translateY(${dot.translate})`,
//             transition: "all 1.8s cubic-bezier(.55,.3,.62,1.03)",
//           }}
//         />
//       ))}
//     </div>
//   );
// }

export default function Home() {
  // --- Captcha state ---
  const [captcha, setCaptcha] = useState(generateCaptcha());

  return (
    <main className="min-h-screen bg-[#3D3D3D] text-secondary font-sans">
    <div className="md:hidden">
      <MobileNavbar />
    </div>
<div className="hidden md:block">
  <Navbar />
</div>

      {/* Hero Section */}
      <HeroSection />

      {/* Who We Are Section */}
      <section className="w-full py-16 bg-white flex flex-col items-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary">Who We Are ?</h2>
        <p className="max-w-3xl text-neutral-700 mb-6 text-lg">
          Quorium Technologies is Leading IT Partners in Pune and trusted provider of comprehensive software-related services. We specialize in Custom Software Development, Mobile App Solutions, Software Testing Services, Security Services, IT consulting, and Cutting-Edge Technology training. With a team of expert developers, testers and security experts we craft innovative digital solutions that transform your vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <div className="flex flex-col items-center">
            <Image src="/file.svg" alt="Designing on Laptop" width={120} height={120} className="rounded-xl shadow-lg mb-2" />
            <span className="text-sm text-neutral-500">Image by Sarah Dorweiler</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/window.svg" alt="Laptop" width={120} height={120} className="rounded-xl shadow-lg mb-2" />
            <span className="text-sm text-neutral-500">Image by Pawel Czerwinski</span>
          </div>
        </div>
        <Link href="/about" className="mt-6 px-6 py-2 rounded-full bg-secondary text-white font-semibold hover:bg-blue-700 transition">Explore Us</Link>
      </section>

      {/* What We Offer Section */}
      <section className="w-full py-16 bg-blue-50 flex flex-col items-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary">What We Offer ?</h2>
        <div className="flex flex-col lg:flex-row items-center max-w-5xl w-full gap-8">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/WhatWeOffer.jpg"
              alt="What We Offer"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg max-w-xs lg:max-w-full"
            />
          </div>
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <p className="max-w-3xl text-neutral-700 mb-6 text-lg">
              At Quorium, we provide comprehensive software development solutions that cater to your product development, web application development, mobile app development, and software testing needs. Our team consists of highly experienced developers and consultants who are dedicated to delivering quality services.
            </p>
            <Link
              href="/services"
              className="px-6 py-2 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Section With All Three Subsections */}
      <section
        className="w-full bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/backgroundImageHome.jpg')" }}
      >

        {/* Overlay for contrast (reduced opacity for visible bg) */}
        <div className="w-full min-h-full bg-gray bg-opacity-20">
          {/* Why Choose Quorium Section */}
          <section className="w-full py-16 bg-transparent flex flex-col items-center px-4">

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Why Choose Quorium ?</h2>
                <p className="max-w-3xl text-neutral-300 mb-6 text-lg text-center">
                    At Quorium, we go beyond traditional IT services to become your dedicated technology partner. Our skilled team delivers custom software, expert consulting, and ongoing support designed around your unique business goals. With a strong focus on trust, transparency, and innovation, we ensure every project is delivered with quality and care. Experience the Quorium difference—where your success drives everything we do.
                </p>
            <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full">
              <div className="flex flex-col items-center p-6 bg-gray rounded-xl shadow min-w-[260px] w-auto max-w-xs sm:max-w-sm md:max-w-md flex-1">
                <FaLaptopCode size={50} color="var(--accent)" />
                <h3 className="font-bold text-lg mb-1 text-white text-center">
                  Expert Developers
                </h3>
                <Image
                  src="/images/expertDev.jpg"
                  alt="Expert Developer"
                  width={150}
                  height={150}
                  className="rounded-full shadow mb-2 object-cover"
                />
                <p className="text-neutral-300 text-center">
                  Our team consists of expert developers who are highly skilled at developing software applications that cater to your specific requirements.
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-gray rounded-xl shadow min-w-[260px] w-auto max-w-xs sm:max-w-sm md:max-w-md flex-1">
                <FaCogs size={50} color="var(--accent)" />
                <h3 className="font-bold text-lg mb-1 text-white text-center">
                  Customized Solutions
                </h3>
                <Image
                  src="/images/customSolution.jpg"
                  alt="Custom Solutions"
                  width={150}
                  height={150}
                  className="rounded-full shadow mb-2 object-cover"
                />
                <p className="text-neutral-300 text-center">
                  We believe in providing customized software solutions that cater to your specific business needs.
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-gray rounded-xl shadow min-w-[260px] w-auto max-w-xs sm:max-w-sm md:max-w-md flex-1">
                <FaCheckCircle size={40} color="var(--accent)" />
                <h3 className="font-bold text-lg mb-1 text-white text-center">
                  High Quality Solutions
                </h3>
                <Image src="/images/expertDev.jpg" alt="High Quality Standards" width={150} height={150} className="rounded-full shadow mb-2 object-cover" />
                <p className="text-neutral-300 text-center">
                  We are committed to delivering high-quality software solutions that exceed our clients&apos; expectations.
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-gray rounded-xl shadow min-w-[260px] w-auto max-w-xs sm:max-w-sm md:max-w-md flex-1">
                <FaLightbulb size={40} color="var(--accent)" />
                <h3 className="font-bold text-lg mb-1 text-white text-center">
                  Expert Consultation
                </h3>
                <Image src="/images/expertDev.jpg" alt="Expert Consultation" width={150} height={150} className="rounded-full shadow mb-2 object-cover" />
                <p className="text-neutral-300 text-center">
                  We provide expert consultation services to help our clients make informed decisions about their software development needs.
                </p>
              </div>

                          <Link
                            href="/contact"
                            className="px-6 py-2 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition"
                          >
                            Book a Free Demo
                          </Link>

              {/* Add as many cards as you want, they'll always wrap and center! */}
            </div>
          </section>


          {/* Services Section */}
          <section className="w-full py-16 bg-transparent flex flex-col items-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Services At Quorium</h2>
            <p className="max-w-3xl text-neutral-300 mb-6 text-lg text-center">
              Empowering your businesses with innovative digital solutions for enhanced efficiency, productivity & growth
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow">
                <FaLaptopCode size={32} color="var(--accent)" />
                <h3 className="font-bold text-lg mb-1 text-white">Web Application Development</h3>
                <p className="text-neutral-300 text-center">
                  Comprehensive Web Application Development services, ensuring robust application against cyber threats for businesses of all sizes.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow">
                <FaMobileAlt size={32} color="var(--accent)" />
                <h3 className="font-bold text-lg mb-1 text-white">Custom Product Development</h3>
                <p className="text-neutral-300 text-center">
                  Leveraging innovative technologies and industry best practices to deliver high-quality solutions that meet our clients needs.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow">
                <FaUserShield size={32} color="var(--accent)" />
                <h3 className="font-bold text-lg mb-1 text-white">Application Security Services</h3>
                <p className="text-neutral-300 text-center">
                  Comprehensive web application security services, ensuring robust protection against cyber threats for businesses of all sizes.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow">
                <FaUsers size={32} color="var(--accent)" />
                <h3 className="font-bold text-lg mb-1 text-white">Testing Services</h3>
                <p className="text-neutral-300 text-center">
                  Comprehensive quality assurance solutions, leveraging advanced methodologies and tools to ensure flawless performance and reliability.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow">
                <FaHandshake size={32} color="var(--accent)" />
                <h3 className="font-bold text-lg mb-1 text-white">IT Consulting Services</h3>
                <p className="text-neutral-300 text-center">
                  IT Consulting and skilled resources to build &amp; manage remote teams for clients, and provide skilled IT professionals for specific project needs.
                </p>
              </div>
            </div>
            <Link
              href="/services"
              className="mt-8 px-6 py-2 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition"
            >
              Know More
            </Link>

          </section>

          {/* Achievements & Core Values Section */}
          <section className="w-full py-16 bg-transparent flex flex-col items-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full mb-8">
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <FaCheckCircle size={36} className="text-accent mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-1 text-white">Integrity</h4>
                <p className="text-neutral-300 text-center">
                  Honest and transparent, building trust with clients, partners, and employees.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <FaLightbulb size={36} className="text-accent mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-1 text-white">Visibility</h4>
                <p className="text-neutral-300 text-center">
                  High visibility to clients for clear deliverables till handover.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <FaCogs size={36} className="text-accent mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-1 text-white">Adaptability</h4>
                <p className="text-neutral-300 text-center">
                  Embracing new technologies and situations with an open mind.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <FaUserShield size={36} className="text-accent mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-1 text-white">Accountability</h4>
                <p className="text-neutral-300 text-center">
                  We honor our obligations and keep our word, combining hard work with genuine enthusiasm.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <FaUsers size={36} className="text-accent mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-1 text-white">Team Spirit</h4>
                <p className="text-neutral-300 text-center">
                  Fostering collaboration, support, and knowledge sharing to achieve common goals.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-6 py-2 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition"
            >
              Book a Free Demo
            </Link>
          </section>

            {/* ===================== STATS SECTION ===================== */}
                <section className="w-full py-14 px-2 bg-[#f9f9fa] border-b">
                  <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl md:text-3xl font-extrabold text-[#6d42c7] mb-3">
                      <span className="text-[#181F4B]">Our Proud Numbers</span>
                    </h2>
                    <div className="text-center text-[#312C61] max-w-2xl mx-auto text-base mb-7">
                      We help your business shine with tailored digital solutions—from custom software to mobile and web apps, security and IT consulting. Here are some numbers that make us proud!
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10">
                      {stats.map((stat, idx) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.11, duration: 0.5, type: "spring" }}
                          className={`${stat.bg} rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-transform border-t-4 border-white group`}
                        >
                          <div className={`text-4xl md:text-5xl mb-4 ${stat.color} drop-shadow`}>{stat.icon}</div>
                          <div className={`font-extrabold text-3xl md:text-4xl mb-2 ${stat.color}`}>
                            {stat.value}
                          </div>
                          <div className="font-semibold text-[#181F4B] text-base md:text-lg">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>


          {/* Clients Section */}
          <section className="w-full py-16 bg-transparent flex flex-col items-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Our Clients</h2>
            <p className="max-w-2xl text-neutral-300 mb-6 text-lg text-center">
              Join the visionary businesses trusting Quorium Technologies to bring their digital dreams to life.
            </p>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <Image src="/globe.svg" alt="Client 1" width={80} height={80} className="rounded-full shadow" />
              <Image src="/file.svg" alt="Client 2" width={80} height={80} className="rounded-full shadow" />
              <Image src="/window.svg" alt="Client 3" width={80} height={80} className="rounded-full shadow" />
            </div>
          </section>
        </div>
      </section>

<TestimonialsMarquee />

      {/* --- Tell Us About Your Project Section --- */}
      <section className="relative w-full min-h-[620px] flex flex-col">
        {/* Background split: white on top, purple on bottom */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="h-[180px] md:h-[200px] bg-white w-full"></div>
          <div className="h-[calc(100%-200px)] bg-[#acace6] w-full"></div>
        </div>

        {/* Main container */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-stretch w-full py-10 px-4 md:gap-0 gap-10">
          {/* Left: Contact options */}
          <div className="w-full md:w-5/12 flex flex-col justify-start">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2a2253] mb-1 mt-6">Tell Us About Your Project</h2>
            <p className="text-[#39398d] mb-6 font-medium">Let’s talk and get started</p>
            <hr className="w-14 border-[#7646a7] mb-8" />
            {/* Contact Methods */}
            <div className="flex flex-col gap-7 relative">
              {/* Email */}
              <div className="flex items-center gap-4 bg-[#00004d] rounded-lg px-6 py-5 shadow-md">
                <span className="bg-white rounded-full p-2 flex items-center justify-center">
                  <FaEnvelope className="text-[#00004d] text-lg" />
                </span>
                <div>
                  <div className="text-white text-xs font-medium">Contact Us by Mailing</div>
                  <div className="text-lg font-semibold tracking-wide text-white">
                    info@quorium.com /<br />quoriumtechnologies@gmail.com
                  </div>
                </div>
              </div>
              {/* LinkedIn */}
              <div className="flex items-center gap-4 bg-[#00004d] rounded-lg px-6 py-5 shadow-md relative">
                <span className="bg-white rounded-full p-2 flex items-center justify-center">
                  <FaLinkedinIn className="text-[#00004d] text-lg" />
                </span>
                <div>
                  <div className="text-white text-xs font-medium">Our LinkedIn Id</div>
                  <div className="text-lg font-semibold tracking-wide text-white">
                    @quorium_technologies
                  </div>
                </div>
                {/* "OR" Circle on md+ screens */}
                <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-14 h-14 bg-[#00004d] rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-[#acace6] shadow-lg">
                    OR
                  </div>
                </div>
              </div>
              {/* WhatsApp */}
              <div className="flex items-center gap-4 bg-[#00004d] rounded-lg px-6 py-5 shadow-md">
                <span className="bg-white rounded-full p-2 flex items-center justify-center">
                  <FaWhatsapp className="text-[#00004d] text-lg" />
                </span>
                <div>
                  <div className="text-white text-xs font-medium">Our Whatsapp No.</div>
                  <div className="text-lg font-semibold tracking-wide text-white">
                    +91 7972092290
                  </div>
                </div>
              </div>
              {/* "OR" for mobile */}
              <div className="flex md:hidden justify-center mt-1 mb-1">
                <div className="w-12 h-12 bg-[#54367a] rounded-full flex items-center justify-center text-white font-bold text-base border-4 border-[#7646a7] shadow-lg">
                  OR
                </div>
              </div>
            </div>
          </div>
          {/* Right: Contact form */}
          <div className="w-full md:w-7/12 flex justify-center items-center">
            <form
              className="bg-white rounded-2xl shadow-xl border-2 border-[#e4e0f7] p-8 w-full max-w-xl grid grid-cols-2 gap-6"
              style={{ minHeight: 500 }}
              autoComplete="off"
              onSubmit={e => { e.preventDefault(); alert("Submitted!"); }}
            >
              {/* Name */}
              <div className="col-span-1 flex flex-col">
                <label htmlFor="name" className="text-[#00004d] font-semibold mb-2 flex items-center gap-2">
                  <i className="fa fa-user"></i> Name*
                </label>
                <input type="text" id="name" name="name" className="border-b border-[#00004d] focus:outline-none py-2 px-2 bg-transparent" required />
              </div>
              {/* Email */}
              <div className="col-span-1 flex flex-col">
                <label htmlFor="email" className="text-[#00004d] font-semibold mb-2 flex items-center gap-2">
                  <i className="fa fa-envelope"></i> Email address*
                </label>
                <input type="email" id="email" name="email" className="border-b border-[#00004d] focus:outline-none py-2 px-2 bg-transparent" required />
              </div>
              {/* Phone */}
              <div className="col-span-1 flex flex-col">
                <label htmlFor="phone" className="text-[#00004d] font-semibold mb-2 flex items-center gap-2">
                  <i className="fa fa-phone"></i> Phone No*
                </label>
                <input type="tel" id="phone" name="phone" className="border-b border-[#00004d] focus:outline-none py-2 px-2 bg-transparent" required />
              </div>
              {/* Select */}
              <div className="col-span-1 flex flex-col">
                <label htmlFor="service" className="text-[#00004d] font-semibold mb-2 flex items-center gap-2">
                  <i className="fa fa-sliders-h"></i> ---Select---
                </label>
                <select id="service" name="service" className="border-b border-[#00004d] focus:outline-none py-2 px-2 bg-transparent" required>
                  <option value="">Select</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="software testing">Software Testing</option>
                  <option value="Application Security Services">Application Security Services</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* Message (full width) */}
              <div className="col-span-2 flex flex-col">
                <label htmlFor="message" className="text-[#00004d] font-semibold mb-2">Message*</label>
                <textarea id="message" name="message" className="border-b border-[#00004d] focus:outline-none py-2 px-2 bg-transparent min-h-[60px]" required />
              </div>
              {/* Captcha */}
                           <div className="col-span-1 flex flex-col">
                             <label htmlFor="captcha" className="text-[#00004d] font-semibold mb-2">Enter Captcha</label>
                             <input
                               type="text"
                               id="captcha"
                               name="captcha"
                               className="border-b border-[#00004d] focus:outline-none py-2 px-2 bg-transparent"
                               required
                               autoComplete="off"
                             />
                           </div>
                           <div className="col-span-1 flex items-center gap-3">
                             <div className="bg-[#e6e2ee] text-[#54367a] font-bold text-2xl px-7 py-2 rounded ml-2" style={{ fontStyle: "italic", letterSpacing: 2 }}>
                               {captcha}
                             </div>
                             <button
                               type="button"
                               title="Refresh Captcha"
                               onClick={() => setCaptcha(generateCaptcha())}
                               className="ml-2 bg-white text-[#54367a] hover:bg-[#eee] border border-[#e4e0f7] p-2 rounded-lg flex items-center justify-center shadow transition"
                             >
                               <FaSyncAlt />
                             </button>
                           </div>
              {/* Submit (full width) */}
              <div className="col-span-2 flex justify-end mt-2">
                <button
                  type="submit"
                  className="bg-[#00004d] hover:bg-[#54367a] text-white px-10 py-3 rounded-lg font-bold shadow transition"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Floating Buttons (right, outside main container) */}

        <div className="fixed right-2 bottom-24 z-50 flex flex-col gap-3 items-end">
          <a
            href="#"
            className="bg-[#7646a7] px-3 py-2 rounded-l-lg font-bold text-white shadow-lg text-sm rotate-[-90deg] mb-2"
            style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
          >
            Book a meeting
          </a>
          <a
            href="tel:+91-7972092290"
            className="bg-[#2799e2] w-10 h-10 flex items-center justify-center rounded-lg shadow-lg"
          >
            <FaPhone className="text-white text-xl" />
          </a>
          <a
            href="https://wa.me/917972092290"
            className="bg-[#25D366] w-10 h-10 flex items-center justify-center rounded-lg shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-white text-2xl" />
          </a>
        </div>
      </section>

    </main>
  );
}


