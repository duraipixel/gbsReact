import ProductLists from "components/ProductsLists"; 
import { Helmet } from "react-helmet";

const ProductListing = () => {
  return (
    <>
      <Helmet>
        <title>Products - GBS Systems</title>
        <link rel="canonical" href={window.location.href} />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <ProductLists />
    </>
  );
};

export default ProductListing;
