import React, { useEffect, useState } from "react";
import { Loader, scrollToTop } from "utils";
import ServiceCenter from "components/Home/ServiceCenter/ServiceCenter";
import StoreLocatorBanner from "components/StoreLocator/Banner/StoreLocatorBanner";
import LocationContent from "components/StoreLocator/LocationContent/LocationContent";
import axios from "axios";
import { Helmet } from "react-helmet";

const StoreLocatorPage = () => {
  const [storeData, setStoreData] = useState();
  const [fetching, setfetching] = useState(true);
  const [filterFetching, setFilterFetching] = useState(true);
  const [storeDataFilteredData, setStoreDataFilteredData] = useState();
  const [centerID, setCenterID] = useState("");
  const [brandId, setBrandId] = useState("");
  const [postCode, setPostCode] = useState("");

  useEffect(() => {
    scrollToTop();
    getData();
    getFilterData();
  }, []);

  useEffect(() => {
    getFilterData();
  }, [centerID, brandId, postCode]);

  const getData = () => {
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/store-locator`)
      .then((res) => {
        setStoreData(res.data);
        setfetching(false);
      })
      .catch((err) => console.error(err));
  };

  const getFilterData = () => {
    setFilterFetching(true);
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/store-locator`, {
        center_id: centerID,
        brand_id: brandId,
        post_code: postCode,
      })
      .then((res) => {
        setStoreDataFilteredData(res.data);
        setFilterFetching(false);
      })
      .catch((err) => console.error(err));
  };

  return fetching ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Store Location - GBS Systems</title>
        <link rel="canonical" href={window.location.href} />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
        <meta name="description" content="Store Location - GBS Systems" />
      </Helmet>
      <StoreLocatorBanner
        serviceCenterData={storeData}
        setCenterID={setCenterID}
        setBrandId={setBrandId}
        setPostCode={setPostCode}
      />
      <LocationContent
        storeData={storeDataFilteredData}
        fetching={filterFetching}
      />
      <ServiceCenter />
    </>
  );
};

export default StoreLocatorPage;
