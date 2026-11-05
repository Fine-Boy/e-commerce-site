import { Link } from "react-router-dom";

import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";

import { useStore } from "../context/StoreContext";

const Bag = () => {
  const {
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useStore();

  console.log(cart)
  const formatPrice = (price) =>
    `₦${price.toLocaleString("en-NG")}`;

  return (
    <section className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-20">

      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#315BFF]">
          Your shopping bag
        </p>

        <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
          Shopping Bag
        </h1>

        <p className="mt-3 text-gray-500">
          Review your items before checkout.
        </p>
      </div>

      {cart.length > 0 ? (

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Cart Products */}
          <div className="space-y-6 lg:col-span-2">

            {cart.map((product) => (

              <div
                key={product.id}
                className="flex flex-col gap-5 rounded-2xl border border-gray-200 p-5 sm:flex-row"
              >

                <Link
                  to={`/product/${product.slug}`}
                  className="flex h-40 w-full items-center justify-center rounded-xl bg-gray-50 sm:w-40"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 w-full object-contain"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between">

                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">
                      {product.brand}
                    </p>

                    <Link to={`/product/${product.slug}`}>
                      <h3 className="mt-2 text-lg font-bold hover:text-[#315BFF]">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="mt-2 font-semibold">
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between">

                    {/* Quantity */}
                    <div className="flex items-center gap-4 rounded-full border border-gray-200 px-3 py-2">

                      <button
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            product.quantity - 1
                          )
                        }
                        aria-label="Decrease quantity"
                      >
                        <Minus size={15} />
                      </button>

                      <span className="text-sm font-semibold">
                        {product.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            product.quantity + 1
                          )
                        }
                        aria-label="Increase quantity"
                      >
                        <Plus size={15} />
                      </button>

                    </div>

                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={17} />
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-gray-50 p-6">

            <h2 className="text-xl font-bold">
              Order Summary
            </h2>

            <div className="mt-7 flex justify-between text-sm text-gray-500">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>

            <div className="mt-5 flex justify-between text-sm text-gray-500">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="my-7 border-t border-gray-200" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>

            <Link
                to="/checkout"
                className="mt-8 block w-full rounded-full bg-[#315BFF] py-4 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                Proceed to Checkout
                </Link>

            <Link
              to="/"
              className="mt-5 block text-center text-sm font-semibold text-gray-600 hover:text-[#315BFF]"
            >
              Continue shopping
            </Link>

          </div>

        </div>

      ) : (

        <div className="rounded-2xl bg-gray-50 py-24 text-center">

          <ShoppingBag size={45} className="mx-auto mb-5 text-gray-300" />

          <h2 className="text-xl font-bold">
            Your shopping bag is empty
          </h2>

          <p className="mt-3 text-gray-500">
            Looks like you haven't added anything yet.
          </p>

          <Link
            to="/"
            className="mt-7 inline-block rounded-full bg-[#315BFF] px-7 py-3 text-white hover:bg-blue-700"
          >
            Start shopping
          </Link>

        </div>

      )}

    </section>
  );
};

export default Bag;