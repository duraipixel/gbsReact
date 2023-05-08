import CartProduct from "components/Cart";
import PackageSupport from "components/Home/PackageSupport/PackageSupport";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { scrollToTop } from "utils";
const CartPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{"page?.meta?.title"}</title>
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <CartProduct />
      <PackageSupport />
    </div>
  );
};

export default CartPage;
