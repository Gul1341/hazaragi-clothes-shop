// Import React for creating the component
import React from "react";
import Product from "./product";
import { PRODUCTS } from "../../data/products";

// Shop page component
const Shop = () => {
  return (
    <React.Fragment>
      <h1> This is Shop page</h1>
      <div className="row">
        {PRODUCTS.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Shop;
