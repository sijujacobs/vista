import React from "react";
import { HashRouter } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import BodyContent from "./components/common/BodyContent";

import "./css/style.css";

function App() {
  return (
    <HashRouter>
      <div className="appContainer">
        <Header />
        <BodyContent />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
