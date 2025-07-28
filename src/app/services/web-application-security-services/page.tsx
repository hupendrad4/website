"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaBolt,
  FaShieldAlt,
  FaBug,
  FaCode,
  FaEye,
  FaServer,
  FaDatabase,
  FaCogs,
  FaTools,
  FaExclamationTriangle,
  FaQuoteLeft,
} from "react-icons/fa";

// ========== NEW HERO CARDS SECTION DATA ==========
const heroCards = [
  {
    color: "bg-[#ea8262]",
    title: "Automated DAST Scans",
    desc: (
      <>
        Regular automated <b>scans</b> with our DAST scanner having 10,000+ test case library
      </>
    ),
    icon: <FaBolt size={36} className="text-[#fff3ec]" />,
    children: (
      <div className="flex gap-5 mt-5 justify-center">
        <span className="bg-[#fff3ec] rounded-full p-3"><FaBolt className="text-[#ea8262] text-xl" /></span>
        <span className="bg-[#fff3ec] rounded-full p-3"><FaExclamationTriangle className="text-[#ea8262] text-xl" /></span>
        <span className="bg-[#fff3ec] rounded-full p-3"><FaTools className="text-[#ea8262] text-xl" /></span>
        <span className="bg-[#fff3ec] rounded-full p-3"><FaCogs className="text-[#ea8262] text-xl" /></span>
      </div>
    ),
  },
  {
    color: "bg-[#ffcb44]",
    title: "API Security Scanning",
    desc: (
      <>
        API security scanning <b>that never sleeps</b>
      </>
    ),
    icon: <FaExclamationTriangle size={36} className="text-[#fffbe6]" />,
    children: (
      <div className="mt-5">
        <div className="bg-[#fffbe6] text-[#d9a40c] font-bold rounded-lg px-4 py-2 text-center mb-2">⚠️ THREAT DETECTED</div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#fffbe6] text-[#d9a40c] rounded px-3 py-1 text-xs">• Running Automated Pentests</div>
          <div className="bg-[#fffbe6] text-[#d9a40c] rounded px-3 py-1 text-xs">• Threats Detected &amp; Alerted</div>
        </div>
      </div>
    ),
  },
  {
    color: "bg-[#22c89b]",
    title: "Continuous Pentesting",
    desc: (
      <>
        Continuous pentesting <b>for your shiny new features</b>
      </>
    ),
    icon: <FaCogs size={36} className="text-[#dbfcf2]" />,
    children: (
      <div className="flex flex-col gap-2 mt-5">
        <div className="bg-[#dbfcf2] text-[#19a680] rounded-lg px-3 py-2 font-bold flex items-center gap-2 justify-center">
          <FaTools className="text-xl" /> TESTING...
        </div>
      </div>
    ),
  },
  {
    color: "bg-[#4266d3]",
    title: "Seamless Integrations",
    desc: (
      <>
        We play nice with your tools:<br />GitHub, GitLab, Slack, JIRA—you name it
      </>
    ),
    icon: <FaShieldAlt size={36} className="text-[#f1f4fd]" />,
    children: (
      <div className="flex gap-4 mt-5 justify-center">
        {/* Replace emojis with <img src="/icons/jira.svg" ... /> for real SVG icons */}
        <span className="bg-[#f1f4fd] rounded-full p-2 text-2xl">🧩</span>
        <span className="bg-[#f1f4fd] rounded-full p-2 text-2xl">🐙</span>
        <span className="bg-[#f1f4fd] rounded-full p-2 text-2xl">💬</span>
        <span className="bg-[#f1f4fd] rounded-full p-2 text-2xl">🦊</span>
      </div>
    ),
  },
];

// ========== EXISTING CARDS & TESTIMONIAL DATA ==========
const securityFeatures = [
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    desc: "Identify, exploit, and remediate vulnerabilities in your web apps with real-world attack simulations and actionable security insights.",
    icon: <FaBug size={32} className="text-[#fa8669]" />,
    color: "bg-[#fa8669]/90 hover:bg-[#fa8669]",
  },
  {
    title: "Secure Code Review",
    desc: "Analyze code for flaws, unsafe patterns, and adherence to security best practices. Find and fix issues before they become threats.",
    icon: <FaCode size={32} className="text-[#fbbc05]" />,
    color: "bg-[#fbbc05]/90 hover:bg-[#fbbc05]",
  },
  {
    title: "Ongoing Monitoring & Incident Response",
    desc: "Real-time threat detection, rapid incident response, and automated analytics to minimize risk and keep your business protected.",
    icon: <FaEye size={32} className="text-[#34c38f]" />,
    color: "bg-[#34c38f]/90 hover:bg-[#34c38f]",
  },
  {
    title: "Application Security Audits",
    desc: "In-depth audits for compliance and risk management. Identify weaknesses and get recommendations aligned with standards.",
    icon: <FaShieldAlt size={32} className="text-[#4665fa]" />,
    color: "bg-[#4665fa]/90 hover:bg-[#4665fa]",
  },
  {
    title: "Data Protection & Encryption",
    desc: "Comprehensive encryption and data management strategies to ensure compliance and safeguard sensitive data.",
    icon: <FaDatabase size={32} className="text-[#e86fc4]" />,
    color: "bg-[#e86fc4]/80 hover:bg-[#e86fc4]",
  },
  {
    title: "API Security Testing",
    desc: "Automated and manual assessments to secure your APIs against abuse, leaks, and security flaws.",
    icon: <FaServer size={32} className="text-[#56cdf3]" />,
    color: "bg-[#56cdf3]/90 hover:bg-[#56cdf3]",
  },
];

export default function WebApplicationSecurityServicesPage() {
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
            Web Application Security Services
          </h1>
          <p className="text-white/90 text-lg font-medium">
            Ensuring reliability and protection for your web applications.
          </p>
        </div>
      </section>

         {/* Info Section */}
            <section className="max-w-6xl mx-auto px-3 md:px-0 py-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#181F4B] mb-4">
                  Web Application Security Services
                </h2>
                <p className="text-[#312C61] text-base md:text-lg leading-relaxed">
                  Our QA experts rigorously test your web application to identify and mitigate security vulnerabilities, ensuring reliability, protection, and compliance with industry standards.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image
                  src="/images/customSolution.jpg"
                  alt="Web Application Security Services"
                  width={340}
                  height={280}
                  className="object-contain"
                />
              </div>
            </section>



      {/* ============ NEW HERO CARDS SECTION ============ */}
      <section className="w-full bg-[#f4f6fa] py-20 px-2 flex flex-col items-center">
        {/* Headline */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="font-black text-3xl md:text-5xl text-[#181F4B] mb-4 leading-tight">
            Think the pentest is the end?<br className="hidden md:block" />
            <span className="text-[#181F4B]">It&apos;s just the beginning.</span>
          </h1>
          <div className="text-lg md:text-xl text-[#181F4B]/80 font-medium">
            We don&apos;t leave you high and dry post the pentest.<br />
            With Quorium, a successful app pentest is the start of your security journey.
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 w-full max-w-6xl">
          {heroCards.map((card, i) => (
            <div
              key={card.title}
              className={`
                ${card.color}
                rounded-2xl shadow-lg flex flex-col justify-between
                items-start px-7 py-7 min-w-[265px] max-w-xs
                flex-1 transition-transform hover:-translate-y-2
              `}
              style={{
                boxShadow: "0 8px 36px 0 rgba(40,40,70,0.13)",
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="rounded-full p-2 bg-white/30">{card.icon}</span>
                  <span className="text-white font-bold text-lg">{card.title}</span>
                </div>
                <div className="text-white/90 font-medium text-base">{card.desc}</div>
              </div>
              {/* Custom content (icons, highlights, etc.) */}
              {card.children}
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <a
          href="#security-consult"
          className="mt-4 inline-block bg-[#1d327e] hover:bg-[#233fa5] text-white font-bold rounded-xl shadow-lg px-10 py-4 text-lg transition"
          style={{ boxShadow: "0 4px 16px 0 rgba(20,40,120,0.14)" }}
        >
          Start Your Security Journey
        </a>
      </section>
      {/* ========== END NEW HERO SECTION ========== */}



      {/* Applications Security Solutions */}
      <section className="py-20 max-w-7xl mx-auto w-full">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#181F4B] mb-4">
            Applications Security Solutions
          </h2>
          <p className="text-lg md:text-xl text-[#312C61] max-w-2xl mx-auto mb-2">
            Proactive, comprehensive, and tailored security services to safeguard your applications against modern threats.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-3 bg-[#6d42c7] hover:bg-[#e7b43f] text-white hover:text-[#181F4B] font-bold px-7 py-3 rounded-full shadow-lg transition text-base"
          >
            Get a Free Security Consultation
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="w-full flex flex-wrap gap-6 justify-center mb-14">
          {securityFeatures.map((f, idx) => (
            <div
              key={f.title}
              className={`
                flex flex-col justify-between
                ${f.color}
                transition-all duration-300
                text-white shadow-2xl rounded-3xl px-8 py-7 min-w-[280px] max-w-xs
                md:min-w-[320px] md:max-w-sm
                mb-4 hover:-translate-y-2 group
                animate-fade-in-up
              `}
              style={{
                boxShadow: "0 6px 32px 0 rgba(30,30,80,0.09)",
                fontFamily: "inherit"
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-full p-2 bg-white/30 group-hover:bg-white/60 transition">{f.icon}</span>
                <span className="text-lg md:text-xl font-bold">{f.title}</span>
              </div>
              <div className="text-base opacity-95 font-medium">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Screenshot Section */}
      <section className="bg-[#f9f9fa] py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Testimonial Card (Image+Content) */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <div className="mb-5 text-2xl font-bold text-[#181F4B] flex items-center gap-2">
              <FaQuoteLeft className="text-[#e7b43f] text-3xl" />
              What Our Clients Say
            </div>
            <p className="text-[#312C61] text-lg md:text-xl mb-5 italic font-medium">
              &quot;The software Quorium developed for us was both innovative and reliable. Their attention to detail and agile approach kept us involved and confident throughout the process.&quot;
            </p>
            <div className="text-[#6d42c7] font-bold text-base">Siddharth Wagh</div>
            <div className="text-[#4665fa] text-sm font-medium">Client, Meeting with a Lawyer</div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/images/client-testimonial.png"
              alt="Client Testimonial"
              width={390}
              height={390}
              className="rounded-2xl shadow-xl border-4 border-[#ece4fd] max-w-[390px] w-full animate-fade-in"
              style={{ background: "#fff" }}
            />
          </div>
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

      {/* Animations */}
      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(36px);
          animation: fadeInUp 1s forwards;
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1.4s forwards;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(36px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeIn {
          0% { opacity: 0;}
          100% { opacity: 1;}
        }
      `}</style>
    </div>
  );
}


