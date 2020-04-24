import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
const Header = (props) => {
  return (
    <div className="header nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">VISTA BIOMED</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/products">
          Products
        </NavLink>
        <NavLink exact to="/login">
          Business
        </NavLink>
        <NavLink exact to="/contact">
          Contact
        </NavLink>
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
