// Import React and useContext hook
import React, { useContext } from "react";

// Import all products data
import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/product";

// Cart page component
const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    // Fragment to avoid unnecessary wrapper div
    <React.Fragment>
      <h1>Your Cart items</h1>
      <div className="row">
        {PRODUCTS.map((p) => {
          if (cartItems.some((i) => i.id === p.id && i.count > 0))
            return <Product data={p}></Product>;
        })}
      </div>
    </React.Fragment>
  );
};

export default Cart;
