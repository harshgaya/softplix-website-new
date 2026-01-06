import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Mission & vision
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Clear principles that guide how we think, build, and partner with
            our clients.
          </p>
        </div>

        {/* Cards */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-indigo-500/20 blur-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="rounded-[28px] bg-white px-6 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
              {/* Title Row */}
              <div className="flex items-center gap-3 mb-3">
                <div className=" flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Our mission</h3>
              </div>

              {/* Paragraph aligned with title */}
              <p className="text-gray-600 leading-relaxed pl-7">
                To create high-quality digital products that empower businesses
                and transform ideas into reality.
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-[28px] bg-white px-6 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
              {/* Title Row */}
              <div className="flex items-center gap-3 mb-3">
                <div className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Our vision</h3>
              </div>

              {/* Paragraph aligned with title */}
              <p className="text-gray-600 leading-relaxed pl-7">
                To become a leading global software powerhouse known for
                innovation, creativity, and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
