import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div className="md:mt-20">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-white text-indigo-600 shadow">
              Premium Software Development Studio
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Building Next-Gen <br className="hidden sm:block" />
              Software Solutions
            </h1>

            <p className="mt-5 max-w-xl text-gray-600">
              We design and develop high-quality apps, websites, and cloud
              systems tailored to your business.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="#service"
                className="px-6 py-3 rounded-full bg-indigo-600 text-white text-sm font-medium shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition"
              >
                Get Started
              </Link>
              <Link
                href="/our-work"
                className="text-sm font-medium text-indigo-600 hover:underline"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <Image
            src={"/home/hero-img.png"}
            alt="Hero Image"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
