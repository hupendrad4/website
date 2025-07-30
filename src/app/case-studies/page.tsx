"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const caseStudies = [
	{
		title: "Global Bank: Cloud Security Transformation",
		img: "/globe.svg",
		summary: "Secured multi-cloud infrastructure for a global bank, reducing risk and improving compliance.",
		metrics: {
			breaches: 0,
			costSavings: 35,
			compliance: 100,
		},
	},
	{
		title: "E-Commerce: AI-Driven Fraud Detection",
		img: "/window.svg",
		summary: "Deployed AI models to detect and prevent fraud in real-time, increasing transaction security.",
		metrics: {
			fraudReduction: 92,
			detectionSpeed: 4,
			roi: 5,
		},
	},
];

const chartData = {
	labels: ["Before", "After"],
	datasets: [
		{
			label: "Security Incidents",
			data: [12, 0],
			backgroundColor: ["#CBD2D9", "#00C2FF"],
		},
		{
			label: "Compliance (%)",
			data: [70, 100],
			backgroundColor: ["#7B8794", "#00C2FF"],
		},
	],
};

const chartOptions = {
	responsive: true,
	plugins: {
		legend: { position: "top" as const },
		title: { display: true, text: "Impact Metrics" },
	},
};

export default function CaseStudiesPage() {
	return (
		<main className="min-h-screen bg-primary text-white">
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
					<a href="#" className="hover:text-[#e7b43f] ml-1">
						LinkedIn
					</a>
					<a href="#" className="hover:text-[#e7b43f] ml-1">
						Twitter
					</a>
					<a href="#" className="hover:text-[#e7b43f] ml-1">
						Facebook
					</a>
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
					<Link href="/" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">
						Home
					</Link>
					<Link href="/about" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">
						About
					</Link>
					<Link href="/services" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">
						Services
					</Link>
					<Link href="/case-studies" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">
						Case Studies
					</Link>
					<Link href="/blog" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">
						Blog
					</Link>
					<Link href="/contact" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">
						Contact
					</Link>
					<Link href="/career" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">
						Career
					</Link>
				</nav>
				<Link href="/request-quotation">
					<button className="ml-8 bg-[#6d42c7] hover:bg-[#54367a] text-white font-bold px-7 py-2 rounded-full shadow transition text-base">
						REQUEST A QUOTE
					</button>
				</Link>
			</div>

			{/* HERO SECTION */}
			<section
				className="relative w-full h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden"
				style={{ backgroundColor: "#181F4B" }}
			>
				<Image
					src="/images/about-us.png"
					alt="About Us Banner"
					fill
					className="absolute inset-0 w-full h-full object-cover object-center z-0"
					style={{ filter: "brightness(0.55) blur(0px)" }}
					draggable={false}
					priority
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

			{/* MAIN CONTENT */}
			<div className="max-w-7xl mx-auto w-full">
				<h1 className="text-4xl font-bold mb-6 text-accent mt-10 ml-3">Case Studies & Tech Showcase</h1>
				<p className="text-lg text-gray-300 mb-12 max-w-2xl ml-3">
					See how we deliver results with advanced technology and innovation.
				</p>

				{/* Animated Chart */}
				<section className="max-w-3xl mx-auto mb-16 bg-secondary rounded-xl p-8 shadow-lg">
					<h2 className="text-2xl font-bold text-accent mb-4">Security & Compliance Impact</h2>
					<Bar data={chartData} options={chartOptions} />
				</section>

				{/* Case Study Cards */}
				<section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
					{caseStudies.map((cs, i) => (
						<div
							className="bg-secondary rounded-2xl p-8 shadow-lg border border-secondary/40 flex flex-col items-center text-center"
							key={cs.title}
						>
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: i * 0.2 }}
								viewport={{ once: true }}
							>
								<Image src={cs.img} alt={cs.title} width={64} height={64} className="mb-4" />
								<h3 className="text-xl font-bold text-accent mb-2">{cs.title}</h3>
								<p className="text-gray-300 mb-4">{cs.summary}</p>
								<div className="flex flex-col gap-2 text-gray-400 text-sm">
									{Object.entries(cs.metrics).map(([k, v]) => (
										<span key={k}>
											<b className="text-accent">
												{k
													.replace(/([A-Z])/g, " $1")
													.replace(/^./, (str) => str.toUpperCase())}
												:
											</b>{" "}
											{v}
											{typeof v === "number" && k !== "detectionSpeed" ? "%" : ""}
										</span>
									))}
								</div>
							</motion.div>
						</div>
					))}
				</section>

				{/* 3D Model Placeholder */}
				<section className="max-w-4xl mx-auto mt-20 text-center">
					<h2 className="text-2xl font-bold text-accent mb-4">
						Interactive 3D Architecture (Coming Soon)
					</h2>
					<div className="w-full h-64 bg-gradient-to-br from-accent/10 to-secondary/40 rounded-xl flex items-center justify-center text-gray-400">
						{/* Three.js 3D model integration placeholder */}
						<span>3D Software Architecture Visualization</span>
					</div>
				</section>
			</div>
		</main>
	);
}
