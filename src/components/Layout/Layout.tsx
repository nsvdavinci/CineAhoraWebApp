import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col bg-black min-w-fit min-h-screen">
      <Header />
      <div className="container flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export { Layout };
