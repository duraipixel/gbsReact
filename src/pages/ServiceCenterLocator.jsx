import axios from "axios";
import ServiceCenterLocatorBanner from "components/ServiceCenter/ServiceLocatorBanner/ServiceCenterLocatorBanner";
import ServiceLocatorContent from "components/ServiceCenter/ServiceLocatorContent/ServiceLocatorContent";
import React, { useEffect, useState } from "react";
import { Loader, scrollToTop } from "utils";

const ServiceCenterLocator = () => {
  const [serviceCenterData, setServiceCenterData] = useState();
  const [serviceCenterFilteredData, setServiceCenterFilteredData] = useState();
  const [serviceCenterBrandData, setServiceCenterBrandData] = useState();
  const [fetching, setfetching] = useState(true);
  const [filterFetching, setFilterFetching] = useState(true);

  const [centerID, setCenterID] = useState("");
  const [brandId, setBrandId] = useState("");
  const [postCode, setPostCode] = useState("");

  useEffect(() => {
    scrollToTop();
    getBrandData();
    getData();
    getFilterData();
  }, [centerID, brandId, postCode]);

  const getBrandData = () => {
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}/get/brands`)
      .then((res) => {
        setServiceCenterBrandData(res.data);
        setfetching(false);
      })
      .catch((err) => console.error(err));
  };

  const getData = () => {
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/serviceCenter`)
      .then((res) => {
        setServiceCenterData(res.data);
        setfetching(false);
      })
      .catch((err) => console.error(err));
  };

  const getFilterData = () => {
    setFilterFetching(true);
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/serviceCenter`, {
        center_id: centerID,
        brand_id: brandId,
        post_code: postCode,
      })
      .then((res) => {
        setServiceCenterFilteredData(res.data);
        setFilterFetching(false);
      })
      .catch((err) => console.error(err));
  };

  return fetching ? (
    <Loader />
  ) : (
    <>
      <ServiceCenterLocatorBanner
        serviceCenterData={serviceCenterData}
        serviceCenterFilteredData={serviceCenterFilteredData}
        serviceCenterBrandData={serviceCenterBrandData}
        setCenterID={setCenterID}
        setBrandId={setBrandId}
        setPostCode={setPostCode}
      />
      <ServiceLocatorContent
        fetching={filterFetching}
        serviceCenterFilteredData={serviceCenterFilteredData}
      />
    </>
  );
};

export default ServiceCenterLocator;
