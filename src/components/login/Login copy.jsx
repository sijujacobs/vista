import React, { useState } from "react";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions";

import InputField from "../../components/base_components/InputField";
import ActionButton from "../../components/base_components/ActionButton";

// import { useHistory } from "react-router-dom";
const Login = (props) => {
  // const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [vistaCode, setVistaCode] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  // const history = useHistory();
  // const { loggedUser } = props;
  // useEffect(() => {
  //   if (loggedUser.userName) {
  //     history.push("/products");
  //   }
  // }, [loggedUser.userName, history]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    // name === "userName"
    //   ? setUsername({ [name]: value })
    //   : setPassword({ [name]: value });
    if (name === "userName") {
      // setUsername({ [name]: value });
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "vistaCode") {
      setVistaCode(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const registerHandler = () => {
    let userObj = {
      email: email,
      vistaCode: vistaCode,
    };
    props.registerUser(userObj);
    // props.registerUser(JSON.stringify(userObj));
  };
  const resetPasswordHandler = () => {
    // if (email && password && vistaCode) {
    let userObj = {
      email: "one@vistabiomed.com",
      password: password,
      vistaCode: "065801",
    };
    // props.resetPassword(JSON.stringify(userObj));
    props.resetPassword(userObj);
    // }
  };
  const loginHandler = () => {
    // if (userName && password) {
    let userObj = {
      email: "one@vistabiomed.com",
      userName: "one",
      password: password,
    };
    console.log(" loginHandler :: : ", userObj);
    // props.login(JSON.stringify(userObj));
    props.login(userObj);
    // }
  };

  const setInputData = (fieldKey, fieldValue) => {
    console.log(" onChangeHandler :: ------------: ", fieldValue);
    if (fieldKey === "email") {
      setEmail(fieldValue);
    } else if (fieldKey === "dob") {
      setDOB(fieldValue);
    }
  };

  const buttonClickHandler = (data) => {
    console.log("buttonClickHandler :: data : ", data);
  };

  return (
    <>
      <div className="register">
        <h3>Register</h3>
        <InputField
          labelValue="Email"
          inputType="text"
          inputPlaceholder="UserName"
          inputValue={email}
          onChangeHandler={(val) => setInputData("email", val)}
        />
        <ActionButton
          buttonText="Register"
          onClickHandler={buttonClickHandler}
        />
      </div>
      <div
        className={
          "login " +
          (window.location.hostname === "www.vistabiomed.com"
            ? "exclude"
            : "include")
        }
      >
        <div>
          <h3>Login</h3>
          <InputField
            labelValue="Email"
            inputType="text"
            inputPlaceholder="Email"
            inputValue={email}
            onChangeHandler={(val) => setInputData("email", val)}
          />
          <InputField
            labelValue="Password"
            inputType="password"
            inputPlaceholder="Password"
            inputValue={password}
            onChangeHandler={(val) => setInputData("password", val)}
          />
          <ActionButton
            buttonText="Login"
            onClickHandler={buttonClickHandler}
          />
          <div>
            <h3>Reset</h3>
            <InputField
              labelValue="Email"
              inputType="text"
              inputPlaceholder="Email"
              inputValue={email}
              onChangeHandler={(val) => setInputData("email", val)}
            />
            <InputField
              labelValue="Password"
              inputType="password"
              inputPlaceholder="Password"
              inputValue={password}
              onChangeHandler={(val) => setInputData("password", val)}
            />
            <InputField
              labelValue="Vista Code"
              inputType="text"
              inputPlaceholder="Vista Code"
              inputValue={vistaCode}
              onChangeHandler={(val) => setInputData("vistaCode", val)}
            />
            <ActionButton
              buttonText="Reset"
              onClickHandler={buttonClickHandler}
            />
          </div>
          <input
            type="text"
            name="userName"
            onChange={changeHandler}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            onChange={changeHandler}
            placeholder="Password"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="text"
            name="vistaCode"
            onChange={changeHandler}
            placeholder="Vista Code"
          />
        </div>
        <div>
          <button onClick={loginHandler}>Login</button>
          <button onClick={registerHandler}>Register</button>
          <button onClick={resetPasswordHandler}>Reset Password</button>
        </div>

        <InputField
          labelValue="Date of Birth"
          inputType="date"
          inputPlaceholder="DOB"
          inputValue={dob}
          onChangeHandler={(val) => setInputData("dob", val)}
        />
        <InputField
          labelValue="Payment Method"
          inputType="text"
          inputValue="Bank Transfer"
          isReadOnly="true"
        />
        <ActionButton
          buttonText="Add to Cart"
          onClickHandler={buttonClickHandler}
        />
        <ActionButton
          buttonText="Save"
          onClickHandler={buttonClickHandler}
          disabled
          buttonType="link"
        />
        <ActionButton buttonText="Cancel" onClickHandler={buttonClickHandler} />
      </div>
    </>
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
