import StoreDetailsBanner from "../components/StoreLocator/StoreDetails/StoreDetailsBanner/StoreDetailsBanner";
import StoreLocationDetails from "../components/StoreLocator/StoreDetails/StoreLocationDetails/StoreLocationDetails";
import StoreOffers from "../components/StoreLocator/StoreDetails/StoreOffers/StoreOffers";
import ProductsAvailInStore from "../components/StoreLocator/StoreDetails/ProductsAvailInStore/ProductsAvailInStore";
import StoreMap from "../components/StoreLocator/StoreDetails/StoreMap/StoreMap";
import Map360Degree from "components/Map360Degree";
import { Helmet } from "react-helmet";

const StoreLocationDetailsPage = ({ data }) => {
  const storeLocation = data
  return (
    <div>
      <Helmet>
        <title>{storeLocation?.meta?.title || "Store Location Details - GBS Systems"}</title>
        <link rel="canonical" href={window.location.href} />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
        <meta name="description" content={storeLocation?.meta?.description} />
        <meta name="keywords" content={storeLocation?.meta?.keywords} />
      </Helmet>
      <StoreDetailsBanner storeLocation={storeLocation} />
      <StoreLocationDetails storeLocation={storeLocation} />
      <StoreOffers storeLocation={storeLocation} />
      <ProductsAvailInStore />
      <StoreMap storeLocation={storeLocation} />
      <Map360Degree serviceCenterData={storeLocation} />
    </div>
  )
};

export default StoreLocationDetailsPage;
