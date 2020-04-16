import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const ShoppingContainer = (props) => {
  return (
    <div className="shoppingContainer">
      <ProductList />
      <Cart />
    </div>
  );
};

export default ShoppingContainer;
