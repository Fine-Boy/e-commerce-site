import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";

import { useStore } from "../context/StoreContext";

const Wishlist = () => {
  const {
    wishlist,
    toggleWishlist,
    addToCart,
  } = useStore();

  return (
    <section className="min-h-screen px-6 py-16 md:px-12 lg:px-20">

      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#315BFF]">
          Your favourites
        </p>

        <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
          My Wishlist
        </h1>

        <p className="mt-3 text-gray-500">
          Products you've saved for later.
        </p>
      </div>

      {wishlist.length > 0 ? (

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {wishlist.map((product) => (

            <div
              key={product.id}
              className="rounded-2xl border border-gray-200 p-4"
            >

              <div className="flex h-52 items-center justify-center rounded-xl bg-gray-50">
                <Link to={`/product/${product.slug}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-44 w-full object-contain"
                  />
                </Link>
              </div>

              <div className="mt-5">

                <p className="text-xs font-semibold uppercase text-gray-400">
                  {product.brand}
                </p>

                <Link to={`/product/${product.slug}`}>
                  <h3 className="mt-2 font-bold hover:text-[#315BFF]">
                    {product.name}
                  </h3>
                </Link>

                <p className="mt-3 text-lg font-bold">
                  ₦{product.price.toLocaleString("en-NG")}
                </p>

                <div className="mt-5 flex gap-3">

                  <button
                    onClick={() => {
                      addToCart(product);
                      toggleWishlist(product);
                    }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#315BFF] px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    <ShoppingBag size={17} />
                    Add to bag
                  </button>

                  <button
                    onClick={() => toggleWishlist(product)}
                    aria-label={`Remove ${product.name} from wishlist`}
                    className="rounded-full border border-gray-200 p-3 text-red-500 hover:bg-red-50"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      ) : (

        <div className="rounded-2xl bg-gray-50 py-24 text-center">

          <Heart size={45} className="mx-auto mb-5 text-gray-300" />

          <h2 className="text-xl font-bold">
            Your wishlist is empty
          </h2>

          <p className="mt-3 text-gray-500">
            Save products you love and find them here.
          </p>

          <Link
            to="/"
            className="mt-7 inline-block rounded-full bg-[#315BFF] px-7 py-3 text-white hover:bg-blue-700"
          >
            Explore products
          </Link>

        </div>

      )}

    </section>
  );
};

export default Wishlist;