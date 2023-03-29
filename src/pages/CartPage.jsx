import CartProduct from "components/Cart";
import PackageSupport from "components/Home/PackageSupport/PackageSupport";
import React from "react";

const CartPage = () => {
  return (
    <div>
      <CartProduct/>
      <PackageSupport />
    </div>
  );
};

export default CartPage;
