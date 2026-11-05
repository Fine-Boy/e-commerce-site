import { Link } from "react-router-dom";

import {
  Laptop,
  Tablet,
  Headphones,
  Monitor,
  Gamepad2,
  Cable,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    name: "Computing",
    tagline: "Make more happen",
    href: "computing",
    Icon: Laptop,
  },
  {
    name: "Phones & Tablets",
    tagline: "Stay a step ahead",
    href: "phones-tablets",
    Icon: Tablet,
  },
  {
    name: "Audio",
    tagline: "Find your frequency",
    href: "audio",
    Icon: Headphones,
  },
  {
    name: "TV & Home",
    tagline: "Upgrade your everyday",
    href: "tv-home",
    Icon: Monitor,
  },
  {
    name: "Gaming",
    tagline: "A whole new level",
    href: "gaming",
    Icon: Gamepad2,
  },
  {
    name: "Accessories",
    tagline: "The finishing touches",
    href: "accessories",
    Icon: Cable,
  },
];

const Categories = () => {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-[4.5%]">

      {/* Section Heading */}
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#315BFF]">
            Explore Volt
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shop by category.
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
            Everything you need to stay connected, productive, and entertained.
          </p>
        </div>

        <Link
          to="/categories"
          className="group flex w-fit items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-[#315BFF]"
        >
          View all

          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>

      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">

        {categories.map((category) => {
          const Icon = category.Icon;

          return (
            <Link
              key={category.name}
              to={`/category/${category.href}`}
              className="group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-[#F8F9FC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#315BFF]/30 hover:bg-[#F1F4FF] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] sm:min-h-[220px] sm:p-7"
            >

              {/* Icon */}
              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#315BFF] shadow-sm transition-colors duration-300 group-hover:bg-[#315BFF] group-hover:text-white">

                  <Icon size={24} strokeWidth={1.8} aria-hidden="true" />

                </div>

                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#315BFF]"
                />

              </div>

              {/* Category Text */}
              <div className="mt-8">

                <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  {category.tagline}
                </p>

              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
};

export default Categories;