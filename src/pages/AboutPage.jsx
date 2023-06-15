import AboutBanner from "components/AboutUs/AboutBanner";
import AwardsAcolades from "components/AboutUs/AwardsAcolades";
import CeoMessage from "components/AboutUs/CeoMessage";
import Counters from "components/AboutUs/Counters";
import CustomerSays from "components/AboutUs/CustomerSays";
import ServiceOffers from "components/AboutUs/ServiceOffers";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { scrollToTop } from "utils";

function AboutPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Helmet>
        <title>About GBS Systems Laptop Stores & Service Center in South India - GBS Systems</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="GBS Systems is a leading provider of IT solutions and services for businesses. Learn more about our company's history, mission, and expertise. Visit now!" />
      </Helmet>

      <AboutBanner />
      <CeoMessage />
      <AwardsAcolades />
      <Counters />
      <ServiceOffers />
      <CustomerSays />
    </div>
  );
}

export default AboutPage;
