import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import "./css/common.css";
const Header = (props) => {
  const { appInfo } = props;
  return (
    <div className="header nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title upperCase">{appInfo.appName}</div>
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
        <NavLink exact to="/contact">
          Contact
        </NavLink>
        <NavLink exact to="/login">
          My Account
        </NavLink>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems,
    appInfo: state.appReducer.appInfo,
  };
};

const connectedHeader = connect(mapStateToProps)(Header);
export default connectedHeader;
