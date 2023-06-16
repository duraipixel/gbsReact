import ProductLists from "components/ProductsLists";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const ProductListing = () => {
  useEffect(() => {
    document.getElementById('gbs-navbar').classList.remove('fixed-top')
    console.log( document.getElementById('app-layout').style.paddingTop  = '0'   )
  })
  return (
    <>
      <Helmet>
        <title>Products - GBS Systems</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <ProductLists />
    </>
  );
};

export default ProductListing;
