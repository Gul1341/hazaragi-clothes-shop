// Import createContext to create a global state
import { createContext, useState } from "react";

// Create ShopContext
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (itemId) => {
    if (!cartItems?.find((item) => item.id === itemId))
      setCartItems([...cartItems, { id: itemId, count: 1 }]);
    else
      setCartItems(
        cartItems.map((item) => {
          if (item.id === itemId) return { ...item, count: item.count + 1 };
          else return item;
        })
      );
    console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((i) => {
        if (i.id === itemId)
          return { ...i, count: i.count === 0 ? 0 : i.count - 1 };
        else return i;
      })
    );
  };

  const contextValue = { cartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
