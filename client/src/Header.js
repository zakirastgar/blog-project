import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        {" "}
        MyBlog
      </Link>
      <nav>
        <Link to="/login" className="login">
          Login
        </Link>
        <Link to="/Register" cleassName="register">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
