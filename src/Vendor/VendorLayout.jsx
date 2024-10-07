import React from "react";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

const VendorLayout = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <Sidebar className="col-span-1" />
      <div className="col-span-4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default VendorLayout;
