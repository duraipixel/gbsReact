import AboutBanner from "components/AboutUs/AboutBanner";
import AwardsAcolades from "components/AboutUs/AwardsAcolades";
import CeoMessage from "components/AboutUs/CeoMessage";
import Counters from "components/AboutUs/Counters";
import CustomerSays from "components/AboutUs/CustomerSays";
import ServiceOffers from "components/AboutUs/ServiceOffers";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { scrollToTop } from "utils";

function AboutPage() {
  const [page, setPage] = useState([]);
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{page?.meta?.title || "About | GBS"}</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
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
