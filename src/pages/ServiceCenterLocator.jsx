import axios from "axios";
import ServiceCenterLocatorBanner from "components/ServiceCenter/ServiceLocatorBanner/ServiceCenterLocatorBanner";
import ServiceLocatorContent from "components/ServiceCenter/ServiceLocatorContent/ServiceLocatorContent";
import React, { useEffect, useState } from "react";
import { scrollToTop } from "utils";

const ServiceCenterLocator = () => {
  const [serviceCenterData, setServiceCenterData] = useState();

  useEffect(() => {
    scrollToTop();
    getData();
  }, []);

  const getData = () => {
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/serviceCenter`)
      .then((res) => {
        setServiceCenterData(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <ServiceCenterLocatorBanner />
      <ServiceLocatorContent serviceCenterData={serviceCenterData}/>
    </>
  );
};

export default ServiceCenterLocator;
