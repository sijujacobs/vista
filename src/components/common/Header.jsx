import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
const Header = (props) => {
  return (
    <div className="nav">
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
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/printinvoice">Print</NavLink>
        <NavLink to="/contact">Contact</NavLink>
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
