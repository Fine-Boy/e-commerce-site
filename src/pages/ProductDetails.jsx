import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import {
  ShoppingBag,
  ChevronRight,
  Star,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useStore } from "../context/StoreContext";

const ProductDetails = () => {
  const { addToCart } = useStore();
  const { productSlug } = useParams();

  const product = products.find(
    (item) => item.slug === productSlug
  );

  if (!product) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Product not found
        </h2>

        <Link
          to="/"
          className="mt-5 text-[#315BFF] hover:underline"
        >
          Return to homepage
        </Link>
      </div>
    );
  }

  return (
    <section className="px-5 py-12 md:px-12 lg:px-20">

      {/* Breadcrumb */}
      <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-gray-400">
        <Link to="/" className="transition hover:text-[#315BFF]">
          Home
        </Link>

        <ChevronRight size={15} />

        <Link
          to={`/category/${product.category}`}
          className="transition hover:text-[#315BFF]"
        >
          {product.category}
        </Link>

        <ChevronRight size={15} />

        <span className="font-medium text-gray-900">
          {product.name}
        </span>
      </div>

      {/* Product Details */}
      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* Product Image */}
        <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-3xl bg-[#F5F6F8] p-8 md:min-h-[500px]">

          <img
            src={product.image}
            alt={product.name}
            className="h-full max-h-[420px] w-full object-contain transition-transform duration-500 hover:scale-105"
          />

        </div>

        {/* Product Information */}
        <div className="max-w-xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#315BFF]">
            {product.brand}
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {product.name}
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-500">
            {product.description}
          </p>

          {/* Rating */}
          {product.rating && (
            <div className="mt-5 flex items-center gap-2">
              <div className="flex text-yellow-500">
                <Star size={17} fill="currentColor" />
              </div>

              <span className="text-sm font-semibold text-gray-900">
                {product.rating}
              </span>

              <span className="text-sm text-gray-400">
                Customer rating
              </span>
            </div>
          )}

          {/* Price */}
          <div className="mt-8 border-y border-gray-100 py-7">
            <p className="text-sm text-gray-400">
              Price
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              ₦{product.price.toLocaleString("en-NG")}
            </h2>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button
              onClick={() => addToCart(product)}
              className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#315BFF] px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              <ShoppingBag size={19} />
              Add to Bag
            </button>

            <Link
              to={`/category/${product.category}`}
              className="flex flex-1 items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-center font-semibold text-gray-900 transition hover:border-[#315BFF] hover:text-[#315BFF]"
            >
              Back to Category
            </Link>

          </div>

          {/* Shopping Benefits */}
          <div className="mt-10 space-y-5 border-t border-gray-100 pt-7">

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Truck size={20} className="text-[#315BFF]" />
              Reliable delivery
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <ShieldCheck size={20} className="text-[#315BFF]" />
              Secure shopping
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;