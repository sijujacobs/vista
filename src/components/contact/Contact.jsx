import React from "react";

const Contact = (props) => {
  return (
    <div className="contact">
      <div
        className={
          "contactWrapper " +
          (window.location.hostname === "www.vistabiomed.com"
            ? "exclude"
            : "include")
        }
      >
        <h3>Contact US</h3>
        <h3>Locations</h3>
      </div>
    </div>
  );
};

export default Contact;
