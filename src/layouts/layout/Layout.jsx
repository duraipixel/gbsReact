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
      <Suspense fallback={<Loader />}>
        <Header
          toggleLeftSideMenu={toggleLeftSideMenu}
          showToggle={showToggle}
          closeToggle={closeToggle}
        />
        <Outlet />
        <Footer showToggle={showToggle} />
      </Suspense>
    </div>
  );
};

export default Layout;
