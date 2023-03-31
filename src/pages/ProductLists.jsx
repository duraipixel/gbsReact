import ProductLists from "components/ProductsLists";
import React, { useEffect } from "react";

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
