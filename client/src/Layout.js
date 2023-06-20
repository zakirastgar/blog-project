//To hold all the JSX or C;lient side stuff that would be displayed on all the pages
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
