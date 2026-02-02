import { LINKEDIN, WHATSAPP } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" relative w-full bg-gradient-to-br from-[#0b0f3a] via-[#0e144f] to-[#1a1f6b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={"/navigation/logo.png"}
                alt="SoftPlix"
                width={150}
                height={150}
              />
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              A premium software studio crafting minimal, future-ready digital
              products.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-sm font-semibold mb-4 text-white/90">
                Explore
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="hover:text-white">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-white/90">More</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/our-work" className="hover:text-white">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/business-solution" className="hover:text-white">
                    Business Solutions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <h4 className="text-sm font-semibold mb-4 mr-6 text-white/90">
              Connect
            </h4>
            <div className="flex md:justify-end gap-3">
              <a
                href={LINKEDIN}
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                in
              </a>
              <a
                href={WHATSAPP}
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/15 pt-6 text-center">
          <p className="text-xs text-white/50">
            © Softplix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
