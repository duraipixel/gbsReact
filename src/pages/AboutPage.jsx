import AboutBanner from "components/AboutUs/AboutBanner";
import AwardsAcolades from "components/AboutUs/AwardsAcolades";
import CeoMessage from "components/AboutUs/CeoMessage";
import Counters from "components/AboutUs/Counters";
import CustomerSays from "components/AboutUs/CustomerSays";
import ServiceOffers from "components/AboutUs/ServiceOffers"; 
import React, { useEffect } from "react";
import { scrollToTop } from "utils";

function AboutPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
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
