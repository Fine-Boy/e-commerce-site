import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("volt-cart")) || [];
  });

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("volt-wishlist")) || [];
  });

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("volt-cart", JSON.stringify(cart));
  }, [cart]);

  // Save wishlist whenever it changes
  useEffect(() => {
    localStorage.setItem("volt-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Update product quantity
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Add or remove wishlist item
  const toggleWishlist = (product) => {
    setWishlist((currentWishlist) => {
      const exists = currentWishlist.some(
        (item) => item.id === product.id
      );

      return exists
        ? currentWishlist.filter((item) => item.id !== product.id)
        : [...currentWishlist, product];
    });
  };

  const isWishlisted = (id) =>
    wishlist.some((item) => item.id === id);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isWishlisted,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);