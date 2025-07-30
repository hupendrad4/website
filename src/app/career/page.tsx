"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// --- DUMMY JOBS ---
const JOBS = [
  {
    id: 1,
    title: "Frontend React Developer",
    location: "Pune, Maharashtra (Hybrid)",
    type: "Full Time",
    posted: "2 days ago",
    desc: `We're looking for a React.js expert with 2+ years experience, strong CSS/JS skills, and a passion for creating pixel-perfect user interfaces.
- Responsibilities: Build UIs, collaborate with designers, optimize web performance.
- Requirements: React, Next.js, Tailwind, API Integration, Git.`,
    email: "careers@quoriumtechnologies.com",
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    location: "Remote",
    type: "Full Time",
    posted: "1 week ago",
    desc: `Join our team to develop and deploy machine learning models in cybersecurity, data science, or automation solutions.
- Responsibilities: Model training, data pipeline, deployment.
- Requirements: Python, TensorFlow/PyTorch, Cloud, API, NLP.`,
    email: "careers@quoriumtechnologies.com",
  },
  {
    id: 3,
    title: "Cybersecurity Consultant",
    location: "Pune/Remote",
    type: "Contract",
    posted: "3 days ago",
    desc: `Consult for our enterprise security clients—run vulnerability assessments, security audits, compliance projects.
- Requirements: SOC, Penetration Testing, Risk Assessment, ISO 27001.`,
    email: "cyberjobs@quoriumtechnologies.com",
  },
];

export default function CareerPage() {
  const [jobs] = useState(JOBS);
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState<null | typeof JOBS[0]>(null);

  // Filter jobs by search
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  // Modal close handler
  function closeModal() {
    setSelectedJob(null);
  }

  return (
    <main className="min-h-screen bg-white relative">
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


      {/* HERO SECTION */}
      <section
        className="relative w-full h-[340px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(24,31,75,0.93), rgba(24,31,75,0.92)),
            url('/images/about-us.png')
          `,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-wide drop-shadow-xl">
            CAREER
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-base font-medium">
            Our recruitment team focuses on recruiting talented industry
            professionals. If you have a background in IT excellence and are
            looking for challenging opportunities to fulfil your fire, look no
            further. A career at Quorium Technologies Pvt. Ltd. offers just that
            and much more.
          </p>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="max-w-4xl mx-auto -mt-12 flex flex-col items-center z-10 relative">
        <div className="w-full rounded-2xl shadow-xl bg-white px-6 py-7 flex flex-col md:flex-row items-center gap-4 border border-[#e6e6f7]">
          <label htmlFor="search-jobs" className="text-xl font-semibold flex-1">
            Find Your Dream Job
          </label>
          <div className="flex-1 flex gap-2 w-full">
            <span className="flex items-center pl-3 text-[#6d42c7]">
              <svg width={22} height={22} fill="none" viewBox="0 0 24 24">
                <path
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1012 19.5a7.5 7.5 0 004.65-2.85z"
                  stroke="#6d42c7"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input
              id="search-jobs"
              type="text"
              placeholder="Search for your future role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 border-0 focus:outline-none rounded-lg bg-[#f7f7fd] text-lg"
            />
          </div>
          <button className="ml-2 px-7 py-2 rounded-lg bg-[#6d42c7] hover:bg-[#483175] text-white font-bold transition shadow">
            Search Job
          </button>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="max-w-4xl mx-auto mt-10 px-3">
        <div className="text-2xl font-bold text-center mb-7 text-[#181F4B] tracking-wide">
          Open Positions
        </div>
        <div className="flex flex-col gap-6">
          {filteredJobs.length === 0 && (
            <div className="text-lg text-center text-[#6d42c7] font-semibold">
              No jobs found matching your search.
            </div>
          )}
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white/90 shadow-lg rounded-2xl border border-[#e6e6f7] p-7 flex flex-col md:flex-row md:items-center gap-3 hover:shadow-2xl transition relative"
            >
              <div className="flex-1">
                <div className="text-lg md:text-xl font-bold text-[#181F4B]">
                  {job.title}
                </div>
                <div className="text-sm text-[#6d42c7] font-medium mb-2">
                  {job.location} &bull; {job.type} &bull; {job.posted}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-6 py-2 rounded-full bg-[#e7b43f] text-[#181F4B] font-bold shadow hover:bg-[#6d42c7] hover:text-white transition"
                >
                  View Details
                </button>
                <a
                  href={`mailto:${job.email}?subject=Application for ${encodeURIComponent(
                    job.title
                  )} at Quorium Technologies`}
                  className="px-6 py-2 rounded-full bg-[#6d42c7] text-white font-bold shadow hover:bg-[#e7b43f] hover:text-[#181F4B] transition"
                  target="_blank"
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOB DETAIL MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 bg-[#181F4BCC] flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-2xl text-[#6d42c7] hover:text-[#e7b43f] focus:outline-none"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="text-2xl font-bold mb-2 text-[#181F4B]">
              {selectedJob.title}
            </div>
            <div className="text-sm text-[#6d42c7] mb-4">
              {selectedJob.location} &bull; {selectedJob.type} &bull;{" "}
              {selectedJob.posted}
            </div>
            <pre className="text-[#252249] whitespace-pre-wrap text-base mb-6">
              {selectedJob.desc}
            </pre>
            <a
              href={`mailto:${selectedJob.email}?subject=Application for ${encodeURIComponent(
                selectedJob.title
              )} at Quorium Technologies`}
              className="inline-block px-8 py-2 rounded-full bg-[#6d42c7] text-white font-bold shadow hover:bg-[#e7b43f] hover:text-[#181F4B] transition"
              target="_blank"
            >
              Apply for this Job
            </a>
          </div>
        </div>
      )}

      {/* SOCIAL ICONS SECTION */}
      <section className="my-24 flex flex-col items-center relative overflow-hidden w-full">
        {/* Soft abstract background shapes */}

  <div className="relative z-10">
    <div className="text-2xl md:text-3xl font-bold text-[#00004d] mb-2 tracking-wide text-center mt-10">
      COME AND <span className="text-[#f7b71d]">JOIN US!</span>
    </div>
    <div className="mb-3 text-gray-500 text-center">
      The Great Opportunity Awaits
    </div>
          {/* Modern glass circle icons */}
          <div className="flex flex-wrap justify-center items-center gap-12 mt-12">
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/company/quorium-technologies/?viewAsMember=true",
                icon: <FaLinkedinIn size={38} color="#0077b5" />,
                ring: "ring-[#0077b5]",
                glow: "shadow-[0_0_40px_#41a4ff33]",
              },
              {
                name: "Facebook",
                url: "https://www.facebook.com/Quorium-Technologies-Pvt-Ltd/61559628122514/",
                icon: <FaFacebookF size={38} color="#1877f3" />,
                ring: "ring-[#1877f3]",
                glow: "shadow-[0_0_40px_#1877f344]",
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com/quorium_technologies/",
                icon: <FaInstagram size={38} color="#e1306c" />,
                ring: "ring-[#e1306c]",
                glow: "shadow-[0_0_40px_#e1306c33]",
              },
              {
                name: "Twitter",
                url: "https://x.com/QuoriumTech",
                icon: <FaTwitter size={38} color="#1da1f2" />,
                ring: "ring-[#1da1f2]",
                glow: "shadow-[0_0_40px_#1da1f277]",
              },
              {
                name: "YouTube",
                url: "https://www.youtube.com/@quorium_technologies",
                icon: <FaYoutube size={38} color="#ff0000" />,
                ring: "ring-[#ff0000]",
                glow: "shadow-[0_0_40px_#ff000033]",
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                className={`
                  group relative
                  w-20 h-20 md:w-24 md:h-24
                  flex items-center justify-center
                  bg-white/50 backdrop-blur-xl
                  rounded-full
                  border border-white/80
                  ring-2 ${s.ring}
                  transition-all duration-300
                  hover:scale-110 hover:-translate-y-2
                  ${s.glow}
                  shadow-lg
                `}
                style={{
                  boxShadow: "0 8px 32px 0 rgba(60,30,110,0.10)",
                }}
              >
                <span
                  className={`
                    flex items-center justify-center w-full h-full
                    group-hover:scale-125 transition-transform
                  `}
                  style={{
                    fontSize: "2.2rem",
                  }}
                >
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
