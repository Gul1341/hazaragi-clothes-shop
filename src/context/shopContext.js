// Import createContext for creating a global context in React
import { createContext } from "react";
import { useCart } from "../hook/useCart";

export const ShopContext = createContext({
  cartItems: null,
  addToCart: () => {},
  removeFromCart: () => {},
});

// Create ShopContext with default values
export const ShopContextProvider = (props) => {
  return (
    <ShopContext.Provider value={useCart()}>
      {props.children}
    </ShopContext.Provider>
  );
};
