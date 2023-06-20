import React from "react";

const Login = () => {
  return (
    <>
      <form className="login">
        <h2 className="login-heading">Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="login-btn">Login</button>
      </form>
    </>
  );
};

export default Login;
