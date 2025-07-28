"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ITConsultingPage() {
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

      {/* === HEADER === */}
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

      {/* === HERO SECTION === */}
      <section className="relative w-full h-[280px] flex items-center justify-center bg-[#181F4B] overflow-hidden">
        <Image
          src="/images/StaffingBackground.jpg"
          fill
          className="object-cover object-center absolute inset-0 z-0 opacity-80"
          alt="Banner"
          priority
        />
        <div className="relative z-10 w-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-xl">
            IT Consulting & Staffing
          </h1>
          <p className="text-white/90 text-lg font-medium">
            Connect with skilled professionals and strategic guidance tailored to your needs.
          </p>
        </div>
      </section>

      {/* === NEW CONTENT SECTION === */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#181F4B]">What We Offer in Staffing and Consulting?</h2>
          <p className="text-[#312C61] mt-3 max-w-2xl mx-auto">We provide complete strategic, staffing, and operational support to help you grow your team with the right talent and expert insights.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[{
            title: "IT Staffing Solutions",
            description: "We offer flexible staffing solutions to meet your project demands, including temporary support, full-time hires, or specialized consultants.",
            image: "/images/Staffing.jpg",
          },
          {
            title: "Talent Acquisition Strategy",
            description: "Develop a comprehensive talent acquisition strategy aligned with your goals, identify skills gaps, and implement best hiring practices.",
            image: "/images/Staffingstrategy.jpeg",
          },
          {
            title: "Consulting Services",
            description: "Our consultants deliver solutions in project management, system integration, IT governance, and more — tailored to your needs.",
            image: "/images/StaffingConsulting.jpg",
          },
          {
            title: "Workforce Optimization",
            description: "We assess your team structure and create strategic workforce plans to improve efficiency, productivity, and alignment.",
            image: "/images/Staffingoptimization.jpg",
          }].map((item, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
              <div className="relative w-full h-80">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx === 0}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#111a4d] mb-2">{item.title}</h3>
                <p className="text-sm text-[#312C61] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="bg-[#fff8ec] py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-3xl font-bold text-[#181F4B] mb-4">
            Why Choose Quorium Technologies?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {["Expertise Across Industries", "Rigorous Screening Process", "Client-Centric Approach", "Commitment to Excellence"].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow border"
              >
                <h3 className="text-lg font-bold text-[#111a4d] mb-2">{point}</h3>
                <p className="text-sm text-[#312C61]">We prioritize your success by ensuring excellence, collaboration, and tailored service delivery.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-16 bg-gradient-to-br from-[#6d42c7] to-[#3c217a] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-6">
            Get Started Today
          </motion.h2>
          <p className="text-white/90 text-lg mb-6">Partner with Quorium Technologies to enhance your workforce and drive your IT initiatives forward.</p>
          <Link href="/contact">
            <button className="bg-white text-[#6d42c7] hover:bg-[#e7b43f] hover:text-[#181F4B] font-bold px-8 py-3 rounded-full shadow transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
