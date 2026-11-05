import { useSearchParams, Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter((product) => {
    const searchText = `
      ${product.name}
      ${product.brand}
      ${product.category}
      ${product.description}
    `.toLowerCase();

    return searchText.includes(query.toLowerCase());
  });

  return (
    <section className="min-h-screen px-6 py-16 md:px-12 lg:px-20">

      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#315BFF]">
          Volt Search
        </p>

        <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
          Search results
        </h1>

        <p className="mt-4 text-gray-500">
          Results for "{query}"
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <>
          <p className="mb-8 text-sm text-gray-500">
            Found {filteredProducts.length} products
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 px-6 py-24 text-center">

          <Search size={45} className="mb-5 text-gray-300" />

          <h2 className="text-xl font-bold text-gray-900">
            No products found
          </h2>

          <p className="mt-3 text-gray-500">
            We couldn't find anything matching "{query}".
          </p>

          <Link
            to="/"
            className="mt-6 rounded-full bg-[#315BFF] px-7 py-3 text-white hover:bg-blue-700"
          >
            Back to home
          </Link>

        </div>
      )}

    </section>
  );
};

export default SearchPage;