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
  title: "shadcn/ui Component Style Override Not Working — Fixed [2026]",
  description:
    "Fix shadcn/ui custom styles not applying. Covers cn() merging, className prop, Tailwind conflict resolution with tailwind-merge, and variant customisation.",
  keywords:
    "shadcn component style override not working, shadcn className not working, tailwind-merge shadcn, shadcn custom styles 2026, shadcn ui override button styles",
  alternates: {
    canonical:
      "https://softplix.com/category/shadcn/error/shadcn-component-style-override",
  },
  openGraph: {
    title: "shadcn/ui Style Override Not Working — Fixed [2026]",
    description:
      "Fix shadcn/ui style overrides — cn(), tailwind-merge, className prop, variant customisation.",
    type: "article",
    url: "https://softplix.com/category/shadcn/error/shadcn-component-style-override",
  },
};

const TOC = [
  { label: "Why shadcn/ui style overrides don't apply", href: "#why" },
  {
    label: "Fix 1 — Pass className and let cn() merge correctly",
    href: "#fix-1",
  },
  { label: "Fix 2 — Use tailwind-merge to resolve conflicts", href: "#fix-2" },
  { label: "Fix 3 — Add custom variants with cva()", href: "#fix-3" },
  {
    label: "Fix 4 — Override CSS variables for global theming",
    href: "#fix-4",
  },
  {
    label: "Fix 5 — Extend the component directly (you own the code)",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does my className not override shadcn/ui component styles?",
    a: "Tailwind CSS class conflicts are resolved by the order classes appear in the generated CSS, not the order in your HTML. When you add a className to a shadcn component, both your class and the component's class exist. tailwind-merge (used inside cn()) resolves this by keeping only the last class in conflicting groups — but only if you pass your className through cn() correctly.",
  },
  {
    q: "What is tailwind-merge and why does shadcn/ui use it?",
    a: "tailwind-merge is a library that intelligently merges Tailwind CSS classes, removing conflicts. For example, merging 'px-4 px-6' produces 'px-6' — the last value wins. Without it, both classes would exist in the HTML and CSS cascade order determines which wins, leading to unpredictable results.",
  },
  {
    q: "Can I change shadcn/ui button colors?",
    a: "Yes. Either pass a custom className with your color classes, override the CSS variables (--primary) in globals.css, or add a new variant using cva() inside the Button component file. Since you own the component code, you can modify it directly.",
  },
  {
    q: "What is cva() in shadcn/ui?",
    a: "cva() (class-variance-authority) is a utility that creates variant-based class sets. shadcn components use cva() to define named variants (like 'default', 'destructive', 'outline') and sizes ('sm', 'md', 'lg'). You can add new variants by adding cases to the cva() call in the component file.",
  },
  {
    q: "How do I add a new button variant to shadcn/ui?",
    a: "Open components/ui/button.tsx and find the cva() call. Add your new variant name and its Tailwind classes inside the variants object. Then use it as <Button variant='your-variant'>. Since you own the file, you can freely extend it.",
  },
  {
    q: "Can I globally change the border radius of all shadcn/ui components?",
    a: "Yes. In globals.css, change the --radius CSS variable: --radius: 0.75rem changes all components that use rounded-md to a larger radius. You can also change it per component by passing className='rounded-none' to override the default.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "shadcn/ui Component Style Override Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/shadcn/error/shadcn-component-style-override",
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
            tags={["shadcn/ui", "Styling", "Error Fix"]}
            title={"shadcn/ui Component Style Override"}
            subtitle={"Not Working — Fixed [2026]"}
            sub={
              "Also covers: cn() merging · tailwind-merge · cva() variants · CSS variables · extending components"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"shadcn/ui · Tailwind CSS · tailwind-merge · cva"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`// className added but component still looks the same
<Button className="bg-red-500 text-white">Click me</Button>
// → Button still shows default indigo/primary color`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Root cause — Tailwind class conflict, cn() resolves it"}
            </p>
            <CodeBlock title="How cn() works inside shadcn components">{`// Inside button.tsx — cn() merges classes, tailwind-merge resolves conflicts
className={cn(buttonVariants({ variant, size }), className)}
// Your className is appended last — wins the conflict via tailwind-merge`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why shadcn/ui Style Overrides Don't Apply"}</SH>
          <P>
            {"All shadcn/ui components use the "}
            <IC>{"cn()"}</IC>
            {" function to merge their built-in classes with your "}
            <IC>{"className"}</IC>
            {" prop. The "}
            <IC>{"cn()"}</IC>
            {" function uses "}
            <IC>{"tailwind-merge"}</IC>
            {
              " internally, which resolves conflicts between Tailwind utilities — the last class in conflicting groups wins. Your "
            }
            <IC>{"className"}</IC>
            {" is appended last, so it should win."}
          </P>
          <P>
            {
              "If your override isn't working, usually the component isn't forwarding your "
            }
            <IC>{"className"}</IC>
            {" through "}
            <IC>{"cn()"}</IC>
            {
              " correctly, or the classes aren't actually conflicting (they target different CSS properties)."
            }
          </P>

          <FixCard
            number="1"
            title="Pass className and Let cn() Merge Correctly"
            time="2 min"
            tag="Your className is appended last — should win"
          >
            <CodeBlock title="Correct override patterns">{`import { Button } from "@/components/ui/button"

// ✅ Override background color
<Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
  Custom green
</Button>

// ✅ Override width
<Button className="w-full">Full width button</Button>

// ✅ Override padding
<Button className="px-8 py-3">Larger padding</Button>

// ✅ Override border radius
<Button className="rounded-full">Pill button</Button>

// ❌ Won't work — !important not needed, tailwind-merge handles conflicts
<Button className="!bg-red-500">This is unnecessary</Button>`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Use tailwind-merge to Resolve Class Conflicts"
            time="2 min"
            tag="Custom components not merging correctly"
          >
            <P>
              {
                "When building your own components on top of shadcn, always use "
              }
              <IC>{"cn()"}</IC>
              {" to merge classes — never string concatenation."}
            </P>
            <CodeBlock title="Use cn() in your own components">{`import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// ❌ String concatenation — conflicts not resolved
function DangerButton({ className, ...props }) {
  return <Button className={"bg-red-500 " + className} {...props} />
  // If className includes another bg-*, both classes exist — unpredictable
}

// ✅ cn() — conflicts resolved correctly by tailwind-merge
function DangerButton({ className, ...props }) {
  return (
    <Button
      className={cn("bg-red-500 hover:bg-red-600 text-white", className)}
      {...props}
    />
  )
  // className bg wins because it comes AFTER "bg-red-500" in the cn() call
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Add Custom Variants with cva()"
            time="5 min"
            tag="Add a 'success' or 'warning' variant to Button"
          >
            <CodeBlock title="components/ui/button.tsx — add custom variant">{`import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center ...",   // base classes
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground ...",
        outline: "border border-input bg-background ...",
        // ✅ Add your custom variants here:
        success: "bg-emerald-600 text-white hover:bg-emerald-700",
        warning: "bg-amber-500 text-white hover:bg-amber-600",
        brand:   "bg-violet-600 text-white hover:bg-violet-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 text-base",  // ✅ custom size
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Usage:
<Button variant="success">Saved!</Button>
<Button variant="warning" size="xl">Warning</Button>`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Override CSS Variables for Global Theming"
            time="3 min"
            tag="Change the primary color across all components"
          >
            <P>
              {"For brand-wide color changes, update the CSS variables in "}
              <IC>{"globals.css"}</IC>
              {" instead of overriding classes on every component."}
            </P>
            <CodeBlock title="globals.css — change primary color">{`:root {
  /* Change primary from indigo to violet */
  --primary: 262 83% 58%;              /* violet-600 */
  --primary-foreground: 0 0% 100%;     /* white */

  /* Change border radius for all components */
  --radius: 0.75rem;   /* more rounded */

  /* Change ring/focus color */
  --ring: 262 83% 58%;
}

.dark {
  --primary: 263 69% 72%;   /* lighter violet for dark mode */
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Extend the Component Directly"
            time="5 min"
            tag="You own the code — just modify it"
          >
            <P>
              {
                "Unlike npm packages, shadcn components are copied into your project. You can modify them freely — add props, change markup, wrap with additional logic."
              }
            </P>
            <CodeBlock title="components/ui/button.tsx — add an icon prop">{`import { Loader2 } from "lucide-react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof buttonVariants>["variant"]
  size?: VariantProps<typeof buttonVariants>["size"]
  isLoading?: boolean    // ← custom prop added directly to shadcn component
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  }
)

// Usage:
<Button isLoading={isPending}>
  {isPending ? "Saving..." : "Save"}
</Button>`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always use cn() when merging classes — never string concatenation or template literals",
              "Remember: tailwind-merge resolves conflicts by keeping the last class in a conflict group",
              "For brand-wide changes (colors, radius), use CSS variables — not per-component overrides",
              "Add custom variants to cva() in the component file instead of duplicating the component",
              "Since you own the component code, extend it directly with new props when needed",
              "Test overrides in both light and dark mode — CSS variable changes affect both",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui not working in Next.js",
                href: "/category/shadcn/error/shadcn-ui-not-working-nextjs",
                time: "7 min read",
              },
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui dark mode not working",
                href: "/category/shadcn/error/shadcn-dark-mode-not-working",
                time: "6 min read",
              },
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui form validation not showing",
                href: "/category/shadcn/error/shadcn-form-validation-not-showing",
                time: "7 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Custom Design Systems with shadcn/ui"}
            desc={
              "Softplix engineers create branded component libraries on shadcn/ui — custom variants, themes, and extended components. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
