import React from "react";

import "./css/baseComponent.css";
const InputField = (props) => {
  const {
    labelValue,
    inputType,
    inputPlaceholder,
    inputValue,
    onChangeHandler,
    isHidden,
  } = props;
  return (
    <div className={"inputField " + (isHidden ? "hidden" : "")}>
      <label className="label" htmlFor="input" title={labelValue}>
        {labelValue}
      </label>
      <label className="labelColon">:</label>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};
export default InputField;
