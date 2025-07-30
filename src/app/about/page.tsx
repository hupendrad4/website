"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Timeline of company milestones
const timeline = [
  {
    year: "2024",
    title: "Founded",
    desc: "Quorium Technologies was founded with a vision to deliver next-gen products development and software solutions.",
  },
  {
    year: "2025",
    title: "AI & Cloud Expansion",
    desc: "Expanded our portfolio to include advanced AI, Software automation, and cloud security services.",
  },
  {
    year: "2025",
    title: "Global Reach",
    desc: "Served clients across multiple continents, building a reputation for technical excellence.",
  },
  {
    year: "2025",
    title: "Innovation Leadership",
    desc: "Recognized as a leader in cybersecurity, cloud, and AI-driven transformation.",
  },
];

// Team members showcase
const team = [
  {
    name: "Amit Sharma",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Visionary leader with 15+ years in cybersecurity and enterprise IT.",
  },
  {
    name: "Priya Verma",
    role: "CTO",
    img: "https://randomuser.me/api/portraits/women/43.jpg",
    bio: "Expert in AI, cloud, and scalable software architectures.",
  },
  {
    name: "Rahul Mehta",
    role: "Head of Security",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    bio: "Specialist in threat intelligence and managed security operations.",
  },
];
// Office / team images (use Unsplash or local if you have!)
const gallery = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
];

export default function AboutPage() {
  return (
    <main className="bg-[#f9f9fa] min-h-screen font-sans">
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
      <section
        className="relative w-full h-[260px] md:h-[320px] flex items-center justify-center mb-0 overflow-hidden"
        style={{
          backgroundColor: "#181F4B",
        }}
      >
        <Image
          src="/images/about-us.png"
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          className="z-0 brightness-50"
        />
        <div className="absolute inset-0 bg-[#181F4B]/40 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-wider drop-shadow-xl">
            ABOUT US
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg font-medium drop-shadow">
            We are Quorium Technologies—committed to digital innovation, security, and business growth.
          </p>
        </div>
      </section>

      {/* --- All Other Sections (unchanged) --- */}
      {/* Overview & Gallery */}
<section className="max-w-6xl mx-auto py-14 flex flex-col md:flex-row gap-10 items-center px-4">
  {/* Office Images */}
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="grid grid-cols-2 gap-4 w-full md:w-1/2"
  >
    {gallery.map((src, i) => (
      <div key={i} className="relative w-full h-32 md:h-40">
        <Image
          src={src}
          alt={`Office ${i + 1}`}
          fill
          className="rounded-xl object-cover border border-[#e7b43f]/20 shadow-sm"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    ))}
  </motion.div>

  {/* Overview */}
  <div className="w-full md:w-1/2">
    <h2 className="text-2xl font-bold text-[#6d42c7] mb-1">An Overview of Quorium Technologies</h2>
    <p className="text-[#312C61] text-base md:text-lg leading-relaxed mb-3">
      <span className="font-semibold text-[#6d42c7]">Leading Digital Technology Partner for Your Business</span>
      <br />
      Quorium delivers tailored digital solutions—cybersecurity, cloud, AI, and modern software—to help you scale, secure, and succeed. Our team of passionate experts empowers clients globally with innovative products, strategic consulting, and ongoing support.
    </p>

    <div className="grid grid-cols-2 gap-4 text-center mt-6">
      {/* Clients */}
      <div>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/681/681494.png"
          alt="Clients"
          width={40}
          height={40}
          className="mx-auto mb-1"
        />
        <div className="font-bold text-lg text-[#6d42c7]">150+</div>
        <div className="text-sm text-[#312C61]">Clients</div>
      </div>

      {/* Projects */}
      <div>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/754/754742.png"
          alt="Projects"
          width={40}
          height={40}
          className="mx-auto mb-1"
        />
        <div className="font-bold text-lg text-[#e7b43f]">400+</div>
        <div className="text-sm text-[#312C61]">Projects</div>
      </div>

      {/* Team */}
      <div>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Team"
          width={40}
          height={40}
          className="mx-auto mb-1"
        />
        <div className="font-bold text-lg text-[#6d42c7]">40+</div>
        <div className="text-sm text-[#312C61]">Team</div>
      </div>

      {/* Support */}
      <div>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
          alt="Support"
          width={40}
          height={40}
          className="mx-auto mb-1"
        />
        <div className="font-bold text-lg text-[#e7b43f]">24/7</div>
        <div className="text-sm text-[#312C61]">Support</div>
      </div>
    </div>
  </div>
</section>

 <section className="bg-[#181F4B] py-14">
   <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center px-3">
     {/* Mission */}
     <motion.div
       initial={{ x: -32, opacity: 0 }}
       whileInView={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.6 }}
       className="bg-white/10 border border-[#6d42c7] rounded-2xl p-6 md:w-1/2 w-full shadow-xl"
     >
       <div className="flex items-center gap-3 mb-2">
         <Image
           src="https://cdn-icons-png.flaticon.com/512/744/744922.png"
           alt="Mission"
           width={28}
           height={28}
         />
         <span className="text-xl font-bold text-white">Our Mission</span>
       </div>
       <p className="text-[#d6d2ee] text-base">
         To drive innovation by delivering secure, scalable, and cutting-edge technology solutions that help businesses thrive in a digital world.
       </p>
     </motion.div>

     {/* Vision */}
     <motion.div
       initial={{ x: 32, opacity: 0 }}
       whileInView={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.6 }}
       className="bg-white/10 border border-[#e7b43f] rounded-2xl p-6 md:w-1/2 w-full shadow-xl"
     >
       <div className="flex items-center gap-3 mb-2">
         <Image
           src="https://cdn-icons-png.flaticon.com/512/1067/1067566.png"
           alt="Vision"
           width={28}
           height={28}
         />
         <span className="text-xl font-bold text-[#e7b43f]">Our Vision</span>
       </div>
       <p className="text-[#f4f3ff] text-base">
         To be the most trusted partner for digital transformation and security, empowering businesses to achieve sustainable growth and competitive advantage.
       </p>
     </motion.div>
   </div>
 </section>
      {/* Timeline Section */}
     <section className="w-full py-16 bg-white flex flex-col items-center px-4">
       <h2 className="text-3xl font-bold mb-8 text-[#6d42c7]">Our Journey</h2>
       <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
         {timeline.map((item, idx) => (
           <motion.div
             key={item.year}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: idx * 0.12, duration: 0.4, type: "spring" }}
             className="bg-blue-50 rounded-xl shadow p-6 flex flex-col gap-2 hover:shadow-xl transition"
           >
             <span className="text-[#e7b43f] font-bold text-lg">{item.year}</span>
             <h3 className="font-semibold text-[#181F4B] text-xl">{item.title}</h3>
             <p className="text-[#312C61]">{item.desc}</p>
           </motion.div>
         ))}
       </div>
     </section>

     {/* === Meet Our Team Section === */}
     <section className="w-full py-16 bg-blue-50 flex flex-col items-center px-4">
       <h2 className="text-3xl font-bold mb-8 text-[#6d42c7]">Meet Our Team</h2>
       <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
         {team.map((member, idx) => (
           <motion.div
             key={member.name}
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
             className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition"
           >
             <Image
               src={member.img}
               alt={member.name}
               width={82}
               height={82}
               className="rounded-full mb-3 border-2 border-[#e7b43f] object-cover"
             />
             <h3 className="font-bold text-lg text-[#181F4B] mb-1">{member.name}</h3>
             <span className="text-[#6d42c7] font-semibold mb-2">{member.role}</span>
             <p className="text-[#312C61] text-sm">{member.bio}</p>
           </motion.div>
         ))}
       </div>
     </section>

      {/* Core Values Section */}
     <section className="relative py-20 bg-white overflow-x-clip">
       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 gap-10">
         {/* Left Side: Title and Desc */}
         <div className="flex-1 flex flex-col items-start justify-center md:pl-8 mb-10 md:mb-0">
           <div className="flex items-center gap-2">
             <span className="border-l-8 border-[#6d42c7] mr-4 h-10"></span>
             <span className="text-3xl md:text-4xl font-bold text-[#181F4B]">
               <span className="text-[#181F4B]">Our </span>
               <span className="text-[#6d42c7]">Core Values</span>
             </span>
           </div>
           <div className="mt-7 text-[#181F4B] text-base md:text-[17px] font-medium max-w-lg">
             Everyone on our team contributes to Quorium Technologies’ growth and our customers’ success.
             Our culture is shaped by the values we live every day.
           </div>
         </div>

         {/* Right Side: Values Cards */}
         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
           {/* Card 1 */}
           <div className="bg-white rounded-2xl shadow-[0_6px_32px_0_rgba(44,29,99,0.13)] border border-[#ece8f7] p-7 text-center hover:shadow-[0_8px_38px_0_rgba(139,112,229,0.18)] transition group relative">
             <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-[24px] bg-[#f5f2fc] shadow group-hover:scale-105 transition">
               <Image
                 src="https://cdn-icons-png.flaticon.com/512/2086/2086874.png"
                 width={38}
                 height={38}
                 alt="Problem Solver"
               />
             </div>
             <div className="font-extrabold text-lg md:text-xl uppercase text-[#181F4B] tracking-widest">Problem Solver</div>
             <div className="h-1 w-10 bg-[#6d42c7] mx-auto mt-2 mb-2 rounded"></div>
             <div className="text-[#181F4B]/80 text-[15px] font-normal leading-relaxed">
               Workplace challenges are inevitable; what sets us apart as individuals and as a team is how we tackle them.
             </div>
           </div>

           {/* Card 2 */}
           <div className="bg-white rounded-2xl shadow-[0_6px_32px_0_rgba(44,29,99,0.13)] border border-[#ece8f7] p-7 text-center hover:shadow-[0_8px_38px_0_rgba(231,180,63,0.15)] transition group relative">
             <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-[24px] bg-[#fff6ce] shadow group-hover:scale-105 transition">
               <Image
                 src="https://cdn-icons-png.flaticon.com/512/3534/3534139.png"
                 width={38}
                 height={38}
                 alt="Modern Tech"
               />
             </div>
             <div className="font-extrabold text-lg md:text-xl uppercase text-[#181F4B] tracking-widest">Modern Technology</div>
             <div className="h-1 w-10 bg-[#e7b43f] mx-auto mt-2 mb-2 rounded"></div>
             <div className="text-[#181F4B]/80 text-[15px] font-normal leading-relaxed">
               Our team is always learning and applying the latest tech, expanding our expertise into every project.
             </div>
           </div>

           {/* Card 3 */}
           <div className="bg-white rounded-2xl shadow-[0_6px_32px_0_rgba(44,29,99,0.13)] border border-[#ece8f7] p-7 text-center hover:shadow-[0_8px_38px_0_rgba(109,66,199,0.11)] transition group relative">
             <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-[24px] bg-[#f5f2fc] shadow group-hover:scale-105 transition">
               <Image
                 src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
                 width={38}
                 height={38}
                 alt="Leadership"
               />
             </div>
             <div className="font-extrabold text-lg md:text-xl uppercase text-[#181F4B] tracking-widest">Leadership</div>
             <div className="h-1 w-10 bg-[#6d42c7] mx-auto mt-2 mb-2 rounded"></div>
             <div className="text-[#181F4B]/80 text-[15px] font-normal leading-relaxed">
               Leadership is about inspiring others. We empower our team, foster openness, and celebrate feedback.
             </div>
           </div>

           {/* Card 4 */}
           <div className="bg-white rounded-2xl shadow-[0_6px_32px_0_rgba(44,29,99,0.13)] border border-[#ece8f7] p-7 text-center hover:shadow-[0_8px_38px_0_rgba(109,66,199,0.14)] transition group relative">
             <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-[24px] bg-[#f5f2fc] shadow group-hover:scale-105 transition">
               <Image
                 src="https://cdn-icons-png.flaticon.com/512/3600/3600999.png"
                 width={38}
                 height={38}
                 alt="Authenticity"
               />
             </div>
             <div className="font-extrabold text-lg md:text-xl uppercase text-[#181F4B] tracking-widest">Authenticity</div>
             <div className="h-1 w-10 bg-[#6d42c7] mx-auto mt-2 mb-2 rounded"></div>
             <div className="text-[#181F4B]/80 text-[15px] font-normal leading-relaxed">
               We value transparency and trust—ensuring your journey with us is open, secure, and results-driven.
             </div>
           </div>
         </div>
       </div>
     </section>


      {/* Contact Form */}
      <section className="bg-[#6d42c7] py-12">
        <div className="max-w-xl mx-auto rounded-2xl shadow-2xl bg-white/80 p-8">
          <h3 className="text-xl font-bold text-center text-[#181F4B] mb-7">CONTACT US</h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input className="border px-4 py-3 rounded-lg flex-1" placeholder="Name*" required />
              <input className="border px-4 py-3 rounded-lg flex-1" placeholder="Email Address*" required type="email" />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input className="border px-4 py-3 rounded-lg flex-1" placeholder="Your Budget" />
              <input className="border px-4 py-3 rounded-lg flex-1" placeholder="Your Country" />
            </div>
            <textarea className="border px-4 py-3 rounded-lg w-full" placeholder="Project Description" rows={3} required />
            <button className="bg-[#6d42c7] hover:bg-[#e7b43f] text-white font-bold px-8 py-3 rounded-full shadow mt-3 transition">
              SEND A REQUEST
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
