"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ServicesDropdown from "../components/ServicesDropdown";



<nav className="flex gap-6 items-center">
  <Link href="/" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">Home</Link>
  <Link href="/about" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">About</Link>

  <div className="relative">
    <ServicesDropdown />
  </div>

  <Link href="/case-studies" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">Case Studies</Link>
  <Link href="/blog" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">Blog</Link>
  <Link href="/contact" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">Contact</Link>
  <Link href="/career" className="font-semibold text-[#111a4d] hover:text-[#6d42c7] transition">Career</Link>
</nav>


const ecomFeatures = [
	{
		title: "Custom Product Development",
		color: "from-[#3188f3] to-[#081779]",
		border: "border-[#3188f3]",
		desc: "At Quorium, we work with you to turn your ideas into reality. Our experienced team of developers can take your product from concept to production, with rapid prototyping and iterative testing to ensure a high-quality end result.",
		link: "/services/custom-product-development",
	},
	{
		title: "Web Application Development",
		color: "from-[#fbbe0c] to-[#e7b43f]",
		border: "border-[#e7b43f]",
		desc: "We specialize in developing web applications that are user-friendly, scalable, and secure. From e-commerce to enterprise solutions, we can help you build the right web app for your business needs.",
		link: "/services/web-application-development",
	},
	{
		title: "Mobile Application Development",
		color: "from-[#13e28b] to-[#29d6a7]",
		border: "border-[#29d6a7]",
		desc: "In today's mobile-first world, having a mobile app for your business is essential. We can help you design and develop a mobile app that engages with your customers and meets your business goals.",
		link: "/services/mobile-application-development",
	},
	{
		title: "Software Testing Services",
		color: "from-[#a97be8] to-[#391366]",
		border: "border-[#a97be8]",
		desc: "Our team of quality assurance experts will ensure that your software is thoroughly tested for bugs and defects, so you can have confidence in its performance and reliability.",
		link: "/services/software-testing-services",
	},
	{
		title: "Web Application Security Services ",
		color: "from-[#ed098c] to-[#c12b9b]",
		border: "border-[#ed098c]",
		desc: "Our QA experts rigorously test your web application to identify and mitigate security vulnerabilities, ensuring reliability, protection, and compliance with industry standards.",
		link: "/services/web-application-security-services",
	},
	{
		title: "IT Staffing and  Software Consulting ",
		color: "from-[#7d50f8] to-[#3604be]",
		border: "border-[#7d50f8]",
		desc: "Our IT staffing and software consulting experts provide top talent and reliable solutions to ensure seamless performance and efficiency. We also build offshore team and handover to clients",
		link: "/services/it-consulting",
	},
	{
		title: "Resource Outsourcing Services",
		color: "from-[#22d3ee] to-[#4f46e5]",
		border: "border-[#22d3ee]",
		desc: "Scale your projects with confidence using Quorium’s Resource Outsourcing Services. We provide experienced, certified professionals in cybersecurity, software development, DevOps, and IT support. Flexible engagement models ensure you get the right talent for every challenge—whether you need long-term extension or specialized expertise on-demand.",
		link: "/services/resource-outsourcing-services",
	},
	{
		title: "Graphics Designs Services",
		color: "from-[#fd264c] to-[#b8163b]",
		border: "border-[#fd264c]",
		desc: "Elevate your brand identity and digital experiences with Quorium’s Graphics Design Services. Our creative team blends modern design trends with deep technical know-how to deliver visually compelling logos, UI/UX, marketing collateral, and custom illustrations—helping your business stand out in a crowded digital landscape.",
		link: "/services/graphics-designs-services",
	},
];

const stats = [
	{
		number: "15+",
		text: "Years in Market",
		color: "bg-[#fdf0ca]",
		icon: "/star.svg",
	},
	{
		number: "250+",
		text: "E-commerce Specialists",
		color: "bg-[#e0f2fc]",
		icon: "/user.svg",
	},
	{
		number: "90%",
		text: "Customers NPS",
		color: "bg-[#e4ffe7]",
		icon: "/smile.svg",
	},
	{
		number: "400+",
		text: "Projects Launched",
		color: "bg-[#f4edfd]",
		icon: "/rocket.svg",
	},
];

const faqs = [
  {
    q: "What IT services does Quorium Technologies offer?",
    a: "Quorium Technologies provides a full range of digital solutions including cybersecurity, cloud security, IT consulting, resource outsourcing, AI and automation, penetration testing, and managed security services for businesses of all sizes.",
  },
  {
    q: "How does Quorium ensure my business stays secure?",
    a: "We implement multi-layered cybersecurity, real-time threat monitoring, vulnerability management, regular security audits, and compliance services to keep your business data and digital assets protected at all times.",
  },
  {
    q: "What industries does Quorium Technologies serve?",
    a: "Our services are trusted by startups, SMBs, and large enterprises across sectors like finance, healthcare, e-commerce, manufacturing, and more.",
  },
  {
    q: "How can I hire IT experts or outsource resources with Quorium?",
    a: "You can leverage our resource outsourcing services to quickly access certified IT professionals, developers, security experts, and consultants—scaling your team flexibly according to your project needs.",
  },
  {
    q: "Can Quorium help my business move to the cloud?",
    a: "Absolutely! Our cloud security and migration services help you transition to modern cloud infrastructure seamlessly—ensuring data safety, compliance, and optimized performance for your operations.",
  },
  {
    q: "Do you provide corporate training and upskilling?",
    a: "Yes. We offer customized corporate training programs in cybersecurity, new technologies, and best practices to keep your team skilled and ready for emerging challenges.",
  },
  {
    q: "How do I get started with Quorium Technologies?",
    a: "Simply contact us for a free consultation or request a quotation. Our experts will analyze your requirements and recommend the best digital solutions for your business.",
  },
];


export default function ECommercePage() {
	const [openFaq, setOpenFaq] = useState(-1);

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
					<ServicesDropdown />
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

			{/* Hero Banner */}
			<section className="relative w-full h-[280px] flex items-center justify-center bg-[#181F4B] overflow-hidden">
				<Image
					src="/images/ServicesHero.jpg"
					fill
					className="object-cover object-center absolute inset-0 z-0 opacity-80"
					alt="Banner"
					priority
				/>
				<div className="relative z-10 w-full text-center px-4">
					<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-xl">
						OUR SERVICES
					</h1>
					<p className="text-white/90 text-lg font-medium">
						Effortlessly Own an Online Store and Maximize Conversions
					</p>
				</div>
			</section>

			{/* Info Block */}
			<section className="max-w-6xl mx-auto px-3 md:px-0 py-12 flex flex-col md:flex-row items-center gap-8">
				<div className="flex-1">
					<h2 className="text-2xl md:text-3xl font-bold text-[#181F4B] mb-4">
						SERVICES AT QUORIUM
					</h2>
					<p className="text-[#312C61] text-base md:text-lg leading-relaxed">
                      Quorium Technologies delivers expert cybersecurity, cloud solutions, and IT consulting to help your business grow securely. Our services include penetration testing, vulnerability management, compliance, resource outsourcing, corporate training, and creative graphic design. Trust Quorium for reliable, innovative, and tailored technology solutions that give your business a competitive edge.
                    </p>

				</div>
				<div className="flex-1 flex justify-center">
					<Image
						src="/images/dummy.jpg"
						alt="Ecommerce Illustration"
						width={340}
						height={280}
						className="object-contain"
					/>
				</div>
			</section>

			{/* Colored Cards Section */}
			<section className="w-full bg-gradient-to-br from-[#2e1e52] to-[#181F4B] py-16 relative">
				<div className="max-w-6xl mx-auto px-3">
					<h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-4">
						Our All- Services
					</h2>
<p className="text-white/80 text-center max-w-3xl mx-auto mb-10">
  Quorium Technologies offers cutting-edge cybersecurity, cloud, and IT solutions tailored for modern businesses. As a trusted tech partner, we deliver secure, scalable, and innovative services to meet your unique requirements and drive digital growth.
</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{ecomFeatures.map((card) => (
							<div
								key={card.title}
								className={`rounded-2xl border-4 ${card.border} bg-white p-6 shadow-xl hover:scale-105 transition-transform duration-200`}
								style={{
									background: `linear-gradient(120deg, #fff 75%, ${card.color.replace(
										"from-",
										""
									)
										.replace("to-", "")} 100%)`,
									minHeight: 175,
								}}
							>
								<div className="font-bold text-lg mb-2 text-[#181F4B]">
									{card.title}
								</div>
								<div className="text-sm text-[#4b4a66] mb-4">
									{card.desc}
								</div>
								<Link
									href={card.link}
									className="inline-block mt-auto px-6 py-2 rounded-full bg-[#6d42c7] text-white font-semibold shadow hover:bg-[#a57ae7] transition-all focus:outline-none focus:ring-2 focus:ring-[#6d42c7]"
								>
									Learn More
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="w-full py-10 bg-white">
				<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-7">
					{stats.map((stat) => (
						<div
							key={stat.number}
							className={`rounded-2xl ${stat.color} p-7 flex flex-col items-center justify-center shadow-md border border-[#e0e0ef]`}
						>
							<div className="text-3xl font-bold text-[#181F4B] mb-2 flex items-center gap-2">
								{stat.icon && (
									<Image
										src={stat.icon}
										alt=""
										width={30}
										height={30}
									/>
								)}
								{stat.number}
							</div>
							<div className="text-sm text-[#252249] font-semibold">
								{stat.text}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="bg-white py-16">
				<div className="max-w-6xl mx-auto px-3 flex flex-col md:flex-row gap-10 items-center">
					<div className="flex-1">
						<h3 className="text-2xl md:text-3xl font-extrabold text-[#181F4B] mb-5">
							Why Choose Quorium Technologies as Your Tech Partner
						</h3>
						<p className="text-[#312C61] text-base md:text-lg leading-relaxed">
							As a trusted leader in eCommerce website development in India, we
							brings two decades of proven expertise to deliver your next-gen
							e-commerce solution.
							<br />
							<br />
							Quorium Technologies is an incredible partner with expertise in
							strategy, design, & full web/app development, payment solutions,
							scalable secure solutions for your business requirements. From smart
							B2B platforms to B2C portals, ERP, and single-vendor to multi-vendor
							solutions—rely on us to help you stay ahead of the curve as well as
							your competitors.
						</p>
					</div>
					<div className="flex-1 flex justify-center">
						<Image
							src="/images/why-ecommerce.png"
							alt="Why Choose Us"
							width={310}
							height={210}
							className="object-contain"
						/>
					</div>
				</div>
			</section>

			{/* CTA Cards */}
			<section className="bg-[#f9f9fa] py-12">
				<div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
					<div className="flex-1 bg-[#6d42c7] rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 text-white hover:scale-105 transition-transform">
						<span className="text-4xl mb-2">🚀</span>
						<div className="font-bold text-lg mb-2">START A NEW PROJECT</div>
						<div className="text-sm text-white/90 mb-5">
							Share your ideas with us, we&apos;ll get back to you soon.
						</div>
						<Link
							href="/request-quotation"
							className="bg-white text-[#6d42c7] font-bold px-7 py-2 rounded-full shadow transition hover:bg-[#e7b43f] hover:text-[#181F4B]"
						>
							Request A Quote
						</Link>
					</div>
					<div className="flex-1 bg-[#181F4B] rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 text-white hover:scale-105 transition-transform">
						<span className="text-4xl mb-2">💼</span>
						<div className="font-bold text-lg mb-2">
							DO YOU HAVE EXISTING PROJECT
						</div>
						<div className="text-sm text-white/90 mb-5">
							Tell us more about your project & we&apos;ll help to scale-up.
						</div>
						<Link
							href="/contact"
							className="bg-white text-[#181F4B] font-bold px-7 py-2 rounded-full shadow transition hover:bg-[#e7b43f] hover:text-[#181F4B]"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="bg-white py-16">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold mb-8">
						<span className="border-l-8 border-[#6d42c7] pl-3">
							FAQs of eCommerce Solutions
						</span>
					</h2>
					<div className="divide-y divide-[#eee]">
						{faqs.map((item, i) => (
							<div key={i} className="py-4">
								<button
									className="w-full text-left flex items-center justify-between font-semibold text-[#181F4B] text-base focus:outline-none"
									onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
								>
									<span>
										{i + 1}. {item.q}
									</span>
									<span className="ml-4">
										{openFaq === i ? "−" : "+"}
									</span>
								</button>
								{openFaq === i && (
									<div className="pl-2 pr-10 pt-2 text-[#252249] text-sm">
										{item.a}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
