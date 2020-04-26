import React from "react";

import { connect } from "react-redux";
const Footer = (props) => {
  const { appInfo } = props;
  return (
    <div className="footer">
      <p className="upperCase">
        {appInfo.appName}&nbsp;
        <span>&#169; {new Date().getFullYear()}</span>
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    appInfo: state.appReducer.appInfo,
  };
};

const footerHeader = connect(mapStateToProps)(Footer);
export default footerHeader;
// export default Footer;
