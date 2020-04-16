import React from "react";

import Home from "./Home";
import Contact from "./Contact";
import ShoppingContainer from "./ShoppingContainer";
import { Route } from "react-router-dom";
const BodyContent = () => {
  return (
    <div className="bodyContent">
      <Route exact path="/" component={Home} />
      <Route exact path="/invoice" component={ShoppingContainer} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
};

export default BodyContent;
