import AuthModals from "layouts/Auth/AuthModals";
import Footer from "layouts/Footer/Footer";
import Header from "layouts/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <AuthModals />
    </div>
  );
};

export default Layout;
