import { Link } from "react-router-dom";

import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  RiInstagramLine,
  RiFacebookFill,
  RiTwitterXLine,
  RiYoutubeLine,
} from "react-icons/ri";

const Footer = () => {
  const shopLinks = [
    { name: "Computing", path: "/category/computing" },
    { name: "Phones & Tablets", path: "/category/phones-tablets" },
    { name: "Audio", path: "/category/audio" },
    { name: "TV & Home", path: "/category/tv-home" },
    { name: "Gaming", path: "/category/gaming" },
    { name: "Accessories", path: "/category/accessories" },
  ];

  const supportLinks = [
    { name: "Contact us", path: "/contact" },
    { name: "FAQs", path: "/faq" },
    { name: "Shipping & Delivery", path: "/shipping" },
    { name: "Returns & Refunds", path: "/returns" },
    { name: "Track your order", path: "/track-order" },
  ];

  const companyLinks = [
    { name: "About Volt", path: "/about" },
    { name: "Our story", path: "/about" },
    { name: "Privacy policy", path: "/privacy" },
    { name: "Terms & conditions", path: "/terms" },
  ];

    const socialLinks = [
    { Icon: RiInstagramLine, label: "Instagram", url: "#" },
    { Icon: RiFacebookFill, label: "Facebook", url: "#" },
    { Icon: RiTwitterXLine, label: "X", url: "#" },
    { Icon: RiYoutubeLine, label: "YouTube", url: "#" },
    ];

  return (
    <footer className="bg-[#111318] text-white">

      {/* Newsletter */}
      <div className="border-b border-white/10 px-6 py-14 md:px-12 lg:px-20">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

          <div className="max-w-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#6F8CFF]">
              Stay in the loop
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Good tech. Great updates.
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Get first access to new arrivals, exclusive offers,
              and everything worth knowing in tech.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md items-center gap-2 rounded-xl bg-white p-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              aria-label="Email address"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 rounded-lg bg-[#315BFF] px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>

        </div>
      </div>

      {/* Main Footer */}
      <div className="grid grid-cols-2 gap-10 px-6 py-14 sm:px-10 md:grid-cols-3 lg:grid-cols-5 lg:px-20">

        {/* Brand */}
        <div className="col-span-2 md:col-span-3 lg:col-span-2">

          <Link to="/" className="text-3xl font-bold tracking-tight">
            volt<span className="text-[#315BFF]">.</span>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
            Technology that moves you forward. Discover thoughtfully
            selected products designed to make everyday life better.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#315BFF] hover:bg-[#315BFF] hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

        </div>

        {/* Shop */}
        <div>
          <h3 className="mb-5 text-sm font-semibold">Shop</h3>

          <ul className="space-y-4">
            {shopLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-5 text-sm font-semibold">Customer care</h3>

          <ul className="space-y-4">
            {supportLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-5 text-sm font-semibold">Company</h3>

          <ul className="space-y-4">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Contact Information */}
      <div className="border-t border-white/10 px-6 py-8 sm:px-10 lg:px-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail size={16} className="text-[#6F8CFF]" />
              hello@volt.com
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Phone size={16} className="text-[#6F8CFF]" />
              +234 000 000 0000
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={16} className="text-[#6F8CFF]" />
              Nigeria
            </div>

          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
            <span>VISA</span>
            <span>Mastercard</span>
            <span>PayPal</span>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-6 py-6 sm:px-10 lg:px-20">
        <div className="flex flex-col justify-between gap-3 text-xs text-gray-500 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Volt. All rights reserved.
          </p>

          <p>Designed for a better everyday.</p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;