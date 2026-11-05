import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTotop";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
import SearchPage from "./pages/SearchPage";
import SignIn from "./pages/SignIn";
import Wishlist from "./pages/Wishlist";
import Bag from "./pages/Bag";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/category/:categorySlug"
          element={<CategoryPage />}
        />

        <Route
          path="/product/:productSlug"
          element={<ProductDetails />}
        />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;