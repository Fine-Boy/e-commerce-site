import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import {
  ArrowLeft,
  MessageCircle,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";

// Replace this with your business WhatsApp number.
// Use country code without + or spaces.
const WHATSAPP_NUMBER = "2349034047952";

const Checkout = () => {
  const { cart, cartTotal } = useStore();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    notes: "",
  });

  const formatPrice = (price) =>
    `₦${price.toLocaleString("en-NG")}`;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) return;

    if (!/^\d{10,15}$/.test(formData.phone.trim())) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (WHATSAPP_NUMBER.includes("X")) {
      alert("Please configure your business WhatsApp number first.");
      return;
    }

    const orderItems = cart
      .map(
        (item) =>
          `${item.name}\nQuantity: ${item.quantity}\nPrice: ${formatPrice(
            item.price * item.quantity
          )}`
      )
      .join("\n\n");

    const message = `
Hello Volt! I would like to place an order.

CUSTOMER DETAILS
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}

DELIVERY ADDRESS
${formData.address}
${formData.city}, ${formData.state}

ORDER DETAILS
${orderItems}

Subtotal: ${formatPrice(cartTotal)}
Shipping: To be confirmed
Total before shipping: ${formatPrice(cartTotal)}

Additional instructions:
${formData.notes || "None"}

Please confirm my order and delivery details.

Thank you!
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  if (cart.length === 0) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <ShoppingBag size={45} className="mb-5 text-gray-300" />

        <h2 className="text-2xl font-bold">
          Your bag is empty
        </h2>

        <p className="mt-3 text-gray-500">
          Add some products before proceeding to checkout.
        </p>

        <Link
          to="/"
          className="mt-7 rounded-full bg-[#315BFF] px-8 py-3 font-semibold text-white"
        >
          Continue shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#FAFAFA] px-5 py-12 md:px-12 lg:px-20">

      {/* Header */}
      <div className="mb-10">
        <Link
          to="/bag"
          className="mb-6 flex w-fit items-center gap-2 text-sm text-gray-500 hover:text-[#315BFF]"
        >
          <ArrowLeft size={17} />
          Back to bag
        </Link>

        <p className="text-sm font-semibold uppercase tracking-widest text-[#315BFF]">
          Almost yours
        </p>

        <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">
          Checkout
        </h1>

        <p className="mt-3 text-gray-500">
          Enter your delivery details to complete your order.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid items-start gap-10 lg:grid-cols-3"
      >

        {/* Customer Information */}
        <div className="space-y-8 lg:col-span-2">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">

            <h2 className="text-xl font-bold text-gray-900">
              Customer information
            </h2>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Full name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#315BFF]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Phone number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="08012345678"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#315BFF]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#315BFF]"
                />
              </div>

            </div>
          </div>

          {/* Delivery Information */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">

            <h2 className="text-xl font-bold text-gray-900">
              Delivery information
            </h2>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Delivery address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  placeholder="Enter your full delivery address"
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#315BFF]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="City"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#315BFF]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  placeholder="State"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#315BFF]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold">
                  Additional instructions (optional)
                </label>

                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Any special delivery instructions?"
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#315BFF]"
                />
              </div>

            </div>
          </div>

        </div>

        {/* Order Summary */}
        <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6">

          <h2 className="text-xl font-bold">
            Your order
          </h2>

          <div className="mt-6 space-y-5">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <p className="shrink-0 text-sm font-semibold">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            ))}

          </div>

          <div className="my-7 border-t border-gray-200" />

          <div className="flex justify-between text-sm text-gray-500">
            <span>Subtotal</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>

          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <span>Shipping</span>
            <span>To be confirmed</span>
          </div>

          <div className="my-7 border-t border-gray-200" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total before shipping</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>

          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#315BFF] py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            <MessageCircle size={20} />
            Place order on WhatsApp
          </button>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
            <ShieldCheck size={16} />
            Your order details will be sent through WhatsApp.
          </div>

        </div>

      </form>
    </section>
  );
};

export default Checkout;