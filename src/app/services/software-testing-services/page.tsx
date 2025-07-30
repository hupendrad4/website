"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaTools,
  FaVial,
  FaUsers,
  FaRobot,
  FaCheckCircle,
  FaLock,
  FaRocket,
  FaSyncAlt,
  FaChartLine,
  FaClipboardList,
  FaFileAlt,
} from "react-icons/fa";

const qaProcess = [
  {
    title: "Requirements Analysis",
    desc: "Understand the project requirements, including functional and non-functional requirements. We clarify ambiguities or inconsistencies with stakeholders to maintain accuracy and quality.",
    icon: <FaClipboardList className="text-[#6d42c7] text-3xl" />,
  },
  {
    title: "Test Planning & Test Case Design",
    desc: "We develop a test plan outlining scope, objectives, schedule, and risks. Detailed test cases are created based on requirements and specifications for thorough validation.",
    icon: <FaTools className="text-[#DB9421] text-3xl" />,
  },
  {
    title: "Test Environment Setup & Execution",
    desc: "Set up required environments and configurations. Execute test cases, record test results (pass/fail), actual outcomes, and any defects found.",
    icon: <FaVial className="text-[#41b544] text-3xl" />,
  },
  {
    title: "Defect Management & Reporting",
    desc: "Retrospective meetings to review the process and identify improvements. Feedback and lessons learned are incorporated into future testing. Test plans/cases updated with changes.",
    icon: <FaUsers className="text-[#e7b43f] text-3xl" />,
  },
  {
    title: "Continuous Improvement",
    desc: "We continually refine our test process, using feedback and lessons learned for future releases. Test assets are always kept current.",
    icon: <FaSyncAlt className="text-[#6d42c7] text-3xl" />,
  },
  {
    title: "Documentation",
    desc: "Maintain comprehensive, accessible documentation: test plans, cases, reports, and all QA artifacts. Ensures traceability for all teams.",
    icon: <FaFileAlt className="text-[#41b544] text-3xl" />,
  },
];

const testingCapabilities = [
  {
    title: "Manual Testing",
    desc: "Our experts manually verify your application's critical features, ensuring it aligns perfectly with business requirements. We focus on usability, accuracy, and dependable performance.",
    icon: <FaCheckCircle className="text-[#6d42c7] text-4xl" />,
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Automation Testing",
    desc: "We craft automated scripts tailored for your enterprise apps. Automation accelerates releases, increases test coverage, and frees your team for complex scenarios.",
    icon: <FaRobot className="text-[#e7b43f] text-4xl" />,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "VAPT Security Testing",
    desc: "Proactively identify vulnerabilities and fortify your software. Our advanced security assessments ensure robust protection against evolving cyber threats.",
    icon: <FaLock className="text-[#41b544] text-4xl" />,
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Performance Testing",
    desc: "We assess your application under load and stress to uncover bottlenecks and scalability issues—ensuring smooth performance even with heavy traffic.",
    icon: <FaChartLine className="text-[#6d42c7] text-4xl" />,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
];

export default function SoftwareTestingServicesPage() {
  return (
    <div className="bg-[#f9f9fa] min-h-screen flex flex-col relative overflow-x-hidden">
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
          src="/images/testingService-banner.jpg"
          fill
          className="object-cover object-center absolute inset-0 z-0 opacity-80"
          alt="Banner"
          priority
        />
        <div className="relative z-10 w-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-xl">
            Software Testing Services
          </h1>
          <p className="text-white/90 text-lg font-medium">
            Ensuring software reliability and performance through rigorous testing.
          </p>
        </div>
      </section>

      {/* Quality Engineering Services Card */}
      <section className="max-w-6xl mx-auto mt-16 px-4">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#f7e8ff] to-[#e0e8fa] shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10 animate-fade-in-up">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-[#181F4B] mb-2">
              Quality Engineering Services
            </h2>
            <p className="text-[#312C61] text-lg font-semibold">
              Unlock the full potential of your software with Quorium Technologies’ Testing Services. Let us help you deliver high-quality, robust, and secure applications that drive business success.
            </p>
            <Link href="/contact" className="inline-block mt-2 bg-[#6d42c7] hover:bg-[#e7b43f] text-white hover:text-[#181F4B] font-bold px-8 py-3 rounded-full shadow-lg transition text-lg animate-bounce">
              Book for Free Consultation
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=480&q=80"
              alt="QA Automation"
              className="rounded-2xl shadow-2xl border-4 border-white w-full max-w-xs md:max-w-sm animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Circular Flow Diagram */}
      <section className="relative py-24 max-w-6xl mx-auto">
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-[#181F4B] tracking-wide mb-2">
            <span className="text-[#6d42c7]">QA & Testing Circular Flow</span>
          </h3>
          <p className="text-center text-[#181F4B]/80 font-semibold text-lg">A seamless QA process—always moving forward</p>
        </div>
        {/* Circle Diagram */}
        <div className="relative flex items-center justify-center w-full min-h-[720px]">
          {/* Circle SVG */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            width={620}
            height={620}
            viewBox="0 0 620 620"
            style={{ zIndex: 1 }}
          >
            <circle
              cx={310}
              cy={310}
              r={290}
              fill="none"
              stroke="#6d42c7"
              strokeWidth="2.5"
              strokeDasharray="8,14"
              opacity={0.11}
            />
            {/* Dots/arrows on the circle */}
            {qaProcess.map((step, idx) => {
              const angle = (360 / qaProcess.length) * idx - 90;
              const radians = (angle * Math.PI) / 180;
              const x = 310 + 290 * Math.cos(radians);
              const y = 310 + 290 * Math.sin(radians);
              // Arrow pointer at each step
              return (
                <polygon
                  key={step.title + "_arrow"}
                  points={`
                    ${x},${y}
                    ${x + 20 * Math.cos(radians + 0.32)},${y + 20 * Math.sin(radians + 0.32)}
                    ${x + 20 * Math.cos(radians - 0.32)},${y + 20 * Math.sin(radians - 0.32)}
                  `}
                  fill="#6d42c7"
                  opacity={0.19}
                />
              );
            })}
          </svg>
          {/* Cards (hexagon style) */}
          {qaProcess.map((step, idx) => {
            const angle = (360 / qaProcess.length) * idx - 90;
            const radians = (angle * Math.PI) / 180;
            // Hex cards positioned further for more spacing
            const cardRadius = 300;
            const left = `calc(50% + ${cardRadius * Math.cos(radians)}px)`;
            const top = `calc(50% + ${cardRadius * Math.sin(radians)}px)`;
            return (
              <div
                key={step.title}
                className="absolute flex flex-col items-center"
                style={{
                  left,
                  top,
                  transform: "translate(-50%, -50%)",
                  width: 230,
                  zIndex: 2,
                }}
              >
                {/* Hexagon effect: Tailwind + CSS */}
                <div className="w-16 h-16 flex items-center justify-center hexagon relative mb-2">
                  <div className="absolute inset-0 hexagon-bg bg-white shadow-lg border-4 border-[#f7e8ff]" />
                  <div className="relative z-10">{step.icon}</div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl p-4 text-center border border-[#ece4fd] hover:shadow-[0_0_36px_#6d42c744] transition-all duration-300">
                  <div className="font-bold text-[#181F4B] mb-1 text-base">{step.title}</div>
                  <div className="text-[#312C61] text-xs">{step.desc}</div>
                </div>
              </div>
            );
          })}
          {/* Center label */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#e0e8fa] via-white to-[#f7e8ff] rounded-full w-44 h-44 flex flex-col items-center justify-center shadow-2xl border-4 border-[#e7b43f] animate-pulse z-10">
            <FaRocket className="text-5xl text-[#e7b43f] mb-1" />
            <span className="text-lg font-bold text-[#181F4B]">QA Journey</span>
          </div>
        </div>
        <style>{`
          /* Hexagon shape via CSS clip-path */
          .hexagon {
            clip-path: polygon(
              25% 5.77%, 75% 5.77%,
              100% 50%, 75% 94.23%,
              25% 94.23%, 0% 50%
            );
          }
          .hexagon-bg {
            z-index: 1;
          }
        `}</style>
      </section>


      {/* Advanced Capabilities Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#181F4B] mb-2">
            <span className="text-[#e7b43f]">Our Capabilities</span>
          </h3>
          <p className="text-lg text-[#312C61] max-w-2xl mx-auto">
            At Quorium Technologies, we harness the power of automation, robust security, and real-world performance insights to deliver software quality that powers your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {testingCapabilities.map((cap) => (
            <div key={cap.title}
              className="relative bg-white rounded-3xl p-7 flex flex-col items-center shadow-xl hover:scale-105 hover:shadow-[0_12px_38px_#6d42c7bb] border-t-4 border-[#e7b43f] transition-all duration-300 animate-fade-in-up"
              style={{
                boxShadow: "0 12px 40px 0 rgba(60,30,110,0.10)",
              }}>
              <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-[#f7e8ff] shadow-lg">
                <Image
                  src={cap.img}
                  alt={cap.title}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full scale-110 rounded-full"
                />
                <div className="absolute bottom-1 right-1 bg-white/90 p-2 rounded-full shadow-lg">{cap.icon}</div>
              </div>
              <h4 className="font-bold text-[#181F4B] text-xl mb-2 text-center">{cap.title}</h4>
              <p className="text-[#312C61] text-center text-base">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#e0e8fa] to-[#fffbe6] py-12 mt-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 bg-[#6d42c7] rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 text-white hover:scale-105 transition-transform">
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
