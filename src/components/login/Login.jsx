import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions";

import InputField from "../../components/base_components/InputField";
import ActionButton from "../../components/base_components/ActionButton";
import RadioButtonGroup from "../../components/base_components/RadioButtonGroup";
import "./css/login.css";
import { useHistory } from "react-router-dom";
const Login = (props) => {
  const [password, setPassword] = useState("");
  const [vistaCode, setVistaCode] = useState("");
  const [email, setEmail] = useState("");
  const [screen, setScreen] = useState({
    title: "Login",
    value: "login",
  });

  const history = useHistory();
  const { loggedUser } = props;
  useEffect(() => {
    if (loggedUser && loggedUser.userName) {
      history.push("/products");
    }
  }, [loggedUser, history]);

  const register = () => {
    if (email) {
      let userObj = {
        email: email,
      };
      props.registerUser(userObj);
      // props.registerUser(JSON.stringify(userObj));
    }
  };
  const resetPassword = () => {
    if (email && password && vistaCode) {
      let userObj = {
        email: email,
        password: password,
        vistaCode: vistaCode,
      };
      // props.resetPassword(JSON.stringify(userObj));
      props.resetPassword(userObj);
    }
  };

  const login = () => {
    if (email && password) {
      let userObj = {
        email: email,
        password: password,
      };
      // props.login(JSON.stringify(userObj));
      props.login(userObj);
    }
  };

  const setInputData = (fieldKey, fieldValue) => {
    if (fieldKey === "email") {
      setEmail(fieldValue);
    } else if (fieldKey === "password") {
      setPassword(fieldValue);
    } else if (fieldKey === "vistaCode") {
      setVistaCode(fieldValue);
    }
  };

  const buttonClickHandler = () => {
    if (screen.value === "login") {
      if (email && password) {
        login();
      }
    } else if (screen.value === "register") {
      if (email) {
        register();
      }
    } else if (screen.value === "reset") {
      if (email && password && vistaCode) {
        resetPassword();
      }
    }
  };
  const radioButtonChangeHandler = (radioButton) => {
    setScreen({
      title: radioButton.name,
      value: radioButton.value,
    });
  };
  const radioButtonNames = [
    {
      name: "Login",
      id: 1,
      value: "login",
      selected: true,
      isHidden: false,
    },
    {
      name: "Register",
      id: 2,
      value: "register",
      selected: false,
      isHidden: true,
    },
    {
      name: "Password Reset",
      id: 3,
      value: "reset",
      selected: false,
      isHidden: false,
    },
  ];

  return (
    <div
      className={
        window.location.hostname === "www.vistabiomed.com" ? "exclude" : "login"
      }
    >
      <div className="loginSection">
        <RadioButtonGroup
          layout="horizontal"
          radioButtonNames={radioButtonNames}
          radioChangeHandler={(val) => radioButtonChangeHandler(val)}
        />
        <h4 className="header centerAlign">{screen.title}</h4>
        <InputField
          labelValue="Email"
          inputType="text"
          inputPlaceholder="Email"
          inputValue={email}
          onChangeHandler={(val) => setInputData("email", val)}
        />
        <InputField
          isHidden={screen.value === "register"}
          labelValue="Password"
          inputType="password"
          inputPlaceholder="Password"
          inputValue={password}
          onChangeHandler={(val) => setInputData("password", val)}
        />
        <InputField
          isHidden={screen.value !== "reset"}
          labelValue="Vista Code"
          inputType="text"
          inputPlaceholder="Vista Code"
          inputValue={vistaCode}
          onChangeHandler={(val) => setInputData("vistaCode", val)}
        />
        <ActionButton
          buttonText={screen.title}
          onClickHandler={buttonClickHandler}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedUser: state.userReducer.loggedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(userActions.login(user)),
    registerUser: (user) => dispatch(userActions.registerUser(user)),
    resetPassword: (user) => dispatch(userActions.resetPassword(user)),
  };
};

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default connectedLogin;
