import { Heart, ArrowRight, Plus } from "lucide-react";

const products = [
  {
    id: 1,
    brand: "SONY",
    name: "WH-1000XM5",
    description: "Wireless noise-canceling headphones",
    price: 299.99,
    oldPrice: 399.99,
    rating: 4.9,
    reviews: 248,
    badge: "SAVE $100",
    image: "/sony-headphones.png",
    colors: ["#D6D3CB", "#20242B", "#9EABC1"],
  },
  {
    id: 2,
    brand: "APPLE",
    name: 'iPad Air 11"',
    description: "M2 chip. Built for your next big idea.",
    price: 599.00,
    oldPrice: null,
    rating: 4.8,
    reviews: 186,
    badge: "FAN FAVORITE",
    image: "/ipad-air.png",
    colors: ["#B8CCD8", "#B8B0C9", "#D6D3CB", "#74777D"],
  },
  {
    id: 3,
    brand: "MARSHALL",
    name: "Emberton II",
    description: "Big sound. Ready for anywhere.",
    price: 129.99,
    oldPrice: 169.99,
    rating: 4.8,
    reviews: 312,
    badge: "SAVE $40",
    image: "/marshall-speaker.png",
    colors: ["#202124", "#E8DFC9"],
  },
  {
    id: 4,
    brand: "LOGITECH",
    name: "MX Master 3S",
    description: "Precision meets a quieter click.",
    price: 99.99,
    oldPrice: null,
    rating: 4.9,
    reviews: 204,
    badge: "THE DESK ESSENTIAL",
    image: "/logitech-mouse.png",
    colors: ["#41464A", "#D5D5D2"],
  },
];

const PopularProducts = () => {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-[4.5%] lg:py-20">

      {/* Section Heading */}
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#315BFF]">
            The people have good taste
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#191B20] sm:text-4xl lg:text-5xl">
            Popular for a reason.
          </h2>
        </div>

        <a
          href="/bestsellers"
          className="group flex w-fit items-center gap-3 text-base font-semibold text-[#191B20] transition hover:text-[#315BFF]"
        >
          Shop bestsellers
          <ArrowRight
            size={21}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

        {products.map((product) => (
          <div key={product.id} className="group min-w-0">

            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-[#F1F3F4]">

              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Product Badge */}
              <span className="absolute left-4 top-4 rounded bg-white px-3 py-2 text-xs font-semibold text-[#315BFF]">
                {product.badge}
              </span>

              {/* Wishlist Button */}
              <button
                type="button"
                aria-label={`Add ${product.name} to wishlist`}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#191B20] transition hover:bg-[#315BFF] hover:text-white"
              >
                <Heart size={21} strokeWidth={2} />
              </button>
            </div>

            {/* Brand and Rating */}
            <div className="mt-5 flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-gray-500">
                {product.brand}
              </span>

              <span className="whitespace-nowrap text-xs text-gray-500">
                <span className="mr-1">★</span>
                {product.rating} ({product.reviews})
              </span>
            </div>

            {/* Product Name */}
            <h3 className="mt-3 text-xl font-semibold text-[#191B20]">
              {product.name}
            </h3>

            {/* Description */}
            <p className="mt-2 min-h-6 text-sm text-gray-500">
              {product.description}
            </p>

            {/* Available Colors */}
            <div className="mt-4 flex items-center gap-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="h-4 w-4 rounded-full border border-black/10"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Price and Add Button */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl font-bold text-[#191B20]">
                  ${product.price.toFixed(2)}
                </span>

                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <button
                type="button"
                aria-label={`Add ${product.name} to cart`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#315BFF] transition hover:bg-[#315BFF] hover:text-white"
              >
                <Plus size={23} />
              </button>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default PopularProducts;