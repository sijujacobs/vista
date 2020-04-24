import React from "react";

import Home from "../home/Home";
import Contact from "../contact/Contact";
import InvoiceDetails from "../invoice/InvoiceDetails";
import ReactPrint from "../print/ReactPrint";
import ShoppingContainer from "../product/ShoppingContainer";
import Login from "../login/Login";
import { Route } from "react-router-dom";
const BodyContent = () => {
  return (
    <div className="bodyContent">
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={ShoppingContainer} />
      <Route exact path="/invoice" component={InvoiceDetails} />
      <Route exact path="/print" component={ReactPrint} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
};

export default BodyContent;
