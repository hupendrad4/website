"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaMobileAlt, FaApple, FaAndroid, FaLayerGroup, FaUsers, FaLightbulb, FaCheckCircle, FaPalette, FaCogs, FaRocket
} from "react-icons/fa";

// List of mobile app development lifecycle phases
const phases = [
  {
    title: "Discovery & Consultation",
    desc: "We start by understanding your business, your vision, and user needs. We define project goals, do competitor analysis, and consult you on best-fit tech stacks.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=420&q=80",
    icon: <FaLightbulb className="text-[#6d42c7] text-3xl" />,
    color: "from-[#f3ecfa] to-[#e0e8fa]",
  },
  {
    title: "UI/UX Design",
    desc: "Our designers create intuitive, visually appealing wireframes and prototypes. We focus on seamless flows, micro-interactions, and delight on every device.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=420&q=80",
    icon: <FaPalette className="text-[#e7b43f] text-3xl" />,
    color: "from-[#f7e8ff] to-[#fffbe6]",
  },
  {
    title: "Development",
    desc: "We build secure, scalable apps for iOS, Android, or cross-platform using the latest tools (Swift, Kotlin, React Native, Flutter, etc). Modular code ensures future upgrades are easy.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=420&q=80",
    icon: <FaCogs className="text-[#41b544] text-3xl" />,
    color: "from-[#e6f4ee] to-[#eef7fd]",
  },
  {
    title: "Testing & QA",
    desc: "Rigorous manual and automated testing (devices, OS versions, real users). We squash bugs, optimize performance, and verify accessibility.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=420&q=80",
    icon: <FaCheckCircle className="text-[#6d42c7] text-3xl" />,
    color: "from-[#eef4fd] to-[#e6f4ee]",
  },
  {
    title: "Deployment",
    desc: "We handle publishing your app to the App Store and Google Play, including store optimization, screenshots, and compliance.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=420&q=80",
    icon: <FaRocket className="text-[#e7b43f] text-3xl" />,
    color: "from-[#fffbe6] to-[#e7fbe7]",
  },
  {
    title: "Support & Growth",
    desc: "After launch, we monitor, maintain, and rapidly iterate with new features. Analytics drive further improvements so your app keeps growing.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=420&q=80",
    icon: <FaUsers className="text-[#41b544] text-3xl" />,
    color: "from-[#e0e8fa] to-[#f7e8ff]",
  },
];
// Expertise highlights
const expertise = [
  { name: "iOS Native (Swift/Obj-C)", icon: <FaApple className="text-[#111a4d] text-2xl" /> },
  { name: "Android Native (Kotlin/Java)", icon: <FaAndroid className="text-[#41b544] text-2xl" /> },
  { name: "Cross-Platform (React Native, Flutter)", icon: <FaLayerGroup className="text-[#6d42c7] text-2xl" /> },
  { name: "UI/UX Prototyping", icon: <FaPalette className="text-[#e7b43f] text-2xl" /> },
  { name: "API Integration", icon: <FaCogs className="text-[#41b544] text-2xl" /> },
  { name: "App Store & Play Store Launch", icon: <FaRocket className="text-[#e7b43f] text-2xl" /> },
];

// Why choose us
const whyUs = [
  {
    icon: <FaUsers className="text-[#6d42c7] text-3xl" />,
    title: "Experienced Team",
    desc: "Years of building mobile solutions across industries.",
  },
  {
    icon: <FaCheckCircle className="text-[#41b544] text-3xl" />,
    title: "Full Lifecycle Support",
    desc: "From strategy to support, we’re with you at every phase.",
  },
  {
    icon: <FaMobileAlt className="text-[#6d42c7] text-3xl" />,
    title: "Modern Tech",
    desc: "Latest frameworks for high performance and scalability.",
  },
  {
    icon: <FaLightbulb className="text-[#e7b43f] text-3xl" />,
    title: "Design-Driven",
    desc: "Apps that win on usability, not just code.",
  },
];

export default function MobileApplicationDevelopmentPage() {
  return (
    <div className="bg-[#f9f9fa] min-h-screen flex flex-col relative overflow-x-hidden">
      {/* === TOP INFO STRIP === */}
      <div className="bg-[#111a4d] text-white px-6 py-2 flex justify-between items-center text-xs z-20">
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
      <div className="w-full bg-white flex items-center justify-between py-5 px-10 shadow-sm border-b border-[#eaeaea] z-20">
        <div className="flex items-center gap-6">
          <Image
            src="/images/quorium logo.png"
            alt="Quorium Technologies Logo"
            width={65}
            height={65}
            className="object-contain"
            style={{ filter: "drop-shadow(0 2px 8px #181F4B33)", background: "transparent" }}
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


      {/* === HERO === */}
      <section className="relative w-full h-[280px] flex items-center justify-center bg-[#181F4B] overflow-hidden z-20">
        <Image
          src="/images/contact-banner.jpg"
          fill
          className="object-cover object-center absolute inset-0 z-0 opacity-80"
          alt="Banner"
          priority
        />
        <div className="relative z-10 w-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-xl">
            Mobile Application Development
          </h1>
          <p className="text-white/90 text-lg font-medium">
            We build engaging, high-performing mobile apps tailored to your business.
          </p>
        </div>
      </section>

      {/* === INTRO + CONSULTATION === */}
      <section className="max-w-5xl mx-auto mt-16 px-4 md:px-0 relative z-10">

        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181F4B] mb-2">Mobile App Excellence, <span className="text-[#6d42c7]">Seamlessly Delivered</span></h2>
            <p className="text-[#312C61] text-lg">
              We build superior digital products tailored to your specific business needs while delivering seamless user interactions across modern platforms and devices, including iOS, Android, and cross-platform solutions.
            </p>
            <div className="mt-2 mb-4">
              <Link href="/contact" className="inline-block bg-[#6d42c7] hover:bg-[#e7b43f] text-white hover:text-[#181F4B] font-bold px-8 py-3 rounded-full shadow-lg transition text-lg animate-bounce">
                Book a Free Consultation
              </Link>
            </div>
            <p className="text-[#312C61] text-lg">
              At Quorium Technologies, we specialize in developing custom mobile applications that deliver seamless user experiences on smartphones and tablets.<br />
              Our mobile app development services cover the entire lifecycle, from concept to design, development, testing, deployment, and maintenance.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/customSolution.jpg"
              alt="Mobile App Consulting"
              width={670}
              height={890}
              className="object-contain rounded-2xl"
            />
          </div>

        </div>
      </section>

      {/* === DEVELOPMENT PHASES TIMELINE === */}
      <section className="w-full max-w-7xl mx-auto px-2 py-16">
        <div className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-tight">
          <span className="text-[#181F4B]">Mobile App Development Phases</span>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10 justify-between">
          <div className="flex-1 grid sm:grid-cols-2 gap-8">
            {phases.map((phase, idx) => (
              <div
                key={phase.title}
                className={`
                  group relative bg-gradient-to-br ${phase.color}
                  rounded-3xl shadow-2xl p-7 flex flex-col items-center
                  border-t-4 ${idx % 2 === 0 ? "border-[#6d42c7]" : "border-[#e7b43f]"}
                  hover:scale-105 hover:shadow-[0_12px_38px_#6d42c7aa]
                  transition-all duration-300 animate-fade-in-up
                `}
              >
                <div className="absolute -top-10 right-6">
                  <Image
                    src={phase.img}
                    alt={phase.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-lg  group-hover:blur-0 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  {phase.icon}
                  <div className="font-bold text-[#181F4B] text-lg mt-2 text-center">{phase.title}</div>
                  <div className="text-[#312C61] text-center text-base">{phase.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col items-center gap-10">
            <Image
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=480&q=80"
              alt="Mobile App Journey"
              width={400}
              height={400}
              className="w-[400px] h-[400px] object-cover rounded-full shadow-[0_8px_64px_#6d42c755] border-4 border-white bg-white/60 mb-8 animate-fade-in"
            />
            <div className="bg-white/95 rounded-2xl p-7 shadow-xl flex flex-col gap-3 w-full max-w-sm">
              <div className="font-bold text-xl text-[#6d42c7] mb-2">Our Mobile App Development Expertise</div>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((exp) => (
                  <div key={exp.name} className="flex items-center gap-2 text-[#181F4B] font-medium text-base">
                    {exp.icon} <span>{exp.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="max-w-7xl mx-auto py-16 px-3 md:px-0">
        <div className="mb-10 text-2xl md:text-3xl font-bold text-center text-[#181F4B] tracking-wide">
          Why Choose <span className="text-[#6d42c7]">Quorium</span> for Mobile App Development?
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-stretch">
          {whyUs.map((item, idx) => (
            <div
              key={item.title}
              className={`
                bg-gradient-to-tr
                ${idx % 2 === 0 ? "from-[#faf6ff] to-[#e7e9fd]" : "from-[#f8fcf8] to-[#e7fbe7]"}
                rounded-[2.5rem] shadow-2xl
                flex flex-col items-center justify-center text-center
                p-9 w-[270px] min-h-[230px]
                hover:scale-110 hover:-rotate-3 hover:shadow-[0_24px_50px_#6d42c755]
                transition-all duration-300 animate-fade-in
              `}
            >
              {item.icon}
              <div className="font-extrabold text-[#181F4B] tracking-wide my-2">{item.title}</div>
              <div className="text-[#252249]">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <Link href="/contact" className="bg-[#e7b43f] hover:bg-[#6d42c7] text-[#181F4B] hover:text-white font-bold px-9 py-4 rounded-full shadow-lg transition text-lg">
            Contact Us
          </Link>
        </div>
      </section>

      {/* === CTA Section === */}
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
