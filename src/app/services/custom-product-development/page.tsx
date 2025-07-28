"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaRocket, FaUsers, FaSyncAlt, FaCheckCircle,
  FaCogs, FaBolt, FaLightbulb
} from "react-icons/fa";

export default function CustomProductDevelopmentPage() {
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
              background: "transparent",
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
            Custom Product Development
          </h1>
          <p className="text-white/90 text-lg font-medium">
            Turning your ideas into reality with expert development.
          </p>
        </div>
      </section>



      {/* === FEATURE & WHY WE CARD ROW === */}
      <section className="w-full max-w-7xl mx-auto py-16 px-3 md:px-0 flex flex-col md:flex-row gap-10 items-center">
        {/* Left Card: Custom Product Development */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative bg-white/90 rounded-3xl shadow-[0_8px_40px_rgba(109,66,199,0.14)] border-t-4 border-[#6d42c7] px-8 py-12 mb-8 hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="flex items-center gap-4 mb-4">
              <FaRocket className="text-[#e7b43f] text-4xl drop-shadow" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#181F4B] tracking-tight">
                Custom Product Development
              </h2>
            </div>
            <p className="text-[#312C61] text-base md:text-lg leading-relaxed mb-4">
              At Quorium, we work with you to turn your ideas into reality. Our experienced team of developers can take your product from concept to production, with rapid prototyping and iterative testing to ensure a high-quality end result.
            </p>
            <p className="text-xl text-[#DB9421] font-semibold italic mb-6">
              “Innovative, scalable, and tailored software solutions to bring your vision to life.”
            </p>
            <Link href="/contact" className="inline-block bg-[#6d42c7] hover:bg-[#e7b43f] text-white hover:text-[#181F4B] font-bold px-8 py-3 rounded-full shadow-lg transition text-lg mb-4 animate-bounce">
              Book a Free Consultation
            </Link>
            <div className="flex justify-center mt-4">
              <Image
                src="/images/customSolution.jpg"
                alt="Custom Product Development"
                width={500}
                height={420}
                className="object-cover rounded-2xl  border-0 border-white"
              />
            </div>
          </div>
        </div>
        {/* Right Cards: Why We? */}
        <div className="flex-1 flex flex-col gap-10">
          <div className="mb-2 text-2xl font-bold text-[#181F4B] tracking-wide text-center">
            Why <span className="text-4xl text-[#DB9421]">We?</span>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-[#faf6ff] to-[#e7e9fd] rounded-3xl p-8 shadow-2xl border-l-4 border-[#6d42c7] flex flex-col items-center hover:scale-105 hover:shadow-[0_12px_38px_#6d42c7aa] transition-transform duration-300 animate-fade-in-up">
              <FaUsers className="text-[#6d42c7] text-4xl mb-3" />
              <h4 className="font-extrabold text-[#181F4B] tracking-wide mb-2 text-lg text-center">CLIENT-CENTRIC DESIGN</h4>
              <p className="text-[#252249] text-base text-center mb-3">“We prioritize user needs and business goals to create meaningful, impactful software solutions.”</p>
            </div>
            {/* Card 2 */}
            <div className="bg-gradient-to-br from-[#eef4fd] to-[#dbeafe] rounded-3xl p-8 shadow-2xl border-l-4 border-[#4f8cff] flex flex-col items-center hover:scale-105 hover:shadow-[0_12px_38px_#4f8cffcc] transition-transform duration-300 animate-fade-in-up">
              <FaSyncAlt className="text-[#4f8cff] text-4xl mb-3" />
              <h4 className="font-extrabold text-[#181F4B] tracking-wide mb-2 text-lg text-center">AGILE METHODOLOGY</h4>
              <p className="text-[#252249] text-base text-center mb-3">“Our Agile approach ensures flexibility, transparency, and rapid iterations for continuous improvement.”</p>
            </div>
            {/* Card 3 */}
            <div className="bg-gradient-to-br from-[#e7fbe7] to-[#f8fcf8] rounded-3xl p-8 shadow-2xl border-l-4 border-[#41b544] flex flex-col items-center hover:scale-105 hover:shadow-[0_12px_38px_#41b544aa] transition-transform duration-300 animate-fade-in-up">
              <FaCheckCircle className="text-[#41b544] text-4xl mb-3" />
              <h4 className="font-extrabold text-[#181F4B] tracking-wide mb-2 text-lg text-center">QUALITY ASSURANCE</h4>
              <p className="text-[#252249] text-base text-center mb-3">“Comprehensive testing at every stage to ensure performance, security, and scalability.”</p>
            </div>
          </div>
        </div>
      </section>


      {/* === SOFTWARE DEVELOPMENT STRATEGIES SECTION === */}
      <section className="max-w-7xl mx-auto py-16 px-3 md:px-0">
        <div className="mb-10 text-3xl md:text-4xl font-extrabold text-center text-[#181F4B] tracking-wide">
          <span className="text-[#00004d]">Quorium’s Delivery Strategies</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AGILE */}
          <div className="bg-white rounded-3xl shadow-[0_8px_32px_rgba(36,53,137,0.10)] p-7 flex flex-col items-center hover:scale-105 hover:shadow-[0_16px_38px_#6d42c7aa] transition-all duration-300">
            <FaSyncAlt className="text-[#00004d] text-5xl mb-4 drop-shadow" />
            <div className="text-xl font-bold text-[#181F4B] mb-2">Agile Development</div>
            <p className="text-[#312C61] text-center text-base mb-3">
              Iterative, incremental, and highly adaptive—delivers working features fast, with regular feedback and continuous improvement.
            </p>
          </div>
          {/* DEVOPS */}
          <div className="bg-white rounded-3xl shadow-[0_8px_32px_rgba(44,96,187,0.10)] p-7 flex flex-col items-center hover:scale-105 hover:shadow-[0_16px_38px_#4f8cffaa] transition-all duration-300">
            <FaCogs className="text-[#4f8cff] text-5xl mb-4 drop-shadow" />
            <div className="text-xl font-bold text-[#181F4B] mb-2">DevOps</div>
            <p className="text-[#312C61] text-center text-base mb-3">
              Development and operations work together—automation, CI/CD, and cloud for faster, more reliable delivery and rapid deployments.
            </p>
          </div>
          {/* LEAN */}
          <div className="bg-white rounded-3xl shadow-[0_8px_32px_rgba(229,181,63,0.08)] p-7 flex flex-col items-center hover:scale-105 hover:shadow-[0_16px_38px_#e7b43faa] transition-all duration-300">
            <FaBolt className="text-[#e7b43f] text-5xl mb-4 drop-shadow" />
            <div className="text-xl font-bold text-[#181F4B] mb-2">Lean Software Dev</div>
            <p className="text-[#312C61] text-center text-base mb-3">
              Maximize value, minimize waste—focus on essentials, rapid delivery, and high customer value at every step.
            </p>
          </div>
          {/* RAPID APPLICATION DEV */}
          <div className="bg-white rounded-3xl shadow-[0_8px_32px_rgba(40,160,109,0.10)] p-7 flex flex-col items-center hover:scale-105 hover:shadow-[0_16px_38px_#41b544aa] transition-all duration-300">
            <FaLightbulb className="text-[#41b544] text-5xl mb-4 drop-shadow" />
            <div className="text-xl font-bold text-[#181F4B] mb-2">Rapid Application Dev</div>
            <p className="text-[#312C61] text-center text-base mb-3">
              Quick prototyping, feedback, and iteration—turns ideas into working software in record time.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <span className="inline-block bg-[#00004d] text-white px-6 py-3 rounded-full shadow font-bold text-lg hover:bg-[#483175] transition">
            These strategies empower Quorium to deliver modern, robust, and rapid results.
          </span>
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
