import AddressForm from "components/AddressForm/AddressForm";
import CompareProduct from "components/CompareProduct/CompareProduct";
import AuthModals from "layouts/Auth/AuthModals";
import Footer from "layouts/Footer/Footer";
import Header from "layouts/Header/Header";
import { Toaster } from "react-hot-toast";
import { BsWhatsapp } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { AppScroller } from "utils";

const Layout = () => {

  return (
    <AppScroller>
      <Header />
      <main id="app-layout">
        <Outlet />
      </main>
      <Footer />
      <AuthModals />
      <CompareProduct />
      <AddressForm />
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
              primary: '#00043a',
              secondary: 'black',
            },
          },
        }}
      />
      <a target="_blank" rel="noreferrer" className="btn-success btn btn position-fixed bottom-0 rounded-circle d-flex align-items-center justify-content-center shadow-sm m-2" style={{ height:50,width:50 }} href="https://web.whatsapp.com/send?phone=919600375222">
        <BsWhatsapp size={28} color="white"/>
      </a>
    </AppScroller>
  );
};

export default Layout;
