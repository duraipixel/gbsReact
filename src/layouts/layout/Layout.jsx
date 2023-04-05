import Footer from "layouts/Footer/Footer";
import Header from "layouts/Header/Header";
import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "utils";

const Layout = () => {
  const [showToggle, setShowToggle] = useState(false);
  const toggleLeftSideMenu = () => {
    setShowToggle(true);
  };
  const closeToggle = () => {
    setShowToggle(false);
  };

  window.addEventListener("click", function (e) {
    if (document.getElementById("site_overlay").contains(e.target)) {
      setShowToggle(false);
    }
  });

  return (
    <div>
      <Header
        toggleLeftSideMenu={toggleLeftSideMenu}
        showToggle={showToggle}
        closeToggle={closeToggle}
      />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer showToggle={showToggle} />
    </div>
  );
};

export default Layout;
