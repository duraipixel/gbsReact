import AboutBanner from "components/AboutUs/AboutBanner";
import CeoMessage from "components/AboutUs/CeoMessage";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { scrollToTop } from "utils";

function AboutPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div> 
      <AboutBanner /> 
      <CeoMessage /> 
    </div>
  )
}

export default AboutPage