import React from "react";

import "./css/baseComponent.css";

const ActionButton = (props) => {
  const { disabled, onClickHandler, buttonText, buttonType } = props;
  return (
    <div className={"actionButton " + buttonType || ""}>
      <button className="button" disabled={disabled} onClick={onClickHandler}>
        {buttonText}
      </button>
    </div>
  );
};
export default ActionButton;
