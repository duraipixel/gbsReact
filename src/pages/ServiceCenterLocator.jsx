import axios from "axios";
import ServiceCenterLocatorBanner from "components/ServiceCenter/ServiceLocatorBanner/ServiceCenterLocatorBanner";
import ServiceLocatorContent from "components/ServiceCenter/ServiceLocatorContent/ServiceLocatorContent";
import React, { useEffect, useState } from "react";
import { Loader, scrollToTop } from "utils";

const ServiceCenterLocator = () => {
  const [serviceCenterData, setServiceCenterData] = useState();
  const [fetching, setfetching] = useState(true);

  useEffect(() => {
    scrollToTop();
    getData();
  }, []);

  const getData = () => {
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/serviceCenter`)
      .then((res) => {
        setServiceCenterData(res.data);
        setfetching(false);
      })
      .catch((err) => console.error(err));
  };

  return fetching ? (
    <Loader />
  ) : (
    <>
      <ServiceCenterLocatorBanner />
      <ServiceLocatorContent serviceCenterData={serviceCenterData} />
    </>
  );
};

export default ServiceCenterLocator;
