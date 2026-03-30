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
} from "react-icons/fa6";

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
function TOCBlock({ items }) {
  return (
    <nav className="my-8 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-5">
      <div className="flex items-center gap-2 mb-4">
        <FaBookOpen className="text-indigo-600 text-sm" />
        <span className="text-sm font-bold text-indigo-900 uppercase tracking-widest">
          {"Table of Contents"}
        </span>
      </div>
      <ol className="space-y-2">
        {items.map(({ label, href }, i) => (
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
  );
}
function FAQBlock({ items }) {
  return (
    <div className="space-y-3">
      {items.map(({ q, a }) => (
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
  );
}
function RelatedBlock({ items }) {
  return (
    <aside className="mt-16 pt-10 border-t border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-5">
        {"Related Articles"}
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map(({ tag, title, href, time }) => (
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
  );
}
function CTA({ title, desc }) {
  return (
    <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-8 py-8 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2">
        {"Need Expert Help?"}
      </p>
      <h2 className="text-xl font-extrabold text-white mb-3">{title}</h2>
      <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
        {desc}
      </p>
      <Link
        href="/contact-us"
        className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all text-sm shadow-lg"
      >
        {"Talk to an Engineer"}
        <FaArrowRight className="text-xs" />
      </Link>
    </div>
  );
}
function Header({ tags, title, subtitle, sub, date, read, tech }) {
  return (
    <header className="mb-8">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {tags.map((t) => (
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
        {title}
        <span className="block text-indigo-600">{subtitle}</span>
      </h1>
      {sub && <p className="text-sm text-gray-500 mb-4">{sub}</p>}
      <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
        <span className="flex items-center gap-1.5">
          <FaCalendarDays className="text-xs" />
          {date}
        </span>
        <span className="flex items-center gap-1.5">
          <FaClock className="text-xs" />
          {read}
        </span>
        <span className="flex items-center gap-1.5">
          <FaCode className="text-xs" />
          {tech}
        </span>
      </div>
    </header>
  );
}

export const metadata = {
  title: "Next.js API Route 405 Method Not Allowed — Fixed [2026]",
  description:
    "Fix Next.js API route returning 405 Method Not Allowed. Covers App Router handler naming (GET/POST/PUT/DELETE), Pages Router differences, CORS preflight, and OPTIONS handler.",
  keywords:
    "nextjs api route 405 method not allowed, next.js route handler 405, nextjs GET POST not working app router 2026, next.js api method not allowed fix",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-api-route-405-method-not-allowed",
  },
  openGraph: {
    title: "Next.js API Route 405 Method Not Allowed — Fixed [2026]",
    description:
      "Fix 405 errors in Next.js API routes — handler naming, App Router vs Pages Router, CORS.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-api-route-405-method-not-allowed",
  },
};

const TOC = [
  { label: "Why Next.js returns 405 Method Not Allowed", href: "#why" },
  {
    label: "Fix 1 — Use named exports in App Router (GET, POST, etc.)",
    href: "#fix-1",
  },
  { label: "Fix 2 — Fix Pages Router handler method check", href: "#fix-2" },
  { label: "Fix 3 — Add OPTIONS handler for CORS preflight", href: "#fix-3" },
  { label: "Fix 4 — Fix PUT and DELETE returning 405", href: "#fix-4" },
  { label: "Fix 5 — Dynamic route handlers", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does my Next.js API route return 405?",
    a: "In the App Router, HTTP methods are handled by named exports — GET, POST, PUT, DELETE. If you export a function with any other name (like 'handler' or 'default'), Next.js returns 405 for that method. Each method must be a named async export.",
  },
  {
    q: "What is the difference between Pages Router and App Router API routes?",
    a: "In the Pages Router, you export a single default function and check req.method inside it. In the App Router (route.ts), you export separate named functions for each HTTP method: export async function GET(request) and export async function POST(request). Mixing these patterns causes 405 errors.",
  },
  {
    q: "How do I handle multiple HTTP methods in a Next.js App Router route?",
    a: "Export a separate async function for each method from the same route.ts file. For example: export async function GET() { ... } and export async function POST() { ... } in the same file. Next.js routes the request to the correct function based on the HTTP method.",
  },
  {
    q: "Why does my CORS preflight OPTIONS request return 405?",
    a: "CORS preflight requests use the OPTIONS method. In the App Router, you must explicitly export an OPTIONS handler that returns the correct CORS headers. Without it, Next.js returns 405 for OPTIONS, blocking cross-origin requests.",
  },
  {
    q: "Can I have a catch-all method handler in App Router?",
    a: "No. You must export one function per method. There is no wildcard method handler in App Router. If you want to handle all methods in one function, use the Pages Router pattern with a default export and req.method checks.",
  },
  {
    q: "What HTTP methods does Next.js App Router support?",
    a: "The App Router supports GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS as named exports. Any other method name will not be recognised and will return 405.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js API Route 405 Method Not Allowed — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-api-route-405-method-not-allowed",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function FAQSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
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

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["Next.js", "API Routes", "Error Fix"]}
            title={"Next.js API Route 405 Method Not Allowed"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: App Router named exports · Pages Router · OPTIONS handler · CORS preflight · PUT DELETE"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Next.js 14/15 · App Router · REST API"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error"}
            </p>
            <ErrorBlock>{`POST /api/users 405 Method Not Allowed
// or in the browser console:
Failed to load resource: the server responded with a status of 405`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ App Router Fix — named exports"}
            </p>
            <CodeBlock title="app/api/users/route.ts">{`// App Router: each HTTP method = a named export
export async function GET(request: Request) {
  const users = await db.user.findMany()
  return Response.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  const user = await db.user.create({ data: body })
  return Response.json(user, { status: 201 })
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why Next.js Returns 405 Method Not Allowed"}</SH>
          <P>
            {
              "The App Router changed how API routes work. In the Pages Router, you export a single "
            }
            <IC>{"default"}</IC>
            {" function and check "}
            <IC>{"req.method"}</IC>
            {
              " inside it. In the App Router, you must export a separate named async function for each HTTP method — "
            }
            <IC>{"GET"}</IC>
            {", "}
            <IC>{"POST"}</IC>
            {", "}
            <IC>{"PUT"}</IC>
            {", "}
            <IC>{"DELETE"}</IC>
            {", "}
            <IC>{"PATCH"}</IC>
            {", "}
            <IC>{"HEAD"}</IC>
            {", "}
            <IC>{"OPTIONS"}</IC>
            {"."}
          </P>
          <P>
            {"If you use the old Pages Router pattern in an App Router "}
            <IC>{"route.ts"}</IC>
            {
              " file — or misname your exports — Next.js returns 405 for the unrecognised method."
            }
          </P>

          <FixCard
            number="1"
            title="Use Named Exports in App Router"
            time="2 min"
            tag="Root cause — wrong export pattern"
          >
            <CodeBlock title="app/api/products/route.ts — correct App Router pattern">{`import { NextRequest } from "next/server"

// ✅ Each HTTP method = its own named async export
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const products = await db.product.findMany({ where: { category } })
  return Response.json(products)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const product = await db.product.create({ data: body })
  return Response.json(product, { status: 201 })
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json()
  await db.product.delete({ where: { id } })
  return new Response(null, { status: 204 })
}

// ❌ This does NOT work in App Router — 405 for every request
export default function handler(req: any, res: any) {
  if (req.method === "GET") { ... }
}`}</CodeBlock>
            <WarnBox>
              {
                "The file must be named route.ts (or route.js) — not handler.ts or api.ts. Any other filename is treated as a regular Server Component and will not receive HTTP requests."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="2"
            title="Fix Pages Router Method Check"
            time="2 min"
            tag="Using pages/api/ directory — old pattern"
          >
            <P>
              {"If you are using the Pages Router ("}
              <IC>{"pages/api/"}</IC>
              {"  directory), export a single default function and check "}
              <IC>{"req.method"}</IC>
              {" explicitly. Return 405 for unsupported methods."}
            </P>
            <CodeBlock title="pages/api/users.ts — Pages Router pattern">{`import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const users = await db.user.findMany()
    return res.status(200).json(users)
  }

  if (req.method === "POST") {
    const user = await db.user.create({ data: req.body })
    return res.status(201).json(user)
  }

  // Explicitly return 405 for unsupported methods
  res.setHeader("Allow", ["GET", "POST"])
  return res.status(405).json({ error: \`Method \${req.method} not allowed\` })
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Add OPTIONS Handler for CORS Preflight"
            time="3 min"
            tag="Fetch from frontend blocked — CORS preflight failing"
          >
            <P>
              {
                "When your frontend JavaScript calls an API on a different origin, the browser sends a preflight "
              }
              <IC>{"OPTIONS"}</IC>
              {
                " request first. Without an OPTIONS handler, Next.js returns 405, blocking the main request."
              }
            </P>
            <CodeBlock title="app/api/data/route.ts — with CORS headers">{`const CORS_HEADERS = {
  "Access-Control-Allow-Origin": process.env.FRONTEND_URL ?? "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

// Handle CORS preflight
export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS })
}

export async function GET() {
  const data = await db.item.findMany()
  return Response.json(data, { headers: CORS_HEADERS })
}

export async function POST(request: Request) {
  const body = await request.json()
  const item = await db.item.create({ data: body })
  return Response.json(item, { status: 201, headers: CORS_HEADERS })
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix PUT and DELETE Returning 405"
            time="2 min"
            tag="CRUD routes — update and delete not working"
          >
            <P>
              {
                "PUT and DELETE must also be named exports in App Router. A common pattern is to put the resource ID in a dynamic segment and access it via "
              }
              <IC>{"params"}</IC>
              {"."}
            </P>
            <CodeBlock title="app/api/posts/[id]/route.ts">{`import { NextRequest } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const post = await db.post.findUnique({ where: { id } })
  if (!post) return new Response("Not found", { status: 404 })
  return Response.json(post)
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await request.json()
  const post = await db.post.update({ where: { id }, data: body })
  return Response.json(post)
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  await db.post.delete({ where: { id } })
  return new Response(null, { status: 204 })
}`}</CodeBlock>
            <TipBox>
              {
                "In Next.js 15, params is now a Promise. Always await it: const { id } = await params — this changed from Next.js 14 where params was a plain object."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Dynamic Route Handlers"
            time="2 min"
            tag="Route handler for /api/users/[id]"
          >
            <P>
              {
                "Dynamic API segments use the same bracket syntax as pages. The folder structure "
              }
              <IC>{"app/api/users/[id]/route.ts"}</IC>
              {" handles requests like "}
              <IC>{"/api/users/abc123"}</IC>
              {"."}
            </P>
            <CodeBlock title="Correct file structure for dynamic API routes">{`app/
└── api/
    ├── users/
    │   ├── route.ts          → handles GET /api/users, POST /api/users
    │   └── [id]/
    │       └── route.ts      → handles GET /api/users/123, PUT /api/users/123

# ❌ Wrong — query param approach from Pages Router
# app/api/users/route.ts  trying to handle /api/users?id=123 for PUT
# Use [id]/route.ts instead for resource-specific operations`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "In App Router: use named exports (GET, POST, PUT, DELETE, PATCH, OPTIONS) — never a default export",
              "Name the file route.ts not handler.ts or api.ts — only route.ts receives HTTP requests",
              "Add an OPTIONS handler whenever your API will be called from a different origin (CORS preflight)",
              "In Next.js 15, await the params argument — it is now a Promise, not a plain object",
              "Use dynamic segments [id]/route.ts for resource-specific routes — not query parameters",
              "In Pages Router, always include a final res.status(405) fallthrough for unsupported methods",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Next.js",
                title: "Fix: Next.js Server Actions not working",
                href: "/category/next-js/error/nextjs-server-action-not-working",
                time: "7 min read",
              },
              {
                tag: "Node.js",
                title: "Fix: CORS error in Node.js",
                href: "/category/node-js/error/cors-error-nodejs",
                time: "6 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js middleware not working",
                href: "/category/next-js/error/nextjs-middleware-not-working",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production REST APIs with Next.js"}
            desc={
              "Softplix engineers build scalable APIs using Next.js App Router, Prisma, and Supabase. Need help designing your API layer? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
