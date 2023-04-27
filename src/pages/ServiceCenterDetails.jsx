import axios from "axios";
import Map360Degree from "components/Map360Degree";
import ServiceCenterDetailBanner from "components/ServiceCenter/ServiceCenterDetails/ServiceCenterDetailsBanner";
import ServiceCenterLocationDetails from "components/ServiceCenter/ServiceCenterDetails/ServiceCenterLocationDetails";
import ServiceWeOffer from "components/ServiceCenter/ServiceCenterDetails/ServiceWeOffer";
import ServiceStoreMap from "components/ServiceCenter/ServiceStoreMap/ServiceStoreMap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader, scrollToTop } from "utils";

const ServiceCenterDetails = () => {
  const { service_center_slug } = useParams();
  // console.log(service_center_slug);

  const [serviceCenterData, setServiceCenterData] = useState();
  const [fetching, setfetching] = useState(true);

  useEffect(() => {
    scrollToTop();
    getData();
  }, []);

  const getData = () => {
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/serviceCenterDetail`, {
        slug: { service_center_slug },
      })
      .then((res) => {
        setServiceCenterData(res.data);
        setfetching(false);
        // console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  return fetching ? (
    <Loader />
  ) : (
    <>
      <ServiceCenterDetailBanner serviceCenterData={serviceCenterData} />
      <ServiceCenterLocationDetails serviceCenterData={serviceCenterData} />
      <ServiceWeOffer />
      <ServiceStoreMap serviceCenterData={serviceCenterData} />
      <Map360Degree serviceCenterData={serviceCenterData} />
    </>
  );
};

export default ServiceCenterDetails;
