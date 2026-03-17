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
  FaChevronRight,
  FaCircleXmark,
} from "react-icons/fa6";

export const metadata = {
  title: "Mongoose Schema Validation Error — Fixed [Complete Guide 2026]",
  description:
    "Fix Mongoose schema validation errors. Handle required fields, type mismatches, enum violations, custom validators, and return clean validation messages to your API clients.",
  keywords:
    "mongoose schema validation error, mongoose validation failed, mongoose required field error, fix mongoose validation 2026, mongoose validator error",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/mongoose-schema-validation-error",
  },
  openGraph: {
    title: "Mongoose Schema Validation Error — Fixed [Complete Guide 2026]",
    description:
      "Fix Mongoose schema validation errors — required fields, types, enums, custom validators.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/mongoose-schema-validation-error",
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
        <span className="text-xs font-mono text-red-300">
          {"Validation Error"}
        </span>
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

function CheckList({ items }) {
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

function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="text-2xl font-extrabold text-gray-900 mt-12 mb-4 leading-tight tracking-tight scroll-mt-8"
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 leading-snug">
      {children}
    </h3>
  );
}

function Prose({ children }) {
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

const TOC = [
  { label: "What is a Mongoose validation error?", href: "#what-it-means" },
  { label: "Fix 1 — Read the validation error correctly", href: "#fix-1" },
  { label: "Fix 2 — Required field validation", href: "#fix-2" },
  { label: "Fix 3 — Type validation errors", href: "#fix-3" },
  { label: "Fix 4 — Enum validation errors", href: "#fix-4" },
  { label: "Fix 5 — Custom validators", href: "#fix-5" },
  {
    label: "Fix 6 — Validation on updates (findByIdAndUpdate)",
    href: "#fix-6",
  },
  { label: "Fix 7 — Return validation errors to API client", href: "#fix-7" },
  { label: "Complete schema with all validators", href: "#complete-schema" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is a Mongoose validation error?",
    a: "Mongoose validates documents against your schema before saving. If any field fails validation — missing required field, wrong type, enum mismatch, or custom validator returns false — it throws a ValidationError with details for each failing field.",
  },
  {
    q: "How do I get the validation error message from Mongoose?",
    a: "Catch the error and access err.errors: try { await user.save() } catch(err) { if (err.name === 'ValidationError') { Object.values(err.errors).forEach(e => console.log(e.message)) } }",
  },
  {
    q: "Mongoose validation not running for updates?",
    a: "findByIdAndUpdate() does not run validators by default. Add { runValidators: true } as the third option: await User.findByIdAndUpdate(id, update, { runValidators: true, new: true }).",
  },
  {
    q: "How do I skip Mongoose validation for a specific save?",
    a: "Use: await user.save({ validateBeforeSave: false }). For updates: await User.updateOne(filter, update, { runValidators: false }). Use carefully — bypassing validation can lead to inconsistent data.",
  },
  {
    q: "Required field error even though I provided the field?",
    a: "Check: the field name matches exactly (case-sensitive), the value is not an empty string '' (empty string fails required validation), and you are passing the data correctly to the constructor: new User({ name: req.body.name }).",
  },
  {
    q: "How do I validate unique fields in Mongoose?",
    a: "Add unique: true to the schema field: { email: { type: String, unique: true } }. Note that unique creates a MongoDB index and throws a MongoServerError (code 11000) on duplicate — not a Mongoose ValidationError. Handle it separately in your catch block.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mongoose Schema Validation Error — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/mongoose-schema-validation-error",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}

function FaqSchema() {
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

const RELATED = [
  {
    tag: "MongoDB",
    title: "Fix: Mongoose connection error",
    href: "mongoose-connection-error",
    time: "8 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js server crashing automatically",
    href: "nodejs-server-crashing-automatically",
    time: "7 min read",
  },
  {
    tag: "Express",
    title: "Fix: req.body undefined in Express",
    href: "req-body-undefined-express",
    time: "6 min read",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              {"Home"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <Link
              href="/blog"
              className="hover:text-indigo-600 transition-colors"
            >
              {"Blog"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-gray-500">{"Mongoose Validation Error"}</span>
          </nav> */}

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["MongoDB", "Mongoose", "Error Fix"].map((t) => (
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
              {"Mongoose Schema Validation Error"}
              <span className="block text-indigo-600">
                {"— Fixed [Complete Guide 2026]"}
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="text-xs" />
                {"January 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-xs" />
                {"7 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"Mongoose · MongoDB · Node.js"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Read Your Validation Error First"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {
                "Catch and log the full error — it tells you exactly which field failed and why:"
              }
            </p>
            <CodeBlock title="server.js">{`try {
  await user.save()
} catch (err) {
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message)
    console.log('Validation failed:', messages)
    // ['Name is required', 'Email must be a valid email address']
  }
}`}</CodeBlock>
          </div>

          <nav className="my-8 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-5">
            <div className="flex items-center gap-2 mb-4">
              <FaBookOpen className="text-indigo-600 text-sm" />
              <span className="text-sm font-bold text-indigo-900 uppercase tracking-widest">
                {"Table of Contents"}
              </span>
            </div>
            <ol className="space-y-2">
              {TOC.map(({ label, href }, i) => (
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

          <SectionHeading id="what-it-means">
            {"What Is a Mongoose Validation Error?"}
          </SectionHeading>

          <ErrorBlock>{`ValidationError: User validation failed:
  email: Path \`email\` is required.,
  name: Path \`name\` (\`j\`) is shorter than the minimum allowed length (2).
    at Document.invalidate (node_modules/mongoose/lib/document.js:3016:32)
    at /node_modules/mongoose/lib/document.js:2797:17`}</ErrorBlock>

          <Prose>
            {
              "Mongoose validates every document against your schema definition before saving it to MongoDB. This is by design — it prevents bad, incomplete, or malformed data from reaching your database. When validation fails, Mongoose throws a "
            }
            <IC>{"ValidationError"}</IC>
            {" with detailed information about every field that failed."}
          </Prose>

          <Prose>
            {"Validation errors are "}
            <strong>{"not bugs"}</strong>
            {
              " — they are your schema working correctly. The fix is usually either correcting the data being sent, updating your schema definition, or both."
            }
          </Prose>

          <FixCard
            number="1"
            title="Read the Validation Error Correctly"
            time="1 min"
            tag="Parse the error to see all failing fields"
          >
            <Prose>
              {"A Mongoose ValidationError contains an "}
              <IC>{"errors"}</IC>
              {" object with one entry per failing field. Each entry has a "}
              <IC>{"message"}</IC>
              {", "}
              <IC>{"kind"}</IC>
              {" (required, min, max, enum, etc.), and "}
              <IC>{"value"}</IC>
              {" that was provided."}
            </Prose>

            <CodeBlock title="routes/users.js">{`app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (err) {
    if (err.name === 'ValidationError') {
      // Log each failing field with its message
      Object.entries(err.errors).forEach(([field, error]) => {
        console.log(\`Field: \${field}\`)
        console.log(\`Kind:  \${error.kind}\`)     // required, min, max, enum, user defined
        console.log(\`Value: \${error.value}\`)
        console.log(\`Msg:   \${error.message}\`)
      })

      // Return all validation errors to client
      const errors = Object.values(err.errors).map(e => ({
        field: e.path,
        message: e.message
      }))
      return res.status(400).json({ errors })
    }
    next(err)
  }
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Required Field Validation"
            time="2 min"
            tag="Path X is required"
          >
            <Prose>
              {"Required field errors mean a field marked "}
              <IC>{"required: true"}</IC>
              {
                " in your schema was not provided — or was provided as an empty string, "
              }
              <IC>{"null"}</IC>
              {", or "}
              <IC>{"undefined"}</IC>
              {"."}
            </Prose>

            <SubHeading>
              {"Define required fields with helpful messages"}
            </SubHeading>
            <CodeBlock title="models/User.js">{`const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name cannot exceed 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [0, 'Age cannot be negative'],
    max: [120, 'Age must be realistic'],
  },
})`}</CodeBlock>

            <SubHeading>{"Common causes of required field errors"}</SubHeading>
            <div className="my-4 rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-slate-50">
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Value provided"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Fails required?"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['"John"', "No ✅"],
                    ["null", "Yes ❌"],
                    ["undefined", "Yes ❌"],
                    ['""  (empty string)', "Yes ❌"],
                    ['"  "  (whitespace only)', "No — add trim: true to fix"],
                    ["0  (number zero)", "No ✅"],
                    ["false", "No ✅"],
                  ].map(([val, fails]) => (
                    <tr
                      key={val}
                      className="border-b border-gray-50 last:border-0"
                    >
                      <td className="px-4 py-3 font-mono text-xs text-gray-700">
                        {val}
                      </td>
                      <td
                        className={`px-4 py-3 text-sm font-semibold ${fails.startsWith("No") ? "text-green-600" : "text-red-500"}`}
                      >
                        {fails}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <TipBox>
              {
                "Add trim: true to string fields to strip whitespace. A string of spaces like '   ' will otherwise pass required validation even though it is effectively empty."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="3"
            title="Type Validation Errors"
            time="2 min"
            tag="Cast to X failed for value Y"
          >
            <ErrorBlock>{`CastError: Cast to Number failed for value "abc" at path "age"
CastError: Cast to ObjectId failed for value "invalid" at path "_id"`}</ErrorBlock>

            <Prose>
              {
                "Type errors occur when you send data of the wrong type — a string where a Number is expected, or a non-ObjectId where an ObjectId is required. Mongoose tries to cast values automatically but throws a CastError when it cannot."
              }
            </Prose>

            <CodeBlock title="routes/users.js">{`// ❌ WRONG — sending age as string "25" instead of number 25
const user = new User({ name: 'John', age: '25abc' })
// CastError: Cast to Number failed for value "25abc"

// ✅ CORRECT — ensure types match schema
const user = new User({
  name: String(req.body.name),
  age: Number(req.body.age),     // convert to number
  isActive: Boolean(req.body.isActive),
})`}</CodeBlock>

            <SubHeading>
              {"Handle cast errors alongside validation errors"}
            </SubHeading>
            <CodeBlock title="routes/users.js">{`} catch (err) {
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message })
  }
  if (err.name === 'CastError') {
    return res.status(400).json({
      error: \`Invalid value for field '\${err.path}': \${err.value}\`
    })
  }
  next(err)
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Enum Validation Errors"
            time="2 min"
            tag="Value X is not a valid enum value"
          >
            <Prose>
              {
                "Enum validation fails when a value is not in the allowed list defined in the schema."
              }
            </Prose>

            <CodeBlock title="models/Post.js">{`const postSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: {
      values: ['draft', 'published', 'archived'],
      message: 'Status must be draft, published, or archived. Got: {VALUE}'
    },
    default: 'draft',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    // Short form — less helpful error message
  }
})`}</CodeBlock>

            <SubHeading>{"Fix — validate before saving"}</SubHeading>
            <CodeBlock title="routes/posts.js">{`app.post('/posts', async (req, res) => {
  const allowedStatuses = ['draft', 'published', 'archived']

  if (req.body.status && !allowedStatuses.includes(req.body.status)) {
    return res.status(400).json({
      error: \`Invalid status. Allowed values: \${allowedStatuses.join(', ')}\`
    })
  }

  try {
    const post = await Post.create(req.body)
    res.status(201).json(post)
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message })
    }
    next(err)
  }
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Custom Validators"
            time="3 min"
            tag="Add domain-specific validation logic"
          >
            <Prose>
              {
                "Mongoose supports custom validators for validation logic that goes beyond built-in constraints."
              }
            </Prose>

            <CodeBlock title="models/User.js">{`const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      },
      message: props => \`\${props.value} is not a valid email address\`
    }
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return v.length >= 8
      },
      message: 'Password must be at least 8 characters long'
    }
  },
  username: {
    type: String,
    validate: {
      // Async validator — check uniqueness
      validator: async function(v) {
        const count = await mongoose.model('User').countDocuments({ username: v })
        return count === 0
      },
      message: props => \`Username '\${props.value}' is already taken\`
    }
  }
})`}</CodeBlock>

            <TipBox>
              {
                "In instance methods and validators, use function() not arrow functions. Arrow functions do not have their own 'this' context — this.fieldName will be undefined."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="6"
            title="Validation on Updates"
            time="2 min"
            tag="findByIdAndUpdate not validating"
          >
            <Prose>
              {"By default, "}
              <IC>{"findByIdAndUpdate()"}</IC>
              {" and "}
              <IC>{"findOneAndUpdate()"}</IC>
              {" do NOT run Mongoose validators. Add "}
              <IC>{"runValidators: true"}</IC>
              {" to enable them."}
            </Prose>

            <CodeBlock title="routes/users.js">{`// ❌ WRONG — no validation on update
await User.findByIdAndUpdate(id, { email: 'not-an-email' })
// No error! Bad data saved to database

// ✅ CORRECT — runValidators: true
await User.findByIdAndUpdate(
  id,
  { email: 'john@example.com' },
  {
    runValidators: true,   // ← run schema validators on update
    new: true,             // return updated document
    context: 'query',      // required for some validators
  }
)

// ✅ Alternative — use save() which always validates
const user = await User.findById(id)
user.email = 'john@example.com'
await user.save()          // validates automatically`}</CodeBlock>

            <WarnBox>
              {
                "runValidators: true on updates only validates the fields being updated — not required fields that are absent from the update. Use save() instead of findByIdAndUpdate() when you need full document validation."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="7"
            title="Return Validation Errors to API Client"
            time="3 min"
            tag="Clean error responses for frontend"
          >
            <Prose>
              {
                "A well-designed API returns validation errors in a consistent, machine-readable format so the frontend can display field-specific error messages."
              }
            </Prose>

            <CodeBlock title="middleware/errorHandler.js">{`// Global error handler — add as last middleware in server.js
module.exports = (err, req, res, next) => {
  // Mongoose ValidationError
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).reduce((acc, error) => {
      acc[error.path] = error.message
      return acc
    }, {})
    return res.status(400).json({
      message: 'Validation failed',
      errors,
      // Example: { email: 'Email is required', name: 'Name is too short' }
    })
  }

  // Mongoose CastError (wrong type)
  if (err.name === 'CastError') {
    return res.status(400).json({
      message: \`Invalid \${err.path}: \${err.value}\`,
    })
  }

  // MongoDB duplicate key (unique field)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0]
    return res.status(409).json({
      message: \`\${field} already exists\`,
      errors: { [field]: \`This \${field} is already taken\` }
    })
  }

  // Generic server error
  console.error(err)
  res.status(500).json({ message: 'Internal server error' })
}`}</CodeBlock>

            <CodeBlock title="server.js">{`const errorHandler = require('./middleware/errorHandler')

// All routes above this line
app.use('/api/users', usersRouter)

// Error handler — LAST
app.use(errorHandler)`}</CodeBlock>
          </FixCard>

          <SectionHeading id="complete-schema">
            {"Complete Schema With All Validators"}
          </SectionHeading>
          <Prose>
            {
              "Here is a production-ready Mongoose schema using all available validation patterns:"
            }
          </Prose>
          <CodeBlock title="models/User.js">{`const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name cannot exceed 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'],
  },
  age: {
    type: Number,
    min: [0, 'Age cannot be negative'],
    max: [120, 'Age must be realistic'],
  },
  role: {
    type: String,
    enum: {
      values: ['user', 'admin', 'moderator'],
      message: 'Role must be user, admin, or moderator',
    },
    default: 'user',
  },
  website: {
    type: String,
    validate: {
      validator: (v) => !v || /^https?:\\/\\//.test(v),
      message: 'Website must start with http:// or https://',
    },
  },
}, {
  timestamps: true,   // adds createdAt and updatedAt
})

module.exports = mongoose.model('User', userSchema)`}</CodeBlock>

          <SectionHeading id="prevention">
            {"How to Prevent Validation Errors"}
          </SectionHeading>
          <CheckList
            items={[
              "Write clear, descriptive validation error messages with the required format",
              "Use trim: true on all String fields to prevent whitespace-only values",
              "Always catch errors with try/catch in async route handlers",
              "Use the global error handler pattern to return consistent API error responses",
              "Add runValidators: true when using findByIdAndUpdate",
              "Test your schema with invalid data before going to production",
              "Validate data on the frontend before sending to reduce unnecessary API errors",
            ]}
          />

          <SectionHeading id="faq">
            {"Frequently Asked Questions"}
          </SectionHeading>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
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
              {RELATED.map(({ tag, title, href, time }) => (
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
              {"We Build Production-Grade Node.js & MongoDB Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds full-stack applications. Need help with MongoDB schema design, validation architecture, or API error handling? We can help."
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
