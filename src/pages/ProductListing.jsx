import ProductLists from "components/ProductsLists";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

const ProductListing = () => {
    const [page, setPage] = useState([]);
  return (
    <>
      <Helmet>
        <title>{page?.meta?.title || "Products - GBS Systems"}</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <ProductLists />
    </>
  );
};

export default ProductListing;
