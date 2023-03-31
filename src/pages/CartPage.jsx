import CartProduct from "components/Cart";
import PackageSupport from "components/Home/PackageSupport/PackageSupport";
import React, { useEffect } from "react";
import { scrollToTop } from "utils";

const CartPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <CartProduct />
      <PackageSupport />
    </div>
  );
};

export default CartPage;
