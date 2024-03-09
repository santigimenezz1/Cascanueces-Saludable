import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavBarMobile from "../NavBar/NavBarMobile/NavBarMobile";
import '../Layout/layout.css'

const Layout = () => {
  return (
    <div className="layout__container">
    <div>
    <NavBar />
    </div>
    <div>
    <NavBarMobile />
    </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
