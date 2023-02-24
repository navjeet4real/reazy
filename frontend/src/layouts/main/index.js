import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import "./mainLayout.css";

const MainLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  var midProfile = false;
  if (
    window.location.pathname === "/auth/complete-profile" ||
    window.location.pathname === "/auth/business-details" ||
    window.location.pathname === "/auth/invite"
  ) {
    midProfile = true;
  }

  if (isLoggedIn && !midProfile) {
    return <Navigate to="/app" />;
  }

  return (
    <>
      <section>
        <div className="Agent_bgg_data">
          <SideBar />
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default MainLayout;
