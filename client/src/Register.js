import React from "react";

const Register = () => {
  return (
    <>
      <form className="register">
        <h2 className="login-heading">Register</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="login-btn">Register</button>
      </form>
    </>
  );
};

export default Register;
