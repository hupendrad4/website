"use client";
import { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// === Blog Datasets ===
const FEATURED_BLOGS = [
  {
    id: 1,
    title: "Why Startups Should Outsource QA Work",
    url: "https://www.quoriumtechnologies.com/post/why-startups-should-outsource-qa-work",
    image: "/images/QAoutsourcing.png",
    date: "2024-12-25",
  },
  {
    id: 2,
    title: "Unleashing the Power of GEN AI: Overcoming Limitations in Automation Testing",
    url: "https://www.quoriumtechnologies.com/post/unleashing-the-power-of-gen-ai-overcoming-limitations-in-automation-testing",
    image: "/images/GenAIBlogs.png",
    date: "2024-10-31",
  },
  {
    id: 3,
    title: "Embracing Advanced AI Tools for Local SEO",
    url: "https://www.quoriumtechnologies.com/post/embracing-advanced-ai-tools-for-local-seo",
    image: "/images/SEOOptimisations.jpg",
    date: "2024-09-15",
  },
];

// Add your own full blogs list here:
const BLOG_POSTS = [
  ...FEATURED_BLOGS,
  {
    id: 4,
    title: "How is blockchain technology going to change the world?",
    date: "2024-09-16",
    image: "/images/dummy.jpg",
    category: "Tech",
    url: "#"
  },
  {
    id: 5,
    title: "What are some popular platforms for developing blockchain",
    date: "2024-09-24",
    image: "/images/dummy.jpg",
    category: "Blockchain",
    url: "#"
  },
  {
    id: 6,
    title: "Top 5 Software Development Companies in Lucknow",
    date: "2024-10-24",
    image: "/images/dummy.jpg",
    category: "Software",
    url: "#"
  },
];

// --- Utility functions ---
const latestPosts = BLOG_POSTS.slice(0, 6);

function formatDate(date: string | number | Date) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  return { day, month, year: d.getFullYear() };
}

function getDateParts(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const year = date.getFullYear();
  return { day, month, year };
}

// --- Blog Carousel for Featured Blogs ---
type Blog = {
  id: number;
  title: string;
  url: string;
  image: string;
  date: string;
  category?: string;
};

function BlogCarousel({ blogs }: { blogs: Blog[] }) {
  const [visibleStart, setVisibleStart] = useState(0);
  const visibleCount = 3;
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisibleStart((prev) => (prev + 1) % blogs.length);
    }, 5200);
    return () => clearInterval(intervalRef.current);
  }, [blogs.length]);

  function getVisibleBlogs() {
    if (blogs.length <= visibleCount) return blogs;
    const arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(blogs[(visibleStart + i) % blogs.length]);
    }
    return arr;
  }

  const slideAnim = "transition-transform duration-[1800ms] ease-in-out";

  return (
    <div className="relative my-10">
      <button
        onClick={() => setVisibleStart((v) => (v - 1 + blogs.length) % blogs.length)}
        className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-xl rounded-full p-3 text-[#6d42c7] font-bold text-2xl"
        aria-label="Previous"
        style={{ display: blogs.length > visibleCount ? "block" : "none" }}
      >&#8592;</button>
      <button
        onClick={() => setVisibleStart((v) => (v + 1) % blogs.length)}
        className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-xl rounded-full p-3 text-[#6d42c7] font-bold text-2xl"
        aria-label="Next"
        style={{ display: blogs.length > visibleCount ? "block" : "none" }}
      >&#8594;</button>
      <section className={`flex gap-8 ${slideAnim}`} key={visibleStart}>
        {getVisibleBlogs().map((blog) => {
          const { day, month, year } = getDateParts(blog.date);
          return (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative bg-white rounded-3xl shadow-2xl border-2 border-[#e4e0f7] w-full max-w-[370px] flex-shrink-0 flex flex-col cursor-pointer overflow-hidden hover:shadow-[#6d42c7] transition"
              style={{ minHeight: 340 }}
              onClick={() => window.open(blog.url, "_blank")}
            >
              <div className="h-48 w-full relative rounded-t-3xl overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#6d42c7] rounded-xl px-4 py-2 text-white flex flex-col items-center font-bold shadow-lg z-10 border-2 border-white">
                  <div className="text-xl leading-none">{day}</div>
                  <div className="text-base font-semibold">{month}</div>
                  <div className="text-xs font-semibold">{year}</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between pt-7 pb-5 px-6">
                <h3 className="text-lg font-extrabold text-[#22234d] mb-4 leading-tight line-clamp-2">
                  {blog.title}
                </h3>
                <div className="flex justify-end">
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl bg-[#6d42c7] text-white px-7 py-2 font-bold shadow hover:bg-[#7d56d6] transition-colors"
                    onClick={e => e.stopPropagation()}
                  >READ MORE <FaArrowRight className="ml-2" /></a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}

// --- Blog Submission Form ---
function CreateBlogForm({ onAddBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !content || !image) return;
    const newBlog = {
      title,
      content,
      image: imagePreview,
      url: "#",
      date: new Date().toISOString().split("T")[0]
    };
    onAddBlog(newBlog);
    setSubmitted(true);
    setTitle(""); setContent(""); setImage(null); setImagePreview(null);
    setTimeout(() => setSubmitted(false), 2000);
  }
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        placeholder="Blog Title"
        className="border-b-2 border-[#6d42c7] px-3 py-2 rounded focus:outline-none text-[#252249]"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your blog content..."
        className="border-b-2 border-[#6d42c7] px-3 py-2 rounded focus:outline-none min-h-[120px] text-[#252249]"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label className="flex items-center gap-3 text-[#6d42c7] font-semibold cursor-pointer">
        <span>Upload Image</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="w-40 h-32 object-cover rounded-xl border mx-auto"
        />
      )}
      <button
        type="submit"
        className="bg-[#6d42c7] hover:bg-[#7d56d6] text-white font-bold px-8 py-2 rounded-full mt-2 shadow transition"
        disabled={!title || !content || !image}
      >
        Submit Blog
      </button>
      {submitted && (
        <div className="text-green-600 font-semibold text-center">
          Blog submitted!
        </div>
      )}
    </form>
  );
}

// --- Main Blog Page ---
export default function BlogPage() {
  // Blog Submission (User blog) logic
  const [blogs, setBlogs] = useState(FEATURED_BLOGS);
  function handleAddBlog(newBlog) {
    setBlogs(prev => [
      { ...newBlog, id: Date.now() },
      ...prev,
    ]);
  }

  // Merge all blogs for the main blog list (carousel + others)
  const allBlogs = [
    ...blogs,
    ...BLOG_POSTS.filter(b => !blogs.find(bb => bb.id === b.id)),
  ];

  return (
    <main className="min-h-screen bg-[#f7f7fa] w-full">
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

      {/* Hero Section with Overlay + Title */}
      <section className="relative h-[340px] flex items-center justify-center bg-[#181F4B] mb-0">
        <Image
          src="/images/blogs.jpg"
          fill
          className="object-cover object-center absolute inset-0 z-0 opacity-75"
          alt="Blog Hero"
          priority
        />
        <div className="absolute inset-0 bg-[#181F4B]/40 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-wider drop-shadow-xl" style={{ fontFamily: "'Rozha One', serif" }}>
            Technical Blogs
          </h1>
          <p className="text-white/90 max-w-xl mx-auto text-base font-medium drop-shadow">
            Dive into cutting-edge insights, expert tips, and the latest trends shaping the tech world.<br />
            <span className="font-bold text-[#e7b43f]">At Quorium Technologies</span>, our technical blogs bring you in-depth articles on software development, mobile apps, AI, and emerging technologies.
          </p>
        </div>
      </section>

      {/* Highlighted Tagline */}
      <div className="flex justify-center mt-4 mb-1 px-4">
        <span className="text-2xl md:text-3xl font-bold text-center" style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}>
          <span className="text-[#E7B43F]">Stay</span>
          <span className="text-[#181F4B]"> informed.</span>
          <span className="text-[#E7B43F]">&nbsp;Stay</span>
          <span className="text-[#1a1156]">&nbsp;inspired !</span>
        </span>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto w-full">
        <BlogCarousel blogs={blogs} />
      </div>

      {/* Blog Cards + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Blog Cards */}
        <div className="md:col-span-3">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="text-[#181F4B] text-2xl font-bold">Our</span>
              <span className="text-[#b284ed] text-2xl font-bold">Blog</span>
              <span className="ml-3 text-[44px] font-bold text-[#353157] leading-none hidden sm:inline">BLOG</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogs.map((post, i) => {
              const { day, month } = formatDate(post.date);
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  whileHover={{ y: -6, scale: 1.03, boxShadow: "0 8px 44px #6d42c744" }}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#6d42c7aa] transition-all border border-[#ece8f7] overflow-hidden flex flex-col relative"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-center rounded-t-2xl group-hover:scale-105 transition-transform"
                    />
                    {/* Date Badge */}
                    <div className="absolute top-3 right-3 bg-gradient-to-b from-[#6d42c7] to-[#312C61] rounded-xl px-2.5 py-2 text-white font-bold text-center shadow-lg z-10 min-w-[46px]">
                      <div className="text-lg leading-none">{day}</div>
                      <div className="text-[11px] font-bold">{month}</div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-5">
                    <div>
                      <h2 className="font-bold text-lg text-[#181F4B] leading-tight mb-4 group-hover:text-[#6d42c7] transition-colors">
                        {post.title}
                      </h2>
                    </div>
                    <Link
                      href={post.url || "#"}
                      className="inline-flex items-center mt-2 px-4 py-2 rounded-lg bg-[#6d42c7] text-white font-bold text-sm shadow hover:bg-[#e7b43f] hover:text-[#181F4B] transition-colors group"
                    >
                      READ MORE &rarr;
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-1 w-full">
          {/* Search Box */}
          <form className="mb-7">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs"
                className="w-full py-2.5 pl-4 pr-10 rounded-xl border border-[#ece8f7] bg-white shadow focus:outline-none focus:border-[#6d42c7] text-[#181F4B] placeholder:text-gray-400"
              />
              <span className="absolute right-3 top-2.5 text-[#6d42c7] text-lg">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="10" r="7" /><line x1="15" y1="15" x2="21" y2="21" /></svg>
              </span>
            </div>
          </form>
          {/* Latest Posts */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#ece8f7] p-5">
            <div className="font-bold text-[#181F4B] mb-4 text-lg">LATEST POSTS</div>
            <ul className="space-y-3 max-h-[380px] overflow-auto scrollbar-thin scrollbar-thumb-[#e7b43f]/40 scrollbar-track-white/60 pr-2">
              {latestPosts.map((post) => (
                <li key={post.id} className="flex gap-3 items-center border-b border-[#ece8f7] pb-3 last:border-b-0">
                  <div className="min-w-[56px] h-12 relative rounded-xl overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover object-center rounded-xl" />
                  </div>
                  <div>
                    <Link href={post.url || "#"} className="text-[14px] font-bold text-[#232249] hover:text-[#6d42c7] transition">{post.title}</Link>
                    <div className="text-xs text-gray-500">{formatDate(post.date).day} {formatDate(post.date).month}, {formatDate(post.date).year}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Blog Submission Form */}
      <div className="max-w-2xl mx-auto mt-16 bg-white rounded-3xl shadow-2xl border-2 border-[#e4e0f7] p-8">
        <h2 className="text-2xl font-bold text-[#6d42c7] mb-5 text-center">
          Create a New Blog
        </h2>
        <CreateBlogForm onAddBlog={handleAddBlog} />
      </div>
    </main>
  );
}

