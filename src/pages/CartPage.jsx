import CartProduct from "components/Cart/CartProduct/CartProduct";
import PackageSupport from "components/Home/PackageSupport/PackageSupport";
import Footer from "layouts/Footer/Footer";
import Header from "layouts/Header/Header";
import React from "react";

const CartPage = () => {
  return (
    <div>
      <Header />
      <CartProduct/>
      <PackageSupport />
      <Footer />
    </div>
  );
};

export default CartPage;
