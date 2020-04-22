import React, { useEffect } from "react";
import { connect } from "react-redux";
import { productActions } from "../../redux/actions";
import ProductList from "./ProductList";
import Cart from "../cart/Cart";
import "./css/product.css";

const ShoppingContainer = (props) => {
  const { getProducts } = props;

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <div className="shoppingContainer">
      <ProductList products={props.products} />
      <Cart />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    loading: state.productReducer.loading,
    cartItems: state.cartReducer.cartItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(productActions.getProducts()),
  };
};

const connectedShoppingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingContainer);
export default connectedShoppingContainer;

// export default ShoppingContainer;
