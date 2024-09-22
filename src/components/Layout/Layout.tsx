import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../";

const Layout: React.FC = () => {
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };
