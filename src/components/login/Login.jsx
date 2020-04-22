import React from "react";
import connect from "react-redux";

const Login = () => {
  return (
    <div className="login">
      <div>
        <label htmlFor="userName">Username</label>
        <input type="text" placeholder="UserName" />
      </div>
      <div>
        <label htmlFor="userName">Password</label>
        <input type="text" placeholder="UserName" />
      </div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//     return
// }

export default Login;
