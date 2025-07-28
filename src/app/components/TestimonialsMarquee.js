"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Jill Smith",
    username: "@jillsmith",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "I was completely blown away by the results. This service exceeded all my expectations. Absolutely amazing!",
  },
  {
    name: "John Doe",
    username: "@johndoe",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Using this service was a fantastic decision. The quality was outstanding, and I got multiple job offers!",
  },
  {
    name: "Jane Doe",
    username: "@janedoe",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Words can't express how thrilled I am with the results. This service is simply phenomenal. I love it!",
  },
  {
    name: "Jenny Mandell",
    username: "@jennymandell",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    text: "I can't find the words to describe how impressed I am. This service is truly remarkable. I love it!",
  },
  {
    name: "James Cameron",
    username: "@jamescameron",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    text: "I am genuinely amazed by the quality of the photos. This service is a game changer for anyone looking to enhance their profile!",
  },
];

function MarqueeRow({ direction = "left", testimonials }) {
  // Double array for infinite effect
  const items = [...testimonials, ...testimonials];
  return (
    <div className="overflow-x-hidden w-full">
      <div
        className={`flex gap-7 w-[200vw] ${direction === "right" ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow px-7 py-6 w-[340px] h-auto overflow-hidden flex-shrink-0"
          >
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={item.avatar}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full border object-cover"
                unoptimized
              />
              <div>
                <div className="font-bold text-gray-800">{item.name}</div>
                <div className="text-gray-400 text-sm">{item.username}</div>
              </div>
            </div>
            <div className="text-gray-700 text-base leading-snug break-words">
              &quot;{item.text}&quot;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#f8fbff] to-[#e8f0fa] px-0">
      <div className="text-center mb-6 w-full">
        <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs tracking-wide">
          TESTIMONIALS
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#181F4B]">What Our Users Say</h2>
        <p className="mt-2 max-w-2xl mx-auto text-gray-500 text-base">
          Discover why thousands are choosing our service for effortless, high-quality photo generation, from LinkedIn headshots to vibrant social media content.
        </p>
      </div>
      {/* Marquee rows */}
      <div className="flex flex-col gap-5 w-full">
        <MarqueeRow direction="left" testimonials={testimonials} />
        <MarqueeRow direction="right" testimonials={testimonials} />
      </div>
    </section>
  );
}
