import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
} from "lucide-react";

import { useStore } from "../context/StoreContext";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const { wishlist, cartCount } = useStore();

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);

    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">

      <nav className="mx-auto flex h-[85px] items-center justify-between px-6 md:h-[100px] md:px-10 lg:px-[4.5%]">

        {/* Logo */}
        <Link
          to="/"
          className="shrink-0 text-[42px] font-extrabold leading-none tracking-[-3px] text-[#17191D] md:text-[48px]"
        >
          volt<span className="text-[#315BFF]">.</span>
        </Link>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="mx-6 hidden h-[58px] flex-1 items-center gap-4 rounded-md bg-[#F4F5F6] px-6 focus-within:ring-2 focus-within:ring-[#315BFF]/30 md:flex lg:mx-12"
        >
          <Search size={24} className="shrink-0 text-gray-500" />

          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Find your next favorite piece of tech"
            aria-label="Search products"
            className="h-full w-full bg-transparent text-base outline-none"
          />

          <button
            type="submit"
            className="text-sm font-medium text-[#315BFF]"
          >
            Search
          </button>
        </form>

        {/* Navigation Actions */}
        <div className="flex shrink-0 items-center gap-5 sm:gap-8 lg:gap-12">

          <Link
            to="/signin"
            className="flex items-center gap-2 text-gray-900 hover:opacity-60"
          >
            <UserRound size={25} />
            <span className="hidden sm:inline">Sign in</span>
          </Link>

          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="relative hover:opacity-60"
          >
            <Heart size={25} />

            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#315BFF] px-1 text-xs text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/bag"
            className="relative flex items-center gap-2 hover:opacity-60"
          >
            <ShoppingBag size={25} />

            <span className="hidden sm:inline">
              Bag ({cartCount})
            </span>
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;