// ============================================================
// ARTICLE 4 — Next.js Image component not working
// FILE: app/category/next-js/error/nextjs-image-component-not-working/page.jsx
// ============================================================
import Link from "next/link";
import {
  FaClock,
  FaCalendarDays,
  FaTag,
  FaArrowRight,
  FaCircleCheck,
  FaCode,
  FaTerminal,
  FaTriangleExclamation,
  FaLightbulb,
  FaBookOpen,
  FaCircleXmark,
} from "react-icons/fa6";

export const metadata = {
  title: "Next.js Image Component Not Working — Fixed [2026]",
  description:
    "Fix Next.js Image component not working. Covers invalid src, missing hostname in next.config, width/height required, fill layout, and external image domains.",
  keywords:
    "nextjs image component not working, next image invalid src, next js image hostname not configured 2026, nextjs image not displaying fix",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-image-component-not-working",
  },
  openGraph: {
    title: "Next.js Image Component Not Working — Fixed [2026]",
    description:
      "Fix Next.js Image errors — hostname config, dimensions, fill layout, external images.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-image-component-not-working",
  },
};

function CodeBlock({ title, children }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
      {title && (
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
          <FaTerminal className="text-indigo-400 text-xs flex-shrink-0" />
          <span className="text-xs font-mono text-slate-300">{title}</span>
        </div>
      )}
      <pre className="bg-slate-900 px-5 py-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-green-400 font-mono whitespace-pre">
          {children}
        </code>
      </pre>
    </div>
  );
}
function ErrorBlock({ children }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-red-900 shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-red-950 border-b border-red-900">
        <FaTriangleExclamation className="text-red-400 text-xs flex-shrink-0" />
        <span className="text-xs font-mono text-red-300">{"Error"}</span>
      </div>
      <pre className="bg-slate-900 px-5 py-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-red-400 font-mono whitespace-pre">
          {children}
        </code>
      </pre>
    </div>
  );
}
function TipBox({ children }) {
  return (
    <div className="my-6 flex gap-3 bg-indigo-50 border border-indigo-100 rounded-2xl px-5 py-4">
      <FaLightbulb className="text-indigo-500 text-lg flex-shrink-0 mt-0.5" />
      <p className="text-sm text-indigo-900 leading-relaxed">{children}</p>
    </div>
  );
}
function WarnBox({ children }) {
  return (
    <div className="my-6 flex gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
      <FaTriangleExclamation className="text-amber-500 text-lg flex-shrink-0 mt-0.5" />
      <p className="text-sm text-amber-900 leading-relaxed">{children}</p>
    </div>
  );
}
function FixCard({ number, title, time, tag, children }) {
  return (
    <div className="my-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-50 to-slate-50 border-b border-gray-100">
        <span className="w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-black flex items-center justify-center flex-shrink-0">
          {number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 text-base leading-tight">
            {title}
          </h3>
          {tag && (
            <span className="text-xs text-indigo-500 font-semibold">{tag}</span>
          )}
        </div>
        <span className="flex items-center gap-1.5 text-xs text-gray-400 whitespace-nowrap flex-shrink-0">
          <FaClock className="text-xs" />
          {time}
        </span>
      </div>
      <div className="px-6 py-5 bg-white">{children}</div>
    </div>
  );
}
function CL({ items }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
          <FaCircleCheck className="text-green-500 mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function SH({ id, children }) {
  return (
    <h2
      id={id}
      className="text-2xl font-extrabold text-gray-900 mt-12 mb-4 leading-tight tracking-tight scroll-mt-8"
    >
      {children}
    </h2>
  );
}
function H3({ children }) {
  return (
    <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 leading-snug">
      {children}
    </h3>
  );
}
function P({ children }) {
  return (
    <p className="text-[15px] text-gray-600 leading-[1.85] my-4">{children}</p>
  );
}
function IC({ children }) {
  return (
    <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-indigo-700">
      {children}
    </code>
  );
}

const TOC4 = [
  { label: "Common Next.js Image errors", href: "#what" },
  {
    label: "Fix 1 — Configure external hostname in next.config",
    href: "#fix-1",
  },
  { label: "Fix 2 — Always provide width and height", href: "#fix-2" },
  { label: "Fix 3 — Using fill for responsive images", href: "#fix-3" },
  { label: "Fix 4 — Local images — correct import pattern", href: "#fix-4" },
  { label: "Fix 5 — Image not showing — CSS parent issue", href: "#fix-5" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS4 = [
  {
    q: "Next.js Image: hostname not configured in next.config.js error?",
    a: "Add the external domain to remotePatterns in next.config.js: images: { remotePatterns: [{ protocol: 'https', hostname: 'images.example.com' }] }. Restart your dev server after changing next.config.js.",
  },
  {
    q: "Next.js Image requires width and height — how to fix?",
    a: "Always provide width and height props unless using fill: <Image src={src} width={800} height={600} alt='description' />. These are required so Next.js can reserve space before the image loads, preventing layout shift.",
  },
  {
    q: "How do I make Next.js Image fill its parent container?",
    a: "Add fill prop and make the parent position: relative with a defined height: <div style={{ position: 'relative', height: '400px' }}><Image src={src} fill alt='...' style={{ objectFit: 'cover' }} /></div>",
  },
  {
    q: "Next.js Image not displaying in production but works locally?",
    a: "Your image domain is not in remotePatterns in next.config.js, or the image path is wrong in the deployed environment. Check that all external hostnames are configured and that local images are in the public/ folder or imported correctly.",
  },
  {
    q: "Can I use next/image with any external URL?",
    a: "No. For security, Next.js requires you to explicitly whitelist external domains in next.config.js remotePatterns. This prevents your image optimization endpoint from being used as a proxy for arbitrary URLs.",
  },
  {
    q: "Next.js Image blurDataURL error — how to fix?",
    a: "If using placeholder='blur' with a remote image, you must provide a blurDataURL: <Image src={url} placeholder='blur' blurDataURL='/placeholder.png' width={800} height={600} alt='...' />. For local images, blurDataURL is auto-generated.",
  },
];

function ArticleSchema4() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js Image Component Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-image-component-not-working",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function FaqSchema4() {
  const s = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS4.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}

const RELATED4 = [
  {
    tag: "Next.js",
    title: "Fix: Next.js build failing on Vercel",
    href: "nextjs-build-failing-vercel",
    time: "6 min read",
  },
  {
    tag: "Next.js",
    title: "Fix: Next.js hydration failed",
    href: "nextjs-hydration-failed",
    time: "7 min read",
  },
  {
    tag: "Next.js",
    title: "Fix: Next.js NEXT_PUBLIC_ env undefined",
    href: "nextjs-next-public-env-undefined",
    time: "5 min read",
  },
];

export default function Page4() {
  return (
    <>
      <ArticleSchema4 />
      <FaqSchema4 />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Next.js", "Image", "Error Fix"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-50 text-indigo-600 border border-indigo-100"
                >
                  <FaTag className="text-[10px]" />
                  {t}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-green-50 text-green-700 border border-green-100">
                {"2026 Updated"}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
              {"Next.js Image Component Not Working"}
              <span className="block text-indigo-600">{"— Fixed [2026]"}</span>
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              {
                "Also covers: hostname not configured · width and height required · fill layout issues"
              }
            </p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="text-xs" />
                {"January 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-xs" />
                {"5 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"Next.js 13–15 · App Router"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quick Fix — Add Hostname to next.config.js"}
            </p>
            <CodeBlock title="next.config.js">{`module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.cloudinary.com' },
    ],
  },
}
// Restart dev server after changing next.config.js`}</CodeBlock>
          </div>

          <nav className="my-8 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-5">
            <div className="flex items-center gap-2 mb-4">
              <FaBookOpen className="text-indigo-600 text-sm" />
              <span className="text-sm font-bold text-indigo-900 uppercase tracking-widest">
                {"Table of Contents"}
              </span>
            </div>
            <ol className="space-y-2">
              {TOC4.map(({ label, href }, i) => (
                <li key={href} className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-indigo-400 w-5 flex-shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={href}
                    className="text-sm text-indigo-700 hover:text-indigo-900 hover:underline leading-snug"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <SH id="what">{"Common Next.js Image Errors"}</SH>
          <ErrorBlock>{`Error: Invalid src prop on next/image, hostname "images.unsplash.com" is not configured under images in your next.config.js

Error: Image with src "/hero.jpg" has "fill" but is missing "sizes" prop. Please add it to improve page performance.

Error: Image with src "/photo.jpg" must use "width" and "height" properties or "fill" property.`}</ErrorBlock>

          <FixCard
            number="1"
            title="Configure External Hostname in next.config.js"
            time="2 min"
            tag="Invalid src — hostname not configured"
          >
            <CodeBlock title="next.config.js">{`/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',  // wildcard for subdomains
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        pathname: '/my-bucket/**',      // restrict to specific path
      },
    ],
  },
}
module.exports = nextConfig`}</CodeBlock>
            <WarnBox>
              {
                "Always restart your Next.js dev server after changing next.config.js. The change will not take effect until you do."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="2"
            title="Always Provide Width and Height"
            time="1 min"
            tag="Missing dimensions — prevents layout shift"
          >
            <CodeBlock title="components/ProductImage.jsx">{`import Image from 'next/image'

// ❌ WRONG — missing dimensions
<Image src="/product.jpg" alt="Product" />

// ✅ CORRECT — explicit dimensions
<Image
  src="/product.jpg"
  alt="Product photo"
  width={800}
  height={600}
/>

// ✅ For local imports — dimensions auto-detected
import productImg from '/public/product.jpg'
<Image src={productImg} alt="Product photo" />`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fill Layout for Responsive Images"
            time="3 min"
            tag="Image filling its container"
          >
            <CodeBlock title="components/HeroBanner.jsx">{`import Image from 'next/image'

// ✅ Parent must be position: relative with defined height
export default function HeroBanner() {
  return (
    <div style={{ position: 'relative', height: '500px', width: '100%' }}>
      <Image
        src="/hero.jpg"
        alt="Hero banner"
        fill
        style={{ objectFit: 'cover' }}
        sizes="100vw"
        priority  // add for above-the-fold images
      />
    </div>
  )
}

// ✅ With Tailwind
<div className="relative h-64 w-full">
  <Image src="/hero.jpg" alt="Hero" fill className="object-cover" sizes="100vw" />
</div>`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Local Images — Correct Import Pattern"
            time="1 min"
            tag="Images from public/ or src/ directory"
          >
            <CodeBlock title="components/Logo.jsx">{`import Image from 'next/image'

// ✅ Option A — import from /public (use string path)
<Image src="/logo.png" width={120} height={40} alt="Logo" />

// ✅ Option B — import as module (auto width/height)
import logo from '@/public/logo.png'
<Image src={logo} alt="Logo" />

// ✅ Option C — import from src/assets
import avatar from '@/assets/avatar.jpg'
<Image src={avatar} alt="Avatar" />

// ❌ WRONG — absolute file system path
<Image src="/Users/me/project/public/logo.png" alt="Logo" />`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Image Not Showing — CSS Parent Issue"
            time="2 min"
            tag="Image renders in DOM but is invisible"
          >
            <P>
              {
                "If the image is in the DOM (visible in DevTools) but not on screen, the parent container has "
              }
              <IC>{"overflow: hidden"}</IC>
              {" or "}
              <IC>{"height: 0"}</IC>
              {"."}
            </P>
            <CodeBlock title="Diagnosis">{`/* Check parent in DevTools:
   - height: 0 or auto with no content → add explicit height
   - overflow: hidden → may be clipping the image
   - position not relative → fill images need relative parent */

// ✅ Fix — ensure parent has height
<div className="relative h-48 overflow-hidden rounded-lg">
  <Image src={src} fill alt={alt} className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
</div>`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Add all external image hostnames to remotePatterns in next.config.js on day one",
              "Always provide width and height — or use fill with a positioned parent",
              "Add priority to any above-the-fold image (hero, banner, LCP element)",
              "Add sizes prop to fill images for correct responsive behavior",
              "Import local images as modules when possible — Next.js auto-detects dimensions",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <div className="space-y-3">
            {FAQS4.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 text-sm hover:text-indigo-600 transition-colors select-none">
                  {q}
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-open:bg-indigo-100 group-open:text-indigo-600 transition-colors font-bold text-base leading-none">
                    <span className="group-open:hidden">{"+"}</span>
                    <span className="hidden group-open:inline">{"−"}</span>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>

          <aside className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              {"Related Articles"}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {RELATED4.map(({ tag, title, href, time }) => (
                <Link
                  key={href}
                  href={href}
                  className="group block bg-slate-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-200 rounded-2xl p-5 transition-all"
                >
                  <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
                    {tag}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700 leading-snug mb-3">
                    {title}
                  </p>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <FaClock className="text-xs" />
                    {time}
                  </span>
                </Link>
              ))}
            </div>
          </aside>

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-8 py-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2">
              {"Need Expert Help?"}
            </p>
            <h2 className="text-xl font-extrabold text-white mb-3">
              {"We Build Production-Grade Next.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds full-stack Next.js applications. Need help with image optimisation or performance? We can help."
              }
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all text-sm shadow-lg"
            >
              {"Talk to an Engineer"}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
