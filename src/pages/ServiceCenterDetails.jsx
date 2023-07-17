import axios from "axios";
import Map360Degree from "components/Map360Degree";
import ServiceCenterDetailBanner from "components/ServiceCenter/ServiceCenterDetails/ServiceCenterDetailsBanner";
import ServiceCenterLocationDetails from "components/ServiceCenter/ServiceCenterDetails/ServiceCenterLocationDetails";
import ServiceWeOffer from "components/ServiceCenter/ServiceCenterDetails/ServiceWeOffer";
import ServiceStoreMap from "components/ServiceCenter/ServiceStoreMap/ServiceStoreMap";
import { Helmet } from "react-helmet";

const ServiceCenterDetails = ({ data }) => {
  const serviceCenterData = data;
  return (
    <>
      <Helmet>
        <title>{serviceCenterData?.meta?.title || "Service Center Details - GBS Systems"}</title>
        <link rel="canonical" href={window.location.href} /> 
        <meta name="description" content={serviceCenterData?.meta?.description} />
        <meta name="keywords" content={serviceCenterData?.meta?.keywords} />
      </Helmet>
      <ServiceCenterDetailBanner serviceCenterData={serviceCenterData} />
      <ServiceCenterLocationDetails serviceCenterData={serviceCenterData} />
      <ServiceWeOffer />
      <ServiceStoreMap serviceCenterData={serviceCenterData} />
      <Map360Degree serviceCenterData={serviceCenterData} />
    </>
  )
};

export default ServiceCenterDetails;
