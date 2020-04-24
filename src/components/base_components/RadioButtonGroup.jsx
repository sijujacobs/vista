import React, { useState } from "react";
const RadioButtonGroup = (props) => {
  const { radioButtonNames, radioChangeHandler, layout } = props;
  const [selectedOption, setSelectOption] = useState("login");
  const onChangeHandler = (e) => {
    setSelectOption(e.target.value, radioChangeHandler(e.target));
  };
  return (
    <div className={"radioButtonGroup " + layout}>
      {radioButtonNames &&
        radioButtonNames.map((r, i) => {
          return (
            !r.isHidden && (
              <div key={i} className="radioButton ">
                <input
                  type="radio"
                  value={r.value}
                  name={r.name}
                  checked={selectedOption === r.value}
                  onChange={onChangeHandler}
                />
                <label>{r.name}</label>
              </div>
            )
          );
        })}
    </div>
  );
};

export default RadioButtonGroup;
