import { Linkedin, Github, Twitter, Instagram } from "lucide-react";

export default function SocialConnect() {
  return (
    <section className="px-4 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left text */}
        <p className="text-sm text-gray-400">
          Connect with the Softplix team on your favorite platforms.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {[
            { icon: Linkedin, href: "#" },
            { icon: Github, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Instagram, href: "#" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-9 h-9
                  flex items-center justify-center
                  rounded-full
                  border border-indigo-500/40
                  text-indigo-400
                  hover:bg-indigo-500/10
                  hover:text-indigo-300
                  transition
                "
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
