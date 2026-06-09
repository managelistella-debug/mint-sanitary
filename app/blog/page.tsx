import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cleaning Tips & Guides | Mint Sanitary Blog",
  description:
    "Expert cleaning tips, seasonal guides, and home maintenance advice from the team at Mint Sanitary — North Vancouver's trusted house cleaning professionals.",
};

const posts = [
  {
    slug: "seven-ways-to-get-your-home-ready-for-spring",
    title: "Seven Ways to Get Your Home Ready for Spring",
    excerpt:
      "From curb appeal to deep-cleaned interiors, here's how to shake off winter and refresh every corner of your North Vancouver home this spring.",
    date: "April 8, 2025",
    image: "/spring-cleaned-living-room-north-vancouver.jpg",
    category: "Seasonal Cleaning",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ marginTop: "77px", minHeight: "280px", height: "360px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/recurring-cleaning-kitchen-north-vancouver.jpg')" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,37,64,0.90) 0%, rgba(10,37,64,0.55) 55%, rgba(10,37,64,0.28) 100%)",
            }}
          />
          <div className="relative z-10 px-4 sm:px-8 md:px-[60px] flex flex-col gap-[12px] items-center text-center max-w-[640px]">
            <p className="font-body font-extrabold text-[12px] tracking-[1.2px] uppercase text-[#c8e0fd]">
              Mint Sanitary
            </p>
            <h1 className="font-display text-[36px] sm:text-[48px] md:text-[54px] leading-[1.1] text-white uppercase">
              Blog
            </h1>
            <p className="font-body font-medium text-[16px] sm:text-[18px] text-white/80 max-w-[460px] leading-[1.55]">
              Cleaning tips, seasonal guides, and home maintenance advice from our team.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[80px] md:h-[100px]">
              <path d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z" fill="rgba(255,255,255,0.10)" />
            </svg>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-[80px] md:py-[100px]">
          <div className="px-4 sm:px-8 md:px-[60px] max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px]">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-[16px] border border-black/8 overflow-hidden hover:shadow-[0_8px_32px_rgba(37,56,98,0.13)] transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden" style={{ height: "220px" }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px] p-[24px] bg-white flex-1">
                    <div className="flex items-center gap-[8px]">
                      <span className="font-body font-extrabold text-[11px] tracking-[0.72px] uppercase text-[#6191e9]">
                        {post.category}
                      </span>
                      <span className="text-black/20">·</span>
                      <span className="font-body text-[12px] text-black/40">{post.date}</span>
                    </div>
                    <h2 className="font-display text-[20px] leading-[1.25] text-[#253862] uppercase group-hover:text-[#6191e9] transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="font-body text-[14px] leading-[1.6] text-black/60 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="font-body font-extrabold text-[13px] tracking-[0.32px] uppercase text-[#6191e9] mt-[4px]">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[80px] md:py-[100px] bg-[#253862]">
          <div className="flex flex-col gap-[24px] items-center px-4 sm:px-8 md:px-[60px] text-center">
            <h2 className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-white uppercase">
              Ready for a spotless home?
            </h2>
            <p className="font-body font-medium text-[16px] text-white/65 max-w-[480px] leading-[28px]">
              Let Mint Sanitary handle the hard work. Book your house cleaning in North Vancouver today.
            </p>
            <div className="flex flex-col sm:flex-row gap-[16px]">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#253862] font-body font-extrabold text-[15px] tracking-[0.32px] uppercase rounded-[99px] px-[36px] py-[13px] hover:bg-white/90 transition-colors duration-200"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:+12366883248"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white font-body font-extrabold text-[15px] tracking-[0.32px] uppercase rounded-[99px] px-[36px] py-[13px] hover:border-white hover:bg-white/10 transition-colors duration-200"
              >
                Call 236-688-3248
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
