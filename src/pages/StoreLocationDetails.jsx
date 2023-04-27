import React, { useEffect, useState } from "react";
import { Loader, scrollToTop } from "utils";
import StoreDetailsBanner from "../components/StoreLocator/StoreDetails/StoreDetailsBanner/StoreDetailsBanner";
import StoreLocationDetails from "../components/StoreLocator/StoreDetails/StoreLocationDetails/StoreLocationDetails";
import StoreOffers from "../components/StoreLocator/StoreDetails/StoreOffers/StoreOffers";
import ProductsAvailInStore from "../components/StoreLocator/StoreDetails/ProductsAvailInStore/ProductsAvailInStore";
import StoreMap from "../components/StoreLocator/StoreDetails/StoreMap/StoreMap";
import Map360Degree from "components/Map360Degree";
import { useParams } from "react-router-dom";
import axios from "axios";

const StoreLocationDetailsPage = () => {
  const { store_slug } = useParams();
  const [storeLocation, setStoreLocation] = useState();
  const [fetching, setfetching] = useState(true);

  useEffect(() => {
    scrollToTop();
    getData();
  }, []);

  const getData = () => {
    // setfetching(true);
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/storeLocatorDetail`, {
        slug: {
          store_slug,
        },
      })
      .then((res) => {
        setStoreLocation(res.data);
        setfetching(false);
        // console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  return fetching ? (
    <Loader />
  ) : (
    <div>
      <StoreDetailsBanner storeLocation={storeLocation} />
      <StoreLocationDetails storeLocation={storeLocation} />
      <StoreOffers storeLocation={storeLocation}/>
      <ProductsAvailInStore />
      <StoreMap storeLocation={storeLocation} />
      <Map360Degree serviceCenterData={storeLocation} />
    </div>
  );
};

export default StoreLocationDetailsPage;
