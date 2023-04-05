import ProductLists from "components/ProductsLists";
import React, { useEffect } from "react";
import { scrollToTop } from "utils";

const CartPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <ProductLists />
    </div>
  );
};

export default CartPage;
