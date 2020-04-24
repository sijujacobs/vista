import React from "react";
import { connect } from "react-redux";
import { cartActions } from "../../redux/actions";

const ProductDetails = (props) => {
  const addToCartHandler = (selectedProduct) => {
    let itemFound = props.cartItems.find(function (item) {
      return item.product_id === selectedProduct.product_id;
    });
    if (itemFound && itemFound.product_id > 0) {
      alert("Product already added to Cart");
    } else {
      props.addToCart(selectedProduct);
    }
  };

  return (
    <div className="productDetails">
      <div className="imageSection"></div>
      <div className="infoSection">
        <div className="productName">
          {props.product.product_name}
          <span className="productCode"> - {props.product.product_code}</span>
        </div>
        <div className="productDesc">{props.product.product_description}</div>
        <div className="customCode">
          <span>Custom Code : {props.product.customs_code}</span>
        </div>
      </div>
      <div className="buttonSection">
        <button
          className="button"
          onClick={() => addToCartHandler(props.product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addToCart: (selectedProduct) => dispatch(addToCart(selectedProduct)),
    addToCart: (selectedProduct) =>
      dispatch(cartActions.addToCart(selectedProduct)),
  };
};

const connectedProductDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
export default connectedProductDetails;
