import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { ChevronRight } from "lucide-react";

const categoryDetails = {
  computing: {
    title: "Computing",
    description: "Power your productivity with the latest computers and laptops.",
  },

  "phones-tablets": {
    title: "Phones & Tablets",
    description: "Discover smartphones and tablets designed for your lifestyle.",
  },

  audio: {
    title: "Audio",
    description: "Experience sound the way it was meant to be heard.",
  },

  "tv-home": {
    title: "TV & Home",
    description: "Upgrade your entertainment and home experience.",
  },

  gaming: {
    title: "Gaming",
    description: "Level up your gaming experience.",
  },

  accessories: {
    title: "Accessories",
    description: "Find the perfect accessories for your devices.",
  },
};

const CategoryPage = () => {
  const { categorySlug } = useParams();

  const category = categoryDetails[categorySlug];

  const categoryProducts = products.filter(
    (product) => product.category === categorySlug
  );

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Category not found</h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white px-5 py-12 md:px-12 lg:px-20">

      {/* Breadcrumb */}
      <div className="mb-10 flex items-center gap-2 text-sm text-gray-400">
        <Link to="/" className="hover:text-[#315BFF]">
          Home
        </Link>

        <ChevronRight size={15} />

        <span className="font-medium text-gray-900">
          {category.title}
        </span>
      </div>

      {/* Category Heading */}
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#315BFF]">
          Explore Volt
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
          {category.title}
        </h1>

        <p className="mt-4 max-w-xl text-gray-500">
          {category.description}
        </p>
      </div>

      {/* Product Count and Sorting */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5">
        <p className="text-sm text-gray-500">
          Showing {categoryProducts.length} products
        </p>

        <select className="rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none focus:border-[#315BFF]">
          <option>Sort by: Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Products Grid */}
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-gray-50 py-20 text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Products coming soon
          </h2>

          <p className="mt-2 text-gray-500">
            We're preparing something exciting for this category.
          </p>
        </div>
      )}

    </section>
  );
};

export default CategoryPage;