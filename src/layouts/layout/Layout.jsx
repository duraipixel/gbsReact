import CompareProduct from "components/CompareProduct/CompareProduct";
import AuthModals from "layouts/Auth/AuthModals";
import Footer from "layouts/Footer/Footer";
import Header from "layouts/Header/Header";
import { Toaster } from "react-hot-toast";
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
      <Toaster position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }} />
    </AppScroller>
  );
};

export default Layout;
