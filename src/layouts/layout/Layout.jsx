import CompareProduct from "components/CompareProduct/CompareProduct";
import AuthModals from "layouts/Auth/AuthModals";
import Footer from "layouts/Footer/Footer";
import Header from "layouts/Header/Header";
import { Outlet } from "react-router-dom";
import { AppScroller } from "utils";

const Layout = () => {
  return (
    <AppScroller>
      <Header />
      <Outlet />
      <Footer />
      <AuthModals />
      <CompareProduct />
    </AppScroller>
  );
};

export default Layout;
