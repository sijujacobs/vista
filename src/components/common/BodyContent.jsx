import React from "react";

import Home from "../home/Home";
import Contact from "../contact/Contact";
import InvoiceDetails from "../invoice/InvoiceDetails";
import PrintInvoice from "../print/PrintInvoice";
import ShoppingContainer from "../product/ShoppingContainer";
import { Route } from "react-router-dom";
const BodyContent = () => {
  return (
    <div className="bodyContent">
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={ShoppingContainer} />
      <Route exact path="/invoice" component={InvoiceDetails} />
      <Route exact path="/printinvoice" component={PrintInvoice} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
};

export default BodyContent;
