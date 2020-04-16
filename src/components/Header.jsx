import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
const Header = (props) => {
  const cartStatusClickHandler = () => {
    let windowWidth = document.documentElement.clientWidth;
    var cartContainer = document.getElementById("cart");
    var cartBounds = cartContainer.getBoundingClientRect();
    if (windowWidth < 600) {
      window.scrollTo(0, cartBounds.top ? cartBounds.top : 0);
    }
  };

  return (
    <div className="header">
      <div className="menuBar">
        <ul className="navMenu">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/invoice">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="statusSection">
        <span className="cartStatus" onClick={() => cartStatusClickHandler()}>
          {"Cart : " + props.cartItems.length + " Items"}
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems,
  };
};

const connectedHeader = connect(mapStateToProps)(Header);
export default connectedHeader;
