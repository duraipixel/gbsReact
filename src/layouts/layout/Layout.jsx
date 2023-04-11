import Footer from "layouts/Footer/Footer";
import Header from "layouts/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "utils";

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Header />
        <Outlet />
        <Footer/>
      </Suspense>
    </div>
  );
};

export default Layout;
