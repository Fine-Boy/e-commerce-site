import { Link } from "react-router-dom";

import {
  Heart,
  ShoppingBag,
  Star,
} from "lucide-react";

import { useStore } from "../context/StoreContext";

const ProductCard = ({ product }) => {
  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
  } = useStore();

  const saved = isWishlisted(product.id);

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-xl bg-gray-50">

        <button
          onClick={() => toggleWishlist(product)}
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={saved}
          className={`absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow-sm transition ${
            saved ? "text-red-500" : "text-gray-600 hover:text-red-500"
          }`}
        >
          <Heart
            size={19}
            className={saved ? "fill-current" : ""}
          />
        </button>

        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-44 w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Product Information */}
      <div className="mt-5">

        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {product.brand}
        </p>

        <Link to={`/product/${product.slug}`}>
          <h3 className="mt-2 font-semibold text-gray-900 hover:text-[#315BFF]">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-2 text-sm">
          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          <span>{product.rating}</span>

          <span className="text-gray-400">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">

          <p className="text-lg font-bold text-gray-900">
            ₦{product.price.toLocaleString("en-NG")}
          </p>

          <button
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to bag`}
            className="rounded-full bg-[#315BFF] p-3 text-white transition hover:bg-blue-700"
          >
            <ShoppingBag size={18} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;