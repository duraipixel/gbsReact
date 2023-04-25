import axios from "axios";
import Map360Degree from "components/Map360Degree";
import ServiceCenterDetailBanner from "components/ServiceCenter/ServiceCenterDetails/ServiceCenterDetailsBanner";
import ServiceCenterLocationDetails from "components/ServiceCenter/ServiceCenterDetails/ServiceCenterLocationDetails";
import ServiceWeOffer from "components/ServiceCenter/ServiceCenterDetails/ServiceWeOffer";
import ServiceStoreMap from "components/ServiceCenter/ServiceStoreMap/ServiceStoreMap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { scrollToTop } from "utils";

const ServiceCenterDetails = () => {
  const { store_slug } = useParams();
  // console.log(store_slug);

  const [serviceCenterData, setServiceCenterData] = useState();

  useEffect(() => {
    scrollToTop();
    getData();
  }, []);

  const getData = () => {
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/serviceCenterDetail`, {
        slug: {store_slug},
      })
      .then((res) => {
        setServiceCenterData(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <ServiceCenterDetailBanner serviceCenterData={serviceCenterData}/>
      <ServiceCenterLocationDetails serviceCenterData={serviceCenterData}/>
      <ServiceWeOffer />
      <ServiceStoreMap serviceCenterData={serviceCenterData}/>
      <Map360Degree serviceCenterData={serviceCenterData}/>
    </>
  );
};

export default ServiceCenterDetails;
